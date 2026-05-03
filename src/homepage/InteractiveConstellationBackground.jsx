import { useCallback, useEffect, useRef } from "react";

const DEFAULT_NODE_COUNT = 36;
/** Decorative micro-points — non-draggable, dimmer, excluded from main edges */
const DUST_COUNT = 10;
const LINE_DIST_MAX = 148;
const LINE_DIST_MIN = 28;
/** Cursor influence radius (px); moderate — falloff keeps force subtle */
const MOUSE_RADIUS = 190;
const DRAG_SNAP = 44;
const DPR_CAP = 2;
/** Dragged node eases toward pointer each frame (lower = silkier, higher = tighter) */
const DRAG_SMOOTH_FOLLOW = 0.24;

/** ~4× slower idle: angular scale for drift oscillation */
const IDLE_FREQ = 0.038;
/** Max idle offset from base (px), very small — nodes stay near base */
const IDLE_DRIFT_AMP = 2.4;
/** Spring toward (base + idle offset); low but steady anchoring */
const K_SPRING_BASE = 0.014;
/** Extra pull toward exact base — prevents long-term drift */
const K_ANCHOR_BASE = 0.006;
/** Velocity damping per frame (high friction) */
const VELOCITY_DAMP = 0.86;
/** Max speed px/frame after integration */
const MAX_SPEED = 0.42;
/** Cursor acceleration scale (very low) */
const CURSOR_ACCEL_MAX = 0.038;
/** Neighbor repulsion from dragged node — weak, avoids cluster orbits */
const DRAG_NEIGHBOR_ACCEL_MAX = 0.055;
/** Minimum center-to-center separation — soft repulsion below this */
const NODE_SEPARATION_MIN = 22;
const SEPARATION_ACCEL = 0.11;

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function dist(ax, ay, bx, by) {
  const dx = bx - ax;
  const dy = by - ay;
  return Math.hypot(dx, dy);
}

function smoothstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

function isCoarsePointer() {
  if (typeof window === "undefined" || !window.matchMedia) {
    return false;
  }
  return window.matchMedia("(pointer: coarse)").matches;
}

function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {number} [props.nodeCount]
 * @param {boolean} [props.interactive]
 * @param {boolean} [props.draggable]
 */
export default function InteractiveConstellationBackground({
  className = "",
  nodeCount = DEFAULT_NODE_COUNT,
  interactive = true,
  draggable = true
}) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const ctxRef = useRef(null);

  const modelRef = useRef({
    w: 0,
    h: 0,
    dpr: 1,
    nodes: [],
    time0: 0,
    mouseX: -9999,
    mouseY: -9999,
    mouseIn: false,
    dragId: -1,
    dragPointerId: null,
    dragPointerX: 0,
    dragPointerY: 0,
    reducedMotion: false,
    allowDrag: false
  });

  const buildNodes = useCallback(
    (w, h, count, rng) => {
      const nodes = [];
      const nPrimary = clamp(Math.floor(count), 24, 40);

      for (let i = 0; i < nPrimary; i += 1) {
        const nx = 0.04 + rng() * 0.92;
        const ny = 0.06 + rng() * 0.88;
        nodes.push({
          id: i,
          baseX: nx * w,
          baseY: ny * h,
          x: nx * w,
          y: ny * h,
          vx: 0,
          vy: 0,
          r: 2.15 + rng() * 2.35,
          draggable: true,
          isDust: false,
          pulse: rng() * Math.PI * 2,
          wobble: 0.35 + rng() * 1.1
        });
      }

      const dustN = clamp(DUST_COUNT, 6, 14);
      for (let k = 0; k < dustN; k += 1) {
        const nx = 0.06 + rng() * 0.88;
        const ny = 0.08 + rng() * 0.84;
        nodes.push({
          id: nPrimary + k,
          baseX: nx * w,
          baseY: ny * h,
          x: nx * w,
          y: ny * h,
          vx: 0,
          vy: 0,
          r: 0.75 + rng() * 0.65,
          draggable: false,
          isDust: true,
          pulse: rng() * Math.PI * 2,
          wobble: 0.4 + rng() * 0.55
        });
      }

      return nodes;
    },
    []
  );

  const initModelSize = useCallback(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) {
      return;
    }
    const rect = wrap.getBoundingClientRect();
    const wCss = Math.max(1, rect.width);
    const hCss = Math.max(1, rect.height);
    const dpr = Math.min(DPR_CAP, window.devicePixelRatio || 1);
    canvas.width = Math.round(wCss * dpr);
    canvas.height = Math.round(hCss * dpr);
    canvas.style.width = `${wCss}px`;
    canvas.style.height = `${hCss}px`;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) {
      return;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctxRef.current = ctx;

    const m = modelRef.current;
    const seed = 0.318309886 + wCss * 0.001 + hCss * 0.001;
    let state = seed;
    const rng = () => {
      state = (state * 9301 + 49297) % 233280;
      return state / 233280;
    };

    m.w = wCss;
    m.h = hCss;
    m.dpr = dpr;
    m.nodes = buildNodes(wCss, hCss, nodeCount, rng);
    m.time0 = performance.now();
  }, [buildNodes, nodeCount]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) {
      return undefined;
    }

    const host = wrap.parentElement;
    if (!host) {
      return undefined;
    }

    const m = modelRef.current;
    m.reducedMotion = prefersReducedMotion();
    m.allowDrag = draggable && interactive && !m.reducedMotion && !isCoarsePointer();

    let resizeObs = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObs = new ResizeObserver(() => {
        initModelSize();
      });
      resizeObs.observe(wrap);
    } else {
      window.addEventListener("resize", initModelSize);
    }
    initModelSize();

    const canvas = canvasRef.current;

    const toLocal = (clientX, clientY) => {
      const r = wrap.getBoundingClientRect();
      return { x: clientX - r.left, y: clientY - r.top };
    };

    const isInteractiveTarget = (target) => {
      if (!target || !(target instanceof Element)) {
        return false;
      }
      if (target.closest(".landing-hero__copy")) {
        return true;
      }
      if (target.closest(".landing-avatar-stage__bubble")) {
        return true;
      }
      if (target.closest(".landing-avatar-stage__figure")) {
        return true;
      }
      return Boolean(target.closest("button,a,input,textarea,select,summary,[role='button']"));
    };

    const findDraggableAt = (lx, ly) => {
      let best = -1;
      let bestD = DRAG_SNAP + 8;
      for (let i = 0; i < m.nodes.length; i += 1) {
        const node = m.nodes[i];
        if (!node.draggable || node.isDust) {
          continue;
        }
        const d = dist(lx, ly, node.x, node.y);
        if (d < bestD) {
          bestD = d;
          best = i;
        }
      }
      return best;
    };

    const onPointerMove = (e) => {
      const { x, y } = toLocal(e.clientX, e.clientY);
      m.mouseX = x;
      m.mouseY = y;
      m.mouseIn = true;
      if (m.dragId >= 0 && m.dragPointerId === e.pointerId) {
        m.dragPointerX = x;
        m.dragPointerY = y;
      }
    };

    const applyDragReleaseImpulse = () => {
      if (m.dragId < 0) {
        return;
      }
      const released = m.nodes[m.dragId];
      if (released) {
        const lagX = m.dragPointerX - released.x;
        const lagY = m.dragPointerY - released.y;
        released.vx = lagX * 0.045;
        released.vy = lagY * 0.045;
      }
    };

    const onPointerLeave = () => {
      m.mouseIn = false;
      if (m.dragId >= 0) {
        applyDragReleaseImpulse();
        try {
          if (m.dragPointerId != null) {
            canvas?.releasePointerCapture(m.dragPointerId);
          }
        } catch {
          /* ignore */
        }
        m.dragId = -1;
        m.dragPointerId = null;
      }
    };

    const onPointerDown = (e) => {
      if (!m.allowDrag || e.button !== 0) {
        return;
      }
      if (isInteractiveTarget(e.target)) {
        return;
      }
      const { x, y } = toLocal(e.clientX, e.clientY);
      const id = findDraggableAt(x, y);
      if (id < 0) {
        return;
      }
      m.dragId = id;
      m.dragPointerId = e.pointerId;
      m.dragPointerX = x;
      m.dragPointerY = y;
      const grabbed = m.nodes[id];
      grabbed.vx = 0;
      grabbed.vy = 0;
      try {
        canvas?.setPointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
    };

    const endDrag = (e) => {
      if (m.dragPointerId !== null && e && e.pointerId !== m.dragPointerId) {
        return;
      }
      if (m.dragId >= 0) {
        applyDragReleaseImpulse();
        try {
          canvas?.releasePointerCapture(m.dragPointerId);
        } catch {
          /* ignore */
        }
      }
      m.dragId = -1;
      m.dragPointerId = null;
    };

    host.addEventListener("pointermove", onPointerMove);
    host.addEventListener("pointerleave", onPointerLeave);
    host.addEventListener("pointerdown", onPointerDown);
    host.addEventListener("pointerup", endDrag);
    host.addEventListener("pointercancel", endDrag);

    const tick = (now) => {
      const ctx = ctxRef.current;
      if (!ctx || m.w < 2 || m.h < 2) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const t = (now - m.time0) * 0.001;
      const rm = m.reducedMotion;
      const mx = m.mouseX;
      const my = m.mouseY;
      const mouseNear = m.mouseIn && mx > -500;

      const nodesPhys = m.nodes;
      const nLen = nodesPhys.length;

      if (m.dragId >= 0) {
        const draggedNode = nodesPhys[m.dragId];
        if (draggedNode) {
          const s = DRAG_SMOOTH_FOLLOW;
          draggedNode.x += (m.dragPointerX - draggedNode.x) * s;
          draggedNode.y += (m.dragPointerY - draggedNode.y) * s;
          draggedNode.vx = 0;
          draggedNode.vy = 0;
        }
      }

      for (let i = 0; i < nLen; i += 1) {
        const node = nodesPhys[i];
        if (m.dragId === i) {
          continue;
        }

        if (rm) {
          node.x = node.baseX;
          node.y = node.baseY;
          node.vx = 0;
          node.vy = 0;
          continue;
        }

        const wob = node.wobble;
        const idleX =
          node.baseX +
          Math.sin(t * IDLE_FREQ + node.pulse) * (IDLE_DRIFT_AMP * wob * 0.42) +
          Math.sin(t * IDLE_FREQ * 0.51 + node.pulse * 0.73) * (IDLE_DRIFT_AMP * wob * 0.28);
        const idleY =
          node.baseY +
          Math.cos(t * IDLE_FREQ * 0.92 + node.pulse * 1.05) * (IDLE_DRIFT_AMP * wob * 0.4) +
          Math.cos(t * IDLE_FREQ * 0.48 + node.pulse) * (IDLE_DRIFT_AMP * wob * 0.26);

        let ax = 0;
        let ay = 0;

        ax += (idleX - node.x) * K_SPRING_BASE;
        ay += (idleY - node.y) * K_SPRING_BASE;
        ax += (node.baseX - node.x) * K_ANCHOR_BASE;
        ay += (node.baseY - node.y) * K_ANCHOR_BASE;

        for (let j = 0; j < nLen; j += 1) {
          if (j === i) {
            continue;
          }
          const other = nodesPhys[j];
          const dSep = dist(node.x, node.y, other.x, other.y);
          if (dSep > 1e-4 && dSep < NODE_SEPARATION_MIN) {
            const overlap = (NODE_SEPARATION_MIN - dSep) / NODE_SEPARATION_MIN;
            const fSep = overlap * overlap * SEPARATION_ACCEL;
            ax -= ((other.x - node.x) / dSep) * fSep;
            ay -= ((other.y - node.y) / dSep) * fSep;
          }
        }

        if (interactive && mouseNear) {
          const d0 = dist(mx, my, node.x, node.y);
          if (d0 > 1e-4 && d0 < MOUSE_RADIUS) {
            const wMouse = 1 - d0 / MOUSE_RADIUS;
            const acc = wMouse * wMouse * wMouse * CURSOR_ACCEL_MAX;
            ax += ((mx - node.x) / d0) * acc;
            ay += ((my - node.y) / d0) * acc;
          }
        }

        if (m.dragId >= 0) {
          const dragged = nodesPhys[m.dragId];
          const d1 = dist(dragged.x, dragged.y, node.x, node.y);
          if (d1 > 1e-4 && d1 < MOUSE_RADIUS * 1.08) {
            const wDrag = 1 - d1 / (MOUSE_RADIUS * 1.08);
            const acc = wDrag * wDrag * DRAG_NEIGHBOR_ACCEL_MAX;
            ax += ((node.x - dragged.x) / d1) * acc;
            ay += ((node.y - dragged.y) / d1) * acc;
          }
        }

        node.vx = (node.vx + ax) * VELOCITY_DAMP;
        node.vy = (node.vy + ay) * VELOCITY_DAMP;
        const spd = Math.hypot(node.vx, node.vy);
        if (spd > MAX_SPEED) {
          node.vx = (node.vx / spd) * MAX_SPEED;
          node.vy = (node.vy / spd) * MAX_SPEED;
        }
        node.x += node.vx;
        node.y += node.vy;
      }

      ctx.clearRect(0, 0, m.w, m.h);

      const nodes = m.nodes;
      const linePulse = rm ? 0.85 : 0.74 + Math.sin(t * 0.11) * 0.05;

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          if (a.isDust || b.isDust) {
            continue;
          }
          const d = dist(a.x, a.y, b.x, b.y);
          if (d < LINE_DIST_MIN || d > LINE_DIST_MAX) {
            continue;
          }
          const midX = (a.x + b.x) * 0.5;
          const readMask = 0.28 + 0.72 * smoothstep(0, m.w * 0.44, midX);
          let alpha = (1 - (d - LINE_DIST_MIN) / (LINE_DIST_MAX - LINE_DIST_MIN)) * 0.38 * readMask * linePulse;
          if (interactive && mouseNear) {
            const midY = (a.y + b.y) * 0.5;
            const dm = Math.min(dist(mx, my, a.x, a.y), dist(mx, my, b.x, b.y), dist(mx, my, midX, midY));
            if (dm < MOUSE_RADIUS * 0.9) {
              alpha += (1 - dm / (MOUSE_RADIUS * 0.9)) * 0.11 * readMask;
            }
          }
          if (m.dragId >= 0) {
            const dg = dist(nodes[m.dragId].x, nodes[m.dragId].y, midX, (a.y + b.y) * 0.5);
            if (dg < MOUSE_RADIUS) {
              alpha += (1 - dg / MOUSE_RADIUS) * 0.09 * readMask;
            }
            if (m.dragId === i || m.dragId === j) {
              alpha += 0.065;
            }
          }
          alpha = clamp(alpha, 0, 0.78);
          ctx.strokeStyle = `rgba(232, 160, 102, ${alpha})`;
          ctx.lineWidth = 0.9;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        const dustMul = node.isDust ? 0.58 : 1;
        const readMask = (0.32 + 0.68 * smoothstep(0, m.w * 0.42, node.x)) * dustMul;
        const pulse = rm ? 1 : 0.9 + Math.sin(t * 0.28 + node.pulse) * 0.07;
        let glow = node.r * (node.isDust ? 3.2 : 5) * pulse * dustMul;
        let coreR = node.r * (node.isDust ? 0.95 : 1.08);

        if (interactive && mouseNear) {
          const dm = dist(mx, my, node.x, node.y);
          if (dm < MOUSE_RADIUS) {
            const boost = (1 - dm / MOUSE_RADIUS) * (node.isDust ? 0.18 : 0.32);
            glow *= 1 + boost;
            coreR *= 1 + boost * 0.16;
          }
        }
        if (m.dragId === i) {
          glow *= 1.32;
          coreR *= 1.18;
        }

        const g0 = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glow);
        const ga = 0.22 * readMask * pulse;
        g0.addColorStop(0, `rgba(255, 200, 150, ${0.55 * readMask})`);
        g0.addColorStop(0.35, `rgba(255, 157, 66, ${ga})`);
        g0.addColorStop(1, "rgba(255, 120, 60, 0)");
        ctx.fillStyle = g0;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glow, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 225, 195, ${0.9 * readMask * pulse})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, coreR, 0, Math.PI * 2);
        ctx.fill();
      }

      if (canvas && m.allowDrag && mouseNear && m.dragId < 0) {
        const id = findDraggableAt(mx, my);
        canvas.style.cursor = id >= 0 ? "grab" : "default";
      } else if (canvas) {
        canvas.style.cursor = m.dragId >= 0 ? "grabbing" : "default";
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
      host.removeEventListener("pointerdown", onPointerDown);
      host.removeEventListener("pointerup", endDrag);
      host.removeEventListener("pointercancel", endDrag);
      if (resizeObs) {
        resizeObs.disconnect();
      } else {
        window.removeEventListener("resize", initModelSize);
      }
    };
  }, [draggable, initModelSize, interactive, nodeCount]);

  return (
    <div ref={wrapRef} className={`landing-hero__constellation ${className}`.trim()} aria-hidden>
      <canvas ref={canvasRef} className="landing-hero__constellation-canvas" />
    </div>
  );
}

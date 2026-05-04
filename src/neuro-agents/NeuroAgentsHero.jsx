import { useCallback, useEffect, useId, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { NEURO_AGENTS } from "../data/neuroAgentsConfig";
import { IconDoc, IconPlay, NeuroAgentHubIcon } from "./NeuroAgentsIcons";

function scrollToDemo() {
  document.getElementById("neuro-demo-gallery")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Колесо обозрения: контейнер крутится, карточка — контрвращение -(θ + i·60°), текст всегда горизонтален. */
function HeroOrbitMini({ agent, index, orbitRotation }) {
  const uprightDeg = useTransform(orbitRotation, (theta) => -(theta + index * 60));
  return (
    <div className="na-hero__orbit-slot" style={{ "--na-slot": index }}>
      <motion.div className={`na-hero__mini na-hero__mini--${agent.accentColor}`} style={{ rotate: uprightDeg }}>
        <NeuroAgentHubIcon type={agent.iconType} className="na-hero__mini-icon" />
        <span className="na-hero__mini-name">{agent.name}</span>
      </motion.div>
    </div>
  );
}

export default function NeuroAgentsHero({ onDiscussImplementation }) {
  const orbitGradId = `na-orbit-grad-${useId().replace(/:/g, "")}`;
  const orbitRotation = useMotionValue(0);
  const ptr = useRef({ active: false, dragging: false, startX: 0, lastX: 0 });
  const rafRef = useRef(0);
  const idleBoostRef = useRef(1);

  const onPointerDown = useCallback((e) => {
    if (e.button !== 0) return;
    ptr.current = { active: true, dragging: false, startX: e.clientX, lastX: e.clientX };
    idleBoostRef.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback(
    (e) => {
      if (!ptr.current.active) return;
      const dx = e.clientX - ptr.current.lastX;
      ptr.current.lastX = e.clientX;
      if (!ptr.current.dragging && Math.abs(e.clientX - ptr.current.startX) > 5) {
        ptr.current.dragging = true;
      }
      if (ptr.current.dragging) {
        orbitRotation.set(orbitRotation.get() + dx * 0.22);
      }
    },
    [orbitRotation]
  );

  const onPointerUp = useCallback((e) => {
    if (!ptr.current.active) return;
    ptr.current.active = false;
    ptr.current.dragging = false;
    idleBoostRef.current = 1;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      return undefined;
    }
    const tick = () => {
      if (!ptr.current.active) {
        orbitRotation.set(orbitRotation.get() + 0.009 * idleBoostRef.current);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [orbitRotation]);

  return (
    <motion.header
      className="na-hero"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="na-hero__grid">
        <div className="na-hero__copy">
          <p className="na-eyebrow">AI-модули платформы BS-Evolve</p>
          <h1 className="na-hero__title">
            <span className="na-hero__title-line">Нейро-</span>
            <span className="na-hero__title-line na-hero__title-line--accent">сотрудники</span>
          </h1>
          <p className="na-hero__subtitle">AI-модули для пилота и внедрения</p>
          <p className="na-hero__lead">
            Нейроагенты берут на себя рутину, ускоряют процессы и помогают командам принимать решения на
            основе данных.
          </p>
          <div className="na-hero__actions">
            <button type="button" className="landing-btn landing-btn--primary landing-btn--hero" onClick={scrollToDemo}>
              <IconPlay className="landing-btn__lead-icon" />
              Посмотреть демо
            </button>
            <button
              type="button"
              className="landing-btn landing-btn--ghost landing-btn--ghost-hero"
              onClick={() => onDiscussImplementation?.()}
            >
              <IconDoc className="landing-btn__ghost-icon" />
              Обсудить внедрение
            </button>
          </div>
          <ul className="na-trust">
            <li>Быстрый пилот от 2 недель</li>
            <li>Безопасные данные</li>
            <li>Интеграция с CRM и BS-Evolve</li>
            <li>Масштабируемая библиотека агентов</li>
          </ul>
        </div>

        <div className="na-hero__viz" aria-hidden>
          <div className="na-hero__glow-ring" />

          <div
            className="na-hero__drag-surface"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            role="presentation"
          >
            <motion.div className="na-hero__orbit-rotator" style={{ rotate: orbitRotation }}>
              <svg className="na-hero__orbit-lines" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id={orbitGradId} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,157,66,0.42)" />
                    <stop offset="100%" stopColor="rgba(199,123,74,0.06)" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="172" fill="none" stroke={`url(#${orbitGradId})`} strokeWidth="1" strokeDasharray="3 10" />
                <circle cx="200" cy="200" r="138" fill="none" stroke="rgba(255,157,66,0.1)" strokeWidth="1" />
                <circle cx="200" cy="200" r="3" fill="rgba(255,157,66,0.75)" />
              </svg>

              <div className="na-hero__orbit">
                {NEURO_AGENTS.map((agent, i) => (
                  <HeroOrbitMini key={agent.id} agent={agent} index={i} orbitRotation={orbitRotation} />
                ))}
              </div>
            </motion.div>
          </div>

          <div className="na-hero__phone-layer">
            <div className="na-hero__phone-chrome">
              <div className="na-hero__phone-notch" />
              <button type="button" className="na-hero__phone-screen" aria-label="Открыть демо" onClick={scrollToDemo}>
                <div className="na-hero__phone-screen-glare" />
                <div className="na-hero__phone-demo-pill">Демо</div>
                <div className="na-hero__phone-portrait" />
                <span className="na-hero__phone-caption">Интерактивный предпросмотр</span>
              </button>
            </div>
          </div>

          <p className="na-hero__orbit-hint">Вращайте колесо — перетащите в сторону</p>
        </div>
      </div>
    </motion.header>
  );
}

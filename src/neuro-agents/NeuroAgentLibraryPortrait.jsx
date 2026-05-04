/**
 * Премиум-медиазона карточки библиотеки: профиль «нейро-идентичности» как на референсе.
 * portraitSrc → <img>; иначе многослойный SVG (свечение, частицы, оверлей роли).
 */

/** Силуэт головы в профиль (нос вправо), единая композиция для всех карточек. */
const HEAD_PATH =
  "M52 236 C28 204 22 142 38 94 C48 58 78 34 118 36 C158 38 188 66 196 112 C204 158 190 202 162 228 C138 246 106 250 78 244 C62 242 52 236 52 236 Z";

function PremiumNeuralHead({ uid, coreGradientId, rimColor, particleColor, particles, overlay }) {
  const clipId = `na-lib-clip-${uid}`;
  const blurId = `na-lib-blur-${uid}`;
  const vignetteId = `na-lib-vig-${uid}`;
  const patternId = `na-lib-pt-${uid}`;

  return (
    <>
      <defs>
        <clipPath id={clipId}>
          <path d={HEAD_PATH} />
        </clipPath>
        <radialGradient id={vignetteId} cx="50%" cy="40%" r="75%">
          <stop offset="0%" stopColor="rgba(0,0,0,0)" />
          <stop offset="72%" stopColor="rgba(0,0,0,0.35)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.75)" />
        </radialGradient>
        <filter id={blurId} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id={patternId} width="7" height="7" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.65" fill={particleColor} opacity="0.35" />
          <circle cx="5" cy="4.5" r="0.45" fill={particleColor} opacity="0.22" />
        </pattern>
        {coreGradientId}
      </defs>

      <rect width="200" height="260" fill="#030201" />

      <path d={HEAD_PATH} fill={`url(#na-lib-core-${uid})`} opacity="0.98" />

      <g clipPath={`url(#${clipId})`} style={{ mixBlendMode: "screen" }}>
        <rect x="0" y="0" width="200" height="260" fill={`url(#${patternId})`} opacity="0.45" />
        {particles.map(([cx, cy, r, o], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill={particleColor} opacity={o} />
        ))}
      </g>

      {overlay ? (
        <g clipPath={`url(#${clipId})`} style={{ mixBlendMode: "screen" }} opacity="0.92">
          {overlay}
        </g>
      ) : null}

      <path
        d={HEAD_PATH}
        fill="none"
        stroke={rimColor}
        strokeWidth="1.35"
        strokeLinejoin="round"
        filter={`url(#${blurId})`}
        opacity="0.75"
      />
      <path d={HEAD_PATH} fill="none" stroke={rimColor} strokeWidth="0.55" strokeLinejoin="round" opacity="0.9" />

      <rect width="200" height="260" fill={`url(#${vignetteId})`} pointerEvents="none" />
    </>
  );
}

const PARTICLES_COMMON = [
  [72, 62, 1.2, 0.55],
  [86, 54, 0.9, 0.4],
  [98, 48, 1.4, 0.5],
  [112, 52, 0.8, 0.35],
  [128, 64, 1.1, 0.48],
  [142, 82, 0.9, 0.38],
  [154, 104, 1.2, 0.42],
  [160, 128, 0.7, 0.32],
  [156, 152, 1, 0.4],
  [138, 176, 0.85, 0.36],
  [108, 188, 1.1, 0.44],
  [82, 172, 0.9, 0.33],
  [64, 148, 1, 0.4],
  [58, 118, 0.75, 0.3],
  [66, 88, 1.15, 0.5],
  [104, 72, 0.65, 0.28],
  [132, 96, 0.95, 0.36],
  [118, 132, 1.2, 0.42],
  [92, 110, 0.8, 0.34],
  [144, 140, 0.7, 0.3],
  [124, 164, 1, 0.38],
  [96, 154, 0.85, 0.35],
  [76, 128, 0.95, 0.37],
  [138, 118, 0.6, 0.26]
];

function SvgFrame({ children, uid }) {
  const gid = `na-port-bg-${uid}`;
  return (
    <svg
      className="na-lib-card__portrait-svg"
      viewBox="0 0 200 260"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(8,6,5,1)" />
          <stop offset="100%" stopColor="rgba(2,2,2,1)" />
        </linearGradient>
      </defs>
      <rect width="200" height="260" fill={`url(#${gid})`} />
      {children}
    </svg>
  );
}

export default function NeuroAgentLibraryPortrait({ agent }) {
  if (agent.portraitSrc) {
    return (
      <img
        className="na-lib-card__portrait-img"
        src={agent.portraitSrc}
        alt=""
        loading="lazy"
        decoding="async"
      />
    );
  }

  const uid = agent.id;
  const coreId = `na-lib-core-${uid}`;

  const coreGrad = (stops) => (
    <radialGradient id={coreId} cx="38%" cy="36%" r="62%">
      {stops.map((s, i) => (
        <stop key={i} offset={s.off} stopColor={s.c} />
      ))}
    </radialGradient>
  );

  switch (agent.id) {
    case "sales":
      return (
        <SvgFrame uid={uid}>
          <PremiumNeuralHead
            uid={uid}
            coreGradientId={coreGrad([
              { off: "0%", c: "rgba(255,220,170,0.55)" },
              { off: "35%", c: "rgba(255,140,70,0.22)" },
              { off: "65%", c: "rgba(80,40,20,0.35)" },
              { off: "100%", c: "rgba(6,4,3,0.95)" }
            ])}
            rimColor="rgba(255,180,100,0.85)"
            particleColor="rgba(255,200,140,0.9)"
            particles={PARTICLES_COMMON}
            overlay={
              <>
                <path
                  d="M78 98 L108 88 L132 104 M92 118 L124 112 M102 142 L138 136"
                  fill="none"
                  stroke="rgba(255,157,66,0.45)"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <circle cx="118" cy="92" r="3" fill="rgba(255,200,120,0.5)" />
                <circle cx="134" cy="108" r="2" fill="rgba(255,180,90,0.45)" />
              </>
            }
          />
        </SvgFrame>
      );
    case "analyst":
      return (
        <SvgFrame uid={uid}>
          <PremiumNeuralHead
            uid={uid}
            coreGradientId={coreGrad([
              { off: "0%", c: "rgba(200,160,255,0.45)" },
              { off: "40%", c: "rgba(120,80,200,0.2)" },
              { off: "100%", c: "rgba(8,5,14,0.96)" }
            ])}
            rimColor="rgba(190,160,255,0.88)"
            particleColor="rgba(210,180,255,0.85)"
            particles={PARTICLES_COMMON}
            overlay={
              <>
                <rect x="108" y="72" width="10" height="36" rx="2" fill="rgba(120,200,255,0.25)" stroke="rgba(180,150,255,0.5)" strokeWidth="0.8" />
                <rect x="122" y="62" width="10" height="46" rx="2" fill="rgba(120,200,255,0.35)" stroke="rgba(180,150,255,0.55)" strokeWidth="0.8" />
                <rect x="136" y="54" width="10" height="54" rx="2" fill="rgba(120,200,255,0.45)" stroke="rgba(180,150,255,0.65)" strokeWidth="0.8" />
                <rect x="150" y="68" width="10" height="40" rx="2" fill="rgba(120,200,255,0.28)" stroke="rgba(180,150,255,0.45)" strokeWidth="0.8" />
              </>
            }
          />
        </SvgFrame>
      );
    case "secretary":
      return (
        <SvgFrame uid={uid}>
          <PremiumNeuralHead
            uid={uid}
            coreGradientId={coreGrad([
              { off: "0%", c: "rgba(160,210,255,0.42)" },
              { off: "45%", c: "rgba(60,100,160,0.18)" },
              { off: "100%", c: "rgba(4,8,14,0.96)" }
            ])}
            rimColor="rgba(150,210,255,0.88)"
            particleColor="rgba(180,220,255,0.85)"
            particles={PARTICLES_COMMON}
            overlay={
              <>
                <path
                  d="M58 82 Q118 52 178 82"
                  fill="none"
                  stroke="rgba(150,210,255,0.55)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <rect x="52" y="78" width="22" height="34" rx="10" fill="rgba(40,70,100,0.55)" stroke="rgba(150,210,255,0.45)" strokeWidth="1" />
                <rect x="162" y="78" width="22" height="34" rx="10" fill="rgba(40,70,100,0.55)" stroke="rgba(150,210,255,0.45)" strokeWidth="1" />
              </>
            }
          />
        </SvgFrame>
      );
    case "hr":
      return (
        <SvgFrame uid={uid}>
          <PremiumNeuralHead
            uid={uid}
            coreGradientId={coreGrad([
              { off: "0%", c: "rgba(255,190,140,0.48)" },
              { off: "38%", c: "rgba(199,123,74,0.25)" },
              { off: "100%", c: "rgba(10,6,4,0.96)" }
            ])}
            rimColor="rgba(240,180,120,0.88)"
            particleColor="rgba(255,210,170,0.88)"
            particles={PARTICLES_COMMON}
            overlay={
              <>
                <circle cx="92" cy="108" r="4" fill="rgba(255,180,120,0.4)" />
                <circle cx="118" cy="96" r="3.5" fill="rgba(255,180,120,0.38)" />
                <circle cx="132" cy="118" r="3" fill="rgba(255,180,120,0.35)" />
                <circle cx="108" cy="132" r="3.5" fill="rgba(255,180,120,0.36)" />
                <path
                  d="M92 108 L118 96 L132 118 L108 132 Z"
                  fill="none"
                  stroke="rgba(255,160,100,0.4)"
                  strokeWidth="0.9"
                />
              </>
            }
          />
        </SvgFrame>
      );
    case "tracker":
      return (
        <SvgFrame uid={uid}>
          <PremiumNeuralHead
            uid={uid}
            coreGradientId={coreGrad([
              { off: "0%", c: "rgba(100,230,215,0.42)" },
              { off: "42%", c: "rgba(40,120,110,0.2)" },
              { off: "100%", c: "rgba(4,10,10,0.96)" }
            ])}
            rimColor="rgba(100,220,200,0.88)"
            particleColor="rgba(140,240,225,0.82)"
            particles={PARTICLES_COMMON}
            overlay={
              <>
                <rect x="96" y="68" width="72" height="52" rx="6" fill="rgba(8,24,24,0.65)" stroke="rgba(72,200,190,0.55)" strokeWidth="1.2" />
                <path
                  d="M104 108 L118 92 L132 100 L146 84 L158 96"
                  fill="none"
                  stroke="rgba(72,200,190,0.75)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M104 118 L158 118" stroke="rgba(72,200,190,0.25)" strokeWidth="1" />
              </>
            }
          />
        </SvgFrame>
      );
    case "kpi":
      return (
        <SvgFrame uid={uid}>
          <PremiumNeuralHead
            uid={uid}
            coreGradientId={coreGrad([
              { off: "0%", c: "rgba(200,150,255,0.48)" },
              { off: "40%", c: "rgba(120,70,180,0.22)" },
              { off: "100%", c: "rgba(10,6,14,0.96)" }
            ])}
            rimColor="rgba(210,170,255,0.88)"
            particleColor="rgba(220,190,255,0.85)"
            particles={PARTICLES_COMMON}
            overlay={
              <>
                <circle cx="124" cy="102" r="22" fill="none" stroke="rgba(255,157,66,0.5)" strokeWidth="2" />
                <circle cx="124" cy="102" r="14" fill="none" stroke="rgba(255,157,66,0.65)" strokeWidth="1.5" />
                <circle cx="124" cy="102" r="6" fill="rgba(255,157,66,0.45)" />
                <circle cx="124" cy="102" r="2.5" fill="rgba(255,220,180,0.9)" />
              </>
            }
          />
        </SvgFrame>
      );
    default:
      return (
        <SvgFrame uid={uid}>
          <PremiumNeuralHead
            uid={uid}
            coreGradientId={coreGrad([
              { off: "0%", c: "rgba(255,157,66,0.3)" },
              { off: "100%", c: "rgba(6,4,3,0.95)" }
            ])}
            rimColor="rgba(200,140,90,0.7)"
            particleColor="rgba(255,180,120,0.6)"
            particles={PARTICLES_COMMON}
            overlay={null}
          />
        </SvgFrame>
      );
  }
}

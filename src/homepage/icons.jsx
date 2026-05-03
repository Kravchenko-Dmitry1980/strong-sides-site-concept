const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/** Логотип-«сеть»: круг из точек + линии (шапка B2B). */
export function BrandNetworkMark({ className }) {
  const cn = className ?? "";
  return (
    <svg className={cn} width="40" height="40" viewBox="0 0 40 40" aria-hidden>
      <circle cx="20" cy="20" r="18" fill="none" stroke="rgba(255,157,66,0.35)" strokeWidth="1" />
      <path
        fill="none"
        stroke="rgba(255,180,120,0.45)"
        strokeWidth="1"
        strokeLinecap="round"
        d="M12 14 L20 10 L28 16 M14 24 L20 20 L26 22 M20 10 L20 20 M12 14 L14 24 M28 16 L26 22"
      />
      {[
        [20, 10],
        [12, 14],
        [28, 16],
        [14, 24],
        [26, 22],
        [20, 28]
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.2" fill="rgba(255,200,150,0.9)" />
      ))}
    </svg>
  );
}

export function IconUserCircle({ className }) {
  const cn = className ?? "";
  return (
    <svg className={cn} width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <circle {...stroke} cx="12" cy="8" r="4" />
      <path {...stroke} d="M6 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" />
    </svg>
  );
}

export function IconPlayOutline({ className }) {
  const cn = className ?? "";
  return (
    <svg className={cn} width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <circle {...stroke} cx="12" cy="12" r="10" />
      <path fill="currentColor" d="M10 8l8 4-8 4V8z" stroke="none" opacity="0.85" />
    </svg>
  );
}

export function IconChatOutline({ className }) {
  const cn = className ?? "";
  return (
    <svg className={cn} width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        {...stroke}
        d="M21 12a8 8 0 0 1-8 8H7l-4 3v-3a8 8 0 1 1 18-8z"
      />
    </svg>
  );
}

/** Иконки узлов потока интеграций (тонкий контур). */
export function FlowNodeIcon({ variant, className }) {
  const cn = className ?? "";
  switch (variant) {
    case "site":
      return (
        <svg className={cn} width="28" height="28" viewBox="0 0 24 24" aria-hidden>
          <circle {...stroke} cx="12" cy="12" r="10" />
          <path {...stroke} d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
        </svg>
      );
    case "navigator":
      return (
        <svg className={cn} width="28" height="28" viewBox="0 0 24 24" aria-hidden>
          <circle {...stroke} cx="12" cy="12" r="10" />
          <polygon {...stroke} points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case "seller":
      return (
        <svg className={cn} width="28" height="28" viewBox="0 0 24 24" aria-hidden>
          <path {...stroke} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle {...stroke} cx="12" cy="7" r="4" />
        </svg>
      );
    case "crm":
      return (
        <svg className={cn} width="28" height="28" viewBox="0 0 24 24" aria-hidden>
          <rect {...stroke} x="3" y="5" width="18" height="14" rx="2" />
          <path {...stroke} d="M7 9h10M7 13h6" />
        </svg>
      );
    case "analyst":
      return (
        <svg className={cn} width="28" height="28" viewBox="0 0 24 24" aria-hidden>
          <path {...stroke} d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path {...stroke} d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      );
    case "dashboard":
      return (
        <svg className={cn} width="28" height="28" viewBox="0 0 24 24" aria-hidden>
          <rect {...stroke} x="2" y="3" width="20" height="14" rx="2" />
          <path {...stroke} d="M8 21h8M12 17v4" />
        </svg>
      );
    case "database":
      return (
        <svg className={cn} width="36" height="36" viewBox="0 0 24 24" aria-hidden>
          <ellipse {...stroke} cx="12" cy="5" rx="9" ry="3" />
          <path {...stroke} d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path {...stroke} d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
        </svg>
      );
    case "sync":
      return (
        <svg className={cn} width="36" height="36" viewBox="0 0 24 24" aria-hidden>
          <path {...stroke} d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path {...stroke} d="M3 3v5h5" />
          <path {...stroke} d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
          <path {...stroke} d="M16 21h5v-5" />
        </svg>
      );
    case "reports":
      return (
        <svg className={cn} width="36" height="36" viewBox="0 0 24 24" aria-hidden>
          <path {...stroke} d="M3 3v18h18" />
          <path {...stroke} d="M7 16l4-6 4 2 5-7" />
        </svg>
      );
    default:
      return null;
  }
}

/** Иконка шага таймлайна (1–5). */
export function TimelineStepIcon({ variant, className }) {
  const cn = className ?? "";
  switch (variant) {
    case "request":
      return (
        <svg className={cn} width="22" height="22" viewBox="0 0 24 24" aria-hidden>
          <path {...stroke} d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      );
    case "diagnostics":
      return (
        <svg className={cn} width="22" height="22" viewBox="0 0 24 24" aria-hidden>
          <path {...stroke} d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
          <path {...stroke} d="M9 12h6M9 16h4" />
          <path {...stroke} d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H9V5z" />
        </svg>
      );
    case "profile":
      return (
        <svg className={cn} width="22" height="22" viewBox="0 0 24 24" aria-hidden>
          <path {...stroke} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle {...stroke} cx="9" cy="7" r="4" />
          <path {...stroke} d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "route":
      return (
        <svg className={cn} width="22" height="22" viewBox="0 0 24 24" aria-hidden>
          <path {...stroke} d="M9 18h6M10 22h4M15 13a3 3 0 1 0-6 0c0 2 3 4 3 4s3-2 3-4z" />
          <circle {...stroke} cx="12" cy="7" r="3" />
        </svg>
      );
    case "kpi":
      return (
        <svg className={cn} width="22" height="22" viewBox="0 0 24 24" aria-hidden>
          <path {...stroke} d="M3 3v18h18" />
          <path {...stroke} d="M7 13l3-3 3 2 5-5" />
          <path {...stroke} d="M18 7v4h-4" />
        </svg>
      );
    default:
      return null;
  }
}

/** Крупная иконка для демо-карточки. */
export function DemoModuleIcon({ variant, className }) {
  const cn = className ?? "";
  switch (variant) {
    case "navigator":
      return (
        <svg className={cn} width="40" height="40" viewBox="0 0 24 24" aria-hidden>
          <circle {...stroke} cx="12" cy="12" r="10" />
          <polygon {...stroke} points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case "seller":
      return (
        <svg className={cn} width="40" height="40" viewBox="0 0 24 24" aria-hidden>
          <path {...stroke} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle {...stroke} cx="12" cy="7" r="4" />
        </svg>
      );
    case "analyst":
      return (
        <svg className={cn} width="40" height="40" viewBox="0 0 24 24" aria-hidden>
          <path {...stroke} d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path {...stroke} d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      );
    case "platform":
      return (
        <svg className={cn} width="40" height="40" viewBox="0 0 24 24" aria-hidden>
          <circle {...stroke} cx="12" cy="12" r="3" />
          <circle {...stroke} cx="19" cy="7" r="2" />
          <circle {...stroke} cx="19" cy="17" r="2" />
          <circle {...stroke} cx="5" cy="12" r="2" />
          <path {...stroke} d="M8.5 12h2M14 12h2.5M12 9v1.5M15.5 8.5l1 1M15.5 15.5l1-1" />
        </svg>
      );
    case "dashboard":
      return (
        <svg className={cn} width="40" height="40" viewBox="0 0 24 24" aria-hidden>
          <rect {...stroke} x="2" y="3" width="20" height="14" rx="2" />
          <path {...stroke} d="M8 21h8M12 17v4" />
        </svg>
      );
    default:
      return null;
  }
}

/** Мини line chart для KPI в дашборде-мокапе. */
export function DashSparkline({ variant, className }) {
  const cn = className ?? "";
  const colors = {
    green: { stroke: "#7bc49a", fill: "rgba(90,154,106,0.15)" },
    purple: { stroke: "#9b8bc9", fill: "rgba(155,139,201,0.15)" },
    orange: { stroke: "#e89755", fill: "rgba(232,151,85,0.12)" }
  };
  const { stroke: c, fill: f } = colors[variant] ?? colors.orange;
  const d = "M2 18 L8 12 L14 16 L20 8 L26 10 L32 4 L38 6";
  const area = `${d} L38 22 L2 22 Z`;
  return (
    <svg className={cn} viewBox="0 0 40 22" width="100%" height="28" preserveAspectRatio="none" aria-hidden>
      <path d={area} fill={f} stroke="none" />
      <path d={d} fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Иконки сайдбара дашборда. */
export function DashNavIcon({ variant, className }) {
  const cn = className ?? "";
  const s = { ...stroke, strokeWidth: 1.25 };
  switch (variant) {
    case "overview":
      return (
        <svg className={cn} width="14" height="14" viewBox="0 0 24 24" aria-hidden>
          <rect {...s} x="3" y="3" width="7" height="9" rx="1" />
          <rect {...s} x="14" y="3" width="7" height="5" rx="1" />
          <rect {...s} x="14" y="12" width="7" height="9" rx="1" />
          <rect {...s} x="3" y="16" width="7" height="5" rx="1" />
        </svg>
      );
    case "team":
      return (
        <svg className={cn} width="14" height="14" viewBox="0 0 24 24" aria-hidden>
          <path {...s} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle {...s} cx="9" cy="7" r="4" />
          <path {...s} d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "kpi":
      return (
        <svg className={cn} width="14" height="14" viewBox="0 0 24 24" aria-hidden>
          <path {...s} d="M3 3v18h18" />
          <path {...s} d="M7 12l4-4 4 4 6-6" />
        </svg>
      );
    case "integrations":
      return (
        <svg className={cn} width="14" height="14" viewBox="0 0 24 24" aria-hidden>
          <circle {...s} cx="12" cy="12" r="3" />
          <path {...s} d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
        </svg>
      );
    default:
      return null;
  }
}

export function PlatformBulletIcon({ variant, className }) {
  const cn = className ?? "";
  switch (variant) {
    case "team":
      return (
        <svg className={cn} width="22" height="22" viewBox="0 0 24 24" aria-hidden>
          <path {...stroke} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle {...stroke} cx="9" cy="7" r="4" />
          <path {...stroke} d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "track":
      return (
        <svg className={cn} width="22" height="22" viewBox="0 0 24 24" aria-hidden>
          <circle {...stroke} cx="12" cy="12" r="10" />
          <circle {...stroke} cx="12" cy="12" r="6" />
          <circle {...stroke} cx="12" cy="12" r="2" />
        </svg>
      );
    case "chart":
      return (
        <svg className={cn} width="22" height="22" viewBox="0 0 24 24" aria-hidden>
          <path {...stroke} d="M3 3v18h18" />
          <path {...stroke} d="M7 14l4-4 4 4 6-6" />
          <path {...stroke} d="M21 8v6h-6" />
        </svg>
      );
    case "exec":
      return (
        <svg className={cn} width="22" height="22" viewBox="0 0 24 24" aria-hidden>
          <path {...stroke} d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
          <rect {...stroke} x="9" y="3" width="6" height="4" rx="1" />
          <path {...stroke} d="M9 12h6M9 16h4" />
        </svg>
      );
    default:
      return null;
  }
}

/** Финальный CTA: концентрические кольца + стрелка роста. */
export function FinalGrowthGraphic({ className }) {
  const cn = className ?? "";
  return (
    <svg className={cn} viewBox="0 0 120 120" aria-hidden>
      <defs>
        <filter id="ldGlowFinal" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,157,66,0.12)" strokeWidth="1" />
      <circle cx="60" cy="60" r="42" fill="none" stroke="rgba(255,180,120,0.2)" strokeWidth="1" />
      <circle cx="60" cy="60" r="32" fill="none" stroke="rgba(255,157,66,0.28)" strokeWidth="1.5" />
      <g filter="url(#ldGlowFinal)">
        <path
          d="M38 78 L52 58 L64 68 L82 42"
          fill="none"
          stroke="#ff9d42"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M74 40 L82 42 L80 50"
          fill="none"
          stroke="#ff9d42"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <circle cx="60" cy="60" r="4" fill="rgba(12,9,8,0.95)" stroke="rgba(255,157,66,0.5)" strokeWidth="1.2" />
    </svg>
  );
}

/** Сеть точек/линий внутри панели CTA (лёгкий паттерн). */
export function FinalCtaNetworkPattern({ className }) {
  const cn = className ?? "";
  return (
    <svg className={cn} viewBox="0 0 400 120" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="ldNetLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,157,66,0)" />
          <stop offset="50%" stopColor="rgba(255,180,120,0.35)" />
          <stop offset="100%" stopColor="rgba(255,157,66,0)" />
        </linearGradient>
      </defs>
      <g opacity="0.55" stroke="url(#ldNetLine)" strokeWidth="0.6" fill="none">
        <path d="M20 90 L60 40 L100 70 L140 30 L180 55 L220 25 L260 60 L300 35 L340 75 L380 45" />
        <path d="M10 50 L50 85 L90 45 L130 95 L170 50 L210 88 L250 40 L290 80 L330 48 L370 92" />
        <path d="M40 20 L80 55 L120 25 L160 65 L200 30 L240 70 L280 38 L320 72 L360 28" />
      </g>
      {[
        [20, 90],
        [60, 40],
        [100, 70],
        [140, 30],
        [220, 25],
        [300, 35],
        [380, 45],
        [10, 50],
        [170, 50],
        [40, 20],
        [360, 28]
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.2" fill="rgba(255,200,150,0.5)" />
      ))}
    </svg>
  );
}

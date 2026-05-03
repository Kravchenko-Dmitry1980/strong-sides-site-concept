const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

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

export function FinalGaugeGraphic({ className }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden>
      <defs>
        <linearGradient id="ldGaugeArc" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c77b4a" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ff9d42" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(232,160,102,0.12)" strokeWidth="2" />
      <path
        d="M 22 78 A 44 44 0 1 1 98 78"
        fill="none"
        stroke="url(#ldGaugeArc)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 60 60 L 88 44"
        stroke="#f0b875"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="60" cy="60" r="5" fill="rgba(12,9,8,0.9)" stroke="rgba(232,160,102,0.6)" strokeWidth="1.5" />
      <path
        d="M 38 92 L 52 78 L 66 86 L 88 62"
        fill="none"
        stroke="rgba(232,160,102,0.45)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

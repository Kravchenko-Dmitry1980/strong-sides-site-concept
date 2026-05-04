export function IconPlay({ className = "" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M8 5v14l11-7L8 5zm2.4 3.35L15.25 12 10.4 15.65V8.35z"
      />
    </svg>
  );
}

export function IconDoc({ className = "" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M7 3h7l5 5v13H7V3zm2 2v14h9V9h-4V5H9zm5 .4V7h2.6L14 5.4zM9 11h6v2H9v-2zm0 4h6v2H9v-2z"
      />
    </svg>
  );
}

export function IconRocket({ className = "" }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M4.5 16.5c1-4 3.5-7.5 7.5-9.5L15 4l2 2-2.5 2.5c2 4 5.5 6.5 9.5 7.5l-2 2c-1.2-.3-2.4-.8-3.5-1.5L15 20l-3-3-1.5 3.5c-.7-1.1-1.2-2.3-1.5-3.5l-2 2zm2.2-.7l.8-.8a12 12 0 0 0 3.5-6.1 12 12 0 0 0-6.1 3.5l-.8.8 1.5 1.5.8-.8a10 10 0 0 1 2.1-2.1l.8.8-1.5 1.5z"
      />
    </svg>
  );
}

export function IconTarget({ className = "" }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 10 10h-2a8 8 0 1 1-8-8V2zm0 4a6 6 0 1 0 6 6h-2a4 4 0 1 1-4-4V6zm0 4a2 2 0 1 0 2 2h-2v-2z"
      />
    </svg>
  );
}

export function IconPuzzle({ className = "" }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M10 2H8v2.1A3.9 3.9 0 0 0 4.1 8H2v2h2.1A3.9 3.9 0 0 0 8 13.9V16h2v-2.1A3.9 3.9 0 0 0 13.9 10H16V8h-2.1A3.9 3.9 0 0 0 10 4.1V2zm8 8h2v2h-2V10zm-4 8h2v2h-2v-2zm-8 4h2v2H6v-2z"
      />
    </svg>
  );
}

export function IconLayers({ className = "" }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2l10 5-10 5L2 7l10-5zm0 8.2l6.65-3.32L12 3.55 5.35 6.88 12 10.2zm0 3.03l8.5-4.25L12 22 3.5 9.03 12 13.23z"
      />
    </svg>
  );
}

export function IconChat({ className = "" }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M4 4h16v12H7l-3 3V4zm2 2v8h1.2l2.1-2H18V6H6z"
      />
    </svg>
  );
}

export function IconTrendUp({ className = "" }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" aria-hidden>
      <path fill="currentColor" d="M4 14l4-4 4 4 8-8v6h2V4h-8v2h5.2L12 13.2 8 9.2 4 13.2V14z" />
    </svg>
  );
}

export function IconTrendDown({ className = "" }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" aria-hidden>
      <path fill="currentColor" d="M4 10l4 4 4-4 8 8v-6h2v8h-8v-2h5.2L12 10.8 8 14.8 4 10.8V10z" />
    </svg>
  );
}

export function IconBolt({ className = "" }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" aria-hidden>
      <path fill="currentColor" d="M11 2L4 14h5v8l7-12h-5l4-8h-4z" />
    </svg>
  );
}

export function IconBullseye({ className = "" }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 10 10h-2a8 8 0 1 1-8-8V2zm0 4a6 6 0 1 0 6 6h-2a4 4 0 1 1-4-4V6z"
      />
    </svg>
  );
}

export function IconPlusAgent({ className = "" }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path fill="currentColor" d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5z" />
    </svg>
  );
}

/** Компактная иконка для мини-карточек хаба (по iconType агента). */
export function NeuroAgentHubIcon({ type, className = "" }) {
  const base = { className, width: 20, height: 20, viewBox: "0 0 24 24", "aria-hidden": true };
  switch (type) {
    case "sales":
      return (
        <svg {...base}>
          <path
            fill="currentColor"
            d="M12 2a10 10 0 1 0 10 10h-2a8 8 0 1 1-8-8V2zm0 4a6 6 0 1 0 6 6h-2a4 4 0 1 1-4-4V6zm0 4a2 2 0 1 0 2 2h-2v-2z"
          />
        </svg>
      );
    case "analytics":
      return (
        <svg {...base}>
          <path fill="currentColor" d="M4 19h2v-7H4v7zm4 0h2V5H8v14zm4 0h2v-5h-2v5zm4 0h2V9h-2v10z" />
        </svg>
      );
    case "secretary":
      return (
        <svg {...base}>
          <path
            fill="currentColor"
            d="M12 1a7 7 0 0 0-7 7v4H3v2h18v-2h-2V8a7 7 0 0 0-7-7zm0 2a5 5 0 0 1 5 5v4H7V8a5 5 0 0 1 5-5zm-6 14v2h12v-2H6z"
          />
        </svg>
      );
    case "hr":
      return (
        <svg {...base}>
          <path
            fill="currentColor"
            d="M12 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0 2c-2.7 0-8 1.3-8 4v3h16v-3c0-2.7-5.3-4-8-4z"
          />
        </svg>
      );
    case "tracker":
      return (
        <svg {...base}>
          <path fill="currentColor" d="M3 17l4-4 4 4 10-10v4h2V3H9v2h8.2L11 13.2 7 9.2 3 13.2V17z" />
        </svg>
      );
    case "kpi":
      return (
        <svg {...base}>
          <path fill="currentColor" d="M11 2h2v10h10a8 8 0 0 0-8-8V2zm0 2.2A5.8 5.8 0 0 1 16.8 10H11V4.2z" />
        </svg>
      );
    default:
      return (
        <svg {...base}>
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
      );
  }
}

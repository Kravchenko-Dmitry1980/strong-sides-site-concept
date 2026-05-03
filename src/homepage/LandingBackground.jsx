function ConstellationLayer() {
  return (
    <svg className="b2b-landing__constellation" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="ldConstLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,157,66,0)" />
          <stop offset="45%" stopColor="rgba(255,190,130,0.22)" />
          <stop offset="100%" stopColor="rgba(255,157,66,0)" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#ldConstLine)" strokeWidth="0.85" strokeLinecap="round" opacity="0.9">
        <path d="M80 120 L220 90 L340 160 L480 100 L620 140 L760 80 L900 130 L1040 95" />
        <path d="M60 280 L200 240 L360 300 L520 250 L680 290 L840 230 L1000 270 L1120 220" />
        <path d="M120 420 L280 380 L400 450 L560 400 L720 440 L880 390 L1040 430" />
        <path d="M100 580 L260 520 L420 560 L580 500 L740 540 L920 480 L1080 520" />
        <path d="M150 200 L280 320 L420 260 L560 360 L700 300 L850 400 L980 340" />
        <path d="M200 650 L340 560 L500 620 L660 580 L820 640 L960 590" />
      </g>
      {[
        [80, 120],
        [220, 90],
        [340, 160],
        [480, 100],
        [620, 140],
        [760, 80],
        [900, 130],
        [1040, 95],
        [60, 280],
        [360, 300],
        [680, 290],
        [1120, 220],
        [120, 420],
        [560, 400],
        [1040, 430],
        [150, 200],
        [700, 300],
        [980, 340],
        [200, 650],
        [660, 580]
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2" fill="rgba(255,200,160,0.55)" opacity="0.85" />
      ))}
    </svg>
  );
}

export default function LandingBackground() {
  return (
    <div className="b2b-landing__bg" aria-hidden>
      <div className="b2b-landing__bg-grid" />
      <ConstellationLayer />
      <div className="b2b-landing__bg-glow b2b-landing__bg-glow--1" />
      <div className="b2b-landing__bg-glow b2b-landing__bg-glow--2" />
      <div className="b2b-landing__particles">
        {Array.from({ length: 32 }).map((_, i) => {
          const mod = i % 6;
          const scale = 0.65 + mod * 0.12;
          const op = 0.28 + (i % 4) * 0.1;
          const left = `${(i * 3.17 + (i % 7) * 1.2) % 92 + 4}%`;
          const top = `${(i * 2.91 + (i % 5) * 2.4) % 88 + 6}%`;
          return (
            <span
              key={i}
              className="b2b-landing__particle"
              style={{
                "--i": i,
                "--p-scale": scale,
                "--p-op": op,
                left,
                top
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

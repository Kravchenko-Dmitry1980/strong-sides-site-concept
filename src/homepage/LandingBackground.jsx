export default function LandingBackground() {
  return (
    <div className="b2b-landing__bg" aria-hidden>
      <div className="b2b-landing__bg-grid" />
      <div className="b2b-landing__bg-glow b2b-landing__bg-glow--1" />
      <div className="b2b-landing__bg-glow b2b-landing__bg-glow--2" />
      <div className="b2b-landing__particles">
        {Array.from({ length: 28 }).map((_, i) => (
          <span key={i} className="b2b-landing__particle" style={{ "--i": i }} />
        ))}
      </div>
    </div>
  );
}

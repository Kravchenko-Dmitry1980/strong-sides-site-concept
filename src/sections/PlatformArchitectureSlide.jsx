const layers = {
  data: ["Profiles", "Tests", "KPI", "CRM/HRM"],
  ai: [
    "Identity Engine",
    "Role-Matching Engine",
    "Competency Graph",
    "KPI Intelligence",
    "Management Simulator"
  ],
  business: ["Role Decisions", "Development Tracks", "AI Recommendations", "Pilot Roadmap"],
  integrations: ["API", "1C", "Bitrix24", "amoCRM", "HR systems"]
};

export default function PlatformArchitectureSlide() {
  return (
    <div className="architecture-layout">
      <section className="architecture-column glass-card">
        <h3>Data Layer</h3>
        {layers.data.map((item) => (
          <span key={item} className="architecture-pill">
            {item}
          </span>
        ))}
      </section>

      <section className="architecture-column glass-card is-main">
        <h3>AI Engine Layer</h3>
        {layers.ai.map((item) => (
          <span key={item} className="architecture-pill">
            {item}
          </span>
        ))}
      </section>

      <section className="architecture-column glass-card">
        <h3>Business Decision Layer</h3>
        {layers.business.map((item) => (
          <span key={item} className="architecture-pill">
            {item}
          </span>
        ))}
      </section>

      <section className="architecture-footer glass-card">
        <h3>Integration Layer</h3>
        <div className="architecture-footer__row">
          {layers.integrations.map((item) => (
            <span key={item} className="architecture-pill">
              {item}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

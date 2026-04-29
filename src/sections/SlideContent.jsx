import DigitalProfileSlide from "./DigitalProfileSlide";
import KpiDashboardSlide from "./KpiDashboardSlide";
import NeuroEmployeesSlide from "./NeuroEmployeesSlide";
import PilotRoadmapSlide from "./PilotRoadmapSlide";
import PlatformArchitectureSlide from "./PlatformArchitectureSlide";
import ScenarioDemoSlide from "./ScenarioDemoSlide";
import MetricCard from "../components/MetricCard";
import SystemNode from "../components/SystemNode";

function SlideFrame({ title, children, className = "card__content" }) {
  return (
    <div className={className}>
      {title ? <h1>{title}</h1> : null}
      {children}
    </div>
  );
}

function HeroSlide({ slide }) {
  const metrics = [
    { label: "Team Potential Index", value: "82", hint: "активных профилей", trend: "up" },
    { label: "Role Fit Accuracy", value: "91%", hint: "по ролям", trend: "up" },
    { label: "KPI Growth Hypotheses", value: "14", hint: "на квартал", trend: "neutral" },
    { label: "AI Recommendations", value: "27", hint: "к исполнению", trend: "up" }
  ];

  return (
    <div className="card__content hero-content">
      <div>
        <h1>{slide.title}</h1>
        <h2>{slide.subtitle}</h2>
        <p>{slide.description}</p>
        <div className="badge-row">
          {slide.badges.map((badge) => (
            <span key={badge} className="badge">
              {badge}
            </span>
          ))}
        </div>
        <p className="hero-status">Enterprise AI Platform · Target Architecture</p>
      </div>

      <div className="hero-cockpit glass-card">
        <h3>AI Human Potential Cockpit</h3>
        <div className="metric-grid metric-grid--hero">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
        <div className="hero-network">
          {["People", "Roles", "Skills", "KPI"].map((node, index) => (
            <SystemNode key={node} label={node} active={index > 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MarketGapSlide({ slide }) {
  return (
    <SlideFrame title={slide.title}>
      <div className="three-cards">
        {slide.cards.map((item) => (
          <article key={item} className="glass-card">
            <p>{item}</p>
          </article>
        ))}
      </div>
    </SlideFrame>
  );
}

function OldVsNewSlide({ slide }) {
  return (
    <SlideFrame title={slide.title}>
      <div className="compare-grid">
        <article className="glass-card is-muted">
          <h3>Старый подход</h3>
          <ul>
            {slide.oldModel.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="glass-card">
          <h3>Новый подход AKMEHR</h3>
          <ul>
            {slide.newModel.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </SlideFrame>
  );
}

function CoreModelSlide({ slide }) {
  return (
    <SlideFrame title={slide.title}>
      <div className="pipeline pipeline--nodes">
        {slide.pipeline.map((item, index) => (
          <SystemNode key={item} label={item} active={index >= 3} />
        ))}
      </div>
    </SlideFrame>
  );
}

function EnterpriseTrustSlide({ slide }) {
  const blocks = [
    "Data Protection",
    "Access Control",
    "Audit Logs",
    "Client Cabinet",
    "API Integrations",
    "Corporate Domain",
    "Legal Documents",
    "Russian Data Residency"
  ];

  return (
    <SlideFrame title={slide.title}>
      <p className="trust-note">
        Target architecture · Designed for enterprise clients · Planned enterprise layer ·
        Compliance roadmap
      </p>
      <div className="three-cards">
        {blocks.map((block) => (
          <article key={block} className="glass-card">
            <p>{block}</p>
          </article>
        ))}
      </div>
    </SlideFrame>
  );
}

function FinalCtaSlide({ slide }) {
  const finalMetrics = [
    { label: "Role Fit", value: "+31%", hint: "после пилота", trend: "up" },
    { label: "KPI Signals", value: "14", hint: "гипотез", trend: "neutral" },
    { label: "AI Actions", value: "27", hint: "рекомендаций", trend: "up" },
    { label: "Manual Routine", value: "-22%", hint: "операций", trend: "down" }
  ];

  return (
    <div className="card__content final-layout">
      <div>
        <h1>{slide.title}</h1>
        <p>{slide.subtitle}</p>
      </div>
      <div className="metric-grid">
        {finalMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>
      <div className="pipeline final pipeline--nodes">
        {["People Data", "AI Analysis", "Role Decisions", "Development Tracks", "KPI Growth"].map(
          (item, index) => (
            <SystemNode key={item} label={item} active={index > 1} />
          )
        )}
      </div>
      <button type="button" className="cta-button">
        {slide.cta}
      </button>
    </div>
  );
}

export default function SlideContent({ slide }) {
  switch (slide.type) {
    case "hero":
      return <HeroSlide slide={slide} />;
    case "market-gap":
      return <MarketGapSlide slide={slide} />;
    case "old-vs-new":
      return <OldVsNewSlide slide={slide} />;
    case "core-model":
      return <CoreModelSlide slide={slide} />;
    case "platform-architecture":
      return (
        <SlideFrame title={slide.title}>
          <PlatformArchitectureSlide />
        </SlideFrame>
      );
    case "scenario-demo":
      return (
        <SlideFrame title={slide.title}>
          <ScenarioDemoSlide />
        </SlideFrame>
      );
    case "digital-profile":
      return (
        <SlideFrame title={slide.title}>
          <DigitalProfileSlide />
        </SlideFrame>
      );
    case "kpi-dashboard":
      return (
        <SlideFrame title={slide.title}>
          <KpiDashboardSlide />
        </SlideFrame>
      );
    case "neuro-employees":
      return (
        <SlideFrame title={slide.title}>
          <NeuroEmployeesSlide />
        </SlideFrame>
      );
    case "enterprise-trust":
      return <EnterpriseTrustSlide slide={slide} />;
    case "pilot-roadmap":
      return (
        <SlideFrame title={slide.title}>
          <PilotRoadmapSlide />
        </SlideFrame>
      );
    case "final-cta":
      return <FinalCtaSlide slide={slide} />;
    default:
      return null;
  }
}

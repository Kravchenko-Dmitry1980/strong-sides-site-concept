import { IconPlay } from "./NeuroAgentsIcons";

const STATUS_CLASS = {
  demo_available: "na-badge--demo",
  pilot_ready: "na-badge--pilot",
  soon: "na-badge--soon",
  concept: "na-badge--concept"
};

export default function NeuroAgentLibraryCard({ agent, onDemo }) {
  const badgeClass = STATUS_CLASS[agent.statusKind] ?? "na-badge--concept";

  return (
    <article className={`na-lib-card na-lib-card--${agent.accentColor}`}>
      <div className="na-lib-card__visual">
        <div className="na-lib-card__glow" />
        <div className="na-lib-card__silhouette" />
      </div>
      <h3 className="na-lib-card__name">{agent.name}</h3>
      <p className="na-lib-card__category">{agent.category}</p>
      <p className="na-lib-card__task">{agent.task}</p>
      {agent.description ? <p className="na-lib-card__desc">{agent.description}</p> : null}
      <p className="na-lib-card__audience">
        <span>Для кого:</span> {agent.targetAudience}
      </p>
      <p className="na-lib-card__result">
        <span>Результат:</span> {agent.result}
      </p>
      <div className={`na-badge ${badgeClass}`}>
        <span className="na-badge__dot" />
        {agent.status}
      </div>
      <button type="button" className="na-lib-card__demo-btn" onClick={() => onDemo?.(agent)}>
        <IconPlay />
        Демо
      </button>
    </article>
  );
}

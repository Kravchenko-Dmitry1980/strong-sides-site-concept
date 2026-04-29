import { useState } from "react";

export default function AgentShowcase({ agents }) {
  const [activeId, setActiveId] = useState(agents[0]?.id);
  const active = agents.find((item) => item.id === activeId) ?? agents[0];

  return (
    <section className="agent-showcase">
      <div className="agent-showcase__grid">
        {agents.map((agent) => (
          <button
            key={agent.id}
            type="button"
            className={`agent-showcase__card ${activeId === agent.id ? "is-active" : ""}`}
            onClick={() => setActiveId(agent.id)}
          >
            <strong>{agent.title}</strong>
            <span>
              <b>Статус демо:</b> {agent.status}
            </span>
            <span>
              <b>Для кого:</b> {agent.audience}
            </span>
            <span>
              <b>Входные данные:</b> {agent.data}
            </span>
            <span>
              <b>Результат:</b> {agent.result}
            </span>
            <span className="agent-showcase__cta">Посмотреть демо</span>
          </button>
        ))}
      </div>
      <article className="agent-showcase__detail">
        <h4>{active.title}</h4>
        <p>
          <span>Задача:</span> {active.does}
        </p>
        <p>
          <span>Данные:</span> {active.data}
        </p>
        <p>
          <span>Результат:</span> {active.result}
        </p>
        <div className="cta-row">
          <button type="button">Посмотреть демо</button>
          <button type="button">Добавить в пилот</button>
          <button type="button">Обсудить внедрение</button>
        </div>
      </article>
    </section>
  );
}

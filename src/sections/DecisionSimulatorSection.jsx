import { useState } from "react";

const actions = {
  "Обучить": {
    effect: "рост компетенции",
    forecast: "+12% к качеству коммуникации",
    term: "14-30 дней",
    risk: "низкий",
    nextStep: "назначить персональный трек"
  },
  "Перевести на другую роль": {
    effect: "повышение соответствия сильным сторонам",
    forecast: "+18% к результативности роли",
    term: "30-45 дней",
    risk: "средний",
    nextStep: "провести тестовый период"
  },
  "Подключить ИИ-сотрудника": {
    effect: "снижение ручной рутины",
    forecast: "-22% повторяемых операций",
    term: "7-14 дней",
    risk: "низкий",
    nextStep: "выбрать процесс для автоматизации"
  },
  "Изменить KPI-фокус": {
    effect: "управление становится измеримым",
    forecast: "рост прозрачности целей",
    term: "7 дней",
    risk: "низкий",
    nextStep: "согласовать 3 ключевые метрики"
  }
};

export default function DecisionSimulatorSection() {
  const [activeAction, setActiveAction] = useState("Обучить");
  const state = actions[activeAction];

  return (
    <section className="section decision-simulator">
      <header className="section__header">
        <h1>Симулятор управленческого решения</h1>
      </header>
      <div className="decision-simulator__layout">
        <div className="decision-simulator__actions">
          {Object.keys(actions).map((action) => (
            <button
              key={action}
              type="button"
              className={activeAction === action ? "is-active" : ""}
              onClick={() => setActiveAction(action)}
            >
              {action}
            </button>
          ))}
        </div>
        <div className="decision-simulator__forecast">
          <h3>{activeAction}</h3>
          <div className="forecast-grid">
            <p>Эффект</p>
            <strong>{state.effect}</strong>
            <p>KPI-прогноз</p>
            <strong>{state.forecast}</strong>
            <p>Срок</p>
            <strong>{state.term}</strong>
            <p>Риск</p>
            <strong>{state.risk}</strong>
            <p>Следующий шаг</p>
            <strong>{state.nextStep}</strong>
          </div>
          <div className="forecast-scale">
            <span style={{ width: activeAction === "Перевести на другую роль" ? "72%" : "58%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

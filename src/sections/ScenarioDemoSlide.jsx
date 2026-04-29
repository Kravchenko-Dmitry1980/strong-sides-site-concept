import { useState } from "react";

const scenarios = {
  sales: {
    label: "Руководитель продаж",
    pain: "Команда продаёт нестабильно.",
    data: "Стили коммуникации, сильные стороны, динамика KPI.",
    recommendation:
      "Перераспределить роли, усилить скрипты, включить AI-продажника.",
    kpi: "Конверсия, средний чек, скорость сделки.",
    nextAction: "Запустить 14-дневный трек перераспределения ролей."
  },
  hr: {
    label: "HR-директор",
    pain: "Сложно понять, кого развивать и куда переводить.",
    data: "Цифровые профили, компетенции, риск несоответствия роли.",
    recommendation: "Карта развития, треки обучения, кадровый резерв.",
    kpi: "Адаптация, удержание, закрытие вакансий.",
    nextAction: "Собрать кадровый резерв по критичным ролям."
  },
  owner: {
    label: "Собственник",
    pain: "Бизнес зависит от ручного управления.",
    data: "Слабые места команды, эффективность ролей, зоны автоматизации.",
    recommendation:
      "Использовать управленческий симулятор и AI-слой поддержки решений.",
    kpi: "Прибыль, управляемость, масштабируемость.",
    nextAction: "Включить управленческий симулятор для 3 сценариев."
  },
  gov: {
    label: "Госзаказчик",
    pain: "Нужно развивать человеческий капитал системно.",
    data: "Профили, компетенции, образовательные траектории.",
    recommendation:
      "Запустить программы профориентации, кадрового развития и оценки зрелости.",
    kpi: "Занятость, эффективность программ, развитие регионов.",
    nextAction: "Спроектировать региональную карту развития компетенций."
  }
};

export default function ScenarioDemoSlide() {
  const [selected, setSelected] = useState("sales");
  const activeScenario = scenarios[selected];

  return (
    <div className="scenario scenario--split">
      <div className="scenario__controls scenario__controls--column">
        {Object.entries(scenarios).map(([key, scenario]) => (
          <button
            key={key}
            type="button"
            className={`scenario__button ${selected === key ? "is-active" : ""}`}
            onClick={() => setSelected(key)}
          >
            {scenario.label}
          </button>
        ))}
      </div>

      <article className="scenario__panel glass-card">
        <h3>{activeScenario.label}</h3>
        <div className="scenario-grid">
          <div className="glass-card">
            <p>Боль</p>
            <strong>{activeScenario.pain}</strong>
          </div>
          <div className="glass-card">
            <p>Данные</p>
            <strong>{activeScenario.data}</strong>
          </div>
          <div className="glass-card">
            <p>AI-рекомендация</p>
            <strong>{activeScenario.recommendation}</strong>
          </div>
          <div className="glass-card">
            <p>KPI-фокус</p>
            <strong>{activeScenario.kpi}</strong>
          </div>
          <div className="glass-card scenario-next">
            <p>Следующее действие</p>
            <strong>{activeScenario.nextAction}</strong>
          </div>
        </div>
      </article>
    </div>
  );
}

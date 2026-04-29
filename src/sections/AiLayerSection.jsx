import { useState } from "react";

const agents = {
  "ИИ-аналитик": {
    task: "поиск управленческих сигналов и рисков",
    data: "KPI, профили, динамика команды, результаты треков",
    result: "рекомендации руководителю",
    embed: "dashboard руководителя"
  },
  "ИИ-HR": {
    task: "подбор и маршрутизация кадровых решений",
    data: "профили кандидатов, карта ролей, история адаптации",
    result: "короткий список решений по найму и развитию",
    embed: "контур HR и руководителя подразделения"
  },
  "ИИ-продажник": {
    task: "подготовка предложений и сценариев сделки",
    data: "воронка, коммуникации, профиль клиента",
    result: "пакет действий для повышения конверсии",
    embed: "рабочее место менеджера по продажам"
  },
  "ИИ-секретарь": {
    task: "координация задач и фиксация управленческих решений",
    data: "календарь, поручения, статус KPI",
    result: "протокол действий и напоминания",
    embed: "операционный контур руководителя"
  },
  "ИИ-наставник": {
    task: "персональный трек компетенций под роль",
    data: "профиль сотрудника, пробелы компетенций, целевые KPI",
    result: "пошаговый план развития с контрольными точками",
    embed: "модуль обучения и развития"
  }
};

export default function AiLayerSection() {
  const [activeAgent, setActiveAgent] = useState("ИИ-аналитик");
  const state = agents[activeAgent];

  return (
    <section className="section ai-layer">
      <header className="section__header">
        <h1>ИИ-слой платформы</h1>
      </header>
      <div className="ai-layer__layout">
        <div className="ai-layer__agents">
          {Object.keys(agents).map((agent) => (
            <button
              key={agent}
              type="button"
              className={activeAgent === agent ? "is-active" : ""}
              onClick={() => setActiveAgent(agent)}
            >
              {agent}
            </button>
          ))}
        </div>
        <article className="ai-layer__details">
          <h3>{activeAgent}</h3>
          <p>
            <span>Задача:</span> {state.task}
          </p>
          <p>
            <span>Данные:</span> {state.data}
          </p>
          <p>
            <span>Результат:</span> {state.result}
          </p>
          <p>
            <span>Встраивается:</span> {state.embed}
          </p>
        </article>
      </div>
    </section>
  );
}

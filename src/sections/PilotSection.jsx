import { useState } from "react";

const stages = {
  "Диагностика": {
    input: "данные по людям, ролям, KPI и структуре команды",
    action: "платформа выявляет сигналы, риски и точки роста",
    result: "базовая карта управленческих зон влияния",
    artifact: "стартовый аналитический отчет для руководителя"
  },
  "Карта ролей": {
    input: "функции подразделений и целевые результаты",
    action: "формируется целевая модель ролей и соответствий",
    result: "прозрачная связка ролей и сильных сторон",
    artifact: "карта ролей и профиль компетенций"
  },
  "ИИ-рекомендации": {
    input: "динамика команды и цифровые профили сотрудников",
    action: "ИИ генерирует приоритизированные управленческие шаги",
    result: "список действий с эффектом и рисками",
    artifact: "реестр рекомендаций для принятия решений"
  },
  "KPI-гипотезы": {
    input: "текущие метрики и доступные сценарии изменений",
    action: "симулятор рассчитывает гипотезы роста KPI",
    result: "набор тестируемых гипотез на 30 дней",
    artifact: "дорожная карта внедрения и контрольные точки"
  }
};

export default function PilotSection() {
  const [activeStage, setActiveStage] = useState("Диагностика");
  const state = stages[activeStage];

  return (
    <section className="section pilot">
      <header className="section__header">
        <h1>Пилот за 30 дней</h1>
      </header>
      <div className="pilot__timeline">
        {Object.keys(stages).map((stage) => (
          <button
            key={stage}
            type="button"
            className={activeStage === stage ? "is-active" : ""}
            onClick={() => setActiveStage(stage)}
          >
            {stage}
          </button>
        ))}
      </div>
      <article className="pilot__details">
        <h3>{activeStage}</h3>
        <p>
          <span>Вход:</span> {state.input}
        </p>
        <p>
          <span>Действие:</span> {state.action}
        </p>
        <p>
          <span>Результат:</span> {state.result}
        </p>
        <p>
          <span>Артефакт для руководителя:</span> {state.artifact}
        </p>
      </article>
      <button type="button" className="pilot__cta">
        Запустить пилотный аудит команды
      </button>
    </section>
  );
}

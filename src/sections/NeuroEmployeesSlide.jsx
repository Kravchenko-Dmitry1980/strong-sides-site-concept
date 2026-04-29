const cards = [
  {
    name: "AI Sales Assistant",
    role: "Продажи",
    automation: "Персонализация коммуникации и подготовка предложений.",
    integration: "CRM + мессенджеры",
    effect: "Рост конверсии и скорости сделки."
  },
  {
    name: "AI HR Screener",
    role: "HR",
    automation: "Первичный анализ кандидатов и shortlist.",
    integration: "ATS / HRM",
    effect: "Сокращение времени подбора."
  },
  {
    name: "AI Meeting Secretary",
    role: "Управление",
    automation: "Протоколирование встреч и создание задач.",
    integration: "Календарь + task tracker",
    effect: "Меньше потерь договоренностей."
  },
  {
    name: "AI Analyst",
    role: "Аналитика",
    automation: "Поиск управленческих сигналов и рисков.",
    integration: "BI + KPI dashboards",
    effect: "Раннее выявление провалов KPI."
  },
  {
    name: "AI Learning Coach",
    role: "Развитие",
    automation: "Ведение трека развития и обратной связи.",
    integration: "LMS / корпоративный портал",
    effect: "Ускорение роста компетенций."
  }
];

export default function NeuroEmployeesSlide() {
  return (
    <div className="neuro-section">
      <p className="neuro-signature">AI workforce layer for repetitive management processes</p>
      <div className="neuro-grid">
      {cards.map((card) => (
        <article key={card.name} className="glass-card">
          <h3>{card.name}</h3>
          <p><strong>Роль:</strong> {card.role}</p>
          <p><strong>Автоматизирует:</strong> {card.automation}</p>
          <p><strong>Где встраивается:</strong> {card.integration}</p>
          <p><strong>Эффект:</strong> {card.effect}</p>
        </article>
      ))}
      </div>
    </div>
  );
}

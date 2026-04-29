const lanes = [
  {
    title: "Источники",
    items: ["Сайт AKMEHR", "Яндекс.Метрика", "Telegram-боты", "Будущие API"]
  },
  {
    title: "Интеллектуальный слой",
    items: ["AI-навигатор", "Нейроаналитик", "Нейропродажник", "База знаний (RAG)"]
  },
  {
    title: "Бизнес-контур",
    items: ["BS-Evolve", "amoCRM", "Заявки и статусы воронки", "Дашборды и отчеты"]
  }
];

export default function IntegrationMap() {
  return (
    <div className="integration-map">
      {lanes.map((lane) => (
        <article key={lane.title}>
          <h4>{lane.title}</h4>
          <ul>
            {lane.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

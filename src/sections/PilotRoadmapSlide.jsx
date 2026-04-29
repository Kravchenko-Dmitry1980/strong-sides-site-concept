const weeks = [
  {
    week: "Неделя 1",
    input: "Состав команды и базовые KPI",
    action: "Диагностика команды",
    output: "Цифровые профили",
    result: "Базовый Team Potential Index"
  },
  {
    week: "Неделя 2",
    input: "Профили и оргструктура",
    action: "Карта ролей и компетенций",
    output: "Role Fit карта",
    result: "Список зон риска"
  },
  {
    week: "Неделя 3",
    input: "Разрывы по компетенциям",
    action: "Треки развития и AI-рекомендации",
    output: "План развития",
    result: "Приоритеты для руководителя"
  },
  {
    week: "Неделя 4",
    input: "Динамика KPI и гипотезы",
    action: "KPI-гипотезы и план внедрения",
    output: "Roadmap пилота",
    result: "Измеримый план на 90 дней"
  }
];

export default function PilotRoadmapSlide() {
  return (
    <div className="roadmap roadmap--timeline">
      <div className="roadmap__weeks roadmap__weeks--single">
        {weeks.map((item) => (
          <div key={item.week} className="roadmap-step glass-card">
            <h3>{item.week}</h3>
            <p><strong>Вход:</strong> {item.input}</p>
            <p><strong>Действие:</strong> {item.action}</p>
            <p><strong>Выход:</strong> {item.output}</p>
            <p><strong>Результат:</strong> {item.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

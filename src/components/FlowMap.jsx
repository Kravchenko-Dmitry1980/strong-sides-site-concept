const nodes = [
  "Сайт AKMEHR",
  "AI-навигатор",
  "Выбор ветки",
  "Модули AKMEHR",
  "BS-Evolve / amoCRM",
  "Дашборды и отчеты"
];

export default function FlowMap() {
  return (
    <div className="flow-map">
      {nodes.map((node, index) => (
        <div key={node} className="flow-map__node">
          <strong>{node}</strong>
          {index < nodes.length - 1 ? <span className="flow-map__arrow">→</span> : null}
        </div>
      ))}
    </div>
  );
}

const mapNodes = [
  "Люди",
  "Роли",
  "Компетенции",
  "KPI",
  "Решения"
];

export default function NodeMap() {
  return (
    <section className="node-map" aria-label="Системная карта AKMEHR">
      {mapNodes.map((node, index) => (
        <div key={node} className="node-map__item">
          <span className="node-map__pulse" />
          <strong>{node}</strong>
          {index < mapNodes.length - 1 ? <i className="node-map__line" /> : null}
        </div>
      ))}
    </section>
  );
}

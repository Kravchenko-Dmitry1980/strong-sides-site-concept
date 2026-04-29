export default function SignalPanel({ title, rows }) {
  return (
    <section className="signal-panel">
      <h3>{title}</h3>
      <div className="signal-panel__rows">
        {rows.map((row) => (
          <div key={row.label} className="signal-panel__row">
            <span>{row.label}</span>
            <strong>{row.value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

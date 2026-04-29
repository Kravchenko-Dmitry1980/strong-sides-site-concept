export default function MetricCard({ label, value, hint, trend = "neutral" }) {
  return (
    <article className={`metric-card trend-${trend}`}>
      <p className="metric-card__label">{label}</p>
      <h3 className="metric-card__value">{value}</h3>
      <span className="metric-card__hint">{hint}</span>
    </article>
  );
}

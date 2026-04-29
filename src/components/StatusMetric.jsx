export default function StatusMetric({ label, value, tone = "neutral" }) {
  return (
    <article className={`status-metric status-metric--${tone}`}>
      <p>{label}</p>
      <strong>{value}</strong>
    </article>
  );
}

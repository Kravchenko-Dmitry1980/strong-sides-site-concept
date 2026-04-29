export default function SignalCard({ title, points }) {
  return (
    <article className="signal-card">
      <h4>{title}</h4>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

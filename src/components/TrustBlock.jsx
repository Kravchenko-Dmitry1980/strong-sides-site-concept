export default function TrustBlock({ items }) {
  return (
    <article className="trust-block">
      <h3>Контакты и доверие</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

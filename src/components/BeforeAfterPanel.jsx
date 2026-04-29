export default function BeforeAfterPanel({ beforeItems, afterItems }) {
  return (
    <div className="before-after-panel">
      <article>
        <h4>До AKMEHR</h4>
        <ul>
          {beforeItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <article>
        <h4>После AKMEHR</h4>
        <ul>
          {afterItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}

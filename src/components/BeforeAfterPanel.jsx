export default function BeforeAfterPanel({ beforeItems, afterItems }) {
  return (
    <div className="before-after-panel">
      <article>
        <h4>До внедрения платформы</h4>
        <ul>
          {beforeItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <article>
        <h4>После «Сильных сторон»</h4>
        <ul>
          {afterItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}

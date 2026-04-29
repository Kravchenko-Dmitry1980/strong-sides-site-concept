export default function ModuleShowcaseCard({ title, audience, task, result, status, active, onClick }) {
  return (
    <button
      type="button"
      className={`module-showcase-card ${active ? "is-active" : ""}`}
      onClick={onClick}
    >
      <strong>{title}</strong>
      <span>
        <b>Для кого:</b> {audience}
      </span>
      <span>
        <b>Задача:</b> {task}
      </span>
      <span>
        <b>Результат:</b> {result}
      </span>
      <span className="module-showcase-card__status">
        <b>Статус демо:</b> {status}
      </span>
    </button>
  );
}

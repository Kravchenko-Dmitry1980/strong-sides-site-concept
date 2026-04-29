export default function Header({ items, activeId, onSelect, hidden }) {
  return (
    <header className={`top-header ${hidden ? "is-hidden" : ""}`}>
      <div className="brand-block">
        <span className="brand-mark" />
        <div>
          <strong>Сильные стороны</strong>
          <p>Платформа управления человеческим потенциалом</p>
        </div>
      </div>
      <nav className="top-nav" aria-label="Основная навигация">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={item.id === activeId ? "is-active" : ""}
            onClick={() => onSelect(item.id)}
          >
            {item.title}
          </button>
        ))}
      </nav>
    </header>
  );
}

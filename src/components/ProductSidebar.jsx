export default function ProductSidebar({ items, activeIndex, onSelect }) {
  return (
    <aside className="product-sidebar" aria-label="Навигация платформы">
      <div className="product-sidebar__brand">
        <strong>AKMEHR</strong>
        <span>Платформа управления потенциалом</span>
      </div>
      <nav className="product-sidebar__nav">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`product-sidebar__item ${activeIndex === index ? "is-active" : ""}`}
            onClick={() => onSelect(index)}
            aria-label={`Перейти в раздел ${item.title}`}
          >
            <span className="product-sidebar__dot" />
            {item.title}
          </button>
        ))}
      </nav>
    </aside>
  );
}

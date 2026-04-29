export default function SlideNav({ slides, currentSlide, onSelect }) {
  return (
    <nav className="slide-nav" aria-label="Навигация по экранам">
      {slides.map((slide, index) => (
        <button
          key={`${slide.type}-${index}`}
          type="button"
          className={`slide-nav__item ${index === currentSlide ? "is-active" : ""}`}
          onClick={() => onSelect(index)}
          aria-label={`Перейти к экрану ${index + 1}`}
        >
          {index + 1}
        </button>
      ))}
    </nav>
  );
}

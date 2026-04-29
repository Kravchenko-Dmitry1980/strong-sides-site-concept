export default function Controls({ onPrev, onNext }) {
  return (
    <div className="controls">
      <button type="button" onClick={onPrev}>
        Назад
      </button>
      <button type="button" onClick={onNext}>
        Вперёд
      </button>
    </div>
  );
}

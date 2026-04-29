import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import SlideContent from "../sections/SlideContent";

export default function SlideShell({
  slide,
  currentSlide,
  totalSlides,
  progress,
  onPrev,
  onNext
}) {
  return (
    <section className="card" key={currentSlide}>
      <div className="card__header">
        <p className="card__counter">
          Слайд {currentSlide + 1} / {totalSlides}
        </p>
        <ProgressBar progress={progress} />
      </div>

      <SlideContent slide={slide} />
      <Controls onPrev={onPrev} onNext={onNext} />
    </section>
  );
}

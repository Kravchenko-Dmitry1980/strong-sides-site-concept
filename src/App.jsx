import { useEffect, useMemo, useState } from "react";
import SlideNav from "./components/SlideNav";
import SlideShell from "./components/SlideShell";
import { slides } from "./data/slides";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const progress = useMemo(
    () => ((currentSlide + 1) / totalSlides) * 100,
    [currentSlide, totalSlides]
  );

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        goNext();
      }

      if (event.key === "ArrowLeft") {
        goPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const slide = slides[currentSlide];

  return (
    <main className="presentation">
      <div className="presentation__background" />
      <SlideNav slides={slides} currentSlide={currentSlide} onSelect={goToSlide} />
      <SlideShell
        slide={slide}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        progress={progress}
        onPrev={goPrev}
        onNext={goNext}
      />
    </main>
  );
}

import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import B2CSection from "./sections/B2CSection";
import B2BSection from "./sections/B2BSection";
import B2GSection from "./sections/B2GSection";
import NeuroAgentsSection from "./sections/NeuroAgentsSection";
import IntegrationsSection from "./sections/IntegrationsSection";
import SiteConceptSection from "./sections/SiteConceptSection";

const sections = [
  { id: "home", title: "Главная", component: HeroSection },
  { id: "b2c", title: "Для человека", component: B2CSection },
  { id: "b2b", title: "Для бизнеса", component: B2BSection },
  { id: "b2g", title: "Для государства", component: B2GSection },
  { id: "agents", title: "Нейро-сотрудники", component: NeuroAgentsSection },
  { id: "integrations", title: "Интеграции", component: IntegrationsSection },
  { id: "concept", title: "Концепция сайта", component: SiteConceptSection }
];

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [showMenu, setShowMenu] = useState(true);
  const [showHints, setShowHints] = useState(true);
  const totalSections = sections.length;

  const goNext = () => {
    setCurrentSection((prev) => (prev + 1) % totalSections);
  };

  const goPrev = () => {
    setCurrentSection((prev) => (prev - 1 + totalSections) % totalSections);
  };

  const goToSection = (indexOrId) => {
    if (typeof indexOrId === "number") {
      setCurrentSection(indexOrId);
      return;
    }

    const targetIndex = sections.findIndex((section) => section.id === indexOrId);
    if (targetIndex >= 0) {
      setCurrentSection(targetIndex);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        goNext();
      }

      if (event.key === "ArrowLeft") {
        goPrev();
      }

      if (event.key.toLowerCase() === "f") {
        setShowMenu((prev) => !prev);
      }

      if (event.key.toLowerCase() === "h") {
        setShowHints((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const ActiveSection = sections[currentSection].component;
  const activeSection = sections[currentSection];
  const routeActions = useMemo(
    () => ({
      b2c: () => goToSection("b2c"),
      b2b: () => goToSection("b2b"),
      b2g: () => goToSection("b2g")
    }),
    []
  );

  return (
    <main className="site-app">
      <div className="site-app__glow" />
      <Header
        items={sections}
        activeId={activeSection.id}
        onSelect={goToSection}
        hidden={!showMenu}
      />
      <section className="site-content">
        <ActiveSection
          onRouteSelect={goToSection}
          routeActions={routeActions}
          demoMode={!showMenu}
          hintsVisible={showHints}
        />
        {showHints ? (
          <footer className="site-footer-hints">
            <span>ArrowLeft / ArrowRight — переключение разделов</span>
            <span>F — скрыть/показать меню</span>
            <span>H — скрыть/показать подсказки</span>
            <button type="button" onClick={goPrev} aria-label="Предыдущий раздел">
              Назад
            </button>
            <button type="button" onClick={goNext} aria-label="Следующий раздел">
              Далее
            </button>
          </footer>
        ) : null}
      </section>
    </main>
  );
}

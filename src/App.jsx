import { useCallback, useEffect, useMemo, useState } from "react";
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
  const [homeAnchor, setHomeAnchor] = useState("hero");
  const totalSections = sections.length;

  const goNext = () => {
    setCurrentSection((prev) => (prev + 1) % totalSections);
  };

  const goPrev = () => {
    setCurrentSection((prev) => (prev - 1 + totalSections) % totalSections);
  };

  const goToSection = useCallback((indexOrId) => {
    if (typeof indexOrId === "number") {
      setCurrentSection(indexOrId);
      return;
    }

    const targetIndex = sections.findIndex((section) => section.id === indexOrId);
    if (targetIndex >= 0) {
      setCurrentSection(targetIndex);
    }
  }, []);

  const scrollToLandingAnchor = useCallback(
    (anchorId) => {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    []
  );

  const handleLandingNavItem = useCallback(
    (item) => {
      if (item.target === "section") {
        goToSection(item.sectionId);
        return;
      }
      const isHome = sections[currentSection]?.id === "home";
      if (!isHome) {
        goToSection("home");
        window.requestAnimationFrame(() => {
          setTimeout(() => scrollToLandingAnchor(item.anchor), 120);
        });
      } else {
        scrollToLandingAnchor(item.anchor);
      }
    },
    [currentSection, goToSection, scrollToLandingAnchor]
  );

  const handleAuditCta = useCallback(() => {
    const isHome = sections[currentSection]?.id === "home";
    if (!isHome) {
      goToSection("home");
      window.requestAnimationFrame(() => {
        setTimeout(() => scrollToLandingAnchor("landing-contacts"), 120);
      });
    } else {
      scrollToLandingAnchor("landing-contacts");
    }
  }, [currentSection, goToSection, scrollToLandingAnchor]);

  useEffect(() => {
    if (sections[currentSection]?.id === "home") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [currentSection]);

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
    [goToSection]
  );

  const isHome = activeSection.id === "home";

  return (
    <main className={`site-app ${isHome ? "site-app--b2b-home" : ""}`}>
      <div className="site-app__glow" />
      <Header
        activeId={activeSection.id}
        homeAnchor={homeAnchor}
        onLandingNavItem={handleLandingNavItem}
        onAuditCta={handleAuditCta}
        moreSections={sections}
        onSelectSection={goToSection}
        hidden={!showMenu}
      />
      <section className={`site-content ${isHome ? "site-content--landing" : ""}`}>
        <ActiveSection
          onRouteSelect={goToSection}
          onHomeAnchorChange={isHome ? setHomeAnchor : undefined}
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

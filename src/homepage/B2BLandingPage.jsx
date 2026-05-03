import { useEffect } from "react";
import LandingBackground from "./LandingBackground";
import LandingHero from "./LandingHero";
import LandingPlatformShowcase from "./LandingPlatformShowcase";
import LandingHowItWorks from "./LandingHowItWorks";
import LandingIntegrations from "./LandingIntegrations";
import LandingFinalCta from "./LandingFinalCta";

const ANCHOR_TO_KEY = {
  "landing-hero": "hero",
  "landing-platform": "platform",
  "landing-process": "process",
  "landing-integrations": "integrations",
  "landing-contacts": "contacts"
};

const OBSERVE_IDS = Object.keys(ANCHOR_TO_KEY);

export default function B2BLandingPage({ onRouteSelect, onHomeAnchorChange }) {
  const scrollToContacts = () => {
    document.getElementById("landing-contacts")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (!onHomeAnchorChange) {
      return undefined;
    }

    const elements = OBSERVE_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (!visible[0]?.target?.id) {
          return;
        }
        const key = ANCHOR_TO_KEY[visible[0].target.id];
        if (key) {
          onHomeAnchorChange(key);
        }
      },
      { root: null, threshold: [0.2, 0.35, 0.5], rootMargin: "-12% 0px -55% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [onHomeAnchorChange]);

  return (
    <div className="b2b-landing">
      <LandingBackground />
      <LandingHero onRouteSelect={onRouteSelect} onScrollToContacts={scrollToContacts} />
      <LandingPlatformShowcase onRouteSelect={onRouteSelect} />
      <LandingHowItWorks onRouteSelect={onRouteSelect} />
      <LandingIntegrations />
      <LandingFinalCta onRouteSelect={onRouteSelect} onScrollToContacts={scrollToContacts} />
    </div>
  );
}

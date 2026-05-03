import NeuroAgentLibrary from "./NeuroAgentLibrary";
import NeuroAgentsBusinessImpact from "./NeuroAgentsBusinessImpact";
import NeuroAgentsDemoGallery from "./NeuroAgentsDemoGallery";
import NeuroAgentsFinalCta from "./NeuroAgentsFinalCta";
import NeuroAgentsHero from "./NeuroAgentsHero";
import NeuroAgentsWhyUs from "./NeuroAgentsWhyUs";

function scrollToDemoGallery() {
  document.getElementById("neuro-demo-gallery")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function NeuroAgentsPremiumPage({ onAuditCta }) {
  const handleDiscuss = () => {
    onAuditCta?.();
  };

  const handleAgentDemo = () => {
    scrollToDemoGallery();
  };

  return (
    <div className="neuro-agents-page">
      <div className="neuro-agents-page__bg" aria-hidden>
        <div className="neuro-agents-page__bg-grid" />
        <div className="neuro-agents-page__bg-glow neuro-agents-page__bg-glow--1" />
        <div className="neuro-agents-page__bg-glow neuro-agents-page__bg-glow--2" />
      </div>
      <div className="neuro-agents-page__inner">
        <NeuroAgentsHero onDiscussImplementation={handleDiscuss} />
        <NeuroAgentLibrary onAgentDemo={handleAgentDemo} />
        <NeuroAgentsBusinessImpact />
        <NeuroAgentsDemoGallery onWatchAll={scrollToDemoGallery} />
        <NeuroAgentsWhyUs />
        <NeuroAgentsFinalCta onRequestAudit={() => onAuditCta?.()} onContact={() => onAuditCta?.()} />
      </div>
    </div>
  );
}

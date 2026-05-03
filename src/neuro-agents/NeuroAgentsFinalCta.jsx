import { motion } from "framer-motion";
import { IconChat, IconPlay } from "./NeuroAgentsIcons";

function scrollToDemo() {
  document.getElementById("neuro-demo-gallery")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function NeuroAgentsFinalCta({ onRequestAudit, onContact }) {
  return (
    <motion.section
      id="neuro-final-cta"
      className="na-section na-final"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
    >
      <div className="na-final__panel">
        <div className="na-final__target" aria-hidden>
          <div className="na-final__target-ring" />
          <div className="na-final__target-core" />
        </div>
        <div className="na-final__copy">
          <h2 className="na-final__title">Готовы усилить команду нейроагентами и расти быстрее?</h2>
          <p className="na-final__text">
            Запросите аудит текущих процессов и получите рекомендации по пилоту нейроагентов уже на этой неделе.
          </p>
        </div>
        <div className="na-final__actions">
          <button
            type="button"
            className="landing-btn landing-btn--primary landing-btn--cta-final"
            onClick={() => onRequestAudit?.()}
          >
            Запросить аудит команды
            <span className="landing-btn__arrow" aria-hidden>
              →
            </span>
          </button>
          <div className="na-final__links">
            <button type="button" className="na-final__link" onClick={scrollToDemo}>
              <IconPlay />
              Посмотреть демо
            </button>
            <button type="button" className="na-final__link" onClick={() => onContact?.()}>
              <IconChat />
              Связаться с нами
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

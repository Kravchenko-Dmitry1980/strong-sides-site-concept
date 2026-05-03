import { motion } from "framer-motion";
import { NEURO_AGENTS } from "../data/neuroAgentsConfig";
import { IconPlusAgent } from "./NeuroAgentsIcons";
import NeuroAgentLibraryCard from "./NeuroAgentLibraryCard";

function scrollToFinalCta() {
  document.getElementById("neuro-final-cta")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

export default function NeuroAgentLibrary({ onAgentDemo }) {
  return (
    <motion.section
      id="neuro-agent-library"
      className="na-section na-lib"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
    >
      <div className="na-section__head na-lib__head">
        <div>
          <h2 className="na-section__title">Библиотека нейроагентов</h2>
          <p className="na-section__subtitle">
            Выбирайте готовых агентов под задачи бизнеса. Добавляйте новых по мере роста компании.
          </p>
        </div>
        <button type="button" className="landing-btn landing-btn--outline-header na-lib__add" onClick={scrollToFinalCta}>
          <IconPlusAgent />
          Добавить агента
        </button>
      </div>
      <div className="na-lib__grid">
        {NEURO_AGENTS.map((agent) => (
          <NeuroAgentLibraryCard key={agent.id} agent={agent} onDemo={onAgentDemo} />
        ))}
      </div>
      <p className="na-lib__foot">
        <span className="na-lib__foot-icon" aria-hidden>
          +
        </span>
        Платформа растёт вместе с вами — новые агенты добавляются регулярно.
      </p>
    </motion.section>
  );
}

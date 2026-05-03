import { motion } from "framer-motion";
import { NEURO_AGENTS } from "../data/neuroAgentsConfig";
import { IconDoc, IconPlay } from "./NeuroAgentsIcons";

function scrollToDemo() {
  document.getElementById("neuro-demo-gallery")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function NeuroAgentsHero({ onDiscussImplementation }) {
  return (
    <motion.header
      className="na-hero"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="na-hero__grid">
        <div className="na-hero__copy">
          <p className="na-eyebrow">AI-модули платформы BS-Evolve</p>
          <h1 className="na-hero__title">Нейро-сотрудники</h1>
          <p className="na-hero__subtitle">AI-модули для пилота и внедрения</p>
          <p className="na-hero__lead">
            Нейроагенты берут на себя рутину, ускоряют процессы и помогают командам принимать решения на
            основе данных.
          </p>
          <div className="na-hero__actions">
            <button type="button" className="landing-btn landing-btn--primary landing-btn--hero" onClick={scrollToDemo}>
              <IconPlay className="landing-btn__lead-icon" />
              Посмотреть демо
            </button>
            <button
              type="button"
              className="landing-btn landing-btn--ghost landing-btn--ghost-hero"
              onClick={() => onDiscussImplementation?.()}
            >
              <IconDoc className="landing-btn__ghost-icon" />
              Обсудить внедрение
            </button>
          </div>
          <ul className="na-trust">
            <li>Быстрый пилот от 2 недель</li>
            <li>Безопасные данные</li>
            <li>Интеграция с CRM и BS-Evolve</li>
            <li>Масштабируемая библиотека агентов</li>
          </ul>
        </div>
        <div className="na-hero__viz" aria-hidden>
          <div className="na-hero__glow-ring" />
          <div className="na-hero__orbit">
            {NEURO_AGENTS.map((agent, i) => (
              <div
                key={agent.id}
                className="na-hero__orbit-slot"
                style={{ "--na-slot": i }}
              >
                <div className={`na-hero__mini na-hero__mini--${agent.accentColor}`}>
                  <span className="na-hero__mini-name">{agent.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="na-hero__core">
            <div className="na-hero__core-head" />
            <p className="na-hero__core-caption">Нейроагенты: ваши цифровые сотрудники</p>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

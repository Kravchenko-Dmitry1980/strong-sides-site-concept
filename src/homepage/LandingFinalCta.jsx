import { motion } from "framer-motion";
import { FinalGrowthGraphic, FinalCtaNetworkPattern, IconPlayOutline, IconChatOutline } from "./icons";

export default function LandingFinalCta({ onRouteSelect, onScrollToContacts }) {
  return (
    <section className="landing-final" id="landing-contacts">
      <motion.div
        className="landing-final__panel"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
      >
        <FinalCtaNetworkPattern className="landing-final__network" />
        <div className="landing-final__panel-inner">
          <div className="landing-final__decor" aria-hidden>
            <FinalGrowthGraphic className="landing-final__gauge" />
          </div>
          <div className="landing-final__copy">
            <h2>
              Готовы увидеть, как AI помогает команде{" "}
              <span className="landing-final__accent">расти и достигать KPI</span>?
            </h2>
            <p>Покажем платформу, разберём ваш сценарий и предложим формат пилота.</p>
          </div>
          <div className="landing-final__actions">
            <button
              type="button"
              className="landing-btn landing-btn--primary landing-btn--wide landing-btn--cta-final"
              onClick={onScrollToContacts}
            >
              Запросить аудит команды
              <span className="landing-btn__arrow" aria-hidden>
                →
              </span>
            </button>
            <div className="landing-final__links">
              <button type="button" className="landing-final__ghost" onClick={() => onRouteSelect("agents")}>
                <IconPlayOutline className="landing-final__ghost-icon" />
                Посмотреть демо
              </button>
              <button type="button" className="landing-final__ghost" onClick={() => onRouteSelect("concept")}>
                <IconChatOutline className="landing-final__ghost-icon" />
                Связаться с нами
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

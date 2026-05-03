import { motion } from "framer-motion";

export default function LandingHero({ onRouteSelect, onScrollToContacts }) {
  return (
    <section className="landing-hero" id="landing-hero">
      <div className="landing-hero__glow landing-hero__glow--left" aria-hidden />
      <div className="landing-hero__glow landing-hero__glow--right" aria-hidden />
      <div className="landing-hero__grid">
        <motion.div
          className="landing-hero__copy"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="landing-hero__kicker">AI • ДАННЫЕ • РЕЗУЛЬТАТ</p>
          <h1 className="landing-hero__title">
            <span className="landing-hero__title-white">
              AI-платформа
              <br />
              для диагностики,
            </span>
            <br />
            <span className="landing-hero__title-accent">
              развития и
              <br />
              управленческих решений
            </span>
          </h1>
          <p className="landing-hero__lead">
            BS-Evolve помогает бизнесу диагностировать потенциал команды, развивать сотрудников и
            принимать управленческие решения на основе данных.
          </p>
          <div className="landing-hero__actions">
            <div className="landing-hero__actions-row">
              <button type="button" className="landing-btn landing-btn--primary landing-btn--hero" onClick={onScrollToContacts}>
                Запросить аудит команды
                <span className="landing-btn__arrow" aria-hidden>
                  →
                </span>
              </button>
              <button
                type="button"
                className="landing-btn landing-btn--ghost landing-btn--ghost-hero"
                onClick={() => onRouteSelect("agents")}
              >
                <span className="landing-icon landing-icon--play" aria-hidden />
                Посмотреть демо
              </button>
            </div>
            <div className="landing-hero__actions-row landing-hero__actions-row--tertiary">
              <button type="button" className="landing-btn landing-btn--tertiary" onClick={onScrollToContacts}>
                <span className="landing-icon landing-icon--chat" aria-hidden />
                Обсудить пилот
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="landing-hero__visual"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
        >
          <div className="landing-avatar-stage">
            <div className="landing-avatar-stage__bloom" aria-hidden />
            <div className="landing-avatar-stage__ring landing-avatar-stage__ring--outer" aria-hidden />
            <div className="landing-avatar-stage__ring landing-avatar-stage__ring--mid" aria-hidden />
            <div className="landing-avatar-stage__ring landing-avatar-stage__ring--inner" aria-hidden />
            <div className="landing-avatar-stage__mesh" />
            <div
              className="landing-avatar-stage__figure"
              role="img"
              aria-label="Место для 3D-аватара AI-навигатора"
            >
              <div className="landing-avatar-stage__glass" aria-hidden />
              <div className="landing-avatar-stage__silhouette" />
              <div className="landing-avatar-stage__particles" aria-hidden />
              <div className="landing-avatar-stage__scan" />
            </div>
            <aside className="landing-avatar-stage__bubble">
              <p>
                Здравствуйте!
                <br />
                Я AI-навигатор.
                <br />
                Помогу выбрать подходящий сценарий для вашей команды.
              </p>
            </aside>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

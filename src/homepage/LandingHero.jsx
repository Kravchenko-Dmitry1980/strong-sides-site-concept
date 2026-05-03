import { motion } from "framer-motion";
import InteractiveConstellationBackground from "./InteractiveConstellationBackground";
import { IconUserCircle, IconPlayOutline, IconChatOutline } from "./icons";

export default function LandingHero({ onRouteSelect, onScrollToContacts }) {
  return (
    <section className="landing-hero" id="landing-hero">
      <InteractiveConstellationBackground />
      <div className="landing-hero__readability-veil" aria-hidden />
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
            <div className="landing-hero__actions-row landing-hero__actions-row--primary">
              <button type="button" className="landing-btn landing-btn--primary landing-btn--hero" onClick={onScrollToContacts}>
                <IconUserCircle className="landing-btn__lead-icon" />
                Запросить аудит команды
                <span className="landing-btn__arrow" aria-hidden>
                  →
                </span>
              </button>
            </div>
            <div className="landing-hero__actions-row landing-hero__actions-row--secondary">
              <button
                type="button"
                className="landing-btn landing-btn--ghost landing-btn--ghost-hero"
                onClick={() => onRouteSelect("agents")}
              >
                <IconPlayOutline className="landing-btn__ghost-icon" />
                Посмотреть демо
              </button>
              <button type="button" className="landing-btn landing-btn--ghost landing-btn--ghost-hero" onClick={onScrollToContacts}>
                <IconChatOutline className="landing-btn__ghost-icon" />
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
              aria-label="Место для 3D-аватара AI-навигатора; премиальный плейсхолдер до подключения изображения"
            >
              <div className="landing-avatar-stage__rim" aria-hidden />
              <div className="landing-avatar-stage__glass" aria-hidden />
              <div className="landing-avatar-stage__silhouette" />
              <div className="landing-avatar-stage__torso" aria-hidden />
              <div className="landing-avatar-stage__gesture" aria-hidden>
                <svg viewBox="0 0 120 140" className="landing-avatar-stage__gesture-svg">
                  <path
                    fill="none"
                    stroke="rgba(255,190,140,0.35)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    d="M78 28 C92 22 102 32 98 48 C94 58 88 62 82 58"
                  />
                  <path
                    fill="none"
                    stroke="rgba(255,180,120,0.25)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    d="M82 58 L72 88 L58 96"
                  />
                </svg>
              </div>
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

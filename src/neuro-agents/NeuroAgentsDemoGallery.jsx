import { motion } from "framer-motion";
import { NEURO_DEMO_ITEMS } from "../data/neuroAgentsConfig";
import { IconPlay } from "./NeuroAgentsIcons";

export default function NeuroAgentsDemoGallery({ onWatchAll }) {
  return (
    <motion.section
      id="neuro-demo-gallery"
      className="na-section na-demo"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="na-section__title">Смотрите нейроагентов в действии</h2>
      <p className="na-section__subtitle na-demo__lead">
        Демо-видео и интерактивные примеры реальных сценариев.
      </p>
      <div className="na-demo__grid">
        {NEURO_DEMO_ITEMS.map((item) => {
          const thumbClass = `na-demo-thumb na-demo-thumb--${item.thumbnailType}`;
          const hasVideo = Boolean(item.videoUrl);

          return (
            <article key={item.id} id={`neuro-demo-card-${item.id}`} className="na-demo-card">
              <div className={thumbClass}>
                {!hasVideo ? <span className="na-demo-card__placeholder">Превью</span> : null}
                <button
                  type="button"
                  className="na-demo-card__play"
                  aria-label={`Воспроизвести демо: ${item.title}`}
                  disabled={!hasVideo}
                  title={hasVideo ? "Открыть демо" : "Видео появится позже"}
                >
                  <IconPlay />
                </button>
                <span className="na-demo-card__duration">{item.duration}</span>
              </div>
              <h3 className="na-demo-card__title">{item.title}</h3>
              <p className="na-demo-card__scenario">{item.scenario}</p>
            </article>
          );
        })}
      </div>
      <div className="na-demo__actions">
        <button type="button" className="landing-btn landing-btn--outline-header na-demo__all" onClick={onWatchAll}>
          Смотреть все демо
        </button>
      </div>
    </motion.section>
  );
}

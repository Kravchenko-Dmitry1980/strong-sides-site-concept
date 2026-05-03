import { motion } from "framer-motion";
import { PlatformBulletIcon } from "./icons";

const bullets = [
  { text: "Диагностика команды и ролей", icon: "team" },
  { text: "Треки развития под KPI", icon: "track" },
  { text: "Нейроаналитика и дашборды", icon: "chart" },
  { text: "Подготовка решений для руководителя", icon: "exec" }
];

export default function LandingPlatformShowcase({ onRouteSelect }) {
  return (
    <section className="landing-platform" id="landing-platform">
      <div className="landing-platform__glow" aria-hidden />
      <div className="landing-platform__grid">
        <motion.div
          className="landing-tablet-wrap"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <div className="landing-tablet">
            <div className="landing-tablet__bezel" />
            <div className="landing-tablet__screen">
              <div className="landing-tablet__glare" aria-hidden />
              <div className="landing-dash">
                <aside className="landing-dash__sidebar">
                  <span className="landing-dash__logo">BS-Evolve</span>
                  <ul>
                    <li className="is-active">Обзор</li>
                    <li>Команда</li>
                    <li>KPI</li>
                    <li>Интеграции</li>
                  </ul>
                </aside>
                <div className="landing-dash__main">
                  <header className="landing-dash__top">
                    <span>Панель руководителя</span>
                    <span className="landing-dash__pill">Live</span>
                  </header>
                  <div className="landing-dash__kpis">
                    <article>
                      <span>Вовлечённость</span>
                      <strong>87%</strong>
                      <div className="landing-dash__bar">
                        <i style={{ width: "87%" }} />
                      </div>
                    </article>
                    <article>
                      <span>Треки</span>
                      <strong>76%</strong>
                      <div className="landing-dash__bar">
                        <i style={{ width: "76%" }} />
                      </div>
                    </article>
                    <article>
                      <span>KPI команды</span>
                      <strong>92%</strong>
                      <div className="landing-dash__bar">
                        <i style={{ width: "92%" }} />
                      </div>
                    </article>
                  </div>
                  <div className="landing-dash__divider" aria-hidden />
                  <div className="landing-dash__row">
                    <div className="landing-dash__donut">
                      <span>Роли команды</span>
                      <div className="landing-dash__donut-chart" />
                      <ul>
                        <li>
                          <i className="dot dot--a" /> Лидеры
                        </li>
                        <li>
                          <i className="dot dot--b" /> Эксперты
                        </li>
                        <li>
                          <i className="dot dot--c" /> Рост
                        </li>
                      </ul>
                    </div>
                    <div className="landing-dash__bars">
                      <span>Динамика развития</span>
                      <div className="landing-dash__barset">
                        <i style={{ height: "42%" }} />
                        <i style={{ height: "68%" }} />
                        <i style={{ height: "55%" }} />
                        <i style={{ height: "88%" }} />
                        <i style={{ height: "72%" }} />
                        <i style={{ height: "94%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="landing-tablet__keyboard" />
          </div>
        </motion.div>

        <motion.div
          className="landing-platform__copy"
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <p className="landing-section-label">ПЛАТФОРМА BS-EVOLVE</p>
          <h2 className="landing-section-title">Платформа, с которой команде легко работать</h2>
          <ul className="landing-bullet-list">
            {bullets.map((b) => (
              <li key={b.text}>
                <span className="landing-bullet-icon">
                  <PlatformBulletIcon variant={b.icon} />
                </span>
                {b.text}
              </li>
            ))}
          </ul>
          <button type="button" className="landing-link-btn" onClick={() => onRouteSelect("b2b")}>
            Посмотреть возможности платформы
            <span aria-hidden> →</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

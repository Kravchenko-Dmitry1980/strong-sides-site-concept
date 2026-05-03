import { motion } from "framer-motion";
import { FlowNodeIcon } from "./icons";

const flow = [
  { label: "Сайт / заявки", highlight: false, icon: "site" },
  { label: "AI-навигатор", highlight: false, icon: "navigator" },
  { label: "Нейропродажник", highlight: false, icon: "seller" },
  { label: "amoCRM", highlight: true, icon: "crm" },
  { label: "Нейроаналитик", highlight: false, icon: "analyst" },
  { label: "Дашборды / BS-Evolve", highlight: false, icon: "dashboard" }
];

const cards = [
  {
    title: "Источники данных",
    icon: "database",
    items: ["Сайт", "Яндекс.Метрика", "Telegram-боты", "Будущие API"]
  },
  {
    title: "Что передаём в CRM",
    icon: "sync",
    items: ["Контакт", "Источник", "Интерес", "Результат диагностики", "Статус воронки"]
  },
  {
    title: "Что получает руководитель",
    icon: "reports",
    items: ["Отчёты", "AI-сигналы", "Статусы лидов", "Дашборды"]
  }
];

export default function LandingIntegrations() {
  return (
    <motion.section
      className="landing-integrations"
      id="landing-integrations"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px", amount: 0.12 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="landing-section-label landing-section-label--center">ИНТЕГРАЦИИ И ПОТОК ДАННЫХ</p>
      <div className="landing-flow">
        {flow.map((item, i) => (
          <motion.div
            key={item.label}
            className="landing-flow__segment"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <div
              className={`landing-flow__node-card ${item.highlight ? "landing-flow__node-card--highlight" : ""}`}
              style={{ "--node-delay": `${i * 0.35}s` }}
            >
              <span className="landing-flow__node-icon" aria-hidden>
                <FlowNodeIcon variant={item.icon} />
              </span>
              <span className="landing-flow__node-label">{item.label}</span>
            </div>
            {i < flow.length - 1 ? (
              <span className="landing-flow__connector" style={{ "--flow-idx": i }} aria-hidden>
                <span className="landing-flow__arrow" />
              </span>
            ) : null}
          </motion.div>
        ))}
      </div>
      <div className="landing-int-cards">
        {cards.map((c, i) => (
          <motion.article
            key={c.title}
            className="landing-int-card"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.05 }}
          >
            <div className="landing-int-card__row">
              <div className="landing-int-card__icon-wrap" aria-hidden>
                <FlowNodeIcon variant={c.icon} />
              </div>
              <div className="landing-int-card__content">
                <h3>{c.title}</h3>
                <ul>
                  {c.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

import { motion } from "framer-motion";

const flow = [
  { label: "Сайт / заявки", highlight: false },
  { label: "AI-навигатор", highlight: false },
  { label: "Нейропродажник", highlight: false },
  { label: "amoCRM", highlight: true },
  { label: "Нейроаналитик", highlight: false },
  { label: "Дашборды / BS-Evolve", highlight: false }
];

const cards = [
  {
    title: "Источники данных",
    items: ["Сайт", "Яндекс.Метрика", "Telegram-боты", "Будущие API"]
  },
  {
    title: "Что передаём в CRM",
    items: ["Контакт", "Источник", "Интерес", "Результат диагностики", "Статус воронки"]
  },
  {
    title: "Что получает руководитель",
    items: ["Отчёты", "AI-сигналы", "Статусы лидов", "Дашборды"]
  }
];

export default function LandingIntegrations() {
  return (
    <section className="landing-integrations" id="landing-integrations">
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
            <div className={`landing-flow__node ${item.highlight ? "landing-flow__node--highlight" : ""}`}>
              <span>{item.label}</span>
            </div>
            {i < flow.length - 1 ? (
              <span className="landing-flow__connector" aria-hidden>
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
            <h3>{c.title}</h3>
            <ul>
              {c.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

const steps = [
  {
    n: 1,
    title: "Запрос",
    text: "Вы рассказываете о задачах и целях вашей компании."
  },
  {
    n: 2,
    title: "Диагностика",
    text: "Проводим анализ команды, ролей и процессов."
  },
  {
    n: 3,
    title: "Профиль команды",
    text: "Формируем профиль, выявляем сильные стороны и зоны роста."
  },
  {
    n: 4,
    title: "Решения и маршрут",
    text: "Предлагаем маршрут развития и конкретные рекомендации."
  },
  {
    n: 5,
    title: "Результат и KPI",
    text: "Отслеживаем результаты и рост KPI в реальном времени."
  }
];

const demos = [
  {
    title: "AI-навигатор",
    text: "Подбор сценариев и маршрутов"
  },
  {
    title: "Нейропродажник",
    text: "Сценарии продаж и возражения"
  },
  {
    title: "Нейроаналитик",
    text: "Аналитика команды и KPI"
  },
  {
    title: "BS-Evolve",
    text: "Управление развитием и задачами"
  },
  {
    title: "Дашборды / CRM",
    text: "Все ключевые метрики на одном экране"
  }
];

export default function LandingHowItWorks({ onRouteSelect }) {
  return (
    <section className="landing-process" id="landing-process">
      <div className="landing-process__grid">
        <div className="landing-process__col">
          <p className="landing-section-label">КАК ЭТО РАБОТАЕТ</p>
          <ol className="landing-timeline">
            {steps.map((step, idx) => (
              <motion.li
                key={step.n}
                className="landing-timeline__step"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="landing-timeline__track">
                  <span className="landing-timeline__num">{step.n}</span>
                  {idx < steps.length - 1 ? <span className="landing-timeline__arrow" aria-hidden /> : null}
                </div>
                <div className="landing-timeline__body">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="landing-process__col" id="landing-demo">
          <p className="landing-section-label">ПОСМОТРИТЕ ПЛАТФОРМУ В ДЕЙСТВИИ</p>
          <div className="landing-demo-grid">
            {demos.map((d, i) => (
              <motion.article
                key={d.title}
                className="landing-demo-card"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -2 }}
              >
                <button
                  type="button"
                  className="landing-demo-card__play"
                  aria-label={`Демо: ${d.title}`}
                  onClick={() => onRouteSelect("agents")}
                >
                  <span className="landing-icon landing-icon--play-solid" aria-hidden />
                </button>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </motion.article>
            ))}
          </div>
          <button type="button" className="landing-link-btn" onClick={() => onRouteSelect("agents")}>
            Посмотреть все демо
            <span aria-hidden> →</span>
          </button>
        </div>
      </div>
    </section>
  );
}

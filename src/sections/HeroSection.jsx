import AiNavigator from "../components/AiNavigator";
import InteractiveProcessFlow from "../components/InteractiveProcessFlow";

const platformFeatures = [
  {
    title: "Диагностика сильных сторон",
    description: "Определяем психотип, поведенческие паттерны и вектор развития."
  },
  {
    title: "Роли и компетенции",
    description: "Помогаем сопоставить человека, роль и задачи."
  },
  {
    title: "Персональные треки развития",
    description: "Формируем обучение под человека, роль и KPI."
  },
  {
    title: "Нейро-сотрудники",
    description: "Автоматизируем повторяемые процессы: продажи, аналитику, HR и встречи."
  },
  {
    title: "Управленческие решения",
    description: "Помогаем руководителю принимать решения на основе данных."
  }
];

const routeCards = [
  {
    id: "b2c",
    title: "Для человека",
    description: "Пройти диагностику, понять психотип и получить персональный трек развития."
  },
  {
    id: "b2b",
    title: "Для бизнеса",
    description: "Разобрать команду, роли, KPI и внедрить нейро-сотрудников."
  },
  {
    id: "b2g",
    title: "Для государства и организаций",
    description: "Запускать профориентационные, образовательные и региональные программы."
  }
];

export default function HeroSection({ onRouteSelect }) {
  const scrollToRoutes = () => {
    const target = document.getElementById("hero-routes");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-section__left">
        <span className="hero-section__kicker">Сильные стороны</span>
        <h1>Сильные стороны</h1>
        <p className="hero-section__subtitle">Платформа управления человеческим потенциалом</p>
        <p className="hero-section__lead">
          Увеличиваем KPI за счёт точной работы с людьми, персональных треков развития и
          внедрения нейро-сотрудников.
        </p>
        <div className="hero-cta-row">
          <button type="button" onClick={scrollToRoutes}>
            Выбрать свой маршрут
          </button>
          <button type="button" onClick={() => onRouteSelect("b2c")}>
            Пройти диагностику
          </button>
          <button type="button" onClick={() => onRouteSelect("b2b")}>
            Запросить консультацию
          </button>
        </div>
        <article className="hero-info-card">
          <h3>Что такое «Сильные стороны»</h3>
          <p>
            «Сильные стороны» — это IT-платформа нового поколения, которая помогает людям,
            компаниям и организациям понимать сильные стороны человека, подбирать роли, строить
            развитие и связывать обучение с результатом.
          </p>
        </article>
        <article className="hero-platform-card">
          <h3>Что делает платформа</h3>
          <div className="hero-feature-grid">
            {platformFeatures.map((feature) => (
              <article key={feature.title} className="hero-feature-item">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </article>
        <article className="hero-flow-card">
          <h3>Как работает платформа</h3>
          <InteractiveProcessFlow />
        </article>
        <article className="hero-audience-card" id="hero-routes">
          <h3>Кому подходит</h3>
          <div className="hero-route-grid">
            {routeCards.map((card) => (
              <button
                key={card.id}
                type="button"
                className="hero-route-card"
                onClick={() => onRouteSelect(card.id)}
              >
                <strong>{card.title}</strong>
                <span>{card.description}</span>
              </button>
            ))}
          </div>
        </article>
      </div>
      <AiNavigator
        onRouteSelect={onRouteSelect}
        speech="Здравствуйте. Я помогу выбрать маршрут на платформе «Сильные стороны». Если вы хотите понять себя — начните с диагностики. Если управляете командой — перейдите в бизнес-контур. Если представляете образовательную или государственную программу — откройте организационный маршрут."
      />
    </section>
  );
}

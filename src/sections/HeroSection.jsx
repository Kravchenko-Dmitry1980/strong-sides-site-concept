import AiNavigator from "../components/AiNavigator";
import RouteSelector from "../components/RouteSelector";

const flow = [
  "Диагностика",
  "Цифровой профиль",
  "Рекомендации",
  "Трек развития",
  "Нейро-сотрудники",
  "Аналитика результата"
];

export default function HeroSection({ onRouteSelect }) {
  return (
    <section className="hero-section">
      <div className="hero-section__left">
        <span className="hero-section__kicker">AKMEHR</span>
        <h1>Платформа управления человеческим потенциалом</h1>
        <p>
          AKMEHR помогает людям, компаниям и организациям понимать сильные стороны
          человека, подбирать роли, строить треки развития и связывать обучение с KPI.
        </p>
        <article className="hero-info-card">
          <h3>Что такое AKMEHR</h3>
          <p>
            Целевая архитектура платформы объединяет диагностику, акмеологический подход,
            MBTI и AI-модули для управляемого роста результативности.
          </p>
        </article>
        <article className="hero-flow-card">
          <h3>Как работает платформа</h3>
          <div className="hero-flow-row">
            {flow.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
        <article className="hero-audience-card">
          <h3>Кому подходит</h3>
          <ul>
            <li>Человеку — пройти диагностику, понять психотип и получить трек развития.</li>
            <li>Бизнесу — разобрать команду, роли, KPI и внедрить нейро-сотрудников.</li>
            <li>
              Государству и организациям — запускать профориентационные, образовательные и
              региональные программы.
            </li>
          </ul>
        </article>
        <RouteSelector onSelect={onRouteSelect} compact />
      </div>
      <AiNavigator
        onRouteSelect={onRouteSelect}
        speech="Здравствуйте. Я помогу выбрать маршрут. Если вы хотите понять себя — начните с диагностики. Если управляете командой — перейдите в бизнес-контур. Если вы представляете образовательную или государственную программу — откройте организационный маршрут."
      />
    </section>
  );
}

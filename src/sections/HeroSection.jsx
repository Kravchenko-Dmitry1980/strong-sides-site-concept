import AiNavigator from "../components/AiNavigator";
import RouteSelector from "../components/RouteSelector";

export default function HeroSection({ onRouteSelect }) {
  return (
    <section className="hero-section">
      <div className="hero-section__left">
        <span className="hero-section__kicker">AKMEHR</span>
        <h1>Платформа управления человеческим потенциалом</h1>
        <p>
          Увеличиваем KPI за счёт точной работы с людьми, персональных треков развития
          и внедрения нейро-сотрудников.
        </p>
        <RouteSelector onSelect={onRouteSelect} compact />
      </div>
      <AiNavigator onRouteSelect={onRouteSelect} />
    </section>
  );
}

import RouteSelector from "./RouteSelector";

export default function AiNavigator({ onRouteSelect }) {
  return (
    <div className="ai-navigator">
      <div className="ai-navigator__avatar-wrap">
        <div className="ai-navigator__avatar-core">
          <span>AI</span>
        </div>
      </div>
      <div className="ai-navigator__speech">
        <p>
          Здравствуйте. Я помогу выбрать ваш маршрут в AKMEHR. Вы хотите пройти
          диагностику для себя, внедрить систему в компанию или рассмотреть решение
          для образовательной/государственной программы?
        </p>
      </div>
      <RouteSelector onSelect={onRouteSelect} />
    </div>
  );
}

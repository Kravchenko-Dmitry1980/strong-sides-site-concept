import AiCore3D from "./AiCore3D";
import RouteSelector from "./RouteSelector";

export default function AiNavigator({ onRouteSelect, speech }) {
  return (
    <div className="ai-navigator">
      <div className="ai-navigator__avatar-wrap">
        <span className="ai-navigator__ring ai-navigator__ring--outer" />
        <span className="ai-navigator__ring ai-navigator__ring--inner" />
        <AiCore3D />
      </div>
      <div className="ai-navigator__status">
        <span>AI-Навигатор</span>
        <span>Готов к маршрутизации</span>
      </div>
      <div className="ai-navigator__speech">
        <p>{speech}</p>
      </div>
      <RouteSelector onSelect={onRouteSelect} />
    </div>
  );
}

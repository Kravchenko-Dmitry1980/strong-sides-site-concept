import AiAvatarStage from "./AiAvatarStage";
import RouteSelector from "./RouteSelector";

export default function AiNavigator({ onRouteSelect, speech }) {
  return (
    <div className="ai-navigator">
      <AiAvatarStage />
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

import RouteSelector from "./RouteSelector";

export default function AiNavigator({ onRouteSelect, speech }) {
  return (
    <div className="ai-navigator">
      <div className="ai-navigator__avatar-wrap">
        <div className="ai-navigator__avatar-core">
          <span>AI</span>
        </div>
      </div>
      <div className="ai-navigator__speech">
        <p>{speech}</p>
      </div>
      <RouteSelector onSelect={onRouteSelect} />
    </div>
  );
}

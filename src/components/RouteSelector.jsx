const routeButtons = [
  { id: "b2c", label: "Я человек" },
  { id: "b2b", label: "Я представляю бизнес" },
  { id: "b2g", label: "Я представляю организацию / государственный сектор" }
];

export default function RouteSelector({ onSelect, compact = false }) {
  return (
    <div className={`route-selector ${compact ? "is-compact" : ""}`}>
      {routeButtons.map((route) => (
        <button key={route.id} type="button" onClick={() => onSelect(route.id)}>
          {route.label}
        </button>
      ))}
    </div>
  );
}

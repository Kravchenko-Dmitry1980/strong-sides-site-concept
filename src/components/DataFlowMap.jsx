import { useMemo, useState } from "react";

const nodes = [
  {
    id: "site",
    label: "Сайт «Сильные стороны»",
    x: 60,
    y: 120,
    data: "Цель, поведение, источник трафика."
  },
  { id: "nav", label: "AI-навигатор", x: 220, y: 60, data: "Выбор ветки B2C/B2B/B2G и intent." },
  { id: "analyst", label: "Нейроаналитик", x: 380, y: 120, data: "Психотип, сигналы интереса, точки потерь." },
  { id: "sales", label: "Нейропродажник", x: 540, y: 60, data: "Квалификация, ответы, возражения, статус." },
  { id: "crm", label: "amoCRM", x: 700, y: 120, data: "Контакт, ветка, интерес, статус заявки." },
  { id: "bse", label: "BS-Evolve", x: 540, y: 200, data: "Результаты тестов, трек, прогресс." },
  { id: "dash", label: "Дашборды и отчёты", x: 700, y: 200, data: "Сквозная аналитика и рекомендации." }
];

const links = [
  ["site", "nav"],
  ["nav", "analyst"],
  ["analyst", "sales"],
  ["sales", "crm"],
  ["analyst", "bse"],
  ["crm", "dash"],
  ["bse", "dash"]
];

export default function DataFlowMap() {
  const [activeId, setActiveId] = useState("nav");
  const activeNode = nodes.find((node) => node.id === activeId) ?? nodes[1];

  const nodeMap = useMemo(() => {
    const map = new Map();
    nodes.forEach((node) => map.set(node.id, node));
    return map;
  }, []);

  return (
    <section className="data-flow-map">
      <svg viewBox="0 0 780 260" role="img" aria-label="Карта потока данных платформы">
        <defs>
          <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3f6fb2" />
            <stop offset="100%" stopColor="#75d4ff" />
          </linearGradient>
        </defs>
        {links.map(([fromId, toId]) => {
          const from = nodeMap.get(fromId);
          const to = nodeMap.get(toId);
          return (
            <g key={`${fromId}-${toId}`}>
              <line
                x1={from.x + 48}
                y1={from.y + 18}
                x2={to.x}
                y2={to.y + 18}
                className="data-flow-map__line"
              />
              <circle className="data-flow-map__pulse" r="3">
                <animateMotion dur="3.2s" repeatCount="indefinite" rotate="auto">
                  <mpath href={`#path-${fromId}-${toId}`} />
                </animateMotion>
              </circle>
              <path
                id={`path-${fromId}-${toId}`}
                d={`M ${from.x + 48} ${from.y + 18} L ${to.x} ${to.y + 18}`}
                fill="none"
                stroke="transparent"
              />
            </g>
          );
        })}
        {nodes.map((node) => (
          <g
            key={node.id}
            className={`data-flow-map__node ${activeId === node.id ? "is-active" : ""}`}
            onMouseEnter={() => setActiveId(node.id)}
            onClick={() => setActiveId(node.id)}
          >
            <rect x={node.x} y={node.y} width="150" height="36" rx="10" />
            <text x={node.x + 10} y={node.y + 23}>
              {node.label}
            </text>
          </g>
        ))}
      </svg>
      <article className="data-flow-map__hint">
        <h4>{activeNode.label}</h4>
        <p>{activeNode.data}</p>
      </article>
    </section>
  );
}

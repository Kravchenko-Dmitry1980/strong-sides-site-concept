import { useMemo, useState } from "react";

const nodes = [
  {
    id: "site",
    label: "Сайт «Сильные стороны»",
    input: "Пользователь, цель визита, источник",
    role: "Входная точка и маршрутизация",
    output: "Маршрут B2C/B2B/B2G",
    x: 50,
    y: 140
  },
  {
    id: "navigator",
    label: "AI-навигатор",
    input: "Цель и первичные ответы",
    role: "Выбор маршрута и шага",
    output: "Контекст пользователя",
    x: 210,
    y: 70
  },
  {
    id: "analyst",
    label: "Нейроаналитик",
    input: "Поведение, страницы, интерес",
    role: "Intent + психотип + сигналы",
    output: "Оффер и данные в контур",
    x: 370,
    y: 140
  },
  {
    id: "sales",
    label: "Нейропродажник",
    input: "Цель, психотип, база знаний",
    role: "Диалог и квалификация",
    output: "Заявка и следующий шаг",
    x: 530,
    y: 70
  },
  {
    id: "crm",
    label: "amoCRM",
    input: "Контакт, источник, интерес",
    role: "Сделка и статус воронки",
    output: "Статус лида и задачи",
    x: 690,
    y: 140
  },
  {
    id: "bse",
    label: "BS-Evolve",
    input: "Психотип, диагностика, трек",
    role: "Развитие и тесты",
    output: "Прогресс и рекомендации",
    x: 530,
    y: 220
  },
  {
    id: "dash",
    label: "Дашборды",
    input: "Сайт, CRM, тесты, AI-модули",
    role: "Аналитика и отчеты",
    output: "KPI-сигналы и решения",
    x: 690,
    y: 220
  }
];

const links = [
  ["site", "navigator"],
  ["navigator", "analyst"],
  ["analyst", "sales"],
  ["sales", "crm"],
  ["crm", "bse"],
  ["bse", "dash"]
];

export default function SafeDataFlowMap() {
  const [activeId, setActiveId] = useState("navigator");
  const active = nodes.find((node) => node.id === activeId) ?? nodes[1];
  const nodeMap = useMemo(() => new Map(nodes.map((node) => [node.id, node])), []);

  return (
    <section className="safe-flow-map">
      <svg viewBox="0 0 860 300" role="img" aria-label="Стабильная карта потока данных">
        {links.map(([fromId, toId]) => {
          const from = nodeMap.get(fromId);
          const to = nodeMap.get(toId);
          return (
            <g key={`${fromId}-${toId}`}>
              <line x1={from.x + 130} y1={from.y + 18} x2={to.x} y2={to.y + 18} className="safe-flow-map__line" />
              <path
                id={`safe-flow-${fromId}-${toId}`}
                d={`M ${from.x + 130} ${from.y + 18} L ${to.x} ${to.y + 18}`}
                fill="none"
                stroke="transparent"
              />
              <circle className="safe-flow-map__pulse" r="2.8">
                <animateMotion dur="3.6s" repeatCount="indefinite">
                  <mpath href={`#safe-flow-${fromId}-${toId}`} />
                </animateMotion>
              </circle>
            </g>
          );
        })}
        {nodes.map((node) => (
          <g
            key={node.id}
            className={`safe-flow-map__node ${activeId === node.id ? "is-active" : ""}`}
            onMouseEnter={() => setActiveId(node.id)}
            onClick={() => setActiveId(node.id)}
          >
            <rect x={node.x} y={node.y} width="130" height="36" rx="10" />
            <text x={node.x + 10} y={node.y + 23}>
              {node.label}
            </text>
          </g>
        ))}
      </svg>
      <article className="safe-flow-map__tooltip">
        <h4>{active.label}</h4>
        <p>
          <span>Вход:</span> {active.input}
        </p>
        <p>
          <span>Функция:</span> {active.role}
        </p>
        <p>
          <span>Выход:</span> {active.output}
        </p>
      </article>
      <p className="safe-flow-map__legend">
        Данные не подключены к реальным API. Это концептуальная схема будущей архитектуры.
      </p>
    </section>
  );
}

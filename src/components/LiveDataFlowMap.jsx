import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const flowNodes = [
  {
    id: "site",
    title: "Сайт «Сильные стороны»",
    input: "Пользователь, цель визита, источник трафика",
    role: "Входная точка и маршрутизация",
    output: "Выбранный маршрут B2C/B2B/B2G",
    x: 80,
    y: 150
  },
  {
    id: "navigator",
    title: "AI-навигатор",
    input: "Выбранная цель, первичные ответы пользователя",
    role: "Помогает выбрать маршрут и следующий шаг",
    output: "Сценарий взаимодействия и контекст пользователя",
    x: 260,
    y: 70
  },
  {
    id: "analyst",
    title: "Нейроаналитик",
    input: "Поведение на сайте, клики, страницы, интересы",
    role: "Определяет намерение, вовлеченность и психотип",
    output: "Сигналы интереса, оффер, данные для CRM",
    x: 440,
    y: 150
  },
  {
    id: "sales",
    title: "Нейропродажник",
    input: "Цель, психотип, база знаний, история действий",
    role: "Ведет диалог, квалифицирует и доводит до заявки",
    output: "Заявка, контакт, статус, следующий шаг",
    x: 620,
    y: 70
  },
  {
    id: "crm",
    title: "amoCRM",
    input: "Заявка, контакт, источник, интерес, комментарий AI",
    role: "Ведение сделки и статуса воронки",
    output: "Задача менеджеру, статус лида, история коммуникации",
    x: 800,
    y: 150
  },
  {
    id: "bse",
    title: "BS-Evolve",
    input: "Пользователь, психотип, диагностика, выбранный трек",
    role: "Тесты, развитие, персональные треки",
    output: "Прогресс, рекомендации, результаты развития",
    x: 620,
    y: 230
  },
  {
    id: "dashboards",
    title: "Дашборды и отчеты",
    input: "Данные сайта, CRM, тестов и AI-модулей",
    role: "Аналитика, отчетность, управленческие решения",
    output: "Отчеты, KPI-сигналы, рекомендации",
    x: 800,
    y: 230
  }
];

const flowLinks = [
  ["site", "navigator"],
  ["navigator", "analyst"],
  ["analyst", "sales"],
  ["sales", "crm"],
  ["crm", "bse"],
  ["bse", "dashboards"]
];

export default function LiveDataFlowMap() {
  const [activeId, setActiveId] = useState("navigator");
  const [hoveredId, setHoveredId] = useState(null);

  const nodesMap = useMemo(() => new Map(flowNodes.map((node) => [node.id, node])), []);
  const activeNode = nodesMap.get(hoveredId || activeId);

  const isLinkActive = (fromId, toId) => fromId === activeNode.id || toId === activeNode.id;

  return (
    <section className="live-flow-map premium-card">
      <div className="live-flow-map__canvas">
        <svg viewBox="0 0 980 310" aria-label="Живая карта потока данных">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4f7fbf" />
              <stop offset="100%" stopColor="#7ad9ff" />
            </linearGradient>
          </defs>
          {flowLinks.map(([fromId, toId]) => {
            const from = nodesMap.get(fromId);
            const to = nodesMap.get(toId);
            return (
              <g key={`${fromId}-${toId}`}>
                <line
                  className={`flow-line ${isLinkActive(fromId, toId) ? "flow-line--active" : ""}`}
                  x1={from.x + 72}
                  y1={from.y + 20}
                  x2={to.x}
                  y2={to.y + 20}
                />
                <path
                  id={`flow-path-${fromId}-${toId}`}
                  d={`M ${from.x + 72} ${from.y + 20} L ${to.x} ${to.y + 20}`}
                  fill="none"
                  stroke="transparent"
                />
                <circle className="flow-pulse" r="3">
                  <animateMotion dur="2.8s" repeatCount="indefinite">
                    <mpath href={`#flow-path-${fromId}-${toId}`} />
                  </animateMotion>
                </circle>
              </g>
            );
          })}
          {flowNodes.map((node) => (
            <g
              key={node.id}
              className={`flow-node ${activeNode.id === node.id ? "flow-node--active" : ""}`}
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setActiveId(node.id)}
            >
              <rect x={node.x} y={node.y} width="172" height="40" rx="12" />
              <text x={node.x + 12} y={node.y + 25}>
                {node.title}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <div className="live-flow-map__mobile-list">
        {flowNodes.map((node) => (
          <button
            key={node.id}
            type="button"
            className={`flow-node flow-node--mobile ${activeNode.id === node.id ? "flow-node--active" : ""}`}
            onClick={() => setActiveId(node.id)}
          >
            {node.title}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.article
          key={activeNode.id}
          className="flow-tooltip depth-card"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          <h4>{activeNode.title}</h4>
          <p>
            <span>Входные данные:</span> {activeNode.input}
          </p>
          <p>
            <span>Функция:</span> {activeNode.role}
          </p>
          <p>
            <span>Выходные данные:</span> {activeNode.output}
          </p>
        </motion.article>
      </AnimatePresence>
      <p className="live-flow-map__legend">
        Данные не подключены к реальным API. Это концептуальная схема будущей архитектуры.
      </p>
    </section>
  );
}

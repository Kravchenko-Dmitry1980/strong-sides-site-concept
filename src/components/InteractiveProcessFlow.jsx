import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STEPS = [
  {
    id: "diagnostics",
    title: "Диагностика",
    short: "Определяем сильные стороны, психотип и поведенческие паттерны.",
    input: "ответы пользователя / тестирование.",
    output: "первичный диагностический профиль."
  },
  {
    id: "profile",
    title: "Цифровой профиль",
    short: "Собираем структурированные данные о человеке.",
    input: "результаты диагностики.",
    output: "цифровой профиль личности и компетенций."
  },
  {
    id: "role",
    title: "Роль",
    short: "Сопоставляем человека, его предрасположенности и задачи.",
    input: "цифровой профиль.",
    output: "рекомендации по роли, функциям и зоне ответственности."
  },
  {
    id: "track",
    title: "Трек развития",
    short: "Формируем персональный путь роста.",
    input: "роль и профиль.",
    output: "программа развития, обучение, рекомендации."
  },
  {
    id: "kpi",
    title: "KPI",
    short: "Связываем развитие с измеримым результатом.",
    input: "трек развития и рабочие задачи.",
    output: "показатели эффективности и динамика роста."
  },
  {
    id: "decision",
    title: "Решение",
    short: "Даем рекомендации руководителю или пользователю.",
    input: "KPI, профиль, динамика.",
    output: "управленческие решения, дальнейшие шаги, рекомендации."
  }
];

const CARD_POINTS = [
  { x: 86, y: 84 },
  { x: 282, y: 84 },
  { x: 478, y: 84 },
  { x: 674, y: 84 },
  { x: 870, y: 84 },
  { x: 1066, y: 98 }
];

export default function InteractiveProcessFlow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const rootRef = useRef(null);
  const isInView = useInView(rootRef, { once: true, margin: "-20% 0px -20% 0px" });

  useEffect(() => {
    if (!isInView || isPaused) {
      return undefined;
    }

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STEPS.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [isInView, isPaused]);

  const displayedIndex = hoveredIndex ?? activeIndex;
  const activeStep = STEPS[displayedIndex];

  const links = useMemo(() => {
    return CARD_POINTS.slice(0, -1).map((point, index) => {
      const next = CARD_POINTS[index + 1];
      const midX = (point.x + next.x) / 2;
      return {
        id: `${index}-${index + 1}`,
        d: `M ${point.x} ${point.y} C ${midX} ${point.y}, ${midX} ${next.y}, ${next.x} ${next.y}`
      };
    });
  }, []);

  return (
    <div
      ref={rootRef}
      className="interactive-flow"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setHoveredIndex(null);
      }}
    >
      <div className="interactive-flow__viewport">
        <div className="interactive-flow__stage">
          <svg viewBox="0 0 1152 184" className="interactive-flow__svg" aria-hidden="true">
            <defs>
              <linearGradient id="flow-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4477d1" />
                <stop offset="55%" stopColor="#67bfff" />
                <stop offset="100%" stopColor="#61e8ed" />
              </linearGradient>
              <filter id="flow-line-glow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="3.5" result="blurred" />
                <feMerge>
                  <feMergeNode in="blurred" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {links.map((link, index) => {
              const isLinkedActive = index === displayedIndex || index === displayedIndex - 1;
              return (
                <g key={link.id}>
                  <motion.path
                    d={link.d}
                    className="interactive-flow__path interactive-flow__path--base"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + index * 0.12, ease: "easeOut" }}
                  />
                  <motion.path
                    d={link.d}
                    className={`interactive-flow__path interactive-flow__path--active ${isLinkedActive ? "is-on" : ""}`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                      isInView
                        ? { pathLength: 1, opacity: isLinkedActive ? 1 : 0.45 }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.75, delay: 0.28 + index * 0.14, ease: "easeOut" }}
                  />
                  {isLinkedActive ? (
                    <motion.circle
                      r="5"
                      className="interactive-flow__pulse"
                      filter="url(#flow-line-glow)"
                      initial={{ opacity: 0, offsetDistance: "0%" }}
                      animate={{ opacity: [0, 1, 1, 0], offsetDistance: ["0%", "100%"] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                      style={{ offsetPath: `path('${link.d}')`, offsetRotate: "0deg" }}
                    />
                  ) : null}
                </g>
              );
            })}
          </svg>

          <div className="interactive-flow__cards">
            {STEPS.map((step, index) => {
              const isActive = displayedIndex === index;
              return (
                <motion.button
                  key={step.id}
                  type="button"
                  className={`interactive-flow__card ${isActive ? "is-active" : ""} ${index === 5 ? "is-tail" : ""}`}
                  initial={{ opacity: 0, y: 16, scale: 0.96 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: 0.12 + index * 0.12 }}
                  whileHover={{ y: -5, scale: 1.015 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onFocus={() => setHoveredIndex(index)}
                  onBlur={() => setHoveredIndex(null)}
                  onClick={() => setActiveIndex(index)}
                >
                  <span>{index + 1}</span>
                  <strong>{step.title}</strong>
                  <p>{step.short}</p>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      <motion.article
        className="interactive-flow__detail"
        key={activeStep.id}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <h4>{activeStep.title}</h4>
        <p>{activeStep.short}</p>
        <p>
          <span>Вход:</span> {activeStep.input}
        </p>
        <p>
          <span>Выход:</span> {activeStep.output}
        </p>
        <p>
          <span>Связь со следующим этапом:</span>{" "}
          {displayedIndex < STEPS.length - 1
            ? `результат шага "${activeStep.title}" становится входом для шага "${STEPS[displayedIndex + 1].title}".`
            : "формирует рекомендации и новый цикл развития с обновленной диагностикой."}
        </p>
      </motion.article>
    </div>
  );
}

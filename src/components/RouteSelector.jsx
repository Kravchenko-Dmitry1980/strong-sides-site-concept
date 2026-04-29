import { motion } from "framer-motion";

const routeButtons = [
  {
    id: "b2c",
    label: "Я человек",
    hint: "Диагностика, психотип, трек развития"
  },
  {
    id: "b2b",
    label: "Я представляю бизнес",
    hint: "Команда, KPI, нейро-сотрудники, CRM"
  },
  {
    id: "b2g",
    label: "Я представляю организацию / государственный сектор",
    hint: "Профориентация, программы, отчетность"
  }
];

export default function RouteSelector({ onSelect, compact = false }) {
  return (
    <div className={`route-selector ${compact ? "is-compact" : ""}`}>
      {routeButtons.map((route) => (
        <motion.button
          key={route.id}
          type="button"
          onClick={() => onSelect(route.id)}
          className="route-card"
          whileHover={{ y: -4, scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <strong>{route.label}</strong>
          <span>{route.hint}</span>
        </motion.button>
      ))}
    </div>
  );
}

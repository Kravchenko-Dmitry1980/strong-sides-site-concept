import { motion } from "framer-motion";

export default function FloatingHumanIllustration({ mode = "person" }) {
  const labelsByMode = {
    person: ["Диагностика", "Профиль", "Трек"],
    team: ["Люди", "Роли", "KPI", "Нейро-сотрудники"],
    org: ["Участники", "Треки", "Отчетность", "Эффект"]
  };

  const labels = labelsByMode[mode] ?? labelsByMode.person;

  return (
    <div className="floating-human premium-card">
      <div className="floating-human__silhouette" />
      <div className="floating-human__orbit" />
      <div className="floating-human__tags">
        {labels.map((item, index) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07, duration: 0.2 }}
            whileHover={{ y: -2 }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

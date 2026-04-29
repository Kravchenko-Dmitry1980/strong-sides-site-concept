import { motion } from "framer-motion";

export default function SectionShell({ eyebrow, title, lead, children }) {
  return (
    <motion.section
      className="section-shell"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <header className="section-shell__header">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
        <p>{lead}</p>
      </header>
      {children}
    </motion.section>
  );
}

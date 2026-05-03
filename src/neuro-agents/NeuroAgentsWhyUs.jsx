import { motion } from "framer-motion";
import { NEURO_WHY_US } from "../data/neuroAgentsConfig";
import { IconLayers, IconPuzzle, IconRocket, IconTarget } from "./NeuroAgentsIcons";

const ICONS = {
  rocket: IconRocket,
  target: IconTarget,
  puzzle: IconPuzzle,
  layers: IconLayers
};

export default function NeuroAgentsWhyUs() {
  return (
    <motion.section
      className="na-section na-why"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="na-section__title">Почему компании заказывают нейроагентов у нас</h2>
      <div className="na-why__grid">
        {NEURO_WHY_US.map((item) => {
          const Ic = ICONS[item.icon] ?? IconRocket;
          return (
            <article key={item.id} className="na-why-card">
              <Ic className="na-why-card__icon" />
              <h3 className="na-why-card__title">{item.title}</h3>
              <p className="na-why-card__body">{item.body}</p>
            </article>
          );
        })}
      </div>
    </motion.section>
  );
}

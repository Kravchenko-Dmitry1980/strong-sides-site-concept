import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TimelineStepIcon } from "./icons";
import { HOMEPAGE_PROCESS_STEPS } from "./homepageProcessConfig";

export default function LandingHowItWorks() {
  const [activeStepId, setActiveStepId] = useState("diagnostics");

  const activeStep = useMemo(
    () => HOMEPAGE_PROCESS_STEPS.find((step) => step.id === activeStepId) ?? HOMEPAGE_PROCESS_STEPS[0],
    [activeStepId]
  );

  return (
    <section className="landing-process" id="landing-process">
      <div className="landing-process__grid">
        <motion.div
          className="landing-process__col"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px", amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="landing-section-label">КАК ЭТО РАБОТАЕТ</p>
          <ol className="landing-timeline">
            {HOMEPAGE_PROCESS_STEPS.map((step, idx) => {
              const isActive = step.id === activeStep.id;

              return (
              <motion.li
                key={step.id}
                className={`landing-timeline__step ${isActive ? "is-active" : ""}`}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.05 }}
              >
                <button
                  type="button"
                  className="landing-timeline__button"
                  onClick={() => setActiveStepId(step.id)}
                  aria-pressed={isActive}
                  aria-label={`Шаг ${step.number}: ${step.title}`}
                >
                  <div className="landing-timeline__rail">
                    <span className="landing-timeline__num">{step.number}</span>
                    {idx < HOMEPAGE_PROCESS_STEPS.length - 1 ? <span className="landing-timeline__arrow" aria-hidden /> : null}
                  </div>
                  <div className="landing-timeline__iconcell">
                    <span className="landing-timeline__icon-ring">
                      <TimelineStepIcon variant={step.icon} />
                    </span>
                  </div>
                  <div className="landing-timeline__body">
                    <h3>{step.title}</h3>
                    <p>{step.shortDescription}</p>
                  </div>
                </button>
              </motion.li>
            );
            })}
          </ol>
        </motion.div>

        <motion.div
          className="landing-process__col"
          id="landing-demo"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px", amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="landing-section-label">ПРОРАБОТКА ШАГА</p>
          <AnimatePresence mode="wait">
            <motion.article
              key={activeStep.id}
              className="landing-process-detail"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <header className="landing-process-detail__header">
                <p className="landing-process-detail__kicker">Шаг {activeStep.number}</p>
                <h3>{activeStep.title}</h3>
                <p>{activeStep.shortDescription}</p>
              </header>

              <div className="landing-process-detail__group">
                <h4>Что происходит</h4>
                <ul className="landing-process-detail__list">
                  {activeStep.whatHappens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="landing-process-detail__group">
                <h4>Инструменты и модули</h4>
                <div className="landing-process-detail__chips">
                  {activeStep.tools.map((tool) => (
                    <span key={tool} className="landing-process-detail__chip">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="landing-process-detail__group">
                <h4>Бизнес-результат</h4>
                <ul className="landing-process-detail__list">
                  {activeStep.businessOutput.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="landing-process-detail__group">
                <h4>Демо / видео действия</h4>
                <div className="landing-process-detail__actions">
                  {activeStep.demoActions.map((action) => (
                    <button key={action} type="button" className="landing-process-detail__action-btn">
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from "react";
import SectionShell from "../components/SectionShell";
import SignalCard from "../components/SignalCard";

const businessTasks = [
  {
    id: "kpi",
    title: "Повысить KPI",
    pain: "План продаж и производственные показатели растут медленно.",
    solution: "AKMEHR связывает психотип, роли и обучение с бизнес-метриками.",
    modules: "Нейроаналитик, треки обучения, карта компетенций, BI-дашборды.",
    result: "Рост KPI и прозрачная связь людей с результатом.",
    cta: "Запросить аудит команды"
  },
  {
    id: "roles",
    title: "Разобрать команду и роли",
    pain: "Роли пересекаются, сотрудники перегружены, эффективность падает.",
    solution: "Распаковка предприятия и карта ролей по компетенциям.",
    modules: "Диагностика сотрудников, карта ролей, матрица компетенций.",
    result: "Понятная структура команды и зоны ответственности.",
    cta: "Запросить аудит команды"
  },
  {
    id: "sales",
    title: "Автоматизировать продажи",
    pain: "Лиды теряются, квалификация нестабильная, высокая нагрузка на менеджеров.",
    solution: "Нейропродажник ведет диалог, квалифицирует и доводит до заявки.",
    modules: "Нейропродажник, база знаний (RAG), amoCRM.",
    result: "Стабильная конверсия и ускорение первичной обработки лидов.",
    cta: "Посмотреть демо нейропродажника"
  },
  {
    id: "agents",
    title: "Внедрить нейро-сотрудников",
    pain: "Рутинные процессы перегружают ключевых сотрудников.",
    solution: "Подключение нейроаналитика, нейросекретаря, нейро-HR и нейропродажника.",
    modules: "Нейроаналитик, нейросекретарь, нейро-HR, нейропродажник.",
    result: "Сокращение ручных операций и масштабируемые процессы.",
    cta: "Посмотреть демо нейроаналитика"
  },
  {
    id: "analytics",
    title: "Построить аналитику",
    pain: "Нет единой картины по воронке, команде и источникам трафика.",
    solution: "Сквозная аналитика с online/offline контуром нейроаналитика.",
    modules: "Нейроаналитик, дашборды, Telegram-отчеты.",
    result: "Прозрачные решения на основе фактов, а не интуиции.",
    cta: "Посмотреть демо нейроаналитика"
  },
  {
    id: "crm",
    title: "Подключить amoCRM",
    pain: "Лиды и активность клиента не связаны с контекстом диагностики.",
    solution: "Передача ветки, цели, психотипа и статуса воронки в CRM.",
    modules: "amoCRM, сайт AKMEHR, нейропродажник, аналитика.",
    result: "Единый профиль клиента и управляемая воронка.",
    cta: "Запросить аудит команды"
  }
];

export default function B2BSection() {
  const [activeId, setActiveId] = useState(businessTasks[0].id);
  const active = businessTasks.find((task) => task.id === activeId) ?? businessTasks[0];

  return (
    <SectionShell
      eyebrow="Ветка B2B"
      title="Для бизнеса"
      lead="Для руководителей, HR, отделов продаж и обучения: диагностика, KPI и внедрение нейро-сотрудников."
    >
      <div className="split-layout">
        <div className="selector-list">
          {businessTasks.map((task) => (
            <button
              key={task.id}
              type="button"
              className={task.id === active.id ? "is-active" : ""}
              onClick={() => setActiveId(task.id)}
            >
              {task.title}
            </button>
          ))}
        </div>
        <article className="detail-panel">
          <h3>{active.title}</h3>
          <p>
            <span>Боль бизнеса:</span> {active.pain}
          </p>
          <p>
            <span>Решение AKMEHR:</span> {active.solution}
          </p>
          <p>
            <span>Модули:</span> {active.modules}
          </p>
          <p>
            <span>Результат:</span> {active.result}
          </p>
          <div className="cta-row">
            <button type="button">{active.cta}</button>
            <button type="button">Посмотреть демо нейропродажника</button>
            <button type="button">Посмотреть демо нейроаналитика</button>
          </div>
        </article>
      </div>
      <div className="cards-grid">
        <SignalCard
          title="Орг-развитие"
          points={["Распаковка предприятия", "Диагностика сотрудников", "Карта ролей", "Треки обучения"]}
        />
        <SignalCard
          title="AI-модули"
          points={[
            "Нейроаналитик",
            "Нейропродажник",
            "Нейросекретарь",
            "Нейро-HR"
          ]}
        />
        <SignalCard
          title="Контур данных"
          points={["KPI-аналитика", "Интеграция с amoCRM", "Демо-модули", "Сквозная отчетность"]}
        />
      </div>
    </SectionShell>
  );
}

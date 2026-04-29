import { useState } from "react";
import BeforeAfterPanel from "../components/BeforeAfterPanel";
import BusinessDashboardMockup from "../components/BusinessDashboardMockup";
import FloatingHumanIllustration from "../components/FloatingHumanIllustration";
import ProductOfferCard from "../components/ProductOfferCard";
import SectionShell from "../components/SectionShell";
import SignalCard from "../components/SignalCard";
import FlowMap from "../components/FlowMap";

const offers = [
  {
    id: "audit",
    title: "Аудит команды и ролей",
    description:
      "Диагностика сотрудников, карта ролей, зоны риска и рекомендации руководителю.",
    cta: "Запросить аудит команды"
  },
  {
    id: "unpack",
    title: "Распаковка предприятия",
    description: "Анализ структуры, процессов, ролей, KPI и точек автоматизации.",
    cta: "Заказать распаковку предприятия"
  },
  {
    id: "tracks",
    title: "Треки обучения под KPI",
    description:
      "Персональные и командные программы развития, связанные с бизнес-метриками.",
    cta: "Собрать трек развития"
  },
  {
    id: "sales",
    title: "Нейропродажник",
    description:
      "AI-система диалога с клиентами, квалификации, персонализации и доведения до заявки.",
    cta: "Посмотреть демо нейропродажника"
  },
  {
    id: "analyst",
    title: "Нейроаналитик",
    description:
      "Анализ поведения, лидов, каналов, KPI и управленческих сигналов для руководителя.",
    cta: "Посмотреть демо нейроаналитика"
  },
  {
    id: "secretary",
    title: "Нейросекретарь",
    description: "Превращает встречи в протоколы, задачи и контроль исполнения.",
    cta: "Посмотреть демо нейросекретаря"
  }
];

export default function B2BSection() {
  const [activeId, setActiveId] = useState(offers[0].id);
  const active = offers.find((task) => task.id === activeId) ?? offers[0];

  return (
    <SectionShell
      eyebrow="Ветка B2B"
      title="Для бизнеса"
      lead="Коммерческий контур платформы «Сильные стороны»: диагностика команды, обучение под KPI и внедрение нейро-сотрудников."
    >
      <div className="offers-grid">
        {offers.map((offer) => (
          <ProductOfferCard
            key={offer.id}
            title={offer.title}
            description={offer.description}
            cta={offer.cta}
          />
        ))}
      </div>
      <div className="split-layout">
        <div className="selector-list">
          <h4>Выберите приоритет бизнеса</h4>
          {offers.map((task) => (
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
            <span>Что можно заказать:</span> {active.description}
          </p>
          <p>
            <span>Контур решения:</span> диагностика → роли → AI-модули → KPI → CRM
          </p>
          <p>
            <span>Результат для руководителя:</span> управляемая команда и прозрачная воронка.
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
      <BeforeAfterPanel
        beforeItems={[
          "Роли распределены интуитивно",
          "Обучение не связано с результатом",
          "Лиды теряются",
          "Аналитика собирается вручную"
        ]}
        afterItems={[
          "Карта команды и ролей",
          "Обучение связано с KPI",
          "Нейро-сотрудники закрывают повторяемые процессы",
          "Заявки и статусы передаются в amoCRM",
          "Руководитель получает AI-рекомендации"
        ]}
      />
      <div className="kpi-mock-grid">
        <article>
          <span>Конверсия первичного контакта</span>
          <strong>+22%</strong>
        </article>
        <article>
          <span>Скорость квалификации лидов</span>
          <strong>1.8x</strong>
        </article>
        <article>
          <span>Управленческая прозрачность</span>
          <strong>94%</strong>
        </article>
      </div>
      <FloatingHumanIllustration mode="team" />
      <BusinessDashboardMockup />
      <article className="business-flow-block">
        <h3>Бизнес-контур платформы</h3>
        <FlowMap
          nodes={[
            "Сайт",
            "Нейроаналитик",
            "Нейропродажник",
            "amoCRM",
            "Дашборды",
            "Управленческие решения"
          ]}
        />
      </article>
    </SectionShell>
  );
}

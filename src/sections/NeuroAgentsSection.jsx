import { useState } from "react";
import AgentShowcase from "../components/AgentShowcase";
import ModuleShowcaseCard from "../components/ModuleShowcaseCard";
import SectionShell from "../components/SectionShell";

const agents = [
  {
    id: "sales",
    title: "Нейропродажник",
    audience: "Бизнес, продажи, сайты, отделы продаж",
    does: "Вести диалог, квалифицировать, персонализировать и доводить до заявки.",
    data: "Поведение, психотип, база знаний, CRM.",
    result: "Больше целевых заявок и меньше потерь на первом контакте.",
    status: "Демо доступно"
  },
  {
    id: "analyst",
    title: "Нейроаналитик",
    audience: "Руководитель, маркетинг, продажи",
    does: "Анализировать поведение, каналы, лиды и KPI.",
    data: "Сайт, Метрика, CRM, заявки, психотипы.",
    result: "Понятные сигналы, где теряются клиенты и что делать.",
    status: "Демо готовится"
  },
  {
    id: "secretary",
    title: "Нейросекретарь",
    audience: "Руководители, команды, проектные группы",
    does: "Превращать встречи в итоги, задачи и контроль исполнения.",
    data: "Аудио, видео, текст, участники, повестка.",
    result: "Протокол, задачи, ответственные, сроки.",
    status: "Есть наработки демо"
  },
  {
    id: "hr",
    title: "Нейро-HR",
    audience: "HR, рекрутинг, обучение",
    does: "Анализ кандидатов, первичный отбор, вопросы, рекомендации.",
    data: "Резюме, вакансия, ответы кандидата, профиль роли.",
    result: "Shortlist и рекомендации по кандидату.",
    status: "Концепт"
  },
  {
    id: "mentor",
    title: "Нейронаставник / трекер развития",
    audience: "B2C, обучение, корпоративное развитие",
    does: "Сопровождать трек развития.",
    data: "Диагностика, задания, прогресс, обратная связь.",
    result: "Персональный рост компетенций.",
    status: "Связан с BS-Evolve"
  }
];

export default function NeuroAgentsSection() {
  const [activeId, setActiveId] = useState(agents[0].id);
  const active = agents.find((agent) => agent.id === activeId) ?? agents[0];

  return (
    <SectionShell
      eyebrow="Продуктовые модули"
      title="Нейро-сотрудники"
      lead="Нейро-сотрудники платформы «Сильные стороны»: витрина AI-модулей для пилота и внедрения."
    >
      <AgentShowcase agents={agents} />
      <div className="module-showcase-grid">
        {agents.map((agent) => (
          <ModuleShowcaseCard
            key={agent.id}
            title={agent.title}
            audience={agent.audience}
            task={agent.does}
            result={agent.result}
            status={agent.status}
            active={agent.id === active.id}
            onClick={() => setActiveId(agent.id)}
          />
        ))}
      </div>
      <article className="agents-highlight">
        <h3>Фокус пилота</h3>
        <p>
          Наиболее зрелые для демонстрации в партнерском контуре: Нейропродажник и
          Нейроаналитик. Они показывают связку данных, диалога и управленческих решений.
        </p>
      </article>
      <div className="split-layout">
        <div className="selector-list">
          <h4>Подробности модуля</h4>
          {agents.map((agent) => (
            <button
              key={agent.id}
              type="button"
              className={agent.id === active.id ? "is-active" : ""}
              onClick={() => setActiveId(agent.id)}
            >
              {agent.title}
            </button>
          ))}
        </div>
        <article className="detail-panel">
          <h3>{active.title}</h3>
          <p>
            <span>Для кого:</span> {active.audience}
          </p>
          <p>
            <span>Какую задачу закрывает:</span> {active.does}
          </p>
          <p>
            <span>Какие данные использует:</span> {active.data}
          </p>
          <p>
            <span>Какой результат даёт:</span> {active.result}
          </p>
          <p>
            <span>Статус демо:</span> {active.status}
          </p>
          <div className="cta-row">
            <button type="button">Посмотреть демо</button>
            <button type="button">Добавить в пилот</button>
            <button type="button">Обсудить внедрение</button>
          </div>
        </article>
      </div>
    </SectionShell>
  );
}

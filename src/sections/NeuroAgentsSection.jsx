import { useState } from "react";
import SectionShell from "../components/SectionShell";

const agents = [
  {
    id: "analyst",
    title: "Нейроаналитик",
    does: "Анализирует поведение пользователя на сайте, определяет психотип и намерение.",
    data: "Поведенческие сигналы, цели пользователя, результаты тестов, источник трафика.",
    embed: "Сайт AKMEHR, CRM, дашборды, Telegram-отчеты.",
    result: "Персональный оффер и передача данных в нейропродажника и CRM.",
    fit: "B2C, B2B, B2G"
  },
  {
    id: "sales",
    title: "Нейропродажник",
    does: "Ведет диалог, квалифицирует запрос, работает с возражениями и доводит до заявки.",
    data: "Контекст пользователя, RAG-база знаний, история диалога, статус воронки.",
    embed: "Сайт AKMEHR, демо-модули, amoCRM.",
    result: "Рост конверсии в заявку, запись или консультацию.",
    fit: "B2B, B2C"
  },
  {
    id: "secretary",
    title: "Нейросекретарь",
    does: "Транскрибирует встречи, формирует протоколы и задачи, запускает рассылки.",
    data: "Созвоны, сообщения, задачи, договоренности.",
    embed: "CRM, корпоративные коммуникации, внутренние процессы.",
    result: "Снижение рутины и контроль исполнения решений.",
    fit: "B2B, B2G"
  },
  {
    id: "hr",
    title: "Нейро-HR",
    does: "Анализирует резюме, проводит первичный отбор и помогает в интервью.",
    data: "Резюме, профили вакансий, параметры кандидатов, результаты оценок.",
    embed: "Контур подбора персонала, CRM, HR-системы.",
    result: "Ускорение найма и повышение качества подбора.",
    fit: "B2B, B2G"
  },
  {
    id: "mentor",
    title: "Нейронаставник / трекер развития",
    does: "Ведет персональные треки, формирует задания и обратную связь.",
    data: "Психотип, цели, результаты обучения, динамика компетенций.",
    embed: "BS-Evolve, образовательные треки, личный кабинет.",
    result: "Системное развитие компетенций и устойчивый прогресс.",
    fit: "B2C, B2B, B2G"
  }
];

export default function NeuroAgentsSection() {
  const [activeId, setActiveId] = useState(agents[0].id);
  const active = agents.find((agent) => agent.id === activeId) ?? agents[0];

  return (
    <SectionShell
      eyebrow="Продуктовые модули"
      title="Нейро-сотрудники"
      lead="AI-модули платформы, которые объединяют диагностику, сопровождение, продажи и аналитику."
    >
      <div className="split-layout">
        <div className="selector-list">
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
            <span>Что делает:</span> {active.does}
          </p>
          <p>
            <span>Какие данные использует:</span> {active.data}
          </p>
          <p>
            <span>Куда встраивается:</span> {active.embed}
          </p>
          <p>
            <span>Какой результат даёт:</span> {active.result}
          </p>
          <p>
            <span>Подходит для веток:</span> {active.fit}
          </p>
        </article>
      </div>
    </SectionShell>
  );
}

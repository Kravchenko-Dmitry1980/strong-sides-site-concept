import { useState } from "react";
import FloatingHumanIllustration from "../components/FloatingHumanIllustration";
import SectionShell from "../components/SectionShell";
import SignalCard from "../components/SignalCard";

const directions = [
  {
    id: "profi",
    title: "Профориентация",
    task: "Выстроить массовую профориентацию с персональными рекомендациями.",
    solution: "Диагностика психотипов, компетенций и маршрутов развития.",
    result: "Осознанный выбор траектории и снижение отсева.",
    data: "Профиль участника, психотип, выбранный трек, динамика прогресса.",
    reports: "Сводка по группам, индивидуальные карты, рекомендации."
  },
  {
    id: "competencies",
    title: "Развитие компетенций",
    task: "Оценить дефициты компетенций в организациях и программах.",
    solution: "Матрица компетенций и адаптивные образовательные треки.",
    result: "Рост ключевых компетенций с измеримым эффектом.",
    data: "Оценка навыков, профиль ролей, результаты обучения.",
    reports: "Отчеты по компетенциям, KPI эффективности."
  },
  {
    id: "region",
    title: "Региональная программа",
    task: "Запустить масштабируемую программу развития человеческого капитала.",
    solution: "Единая платформа диагностики, маршрутизации и мониторинга.",
    result: "Прозрачное управление программой на уровне региона.",
    data: "Динамика групп, охват, конверсия в треки развития.",
    reports: "Региональные дашборды, сравнительная аналитика."
  },
  {
    id: "edu",
    title: "Образовательная платформа",
    task: "Собрать цифровую среду диагностики и сопровождения обучающихся.",
    solution: "Связка тестов, курсов, рекомендаций и AI-сопровождения.",
    result: "Повышение вовлеченности и достижений в образовательном контуре.",
    data: "Активность в обучении, результаты тестов, треки развития.",
    reports: "Отчеты по группам, преподавателям, программам."
  },
  {
    id: "grant",
    title: "Грантовый проект",
    task: "Подготовить обоснованную концепцию под грант и KPI проекта.",
    solution: "Методология платформы «Сильные стороны» + цифровые модули диагностики и отчетности.",
    result: "Проект с внятной метрикой эффекта и дорожной картой внедрения.",
    data: "Показатели участников, результаты этапов, контрольные метрики.",
    reports: "Грантовая отчетность, аналитические срезы."
  },
  {
    id: "state",
    title: "Госзаказ",
    task: "Реализовать госзаказ с юридически и методологически зрелой платформой.",
    solution: "Модульная архитектура, контур данных и стандартизированные процессы.",
    result: "Управляемый проект с регулярной отчетностью и контролем качества.",
    data: "Статусы программ, результаты модулей, источники, KPI.",
    reports: "Регламентные отчеты, дашборды исполнения."
  }
];

export default function B2GSection() {
  const [activeId, setActiveId] = useState(directions[0].id);
  const active = directions.find((item) => item.id === activeId) ?? directions[0];

  return (
    <SectionShell
      eyebrow="Ветка B2G"
      title="Для государства и организаций"
      lead="Профориентация, образовательные и региональные программы с измеримой эффективностью и отчетностью."
    >
      <article className="formats-block">
        <h3>Форматы программ</h3>
        <div className="formats-grid">
          {directions.map((item) => (
            <span key={item.id}>{item.title}</span>
          ))}
        </div>
      </article>
      <FloatingHumanIllustration mode="org" />
      <div className="split-layout">
        <div className="selector-list">
          <h4>Выберите формат программы</h4>
          {directions.map((direction) => (
            <button
              key={direction.id}
              type="button"
              className={direction.id === active.id ? "is-active" : ""}
              onClick={() => setActiveId(direction.id)}
            >
              {direction.title}
            </button>
          ))}
        </div>
        <article className="detail-panel">
          <h3>{active.title}</h3>
          <p>
            <span>Задача:</span> {active.task}
          </p>
          <p>
            <span>Решение:</span> {active.solution}
          </p>
          <p>
            <span>Результат:</span> {active.result}
          </p>
          <p>
            <span>Какие данные собираются:</span> {active.data}
          </p>
          <p>
            <span>Какие отчеты получает организация:</span> {active.reports}
          </p>
          <div className="cta-row">
            <button type="button">Обсудить пилотную программу</button>
            <button type="button">Собрать концепцию под грант</button>
            <button type="button">Сформировать дорожную карту</button>
          </div>
        </article>
      </div>
      <div className="cards-grid">
        <SignalCard
          title="Направления"
          points={["Профориентация", "Образовательные треки", "Развитие компетенций"]}
        />
        <SignalCard
          title="Проектные форматы"
          points={["Региональные программы", "Грантовые проекты", "Госзаказ"]}
        />
        <SignalCard
          title="Что получает организация"
          points={[
            "Цифровую карту участников",
            "Рекомендации по трекам",
            "Аналитику по группам",
            "Отчетность по программе",
            "Показатели эффективности",
            "Методологическую базу"
          ]}
        />
      </div>
    </SectionShell>
  );
}

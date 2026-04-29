import { useState } from "react";
import SectionShell from "../components/SectionShell";
import SignalCard from "../components/SignalCard";

const diagnostics = [
  {
    id: "survey",
    title: "Опросник",
    output: "Быстрый структурный срез по психотипу, мотивации и сильным сторонам.",
    duration: "7-10 минут",
    next: "Получить цифровой профиль и рекомендации."
  },
  {
    id: "dialog",
    title: "Диалог",
    output: "Диалоговый тест для уточнения намерений и поведенческих паттернов.",
    duration: "10-15 минут",
    next: "Перейти к результатам диагностики."
  },
  {
    id: "voice",
    title: "Голос",
    output: "Голосовой сценарий диагностики с адаптивными вопросами и анализом ответов.",
    duration: "8-12 минут",
    next: "Сформировать профиль и получить рекомендации."
  }
];

const afterTest = [
  {
    id: "video",
    title: "Видеоразбор",
    output: "Видео-расшифровка психотипа, сильных сторон, рисков и персональных рекомендаций.",
    duration: "10-15 минут",
    next: "Изучить PDF-описание и выбрать трек развития."
  },
  {
    id: "pdf",
    title: "PDF-описание",
    output: "Структурированный профиль: психотип, сильные стороны, риски, рекомендации.",
    duration: "3-5 минут",
    next: "Перейти к заданиям и треку развития."
  },
  {
    id: "track",
    title: "Трек развития",
    output: "Персональная программа развития компетенций на основе диагностики.",
    duration: "4-8 недель",
    next: "Включить сопровождение и контроль прогресса."
  },
  {
    id: "bse",
    title: "BS-Evolve",
    output: "Переход в контур тестов, заданий, обратной связи и динамики компетенций.",
    duration: "Непрерывный цикл",
    next: "Развивать навыки по персональному маршруту."
  }
];

export default function B2CSection() {
  const [activeDiagnostic, setActiveDiagnostic] = useState(diagnostics[0].id);
  const [activeAfter, setActiveAfter] = useState(afterTest[0].id);
  const activeFormat = diagnostics.find((item) => item.id === activeDiagnostic) ?? diagnostics[0];
  const activeResult = afterTest.find((item) => item.id === activeAfter) ?? afterTest[0];

  return (
    <SectionShell
      eyebrow="Ветка B2C"
      title="Для человека"
      lead="Платформа «Сильные стороны»: диагностика -> результат диагностики -> развитие через BS-Evolve."
    >
      <div className="cards-grid cards-grid--b2c">
        <SignalCard
          title="Уровень 1: Диагностика"
          points={["Опросник", "Диалоговый тест", "Голосовой режим"]}
        />
        <SignalCard
          title="Уровень 2: Результат диагностики"
          points={[
            "Психотип",
            "Видеоразбор",
            "PDF-описание",
            "Сильные стороны, риски, рекомендации"
          ]}
        />
        <SignalCard
          title="Уровень 3: Развитие"
          points={[
            "Персональный трек",
            "BS-Evolve",
            "Задания и обратная связь",
            "Прогресс компетенций"
          ]}
        />
      </div>
      <div className="split-layout">
        <div className="selector-stack">
          <div className="selector-list">
            <h4>Выберите формат диагностики</h4>
            {diagnostics.map((item) => (
              <button
                key={item.id}
                type="button"
                className={item.id === activeFormat.id ? "is-active" : ""}
                onClick={() => setActiveDiagnostic(item.id)}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="selector-list">
            <h4>Что после теста</h4>
            {afterTest.map((item) => (
              <button
                key={item.id}
                type="button"
                className={item.id === activeResult.id ? "is-active" : ""}
                onClick={() => setActiveAfter(item.id)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
        <article className="detail-panel">
          <h3>{activeFormat.title}</h3>
          <p>
            <span>Что получает пользователь:</span> {activeFormat.output}
          </p>
          <p>
            <span>Сколько занимает:</span> {activeFormat.duration}
          </p>
          <p>
            <span>Следующий шаг:</span> {activeFormat.next}
          </p>
          <p className="detail-panel__divider">После теста: {activeResult.title}</p>
          <p>
            <span>Что получает пользователь:</span> {activeResult.output}
          </p>
          <p>
            <span>Сколько занимает:</span> {activeResult.duration}
          </p>
          <p>
            <span>Следующий шаг:</span> {activeResult.next}
          </p>
          <div className="cta-row">
            <button type="button">Пройти диагностику</button>
            <button type="button">Посмотреть 16 психотипов</button>
            <button type="button">Перейти в BS-Evolve</button>
          </div>
        </article>
      </div>
    </SectionShell>
  );
}

import { useState } from "react";
import SectionShell from "../components/SectionShell";
import SignalCard from "../components/SignalCard";

const formats = [
  {
    id: "survey",
    title: "Опросник",
    output: "Быстрый психометрический профиль и стартовые рекомендации.",
    duration: "7-10 минут",
    next: "Переход к персональному треку и тестам в BS-Evolve."
  },
  {
    id: "dialog",
    title: "Диалог",
    output: "Разговорный анализ мотивации, барьеров и намерений.",
    duration: "10-15 минут",
    next: "Персональные рекомендации и подбор следующего шага."
  },
  {
    id: "voice",
    title: "Голос",
    output: "Голосовой сценарий диагностики с адаптивными вопросами.",
    duration: "8-12 минут",
    next: "Формирование профиля и выгрузка результатов."
  },
  {
    id: "video",
    title: "Видеоразбор",
    output: "Разбор психотипа с видео-расшифровкой и PDF-описанием.",
    duration: "15 минут",
    next: "Выбор рекомендаций и персональной программы развития."
  },
  {
    id: "track",
    title: "Трек развития",
    output: "Индивидуальный план прокачки компетенций на базе типа MBTI.",
    duration: "4-8 недель",
    next: "Переход в BS-Evolve и сопровождение нейронаставником."
  }
];

export default function B2CSection() {
  const [activeId, setActiveId] = useState(formats[0].id);
  const active = formats.find((item) => item.id === activeId) ?? formats[0];

  return (
    <SectionShell
      eyebrow="Ветка B2C"
      title="Для человека"
      lead="Диагностика, психотипы, персональные рекомендации и развитие через BS-Evolve."
    >
      <div className="split-layout">
        <div className="selector-list">
          {formats.map((item) => (
            <button
              key={item.id}
              type="button"
              className={item.id === active.id ? "is-active" : ""}
              onClick={() => setActiveId(item.id)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <article className="detail-panel">
          <h3>{active.title}</h3>
          <p>
            <span>Что получает пользователь:</span> {active.output}
          </p>
          <p>
            <span>Длительность:</span> {active.duration}
          </p>
          <p>
            <span>Следующий шаг:</span> {active.next}
          </p>
          <div className="cta-row">
            <button type="button">Перейти к тестированию в BS-Evolve</button>
            <button type="button">Посмотреть 16 психотипов</button>
          </div>
        </article>
      </div>
      <div className="cards-grid">
        <SignalCard
          title="Инструменты диагностики"
          points={["Опросник", "Разговорный тест", "Голосовой режим", "Диванный психолог"]}
        />
        <SignalCard
          title="Контент по психотипам"
          points={["16 психотипов MBTI", "Видео-расшифровки", "PDF-описания", "Персональные выводы"]}
        />
        <SignalCard
          title="Развитие"
          points={["Персональные треки", "Компетенции", "Рекомендации от AI", "Переход в BS-Evolve"]}
        />
      </div>
    </SectionShell>
  );
}

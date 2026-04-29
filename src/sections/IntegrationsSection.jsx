import SafeDataFlowMap from "../components/SafeDataFlowMap";
import FlowMap from "../components/FlowMap";
import IntegrationMap from "../components/IntegrationMap";
import SectionShell from "../components/SectionShell";
import SignalCard from "../components/SignalCard";

export default function IntegrationsSection() {
  return (
    <SectionShell
      eyebrow="Архитектура данных"
      title="Интеграции и данные"
      lead="Интеграции нужны, чтобы сайт не был витриной, а стал входом в единую систему данных."
    >
      <SafeDataFlowMap />
      <FlowMap
        nodes={[
          "Сайт «Сильные стороны»",
          "AI-навигатор",
          "Нейроаналитик",
          "Нейропродажник",
          "BS-Evolve / amoCRM",
          "Дашборды и отчёты",
          "BS-Evolve",
          "amoCRM",
          "База знаний",
          "Telegram-боты",
          "Будущие API"
        ]}
      />
      <article className="integration-explain">
        <h3>Платформенный поток данных</h3>
        <p>
          Каждый шаг маршрута формирует цифровой след: выбор ветки, цель, действия,
          результаты диагностики и статус воронки. Это превращает сайт в рабочий вход в
          единую систему данных платформы «Сильные стороны».
        </p>
      </article>
      <IntegrationMap />
      <div className="cards-grid">
        <SignalCard
          title="Обязательные интеграции"
          points={[
            "BS-Evolve",
            "amoCRM",
            "База знаний",
            "Сайт «Сильные стороны»",
            "Яндекс.Метрика",
            "Telegram-боты",
            "Будущие API"
          ]}
        />
        <SignalCard
          title="Что передаём в amoCRM"
          points={[
            "Выбранная ветка",
            "Цель пользователя",
            "Контакт",
            "Источник трафика",
            "Интерес",
            "Результат диагностики",
            "Статус воронки"
          ]}
        />
        <SignalCard
          title="Что передаём в BS-Evolve"
          points={[
            "Пользователь",
            "Психотип",
            "Результаты тестирования",
            "Выбранный трек",
            "Прогресс",
            "Рекомендации"
          ]}
        />
      </div>
    </SectionShell>
  );
}

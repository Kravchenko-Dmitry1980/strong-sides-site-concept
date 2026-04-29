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
      <FlowMap
        nodes={[
          "AKMEHR сайт",
          "AI-навигатор",
          "BS-Evolve",
          "Нейроаналитик",
          "Нейропродажник",
          "amoCRM",
          "База знаний",
          "Telegram-боты",
          "Дашборды",
          "Будущие API"
        ]}
      />
      <IntegrationMap />
      <div className="cards-grid">
        <SignalCard
          title="Обязательные интеграции"
          points={[
            "BS-Evolve",
            "amoCRM",
            "База знаний",
            "Сайт AKMEHR",
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

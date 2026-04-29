import FlowMap from "../components/FlowMap";
import IntegrationMap from "../components/IntegrationMap";
import SectionShell from "../components/SectionShell";
import SignalCard from "../components/SignalCard";

export default function IntegrationsSection() {
  return (
    <SectionShell
      eyebrow="Архитектура данных"
      title="Интеграции и данные"
      lead="Визуальный макет потока данных без подключения реальных API."
    >
      <FlowMap />
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
          title="Передаваемые данные"
          points={[
            "Выбранная ветка B2C/B2B/B2G",
            "Цель пользователя",
            "Имя и контакты",
            "Результаты тестов и психотип",
            "Действия на сайте",
            "Источник трафика",
            "Статус воронки"
          ]}
        />
      </div>
    </SectionShell>
  );
}

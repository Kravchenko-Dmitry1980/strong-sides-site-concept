import NodeMap from "../components/NodeMap";
import StatusMetric from "../components/StatusMetric";
import SignalPanel from "../components/SignalPanel";

export default function CommandCenterSection() {
  return (
    <section className="section command-center">
      <header className="section__header">
        <h1>AKMEHR</h1>
        <h2>Пульт управления человеческим потенциалом</h2>
        <p>ИИ-платформа для оценки ролей, развития компетенций и управления ростом KPI.</p>
      </header>
      <div className="command-center__layout">
        <NodeMap />
        <div className="command-center__metrics">
          <StatusMetric label="Индекс потенциала команды" value="82" tone="primary" />
          <StatusMetric label="Точность соответствия роли" value="91%" tone="accent" />
          <StatusMetric label="Гипотезы роста KPI" value="14" tone="neutral" />
          <StatusMetric label="Рекомендации ИИ" value="27" tone="accent" />
        </div>
      </div>
      <SignalPanel
        title="Системные сигналы платформы"
        rows={[
          { label: "Контур диагностики", value: "активен" },
          { label: "Режим рекомендаций", value: "управленческий" },
          { label: "Состояние команды", value: "стабильный рост" }
        ]}
      />
    </section>
  );
}

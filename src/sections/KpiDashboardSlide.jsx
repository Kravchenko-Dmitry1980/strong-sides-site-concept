import MetricCard from "../components/MetricCard";

const metrics = [
  { label: "Adaptation Speed", value: "+24%", hint: "после пилота", trend: "up" },
  { label: "Sales Conversion", value: "+18%", hint: "по отделу", trend: "up" },
  { label: "Role Fit", value: "+31%", hint: "точность назначения", trend: "up" },
  { label: "Manual Routine", value: "-22%", hint: "снижение ручных задач", trend: "down" }
];

export default function KpiDashboardSlide() {
  return (
    <div className="kpi-dashboard">
      <div className="kpi-grid">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>

      <div className="kpi-dashboard__bottom">
        <article className="glass-card kpi-before-after">
          <h3>Before / After Pilot</h3>
          <div className="kpi-bars">
            <div>
              <span>Before</span>
              <div className="bar"><i style={{ width: "46%" }} /></div>
            </div>
            <div>
              <span>After</span>
              <div className="bar"><i style={{ width: "78%" }} /></div>
            </div>
          </div>
        </article>
        <article className="glass-card kpi-hypotheses">
          <h3>KPI hypotheses</h3>
          <ul>
            <li>Рост конверсии через перераспределение ролей.</li>
            <li>Снижение срока адаптации за счет AI-трека.</li>
            <li>Ускорение цикла сделки через AI workforce layer.</li>
          </ul>
        </article>
      </div>
    </div>
  );
}

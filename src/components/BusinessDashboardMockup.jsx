import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const kpiTrend = [
  { month: "Янв", value: 58 },
  { month: "Фев", value: 61 },
  { month: "Мар", value: 64 },
  { month: "Апр", value: 66 },
  { month: "Май", value: 71 },
  { month: "Июн", value: 76 }
];

const beforeAfter = [
  { label: "Роли", before: 47, after: 81 },
  { label: "Конверсия", before: 38, after: 67 },
  { label: "Скорость", before: 42, after: 74 },
  { label: "Управление", before: 36, after: 79 }
];

const leadFunnel = [
  { name: "Визиты", count: 1200 },
  { name: "Диалоги", count: 540 },
  { name: "Квалиф.", count: 280 },
  { name: "Заявки", count: 116 }
];

export default function BusinessDashboardMockup() {
  return (
    <section className="business-dashboard">
      <div className="business-dashboard__metrics">
        <article>
          <span>Индекс соответствия ролей</span>
          <strong>84%</strong>
        </article>
        <article>
          <span>Снижение ручной рутины</span>
          <strong>-37%</strong>
        </article>
        <article>
          <span>Динамика трека обучения</span>
          <strong>+29%</strong>
        </article>
      </div>
      <div className="business-dashboard__charts">
        <article>
          <h4>KPI команды</h4>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={kpiTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(155,188,232,0.2)" />
              <XAxis dataKey="month" stroke="#9db7de" />
              <YAxis stroke="#9db7de" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#6cc1ff" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </article>
        <article>
          <h4>Сравнение до / после</h4>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={beforeAfter}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(155,188,232,0.2)" />
              <XAxis dataKey="label" stroke="#9db7de" />
              <YAxis stroke="#9db7de" />
              <Tooltip />
              <Bar dataKey="before" fill="#41679a" radius={[4, 4, 0, 0]} />
              <Bar dataKey="after" fill="#68c4ff" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </article>
      </div>
      <div className="business-dashboard__funnel">
        {leadFunnel.map((step) => (
          <div key={step.name}>
            <span>{step.name}</span>
            <strong>{step.count}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

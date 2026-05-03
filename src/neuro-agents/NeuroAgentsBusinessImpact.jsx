import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import {
  NEURO_CHART_SERIES,
  NEURO_IMPACT_KPIS,
  NEURO_ROI_DEFAULTS
} from "../data/neuroAgentsConfig";
import { IconBolt, IconBullseye, IconTrendDown, IconTrendUp } from "./NeuroAgentsIcons";

const DONUT = [
  { name: "saved", value: 27 },
  { name: "rest", value: 73 }
];

const DONUT_COLORS = ["#ff9d42", "rgba(40, 32, 28, 0.92)"];

function formatRub(value) {
  const formatted = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(value);
  return `+${formatted} ₽ / год`;
}

/** Плейсхолдер: линейная комбинация слайдеров; позже заменить на бизнес-модель. */
function estimateProfit(employees, routineHours, conversion) {
  const e = Number(employees) || 0;
  const r = Number(routineHours) || 0;
  const c = Number(conversion) || 0;
  return Math.round(4_000_000 + e * 118_000 + r * 640_000 + c * 275_000);
}

const KPI_ICONS = {
  "trend-up": IconTrendUp,
  "trend-down": IconTrendDown,
  bolt: IconBolt,
  bullseye: IconBullseye
};

export default function NeuroAgentsBusinessImpact() {
  const [period, setPeriod] = useState("month");
  const [employees, setEmployees] = useState(NEURO_ROI_DEFAULTS.employees);
  const [routineHours, setRoutineHours] = useState(NEURO_ROI_DEFAULTS.routineHoursPerWeek);
  const [conversion, setConversion] = useState(NEURO_ROI_DEFAULTS.leadConversionPercent);

  const profit = useMemo(
    () => estimateProfit(employees, routineHours, conversion),
    [employees, routineHours, conversion]
  );

  return (
    <motion.section
      className="na-section na-impact"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="na-section__title na-impact__title">Как нейроагенты улучшают показатели компаний</h2>
      <div className="na-impact__layout">
        <div className="na-impact__kpis">
          {NEURO_IMPACT_KPIS.map((kpi) => {
            const Ic = KPI_ICONS[kpi.icon] ?? IconBullseye;
            return (
              <div key={kpi.id} className={`na-kpi-card na-kpi-card--${kpi.tone}`}>
                <Ic className="na-kpi-card__icon" />
                <div className="na-kpi-card__value">{kpi.value}</div>
                <p className="na-kpi-card__label">{kpi.label}</p>
              </div>
            );
          })}
        </div>
        <div className="na-impact__chart-panel">
          <div className="na-impact__chart-head">
            <h3 className="na-impact__chart-title">Динамика эффективности с нейроагентами</h3>
            <div className="na-impact__tabs" role="tablist">
              {["week", "month", "quarter", "year"].map((key) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={period === key}
                  className={period === key ? "is-active" : ""}
                  onClick={() => setPeriod(key)}
                >
                  {key === "week" && "Неделя"}
                  {key === "month" && "Месяц"}
                  {key === "quarter" && "Квартал"}
                  {key === "year" && "Год"}
                </button>
              ))}
            </div>
          </div>
          <div className="na-impact__chart-body">
            <div key={period} className="na-impact__line-wrap">
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={NEURO_CHART_SERIES} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke="rgba(200,140,90,0.12)" vertical={false} />
                  <XAxis dataKey="day" tick={{ fill: "rgba(250,247,242,0.45)", fontSize: 11 }} axisLine={false} />
                  <YAxis tick={{ fill: "rgba(250,247,242,0.45)", fontSize: 11 }} axisLine={false} width={36} />
                  <Tooltip
                    contentStyle={{
                      background: "rgba(12,10,9,0.95)",
                      border: "1px solid rgba(200,140,90,0.35)",
                      borderRadius: 10
                    }}
                    labelStyle={{ color: "var(--ld-muted)" }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="withAgents"
                    name="С нейроагентами"
                    stroke="#ff9d42"
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={{ r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="withoutAgents"
                    name="Без нейроагентов"
                    stroke="rgba(250,247,242,0.28)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="na-impact__donut-wrap">
              <p className="na-impact__donut-title">Экономия времени</p>
              <div className="na-impact__donut-inner">
                <ResponsiveContainer width="100%" height={160}>
                  <PieChart>
                    <Pie
                      data={DONUT}
                      dataKey="value"
                      innerRadius={52}
                      outerRadius={72}
                      startAngle={90}
                      endAngle={-270}
                      stroke="none"
                    >
                      {DONUT.map((slice, index) => (
                        <Cell key={slice.name} fill={DONUT_COLORS[index % DONUT_COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="na-impact__donut-label">
                  <strong>27%</strong>
                  <span>снижение рутины</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="na-impact__roi">
          <h3 className="na-impact__roi-title">Рассчитайте потенциал</h3>
          <label className="na-slider">
            <span className="na-slider__label">Количество сотрудников</span>
            <div className="na-slider__row">
              <input
                type="range"
                min={20}
                max={400}
                value={employees}
                onChange={(ev) => setEmployees(Number(ev.target.value))}
              />
              <input
                className="na-slider__num"
                type="number"
                min={20}
                max={400}
                value={employees}
                onChange={(ev) => setEmployees(Number(ev.target.value))}
              />
            </div>
          </label>
          <label className="na-slider">
            <span className="na-slider__label">Средняя ручная рутина (ч/нед)</span>
            <div className="na-slider__row">
              <input
                type="range"
                min={2}
                max={20}
                value={routineHours}
                onChange={(ev) => setRoutineHours(Number(ev.target.value))}
              />
              <input
                className="na-slider__num"
                type="number"
                min={2}
                max={20}
                value={routineHours}
                onChange={(ev) => setRoutineHours(Number(ev.target.value))}
              />
            </div>
          </label>
          <label className="na-slider">
            <span className="na-slider__label">Конверсия из лида (%)</span>
            <div className="na-slider__row">
              <input
                type="range"
                min={5}
                max={30}
                value={conversion}
                onChange={(ev) => setConversion(Number(ev.target.value))}
              />
              <input
                className="na-slider__num"
                type="number"
                min={5}
                max={30}
                value={conversion}
                onChange={(ev) => setConversion(Number(ev.target.value))}
              />
            </div>
          </label>
          <div className="na-impact__roi-out">
            <span className="na-impact__roi-out-label">Потенциальный рост прибыли</span>
            <strong className="na-impact__roi-out-value">{formatRub(profit)}</strong>
            <p className="na-impact__roi-note">Демонстрационная оценка; финансовую модель уточним на встрече.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

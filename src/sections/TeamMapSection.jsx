import { useState } from "react";
import SignalPanel from "../components/SignalPanel";

const divisions = {
  "Продажи": {
    potential: "78",
    risk: "нестабильная конверсия",
    signal: "роли распределены не по сильным сторонам",
    recommendation: "перераспределить клиентов и усилить скрипты",
    kpi: "конверсия, средний чек, скорость сделки"
  },
  HR: {
    potential: "84",
    risk: "долгое закрытие вакансий",
    signal: "нет карты компетенций и кадрового резерва",
    recommendation: "построить профиль ролей и треки развития",
    kpi: "адаптация, удержание, скорость подбора"
  },
  "Управление": {
    potential: "71",
    risk: "зависимость от ручного контроля",
    signal: "решения принимаются на интуиции",
    recommendation: "подключить управленческий симулятор",
    kpi: "управляемость, прибыль, масштабирование"
  },
  "Обучение": {
    potential: "80",
    risk: "обучение не связано с результатом",
    signal: "курсы не привязаны к KPI",
    recommendation: "строить треки под роли и измеримые цели",
    kpi: "прогресс компетенций, скорость адаптации"
  }
};

export default function TeamMapSection() {
  const [activeDivision, setActiveDivision] = useState("Продажи");
  const current = divisions[activeDivision];

  return (
    <section className="section team-map">
      <header className="section__header">
        <h1>Карта команды</h1>
        <p>Организационная карта с сигналами эффективности по ключевым подразделениям.</p>
      </header>
      <div className="team-map__layout">
        <div className="team-map__selector">
          {Object.keys(divisions).map((division) => (
            <button
              key={division}
              type="button"
              className={activeDivision === division ? "is-active" : ""}
              onClick={() => setActiveDivision(division)}
            >
              <span />
              {division}
            </button>
          ))}
        </div>
        <div className="team-map__dashboard">
          <div className="team-map__topline">
            <strong>{activeDivision}</strong>
            <b>Потенциал: {current.potential}</b>
          </div>
          <SignalPanel
            title="Контур подразделения"
            rows={[
              { label: "Риск", value: current.risk },
              { label: "Сигнал", value: current.signal },
              { label: "Рекомендация", value: current.recommendation },
              { label: "KPI-фокус", value: current.kpi }
            ]}
          />
        </div>
      </div>
    </section>
  );
}

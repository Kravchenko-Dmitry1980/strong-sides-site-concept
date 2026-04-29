import { useState } from "react";

const tabs = {
  "Сильные стороны":
    "Системная коммуникация, переговоры, работа с долгим циклом сделки.",
  "Риски":
    "Может терять эффективность при хаотичных задачах и отсутствии ясного KPI.",
  "Трек развития":
    "14-дневный трек: переговоры, прогнозирование сделки, работа с возражениями, контроль воронки.",
  "Рекомендация руководителю":
    "Закрепить сотрудника за B2B-клиентами с длинным циклом сделки и подключить ИИ-продажника для подготовки предложений."
};

export default function EmployeeProfileSection() {
  const [activeTab, setActiveTab] = useState("Сильные стороны");

  return (
    <section className="section employee-profile">
      <header className="section__header">
        <h1>Цифровой профиль сотрудника</h1>
      </header>
      <div className="employee-profile__layout">
        <article className="profile-panel">
          <h3>Сотрудник A-214</h3>
          <p>Текущая роль: менеджер по продажам</p>
          <p>Рекомендованная роль: B2B Account Lead</p>
          <p>Индекс соответствия роли: 87%</p>
          <p>Риск текущей роли: средний</p>
          <p>Трек развития: лидерство в продажах</p>
        </article>
        <article className="profile-insights">
          <div className="profile-insights__tabs">
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                type="button"
                className={activeTab === tab ? "is-active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="profile-insights__content">
            <h3>{activeTab}</h3>
            <p>{tabs[activeTab]}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

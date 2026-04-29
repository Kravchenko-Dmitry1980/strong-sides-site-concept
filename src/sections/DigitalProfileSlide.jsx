const fields = [
  ["Role Fit", "87%"],
  ["Growth Track", "Sales Leadership"],
  ["Risk Level", "Medium"],
  ["Recommended Role", "B2B Account Lead"]
];

export default function DigitalProfileSlide() {
  return (
    <article className="profile-card glass-card">
      <header className="profile-card__header">
        <div className="profile-card__identity">
          <div className="profile-avatar">AE</div>
          <div>
            <h3>Employee Profile #A-214</h3>
            <span>Активный профиль</span>
          </div>
        </div>
        <div className="profile-score">
          <p>Score</p>
          <strong>87</strong>
        </div>
      </header>
      <div className="profile-grid">
        {fields.map(([label, value]) => (
          <div key={label} className="profile-grid__item">
            <p>{label}</p>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
      <div className="profile-insight glass-card">
        <p>AI Insight</p>
        <strong>
          Сотрудник показывает высокий потенциал в переговорах и системной работе с клиентами,
          но требует усиления в прогнозировании сделки.
        </strong>
      </div>
    </article>
  );
}

import { BrandNetworkMark } from "../homepage/icons";

const LANDING_NAV = [
  { key: "hero", label: "Главная", target: "anchor", anchor: "landing-hero" },
  { key: "platform", label: "Возможности", target: "anchor", anchor: "landing-platform" },
  { key: "process", label: "Как это работает", target: "anchor", anchor: "landing-process" },
  { key: "integrations", label: "Интеграции", target: "anchor", anchor: "landing-integrations" },
  { key: "demo", label: "Демо", target: "section", sectionId: "agents" },
  { key: "contacts", label: "Контакты", target: "anchor", anchor: "landing-contacts" }
];

export default function Header({
  hidden,
  activeId,
  homeAnchor,
  onLandingNavItem,
  onAuditCta,
  moreSections,
  onSelectSection
}) {
  return (
    <header className={`top-header top-header--b2b ${hidden ? "is-hidden" : ""}`}>
      <div className="top-header__inner">
        <div className="brand-block">
          <span className="brand-mark brand-mark--network" aria-hidden>
            <BrandNetworkMark />
          </span>
          <div>
            <strong>Сильные стороны</strong>
            <p>BS-Evolve · B2B</p>
          </div>
        </div>
        <nav className="top-nav top-nav--b2b" aria-label="Навигация по главной">
          {LANDING_NAV.map((item) => {
            const isActive =
              item.target === "section"
                ? activeId === item.sectionId
                : activeId === "home" && homeAnchor === item.key;
            return (
              <button
                key={item.key}
                type="button"
                className={isActive ? "is-active" : ""}
                onClick={() => onLandingNavItem(item)}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="top-header__cta">
          <button type="button" className="landing-btn landing-btn--outline-header landing-btn--header" onClick={onAuditCta}>
            Запросить аудит команды
          </button>
        </div>
      </div>
      {moreSections?.length ? (
        <details className="header-more">
          <summary>Все разделы презентации</summary>
          <div className="header-more__grid">
            {moreSections.map((s) => (
              <button key={s.id} type="button" onClick={() => onSelectSection(s.id)}>
                {s.title}
              </button>
            ))}
          </div>
        </details>
      ) : null}
    </header>
  );
}

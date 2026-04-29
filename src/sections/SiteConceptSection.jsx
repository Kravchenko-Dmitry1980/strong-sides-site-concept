import SectionShell from "../components/SectionShell";
import SignalCard from "../components/SignalCard";

const futureNav = [
  "Главная",
  "О платформе",
  "Для человека",
  "Для бизнеса",
  "Для государства",
  "Нейро-сотрудники",
  "Демо",
  "Партнеры",
  "Кейсы",
  "Блог",
  "Контакты",
  "Документы"
];

export default function SiteConceptSection() {
  return (
    <SectionShell
      eyebrow="Дорожная карта платформы"
      title="Концепция будущего сайта"
      lead="Переход от текущей страницы к зрелому React-сайту с четкой навигацией и продуктовыми ветками."
    >
      <div className="cards-grid">
        <SignalCard
          title="Каким станет сайт"
          points={[
            "Полноценный React-сайт",
            "Русскоязычная навигация",
            "Раздельные ветки B2C/B2B/B2G",
            "AI-навигатор на первом экране"
          ]}
        />
        <SignalCard
          title="Новые продуктовые зоны"
          points={[
            "Личный кабинет (будущий этап)",
            "Демо-модули",
            "Кейсы и исследования",
            "Блог и партнерские страницы"
          ]}
        />
        <SignalCard
          title="Блок доверия и зрелости"
          points={[
            "Юридический раздел",
            "Политика обработки персональных данных",
            "Корпоративные контакты",
            "Документы и методология"
          ]}
        />
      </div>
      <article className="site-map-block">
        <h3>Карта будущего сайта</h3>
        <div className="site-map-grid">
          {futureNav.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </article>
    </SectionShell>
  );
}

import SectionShell from "../components/SectionShell";
import ContactBlock from "../components/ContactBlock";
import SignalCard from "../components/SignalCard";
import TrustBlock from "../components/TrustBlock";

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
  "Документы",
  "Политика обработки персональных данных",
  "Личный кабинет (будущий этап)"
];

export default function SiteConceptSection() {
  return (
    <SectionShell
      eyebrow="Дорожная карта платформы"
      title="Концепция будущего сайта"
      lead="Целевая архитектура будущего сайта «Сильные стороны» для согласования с партнерами: навигация, доверие, контакты и продуктовые контуры."
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
      <div className="trust-layout">
        <ContactBlock />
        <TrustBlock
          items={[
            "Юридические документы",
            "Политика обработки персональных данных",
            "Согласие на обработку персональных данных",
            "Реквизиты организации",
            "Партнеры",
            "Кейсы",
            "Блог / исследования",
            "Демо",
            "Планируемый личный кабинет"
          ]}
        />
      </div>
    </SectionShell>
  );
}

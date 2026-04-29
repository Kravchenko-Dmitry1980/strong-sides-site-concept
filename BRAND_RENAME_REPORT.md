# BRAND RENAME REPORT

## Что сделано
Бренд в пользовательском интерфейсе переименован с `AKMEHR` на **«Сильные стороны»**.

## Измененные файлы
- `index.html`
- `src/components/Header.jsx`
- `src/components/BeforeAfterPanel.jsx`
- `src/components/ContactBlock.jsx`
- `src/components/FlowMap.jsx`
- `src/components/IntegrationMap.jsx`
- `src/components/DataFlowMap.jsx`
- `src/sections/HeroSection.jsx`
- `src/sections/B2CSection.jsx`
- `src/sections/B2BSection.jsx`
- `src/sections/B2GSection.jsx`
- `src/sections/NeuroAgentsSection.jsx`
- `src/sections/IntegrationsSection.jsx`
- `src/sections/SiteConceptSection.jsx`

## Где заменено AKMEHR на «Сильные стороны»
- Шапка сайта: название бренда и позиционирование.
- Главный экран: бренд, заголовок, описание, текст AI-навигатора.
- B2C: формулировка lead с привязкой к платформе «Сильные стороны».
- B2B: lead и заголовок бизнес-контура.
- B2G: формулировка методологического решения.
- Нейро-сотрудники: формулировка раздела как модулей платформы «Сильные стороны».
- Интеграции: названия сайта и контуров данных.
- Карта данных (SVG): подписи узлов и aria-label.
- До/После панель: заголовки блока.
- Контакты: почта обновлена на бренд-нейтральную.
- Концепция сайта: lead с брендом «Сильные стороны».
- `index.html` title: `Сильные стороны — платформа управления человеческим потенциалом`.

## Осталось ли где-то AKMEHR
После проверки в `src` и `index.html` вхождений `AKMEHR|Akmehr|akmehr` нет.

Остатки есть только в технических/исторических файлах документации:
- `AUDIT_POLISH_REPORT.md`
- `REDESIGN_PLAN.md`
- `SITE_CONCEPT_REDESIGN_PLAN.md`
- `CLEANUP_AUDIT_REPORT.md`
- `SITE_ARCHITECTURE_REVIEW_V2.md`
- `WOW_LAYER_PLAN.md`

Также возможны упоминания в старых артефактах `dist` от предыдущих сборок.

## Проверка сборки
- `npm run build` — успешно.
- `npm run dev` — успешно, локальный адрес: `http://localhost:3002/`.

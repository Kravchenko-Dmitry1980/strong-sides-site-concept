# Cleanup Audit Report

## Цель
Безопасно удалить мертвые slide-компоненты после перехода на новый React-макет сайта AKMEHR.

## Метод проверки
- Проверен входной граф: `src/main.jsx` импортирует только `src/App.jsx`.
- Проверены прямые импорты в `src/App.jsx`.
- Выполнен поиск импортов/упоминаний legacy-файлов по `src`.
- Проверено, что legacy-файлы импортируются только друг в друга и не подключены к текущему `App`.

## Используемые файлы (активная архитектура)
- `src/main.jsx`
- `src/App.jsx`
- `src/index.css`
- `src/components/Header.jsx`
- `src/components/AiNavigator.jsx`
- `src/components/RouteSelector.jsx`
- `src/components/SectionShell.jsx`
- `src/components/SignalCard.jsx`
- `src/components/FlowMap.jsx`
- `src/components/IntegrationMap.jsx`
- `src/sections/HeroSection.jsx`
- `src/sections/B2CSection.jsx`
- `src/sections/B2BSection.jsx`
- `src/sections/B2GSection.jsx`
- `src/sections/NeuroAgentsSection.jsx`
- `src/sections/IntegrationsSection.jsx`
- `src/sections/SiteConceptSection.jsx`

## Неиспользуемые файлы (legacy slide-ветка)
### components
- `src/components/Controls.jsx`
- `src/components/MetricCard.jsx`
- `src/components/ProductSidebar.jsx`
- `src/components/ProgressBar.jsx`
- `src/components/SlideNav.jsx`
- `src/components/SlideShell.jsx`
- `src/components/StatusMetric.jsx`
- `src/components/SystemNode.jsx`
- `src/components/NodeMap.jsx`
- `src/components/SignalPanel.jsx`

### data
- `src/data/slides.js`

### sections
- `src/sections/SlideContent.jsx`
- `src/sections/ScenarioDemoSlide.jsx`
- `src/sections/PlatformArchitectureSlide.jsx`
- `src/sections/DigitalProfileSlide.jsx`
- `src/sections/KpiDashboardSlide.jsx`
- `src/sections/NeuroEmployeesSlide.jsx`
- `src/sections/PilotRoadmapSlide.jsx`
- `src/sections/CommandCenterSection.jsx`
- `src/sections/TeamMapSection.jsx`
- `src/sections/EmployeeProfileSection.jsx`
- `src/sections/DecisionSimulatorSection.jsx`
- `src/sections/AiLayerSection.jsx`
- `src/sections/PilotSection.jsx`

## Что предлагается удалить
Удаляются все файлы из списка «Неиспользуемые файлы (legacy slide-ветка)», так как:
- они не входят в текущий граф импорта от `main.jsx`;
- их удаление не влияет на новую архитектуру сайта.

## Что лучше оставить
- Все файлы из списка «Используемые файлы (активная архитектура)».
- Документационные файлы (`SITE_CONCEPT_REDESIGN_PLAN.md`, отчеты и т.д.) — не влияют на runtime.

## Риск сломать проект
- Низкий.
- Основание: legacy-файлы изолированы и не используются текущим приложением.
- Контроль: после удаления обязательна проверка `npm run build` и запуск `npm run dev`.

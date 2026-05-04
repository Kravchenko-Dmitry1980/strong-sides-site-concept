# HOMEPAGE Process Refinement Report

## Files Changed

- `src/homepage/LandingHowItWorks.jsx`
- `src/homepage/landing.css`
- `src/homepage/homepageProcessConfig.js`

## Scope Confirmation

Изменения ограничены только блоком `Как это работает` на главной странице:

- не менялись `Header`, `LandingHero`, `LandingPlatformShowcase`, `LandingIntegrations`, `LandingFinalCta`
- не менялись роутинг, навигация, `App` shell
- не менялись компоненты/стили страницы `Нейро-сотрудники`

## What Was Removed

Из правой колонки блока `Как это работает` удалены:

- demo-grid карточки модулей (`AI-навигатор`, `Нейропродажник`, и т.д.)
- кнопка `Посмотреть все демо`
- связанная разметка и CSS-стили demo-card/demo-grid внутри process-секции

## What Was Added

### 1) Data-driven process config

Добавлен файл `src/homepage/homepageProcessConfig.js` с массивом `HOMEPAGE_PROCESS_STEPS`.

Каждый шаг содержит контрактные поля:

- `id`
- `number`
- `title`
- `shortDescription`
- `whatHappens`
- `tools`
- `businessOutput`
- `demoActions`

### 2) Interactive timeline + detail panel

В `LandingHowItWorks` реализовано:

- 5 кликабельных шагов таймлайна слева
- дефолтный активный шаг: `Диагностика` (`id: diagnostics`)
- правая колонка как единая детальная панель активного шага:
  - заголовок шага
  - короткое описание
  - блок `Что происходит`
  - блок `Инструменты и модули` (chips)
  - блок `Бизнес-результат`
  - блок `Демо / видео действия` (CTA-style кнопки под будущие ссылки)
- subtle transition при смене шага через `AnimatePresence`/`motion`

### 3) UX/accessibility

- шаги реализованы как `button` (keyboard/focus/aria-friendly)
- активный шаг имеет явный визуальный state (`is-active`)
- мобильная адаптация сохранена: на узких экранах блоки stack-раскладкой без horizontal overflow

## How Process Config Works

Компонент `LandingHowItWorks`:

1. хранит `activeStepId` в локальном state;
2. вычисляет `activeStep` из `HOMEPAGE_PROCESS_STEPS`;
3. рендерит список шагов и правую панель из данных конфига;
4. при клике по шагу меняет `activeStepId`, что обновляет правую панель.

## How To Add/Change a Process Step

1. Открыть `src/homepage/homepageProcessConfig.js`.
2. Добавить/изменить объект шага в `HOMEPAGE_PROCESS_STEPS` с полным набором полей контракта.
3. Убедиться, что `id` уникальный.
4. Если нужен шаг по умолчанию — обновить initial state в `LandingHowItWorks.jsx`:
   - `useState("<step-id>")`

Дополнительная разметка в компоненте не требуется — UI уже data-driven.

## Build Result

Команда:

- `npm run build`

Результат:

- `PASS` (Vite build completed successfully)

## Dev/Visual Verification Notes

- Dev server на `http://127.0.0.1:3000` уже запущен в активном терминале.
- Автоматизированный MCP browser-run не завершился из-за инфраструктурной ошибки:
  - `browserContext.newPage: Protocol error (Target.createTarget): Failed to open a new tab`

## Remaining Risks

- Полноценная браузерная валидация (клики primary buttons + console/network + screenshot) требует повторного запуска после восстановления MCP browser session.
- Изменения CSS локализованы в process-блоке, но файл `landing.css` общий для homepage; при следующих изменениях секции process рекомендуется визуальный regression-check на desktop/mobile.

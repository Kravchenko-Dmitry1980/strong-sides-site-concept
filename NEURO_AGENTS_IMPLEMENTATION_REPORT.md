# Отчёт: редизайн страницы «Нейро-сотрудники»

**Дата:** 2026-05-03  
**Репозиторий:** `c:\Dima\Projects\CURSOR\presentation`

## Результат сборки

Команда `npm run build` (Vite) завершилась **успешно** (без ошибок).

## Изменённые файлы

| Файл | Изменение |
|------|-----------|
| `src/App.jsx` | Для разделов `home` и `agents` включена премиум-оболочка (`site-app--b2b-home`, `site-content--landing`); при переключении на `agents` выполняется прокрутка вверх; во все секции передаётся `onAuditCta`. |
| `src/main.jsx` | Подключён `src/neuro-agents/neuro-agents.css`. |
| `src/sections/NeuroAgentsSection.jsx` | Тонкая обёртка над новой страницей `NeuroAgentsPremiumPage`. |
| `src/components/AgentShowcase.jsx` | **Удалён** (заменён data-driven страницей). |
| `src/components/ModuleShowcaseCard.jsx` | **Удалён** (заменён `NeuroAgentLibraryCard`). |

## Новые файлы

### Данные

| Файл | Назначение |
|------|------------|
| `src/data/neuroAgentsConfig.js` | `NEURO_AGENTS` (6 агентов), `NEURO_DEMO_ITEMS` (5 демо), `NEURO_WHY_US`, `NEURO_IMPACT_KPIS`, `NEURO_CHART_SERIES`, `NEURO_ROI_DEFAULTS`. |

### Компоненты (`src/neuro-agents/`)

| Файл | Назначение |
|------|------------|
| `NeuroAgentsPremiumPage.jsx` | Корень страницы: фон, композиция секций, привязка CTA к `onAuditCta`. |
| `NeuroAgentsHero.jsx` | Хиро: заголовок, подзаголовок, ценность, CTA, trust-bar, визуал «хаб» с мини-карточками агентов. |
| `NeuroAgentLibrary.jsx` | Секция библиотеки + баннер роста платформы. |
| `NeuroAgentLibraryCard.jsx` | Карточка агента в библиотеке. |
| `NeuroAgentsBusinessImpact.jsx` | KPI, график (recharts), donut, ROI-блок со слайдерами (демо-формула). |
| `NeuroAgentsDemoGallery.jsx` | Галерея демо по конфигу. |
| `NeuroAgentsWhyUs.jsx` | Четыре карточки «почему мы». |
| `NeuroAgentsFinalCta.jsx` | Финальный CTA-баннер. |
| `NeuroAgentsIcons.jsx` | Набор компактных SVG-иконок. |
| `neuro-agents.css` | Стили страницы в токенах `--ld-*` из `landing.css` (тёплая палитра, без legacy blue/cyan секции). |

## Модель данных

### Агент (`NEURO_AGENTS[]`)

Используемые поля: `id`, `name`, `category`, `targetAudience`, `task`, `result`, `description`, `status`, `statusKind`, `demoUrl`, `videoUrl`, `iconType`, `accentColor`, `dataSources`, `pilotReadiness`.

`statusKind` задаёт цвет бейджа: `demo_available` | `pilot_ready` | `soon` | `concept`.

### Демо (`NEURO_DEMO_ITEMS[]`)

Поля: `id`, `agentId`, `title`, `scenario`, `duration`, `videoUrl`, `thumbnailType`, при необходимости позже — `status`.

Связь с агентом: по `agentId` (для подписи статуса в UI).

## Как добавить нового нейроагента

1. Откройте `src/data/neuroAgentsConfig.js`.  
2. Добавьте один объект в массив **`NEURO_AGENTS`** с уникальным `id` и заполненными полями (минимум: `name`, `category`, `targetAudience`, `task`, `result`, `status`, `statusKind`, `accentColor`).  
3. При необходимости добавьте мини-карточку в хиро автоматически: хиро строит орбиту из **всех** элементов `NEURO_AGENTS` (при большом числе агентов имеет смысл позже ограничить подмножество, например `featured`).  
4. Сетка библиотеки рендерится через `.map` по `NEURO_AGENTS` — разметку дублировать не нужно.

## Как добавить демо / видео позже

1. В **`NEURO_DEMO_ITEMS`** для нужной записи задайте `videoUrl` (например URL плеера или страницы демо).  
2. В обработчике кнопки play в `NeuroAgentsDemoGallery.jsx` подключите открытие модалки или `window.open` / встроенный iframe (сейчас кнопка disabled, если `videoUrl` пустой).  
3. Опционально добавьте `thumbnailUrl` в модель и подставьте вместо CSS-превью `thumbnailType`.

## Визуальные решения

- Страница использует **те же CSS-переменные**, что и B2B-лендинг (`landing.css`), и ту же оболочку приложения для `agents`, что и для `home`, чтобы шапка и фон не расходились с главной.  
- Локальный фон `.neuro-agents-page__bg` повторяет язык сетки/ореолов главной без изменения `HeroSection` / `B2BLandingPage`.  
- Секции идут **вертикально** с крупными отступами; на узких экранах сетки перестраиваются (`neuro-agents.css`, media queries).  
- Графики: **recharts** (уже в зависимостях), без новых пакетов.  
- ROI: **демонстрационная** линейная оценка от слайдеров; в коде указано, что это плейсхолдер до бизнес-модели.

## Проверка в браузере

Автоматический прогон через browser-devtools MCP на `localhost:3000` **не выполнен**: среда вернула ошибку создания вкладки (`Protocol error (Target.createTarget)`). Локально dev-сервер поднялся на **http://localhost:3003/** (порты 3000–3002 были заняты). Рекомендуется вручную открыть раздел «Нейро-сотрудники» через «Все разделы презентации» или пункт «Демо» в шапке и пройти вертикальный скролл.

## Оставшиеся риски

- При **>6** агентах орбита в хиро и сетка из 6 колонок потребуют UX-рефактора (карусель, «Показать ещё», ограничение мини-карточек).  
- **Формула ROI** сейчас иллюстративная; при подключении реальной модели не забыть обновить копирайт и валидацию вводов.  
- **Видео**: пока нет реальных URL — кнопка play в галерее неактивна (`disabled`).

## Навигация

Поведение **`Header`** (в т.ч. «Демо» → раздел `agents`) и **`sections`** в `App.jsx` **не ломалось**; добавлена только передача `onAuditCta` и общая премиум-оболочка для `agents`.

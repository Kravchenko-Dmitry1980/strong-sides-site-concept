# WOW Layer Plan

## Цель
Добавить в текущий React-макет AKMEHR технологический wow-layer уровня AI-платформы:
- 3D AI-ядро на главной;
- живой B2B dashboard с графиками;
- интерактивную карту потока данных;
- продуктовую витрину нейро-сотрудников.

## Какие элементы добавляем
1. **3D AI-ядро (Hero)**
   - 3D-сфера + вращающиеся кольца;
   - мягкий свет и частицы;
   - плавная оптимизированная анимация.

2. **B2B Dashboard**
   - KPI-график динамики;
   - сравнение до/после;
   - воронка лидов;
   - карточки метрик.

3. **Data Flow Map**
   - узлы платформы и цепочка передачи данных;
   - hover/click с пояснением данных;
   - анимированный импульс по линиям.

4. **Agent Showcase**
   - усиленная витрина нейро-сотрудников;
   - статус демо, входные данные, результат;
   - 3D-hover эффект карточек.

## Библиотеки
- `three`
- `@react-three/fiber`
- `@react-three/drei`
- `recharts`

## Какие файлы создаются
- `src/components/AiCore3D.jsx`
- `src/components/BusinessDashboardMockup.jsx`
- `src/components/DataFlowMap.jsx`
- `src/components/AgentShowcase.jsx`

## Какие файлы изменяются
- `src/sections/HeroSection.jsx`
- `src/sections/B2BSection.jsx`
- `src/sections/IntegrationsSection.jsx`
- `src/sections/NeuroAgentsSection.jsx`
- `src/index.css`

## Как не перегрузить интерфейс
- Ограничить FPS и сложность геометрии в 3D-компоненте.
- Избегать тяжелых теней и постобработки.
- Анимации сделать мягкими, не резкими.
- Использовать компактные графики и лаконичные подписи.
- Добавить `prefers-reduced-motion` fallback для доступности.
- Сохранить текущую структуру разделов и логику навигации.

# INTEGRATIONS CRASH DEBUG REPORT

## Что вызывает проблему
- Критическая ошибка в `src/sections/IntegrationsSection.jsx`: используется компонент `<DataFlowMap />`, но он не импортирован.
- Это приводит к runtime-ошибке уровня `ReferenceError` в React-рендере раздела «Интеграции», из-за чего экран может становиться пустым.

## Ошибки / наблюдения
- В `npm run build` ошибки сборки нет, потому что проблема проявляется при runtime-отрисовке раздела.
- В `IntegrationsSection.jsx` одновременно используются:
  - `LiveDataFlowMap`
  - `FlowMap`
  - `IntegrationMap`
  - и еще `<DataFlowMap />` (без импорта)
- Это повышает нагрузку секции и усложняет отладку.

## Проверка на бесконечные циклы
- Признаков `setState` внутри render нет.
- `useEffect` без dependency array, который меняет state, в проблемных flow-компонентах не найден.
- `setInterval` / `requestAnimationFrame` без cleanup в flow-карте не найдено.
- Основная причина — не loop, а runtime reference error + избыточная визуальная сложность.

## Проверка тяжести SVG/CSS/motion
- `LiveDataFlowMap` содержит:
  - SVG с несколькими анимируемыми импульсами,
  - активные подсветки,
  - `AnimatePresence` для tooltip.
- Сам по себе компонент рабочий, но в паре с лишней дублирующей картой и ошибкой импорта повышает риск нестабильности.

## Файлы, которые планируется менять
- `src/sections/IntegrationsSection.jsx`
- `src/components/SafeDataFlowMap.jsx` (новый fallback)
- `src/index.css` (легкие стили под safe-карту)

## Safe-fix
1. Отключить advanced-карту в разделе «Интеграции» на время стабилизации.
2. Подключить легкий fallback `SafeDataFlowMap`:
   - 7 узлов,
   - простые SVG-линии,
   - легкий CSS-импульс,
   - hover/click панель данных без тяжелых эффектов.
3. Удалить из раздела проблемный вызов `<DataFlowMap />`.
4. Оставить комментарий в отчете: advanced-map временно отключена до отдельной оптимизации.

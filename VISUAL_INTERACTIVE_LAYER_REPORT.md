# VISUAL INTERACTIVE LAYER REPORT

## Установленные библиотеки
- `framer-motion`
- `lottie-react`
- `three`
- `@react-three/fiber`
- `@react-three/drei`

## Созданные компоненты
- `src/components/LiveDataFlowMap.jsx`
- `src/components/AiAvatarStage.jsx`
- `src/components/FloatingHumanIllustration.jsx`

## Где используется LiveDataFlowMap
- `src/sections/IntegrationsSection.jsx`  
  Добавлен как главный блок раздела «Интеграции и данные» перед дополнительными карточками.

## Где используется AiAvatarStage
- `src/components/AiNavigator.jsx`  
  Сцена аватара теперь рендерится через `AiAvatarStage`.
- `src/sections/HeroSection.jsx`  
  Через `AiNavigator` отображается на главной.

## Где используются human/floating illustrations
- `src/sections/B2CSection.jsx` — `FloatingHumanIllustration mode="person"`
- `src/sections/B2BSection.jsx` — `FloatingHumanIllustration mode="team"`
- `src/sections/B2GSection.jsx` — `FloatingHumanIllustration mode="org"`

## Реализованные эффекты
- Живая data-flow карта:
  - светящиеся узлы,
  - активная подсветка линий для выбранного узла,
  - бегущий импульс по линиям,
  - tooltip по hover/click с полями: входные данные / функция / выходные данные,
  - мобильный вертикальный режим узлов.
- AI avatar stage:
  - 3D core + орбитальный контур + sparkles,
  - мягкий свет и авто-вращение камеры,
  - floating motion-панели рядом со сценой.
- Motion-слой интерфейса:
  - `framer-motion` для route-cards, tooltip, секций и human-tags,
  - hover elevation и depth-card эффекты.
- CSS слой:
  - `live-flow-map`, `flow-node`, `flow-node--active`, `flow-line`, `flow-pulse`, `flow-tooltip`,
  - `ai-avatar-stage`, `ai-avatar-core`, `avatar-orbit`, `avatar-particle`,
  - `floating-human`, `motion-panel`, `glow-border`, `premium-card`, `depth-card`,
  - `prefers-reduced-motion` fallback.

## Ограничения / заглушки
- Все данные в схемах и dashboard моковые.
- Реальные API, backend и внешние источники не подключались.
- Lottie подключен как разрешенная технология, но внешний JSON не использован (без внешних URL).
- Проверка консоли браузера через MCP недоступна в этой сессии (ошибка открытия вкладки).

## Проверка сборки
- `npm run build` — успешно.
- `npm run dev` — успешно, локальный адрес: `http://localhost:3003/`.

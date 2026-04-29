# REMOVE DUPLICATE ROUTE BUTTONS REPORT

## Где найден дубль
- Дублирующий набор маршрутных кнопок рендерился на главной в `src/sections/HeroSection.jsx`:
  - компонент `RouteSelector` внизу левой колонки (`compact`-вариант).
- Основной (нужный) блок остаётся в `src/components/AiNavigator.jsx`:
  - `RouteSelector` под AI-навигацией справа.

## Какие файлы изменены
- `src/sections/HeroSection.jsx`
  - удалён импорт `RouteSelector`;
  - удалён нижний дублирующий рендер `RouteSelector`.

## Что осталось на странице
- Маршрутные кнопки отображаются один раз — справа под AI-навигацией.
- Нижняя служебная панель в `src/App.jsx` сохранена без изменений:
  - подсказки `ArrowLeft / ArrowRight / F / H`;
  - кнопки `Назад` и `Далее`.
- Роутинг и переключение разделов не менялись.
- Упоминаний `AKMEHR` в `src` нет.

## Сборка
- `npm run build` — успешно.
- `npm run dev` — dev-сервер активен (порт 3000).

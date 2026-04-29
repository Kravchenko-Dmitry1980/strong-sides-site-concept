# AKMEHR Demo Audit + Polish Report

## Scope checked

Audit выполнен по 7 направлениям:

1. Content clarity  
2. Visual hierarchy  
3. Enterprise trust  
4. Demo readiness  
5. Responsive behavior  
6. Code quality  
7. Performance

---

## Findings

### 1) Content clarity
- Смысл 12 экранов читается последовательно: проблема -> модель -> архитектура -> сценарии -> доверие -> пилот -> CTA.
- Формулировки в целом AI/HR-Tech, фокус на KPI сохранен.
- Явного ухода в "MBTI-тест" нет.
- Есть локальные длинные блоки текста (в сценариях/insight), что может ухудшать сканирование на проекторе.

### 2) Visual hierarchy
- Заголовки и KPI-блоки считываются быстро.
- CTA видим и контрастен.
- На ряде экранов навигация/вторичные элементы визуально конкурируют с основным контентом.
- Часть карточек нуждается в более аккуратной типографике (межстрочие, word-wrap для длинных строк).

### 3) Enterprise trust
- Нужные формулировки присутствуют: `Target architecture`, `Designed for`, `Planned enterprise layer`, `Compliance roadmap`.
- Завышенных обещаний о полностью реализованном compliance контуре не обнаружено.

### 4) Demo readiness
- Текущая плотность интерфейса близка к product-demo.
- Контраст хороший, но можно повысить стабильность чтения на проекторе (легкий тюнинг цвета текста/отступов).
- Кнопки/контролы рабочие, но стоит немного улучшить touch/демо-эргономику.

### 5) Responsive
- Основные сетки адаптируются.
- Есть риск overflow у длинных слов/подписей в pill-элементах и карточках.
- Навигация в целом адаптивна, но требует мелкой стабилизации по gap/size.

### 6) Code quality
- Архитектура сохранена: данные в `src/data/slides.js`, сложные экраны в `src/sections`.
- `MetricCard` и `SystemNode` используются корректно.
- `SlideContent.jsx` вырос и содержит повторяющиеся оболочки `card__content + h1`.
- В `index.css` есть дублирующий слой стилей (база + visual overrides), что усложняет поддержку.

### 7) Performance
- Используются только CSS-анимации, без тяжелых библиотек.
- Есть бесконечные анимации (`bgShift`, `pulse`) — они легкие, но лучше добавить `prefers-reduced-motion` и слегка смягчить.

---

## Planned minimal polish

1. **Code quality**
   - Снизить дублирование в `SlideContent.jsx` через общий `SlideFrame`.
   - Упростить повторяющиеся ветки `switch` там, где это безопасно.

2. **Typography / readability**
   - Подкрутить line-height/word wrapping для карточек и метрик.
   - Улучшить читаемость на проекторе (контраст вторичного текста).

3. **Demo UX**
   - Сделать навигацию менее шумной (но доступной).
   - Увеличить минимальную высоту кнопок управления.

4. **Responsive hardening**
   - Добавить защиту от длинных слов (`overflow-wrap`, `word-break`) в ключевых UI-элементах.

5. **Performance safety**
   - Добавить `@media (prefers-reduced-motion: reduce)` для отключения интенсивных анимаций.

---

## Files to change

- `src/sections/SlideContent.jsx`
- `src/index.css`

No changes planned for:
- stack/dependencies
- backend/API
- data structure of 12 screens

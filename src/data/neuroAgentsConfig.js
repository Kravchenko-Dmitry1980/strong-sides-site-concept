/**
 * Единый источник данных для страницы «Нейро-сотрудники».
 * Статусы: demo_available | pilot_ready | soon | concept
 */

export const NEURO_AGENTS = [
  {
    id: "sales",
    name: "Нейропродажник",
    category: "Продажи",
    targetAudience: "Бизнес, продажи, сайты, отделы продаж",
    task: "Вести диалог, квалифицировать лиды и доводить до целевой заявки.",
    result: "Больше целевых заявок и меньше потерь на первом контакте.",
    description:
      "Агент закрывает первую линию коммуникации и передаёт в CRM только прогретые лиды.",
    status: "Демо доступно",
    statusKind: "demo_available",
    demoUrl: null,
    videoUrl: null,
    iconType: "sales",
    accentColor: "ember",
    dataSources: "Поведение, психотип, база знаний, CRM.",
    pilotReadiness: "high"
  },
  {
    id: "analyst",
    name: "Нейроаналитик",
    category: "Аналитика",
    targetAudience: "Руководитель, маркетинг, продажи",
    task: "Анализировать поведение, каналы, лиды и KPI в единой картине.",
    result: "Понятные сигналы, где теряются клиенты и что делать дальше.",
    description: "Сводит веб, CRM и рекламные данные в управленческие инсайты.",
    status: "Готов к пилоту",
    statusKind: "pilot_ready",
    demoUrl: null,
    videoUrl: null,
    iconType: "analytics",
    accentColor: "cyan",
    dataSources: "Сайт, Метрика, CRM, заявки, психотипы.",
    pilotReadiness: "high"
  },
  {
    id: "secretary",
    name: "Нейросекретарь",
    category: "Операции",
    targetAudience: "Руководители, команды, проектные группы",
    task: "Превращать встречи в протоколы, задачи и контроль исполнения.",
    result: "Протокол, задачи, ответственные и сроки без ручного переноса.",
    description: "Распознаёт аудио и видео, связывает итоги с трекерами задач.",
    status: "Готов к пилоту",
    statusKind: "pilot_ready",
    demoUrl: null,
    videoUrl: null,
    iconType: "secretary",
    accentColor: "ice",
    dataSources: "Аудио, видео, текст, участники, повестка.",
    pilotReadiness: "medium"
  },
  {
    id: "hr",
    name: "Нейро-HR",
    category: "HR и подбор",
    targetAudience: "HR, рекрутинг, корпоративное обучение",
    task: "Первичный отбор, вопросы кандидату и рекомендации по роли.",
    result: "Shortlist и обоснованные рекомендации по каждому кандидату.",
    description: "Снижает время рекрутера на рутинный скрининг и документы.",
    status: "Демо доступно",
    statusKind: "demo_available",
    demoUrl: null,
    videoUrl: null,
    iconType: "hr",
    accentColor: "copper",
    dataSources: "Резюме, вакансия, ответы кандидата, профиль роли.",
    pilotReadiness: "medium"
  },
  {
    id: "tracker",
    name: "Нейротрекер развития",
    category: "Развитие команды",
    targetAudience: "L&D, руководители, корпоративное развитие",
    task: "Сопровождать трек развития и фиксировать прогресс компетенций.",
    result: "Персональные траектории и измеримый рост навыков.",
    description: "Связан с диагностикой BS-Evolve и корпоративными программами.",
    status: "Скоро",
    statusKind: "soon",
    demoUrl: null,
    videoUrl: null,
    iconType: "tracker",
    accentColor: "teal",
    dataSources: "Диагностика, задания, прогресс, обратная связь.",
    pilotReadiness: "low"
  },
  {
    id: "kpi",
    name: "Нейро-KPI ассистент",
    category: "Управление",
    targetAudience: "Топ-менеджмент, PMO, финансовый контроль",
    task: "Собирать KPI, напоминать о дедлайнах и готовить отчётность.",
    result: "Прозрачность целей и меньше ручного сбора метрик.",
    description: "Держит в фокусе целевые показатели и статусы инициатив.",
    status: "Скоро",
    statusKind: "soon",
    demoUrl: null,
    videoUrl: null,
    iconType: "kpi",
    accentColor: "violet",
    dataSources: "CRM, BI, таблицы, регламенты отчётности.",
    pilotReadiness: "low"
  }
];

/** Витрина демо (подмножество агентов, отдельные подписи сценариев). */
export const NEURO_DEMO_ITEMS = [
  {
    id: "demo-sales",
    agentId: "sales",
    title: "Нейропродажник",
    scenario: "От лида до заявки",
    duration: "5:46",
    videoUrl: null,
    thumbnailType: "dash-orange"
  },
  {
    id: "demo-analyst",
    agentId: "analyst",
    title: "Нейроаналитик",
    scenario: "Анализ данных и выводы",
    duration: "4:32",
    videoUrl: null,
    thumbnailType: "dash-chart"
  },
  {
    id: "demo-secretary",
    agentId: "secretary",
    title: "Нейросекретарь",
    scenario: "Обработка обращений и задач",
    duration: "3:18",
    videoUrl: null,
    thumbnailType: "dash-teal"
  },
  {
    id: "demo-hr",
    agentId: "hr",
    title: "Нейро-HR",
    scenario: "Подбор и адаптация",
    duration: "4:10",
    videoUrl: null,
    thumbnailType: "dash-copper"
  },
  {
    id: "demo-kpi",
    agentId: "kpi",
    title: "Нейро-KPI ассистент",
    scenario: "Контроль KPI и отчётность",
    duration: "3:52",
    videoUrl: null,
    thumbnailType: "dash-violet"
  }
];

export const NEURO_WHY_US = [
  {
    id: "pilot",
    title: "Быстрый пилот",
    body:
      "Запускаем пилотный модуль за 2–4 недели. Видимый результат уже с первых сценариев.",
    icon: "rocket"
  },
  {
    id: "kpi",
    title: "Связь с KPI",
    body:
      "Агенты работают на бизнес-цели: каждое действие измеримо и влияет на результат.",
    icon: "target"
  },
  {
    id: "crm",
    title: "Интеграция с CRM и BS-Evolve",
    body: "Подключаемся к вашим системам, данным и процессам без потерь качества.",
    icon: "puzzle"
  },
  {
    id: "scale",
    title: "Масштабируемая библиотека агентов",
    body: "Библиотека растёт вместе с вашим бизнесом и новыми задачами.",
    icon: "layers"
  }
];

export const NEURO_IMPACT_KPIS = [
  {
    id: "conv",
    value: "+32%",
    label: "конверсия из лида в клиента",
    tone: "green",
    icon: "trend-up"
  },
  {
    id: "routine",
    value: "−27%",
    label: "снижение ручной рутины",
    tone: "orange",
    icon: "trend-down"
  },
  {
    id: "speed",
    value: "+18%",
    label: "скорость реакции на запросы",
    tone: "blue",
    icon: "bolt"
  },
  {
    id: "transparency",
    value: "+24%",
    label: "прозрачность KPI и отчётности",
    tone: "violet",
    icon: "bullseye"
  }
];

/** Точки для линейного графика «с агентами / без» (мок для визуала). */
export const NEURO_CHART_SERIES = [
  { day: "1 мая", withAgents: 42, withoutAgents: 38 },
  { day: "5 мая", withAgents: 48, withoutAgents: 37 },
  { day: "9 мая", withAgents: 55, withoutAgents: 36 },
  { day: "13 мая", withAgents: 61, withoutAgents: 35 },
  { day: "17 мая", withAgents: 68, withoutAgents: 35 },
  { day: "21 мая", withAgents: 74, withoutAgents: 34 },
  { day: "25 мая", withAgents: 82, withoutAgents: 33 },
  { day: "29 мая", withAgents: 91, withoutAgents: 33 }
];

export const NEURO_ROI_DEFAULTS = {
  employees: 120,
  routineHoursPerWeek: 8,
  leadConversionPercent: 12
};

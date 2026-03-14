export type Level = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
  id: number;
  title: string;
  category: string;
  duration: string;
  lessons: number;
  progress: number;
  instructor: string;
  level: Level;
  description: string;
  enrolled: number;
};

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  enrolledCourses: number[];
  joined: string;
  avatar: string;
};

export const COURSES: Course[] = [
  {
    id: 1,
    title: "Трейдинг на фондовом рынке",
    category: "Трейдинг",
    duration: "5ч 20м",
    lessons: 22,
    progress: 65,
    instructor: "Иван Новиков",
    level: "Beginner",
    description:
      "Как покупать и продавать акции, читать графики и управлять рисками на фондовом рынке.",
    enrolled: 1840,
  },
  {
    id: 2,
    title: "Криптовалюты & Блокчейн",
    category: "Крипто",
    duration: "6ч 00м",
    lessons: 24,
    progress: 30,
    instructor: "Петра Горская",
    level: "Beginner",
    description:
      "Основы Bitcoin, Ethereum и альткоинов — как купить, хранить и заработать.",
    enrolled: 2310,
  },
  {
    id: 3,
    title: "Технический анализ графиков",
    category: "Трейдинг",
    duration: "4ч 45м",
    lessons: 19,
    progress: 0,
    instructor: "Андрей Волков",
    level: "Intermediate",
    description:
      "Свечи, индикаторы, уровни поддержки — полный курс теханализа для трейдеров.",
    enrolled: 1120,
  },
  {
    id: 4,
    title: "DeFi & Пассивный доход",
    category: "Крипто",
    duration: "5ч 10м",
    lessons: 20,
    progress: 100,
    instructor: "Луция Маркова",
    level: "Intermediate",
    description:
      "Yield farming, staking, liquidity pools — как зарабатывать DeFi-протоколами.",
    enrolled: 870,
  },
  {
    id: 5,
    title: "Инвестиции в недвижимость",
    category: "Инвестиции",
    duration: "4ч 30м",
    lessons: 17,
    progress: 0,
    instructor: "Томаш Блаха",
    level: "Beginner",
    description:
      "Покупка, аренда и флиппинг недвижимости: как заработать на недвижимости.",
    enrolled: 950,
  },
  {
    id: 6,
    title: "Психология трейдера & Риск-менеджмент",
    category: "Трейдинг",
    duration: "3ч 50м",
    lessons: 15,
    progress: 0,
    instructor: "Марек Веселый",
    level: "Advanced",
    description:
      "Как контролировать эмоции, ограничивать убытки и разрабатывать личную стратегию.",
    enrolled: 680,
  },
];

export const CURRENT_USER: User = {
  id: 1,
  name: "Алекс Новотный",
  email: "alex@courseapp.ru",
  password: "admin123",
  role: "admin",
  enrolledCourses: [1, 2, 4],
  joined: "Январь 2026",
  avatar: "АН",
};

export const ALL_USERS: User[] = [
  CURRENT_USER,
  {
    id: 2,
    name: "Софья Крейчи",
    email: "sophie@example.com",
    password: "sophie123",
    role: "user",
    enrolledCourses: [1, 3],
    joined: "Февраль 2026",
    avatar: "SK",
  },
  {
    id: 3,
    name: "Мартин Дворжак",
    email: "martin@example.com",
    password: "martin123",
    role: "user",
    enrolledCourses: [2, 4, 5],
    joined: "Февраль 2026",
    avatar: "МД",
  },
  {
    id: 4,
    name: "Яна Прохазкова",
    email: "jana@example.com",
    password: "jana123",
    role: "user",
    enrolledCourses: [1],
    joined: "Март 2026",
    avatar: "ЯП",
  },
  {
    id: 5,
    name: "Радек Шиманек",
    email: "radek@example.com",
    password: "radek123",
    role: "user",
    enrolledCourses: [3, 6],
    joined: "Март 2026",
    avatar: "РШ",
  },
];

export const ADMIN_STATS = {
  totalUsers: ALL_USERS.length,
  totalCourses: COURSES.length,
  enrollments: 4930,
  revenue: "48 200 ₽",
};

export const FAQ = [
  {
    q: "Как получить доступ к курсам?",
    a: "После входа в систему вы получите доступ ко всем доступным курсам в разделе «Курсы».",
  },
  {
    q: "Можно ли смотреть курсы офлайн?",
    a: "Офлайн-режим сейчас в разработке. Скоро будет доступен.",
  },
  {
    q: "На сколько времени даётся доступ к курсам?",
    a: "Доступ к курсам пожизненный после покупки или активной премиум-подписки.",
  },
  {
    q: "Как связаться с преподавателем?",
    a: "В каждом курсе есть раздел «Обсуждения», где можно задавать вопросы напрямую преподавателю.",
  },
  {
    q: "Как сбросить пароль?",
    a: "На странице входа нажмите «Забыли пароль» и следуйте инструкциям.",
  },
];

export const ADMIN_VIDEOS = [
  {
    id: 1,
    title: "Урок 1 — Что такое трейдинг",
    course: "Трейдинг на фондовом рынке",
    duration: "14:20",
    size: "52 MB",
  },
  {
    id: 2,
    title: "Урок 2 — Анализ свечей",
    course: "Трейдинг на фондовом рынке",
    duration: "19:45",
    size: "74 MB",
  },
  {
    id: 3,
    title: "Урок 1 — Bitcoin & Ethereum",
    course: "Криптовалюты & Блокчейн",
    duration: "22:10",
    size: "88 MB",
  },
  {
    id: 4,
    title: "Урок 2 — Хранение и безопасность",
    course: "Криптовалюты & Блокчейн",
    duration: "17:30",
    size: "66 MB",
  },
  {
    id: 5,
    title: "Урок 1 — Yield Farming",
    course: "DeFi & Пассивный доход",
    duration: "25:00",
    size: "96 MB",
  },
];

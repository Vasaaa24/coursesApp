import { COURSES } from "../logic/mockData";
import { useAuth } from "../logic/useAuth";
import "../styles/course-detail.css";

type Props = {
  courseId: number;
  onBack: () => void;
};

const MOCK_LESSONS = [
  { n: 1, title: "Введение и обзор курса", duration: "12:30", done: true },
  { n: 2, title: "Основные концепции", duration: "18:45", done: true },
  { n: 3, title: "Практическое применение", duration: "22:10", done: false },
  { n: 4, title: "Углублённый анализ", duration: "19:55", done: false },
  { n: 5, title: "Стратегии и подходы", duration: "24:00", done: false },
  { n: 6, title: "Разбор кейсов", duration: "16:40", done: false },
  { n: 7, title: "Итоги и следующие шаги", duration: "11:20", done: false },
];

const BackIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H5" />
    <path d="M12 5l-7 7 7 7" />
  </svg>
);

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const UsersIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export function CourseDetailView({ courseId, onBack }: Props) {
  const { user } = useAuth();
  const course = COURSES.find((c) => c.id === courseId);

  if (!course) return null;

  const isEnrolled = user?.enrolledCourses.includes(course.id) ?? false;
  const completedLessons = MOCK_LESSONS.filter((l) => l.done).length;
  const lessonsTotal = MOCK_LESSONS.length;

  return (
    <div className="cd-root view-enter">
      {/* Header bar */}
      <header className="cd-header">
        <button className="cd-back" onClick={onBack} aria-label="Назад">
          <BackIcon />
        </button>
        <span className="cd-header-title">Курс</span>
        <div style={{ width: 36 }} />
      </header>

      {/* Hero */}
      <div className="cd-hero">
        <div className="cd-hero-icon">{course.category.charAt(0)}</div>
        <div className="cd-chips">
          <span className="cd-chip cd-chip--cat">{course.category}</span>
          <span
            className={`cd-chip lvl-badge lvl-${course.level.toLowerCase()}`}
          >
            {course.level}
          </span>
        </div>
        <h1 className="cd-title">{course.title}</h1>
        <p className="cd-instructor">{course.instructor}</p>

        <div className="cd-meta-row">
          <span className="cd-meta-item">
            <ClockIcon /> {course.duration}
          </span>
          <span className="cd-meta-dot" />
          <span className="cd-meta-item">
            <UsersIcon /> {course.enrolled.toLocaleString()}
          </span>
          <span className="cd-meta-dot" />
          <span className="cd-meta-item">{course.lessons} уроков</span>
        </div>
      </div>

      {/* Progress (only if enrolled) */}
      {isEnrolled && course.progress > 0 && (
        <div className="cd-progress-block">
          <div className="cd-progress-label">
            <span>Прогресс</span>
            <span>{course.progress}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${course.progress}%` }}
            />
          </div>
          <p className="cd-progress-sub">
            {completedLessons} из {lessonsTotal} уроков завершено
          </p>
        </div>
      )}

      {/* CTA */}
      <div className="cd-cta-wrap">
        {isEnrolled ? (
          <button className="cd-cta cd-cta--primary">
            <PlayIcon />
            {course.progress > 0 ? "Продолжить обучение" : "Начать курс"}
          </button>
        ) : (
          <button className="cd-cta cd-cta--locked" disabled>
            🔒 Курс недоступен
          </button>
        )}
      </div>

      {/* Description */}
      <section className="cd-section">
        <h2 className="section-title">О курсе</h2>
        <p className="cd-description">{course.description}</p>
      </section>

      {/* Lessons */}
      <section className="cd-section">
        <h2 className="section-title">Программа курса</h2>
        <div className="cd-lessons">
          {MOCK_LESSONS.map((lesson, i) => {
            const accessible = isEnrolled;
            return (
              <div
                key={lesson.n}
                className={`cd-lesson${lesson.done ? " cd-lesson--done" : ""}${!accessible ? " cd-lesson--locked" : ""}`}
                style={{ "--i": i } as React.CSSProperties}
              >
                <div className="cd-lesson-num">
                  {lesson.done ? (
                    <span className="cd-lesson-check">
                      <CheckIcon />
                    </span>
                  ) : (
                    <span>{lesson.n}</span>
                  )}
                </div>
                <div className="cd-lesson-info">
                  <p className="cd-lesson-title">{lesson.title}</p>
                  <span className="cd-lesson-dur">
                    <ClockIcon /> {lesson.duration}
                  </span>
                </div>
                {accessible && !lesson.done && (
                  <button className="cd-lesson-play" aria-label="Смотреть">
                    <PlayIcon />
                  </button>
                )}
                {!accessible && <span className="cd-lesson-lock">🔒</span>}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

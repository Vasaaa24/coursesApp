import { useState } from "react";
import { COURSES } from "../logic/mockData";
import { useAuth } from "../logic/useAuth";
import "../styles/courses.css";

const CATEGORIES = ["Все", "Трейдинг", "Крипто", "Инвестиции"];

type Filter = "all" | "progress" | "done";

const SearchIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const LockIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export function CoursesView({
  onCourseOpen,
}: {
  onCourseOpen: (id: number) => void;
}) {
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Все");
  const [filter, setFilter] = useState<Filter>("all");

  const enrolled = user?.enrolledCourses ?? [];

  const filtered = COURSES.filter((c) => {
    const matchCat = category === "Все" || c.category === category;
    const matchSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.instructor.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === "all"
        ? true
        : filter === "progress"
          ? c.progress > 0 && c.progress < 100
          : c.progress === 100;
    return matchCat && matchSearch && matchFilter;
  });

  return (
    <div className="courses-view view-enter">
      <header className="courses-header">
        <h1>Курсы</h1>
        <span className="courses-count">{filtered.length} курсов</span>
      </header>

      <div className="search-wrap">
        <div className="search-bar">
          <SearchIcon />
          <input
            type="text"
            placeholder="Поиск курса или преподавателя…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className="search-clear" onClick={() => setSearch("")}>
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="filter-row">
        {(["all", "progress", "done"] as Filter[]).map((f) => (
          <button
            key={f}
            className={`fchip${filter === f ? " active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f === "all"
              ? "Все"
              : f === "progress"
                ? "В процессе"
                : "Завершенные"}
          </button>
        ))}
      </div>

      <div className="cat-scroll">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`cchip${category === cat ? " active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="courses-list">
        {filtered.length === 0 && (
          <p className="no-results">Курсы не найдены</p>
        )}
        {filtered.map((course, i) => {
          const isLocked = !enrolled.includes(course.id);
          return (
            <div
              key={course.id}
              className={`course-row${isLocked ? " course-row--locked" : ""}`}
              style={{ animationDelay: `${i * 55}ms` }}
              onClick={() => onCourseOpen(course.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && onCourseOpen(course.id)}
            >
              <div className="course-row-icon">{course.category.charAt(0)}</div>
              <div className="course-row-body">
                <div className="course-row-top">
                  <h3 className="course-row-title">{course.title}</h3>
                  <span
                    className={`lvl-badge lvl-${course.level.toLowerCase()}`}
                  >
                    {course.level}
                  </span>
                </div>
                <p className="course-row-meta">
                  {course.instructor} · {course.duration} · {course.lessons}{" "}
                  уроков
                </p>
                {course.progress > 0 && !isLocked && (
                  <div className="progress-bar thin">
                    <div
                      className="progress-fill"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                )}
              </div>
              {isLocked ? (
                <span className="course-lock">
                  <LockIcon />
                </span>
              ) : course.progress === 100 ? (
                <span className="done-mark">✓</span>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

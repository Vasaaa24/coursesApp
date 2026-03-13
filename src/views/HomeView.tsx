import { COURSES, CURRENT_USER } from "../logic/mockData";
import "../styles/home.css";

export function HomeView() {
  const inProgress = COURSES.filter((c) => c.progress > 0 && c.progress < 100);
  const featured = inProgress[0] ?? COURSES[0];
  const recommended = COURSES.filter((c) => c.progress === 0).slice(0, 4);
  const done = COURSES.filter((c) => c.progress === 100).length;

  return (
    <div className="home-view view-enter">
      <header className="home-header">
        <div>
          <p className="greeting-label">Доброе утро или день 👋</p>
          <h1 className="greeting-name">{CURRENT_USER.name.split(" ")[0]}</h1>
        </div>
        <div className="home-avatar">{CURRENT_USER.avatar}</div>
      </header>

      <div className="home-stats">
        <div className="hstat">
          <span className="hstat-num">{inProgress.length}</span>
          <span className="hstat-label">в процессе</span>
        </div>
        <div className="hstat-sep" />
        <div className="hstat">
          <span className="hstat-num">{done}</span>
          <span className="hstat-label">завершено</span>
        </div>
        <div className="hstat-sep" />
        <div className="hstat">
          <span className="hstat-num">12h</span>
          <span className="hstat-label">изучено</span>
        </div>
      </div>

      <section className="home-section">
        <h2 className="section-title">Продолжить обучение</h2>
        <div className="featured-card">
          <div className="featured-chips">
            <span className="chip-cat">{featured.category}</span>
            <span className="chip-lvl">{featured.level}</span>
          </div>
          <h3 className="featured-title">{featured.title}</h3>
          <p className="featured-instructor">{featured.instructor}</p>
          <div className="featured-progress-row">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${featured.progress}%` }}
              />
            </div>
            <span className="progress-pct">{featured.progress}%</span>
          </div>
          <button className="featured-cta">Продолжить →</button>
        </div>
      </section>

      <section className="home-section">
        <h2 className="section-title">Рекомендуем</h2>
        <div className="rec-grid">
          {recommended.map((course, i) => (
            <div
              key={course.id}
              className="rec-card"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="rec-icon">{course.category.charAt(0)}</div>
              <h4 className="rec-title">{course.title}</h4>
              <p className="rec-meta">
                {course.duration} · {course.lessons} уроков
              </p>
              <span className="rec-lvl">{course.level}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

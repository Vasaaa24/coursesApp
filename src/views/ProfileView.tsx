import { useAuth } from "../logic/useAuth";
import { COURSES } from "../logic/mockData";
import "../styles/profile.css";

type Props = { onAdminOpen: () => void };

const SETTINGS = [
  "Аккаунт и данные для входа",
  "Уведомления",
  "Конфиденциальность и безопасность",
  "Язык приложения",
  "О приложении",
];

export function ProfileView({ onAdminOpen }: Props) {
  const { user, isAdmin, logout } = useAuth();
  const enrolled = COURSES.filter((c) => user!.enrolledCourses.includes(c.id));
  const done = enrolled.filter((c) => c.progress === 100);

  return (
    <div className="profile-view view-enter">
      <header className="profile-header">
        <div className="profile-avatar">{user!.avatar}</div>
        <h1 className="profile-name">{user!.name}</h1>
        <p className="profile-email">{user!.email}</p>
        {isAdmin && <span className="admin-badge">Admin</span>}
      </header>

      <div className="profile-stats">
        <div className="pstat">
          <span
            className="pstat-num"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            {done.length}
          </span>
          <span className="pstat-label">Завершено</span>
        </div>
        <div className="pstat-sep" />
        <div className="pstat">
          <span
            className="pstat-num"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            {enrolled.length - done.length}
          </span>
          <span className="pstat-label">В процессе</span>
        </div>
        <div className="pstat-sep" />
        <div className="pstat">
          <span
            className="pstat-num"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            12h
          </span>
          <span className="pstat-label">Изучено</span>
        </div>
      </div>

      <section className="profile-section">
        <h2 className="section-title">Мои курсы</h2>
        {enrolled.map((c, i) => (
          <div
            key={c.id}
            className="my-course-row"
            style={{ "--i": i } as React.CSSProperties}
          >
            <div className="my-course-icon">{c.category.charAt(0)}</div>
            <div className="my-course-info">
              <p className="my-course-title">{c.title}</p>
              <p className="my-course-meta">{c.progress}% завершено</p>
              <div className="progress-bar thin">
                <div
                  className="progress-fill"
                  style={{ width: `${c.progress}%` }}
                />
              </div>
            </div>
            {c.progress === 100 && <span className="done-check">✓</span>}
          </div>
        ))}
      </section>

      <section className="profile-section">
        <h2 className="section-title">Настройки</h2>
        {SETTINGS.map((s, i) => (
          <button
            key={i}
            className="setting-row"
            style={{ "--i": i } as React.CSSProperties}
          >
            <span>{s}</span>
            <span className="setting-arrow">›</span>
          </button>
        ))}
      </section>

      {isAdmin && (
        <button className="admin-open-btn" onClick={onAdminOpen}>
          ⚙ Админ-панель
        </button>
      )}

      <p className="profile-footer">Член с {user!.joined}</p>

      <button className="logout-btn" onClick={logout}>
        Выйти из аккаунта
      </button>
    </div>
  );
}

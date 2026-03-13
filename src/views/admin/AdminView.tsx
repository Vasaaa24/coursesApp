import { useState } from "react";
import {
  COURSES,
  ALL_USERS,
  ADMIN_STATS,
  ADMIN_VIDEOS,
} from "../../logic/mockData";
import "../../styles/admin.css";

type AdminTab = "overview" | "courses" | "videos" | "users";

type Props = { onBack: () => void };

export function AdminView({ onBack }: Props) {
  const [tab, setTab] = useState<AdminTab>("overview");

  const TAB_LABELS: Record<AdminTab, string> = {
    overview: "Обзор",
    courses: "Курсы",
    videos: "Видео",
    users: "Пользователи",
  };

  return (
    <div className="admin-view">
      <header className="admin-header">
        <button className="back-btn" onClick={onBack}>
          ‹
        </button>
        <h1>Админ-панель</h1>
        <div style={{ width: 36 }} />
      </header>

      <div className="admin-tabs">
        {(Object.keys(TAB_LABELS) as AdminTab[]).map((t) => (
          <button
            key={t}
            className={`admin-tab${tab === t ? " active" : ""}`}
            onClick={() => setTab(t)}
          >
            {TAB_LABELS[t]}
          </button>
        ))}
      </div>

      <div className="admin-content">
        {tab === "overview" && <AdminOverview />}
        {tab === "courses" && <AdminCourses />}
        {tab === "videos" && <AdminVideos />}
        {tab === "users" && <AdminUsers />}
      </div>
    </div>
  );
}

function AdminOverview() {
  const stats = [
    { label: "Uživatelé", value: ADMIN_STATS.totalUsers },
    { label: "Kurzy", value: ADMIN_STATS.totalCourses },
    { label: "Přihlášení", value: ADMIN_STATS.enrollments },
    { label: "Příjmy", value: ADMIN_STATS.revenue },
  ];
  return (
    <div className="admin-overview view-enter">
      <div className="stat-grid">
        {stats.map((s, i) => (
          <div key={i} className="admin-stat">
            <span className="admin-stat-val">{s.value}</span>
            <span className="admin-stat-label">{s.label}</span>
          </div>
        ))}
      </div>
      <h3 className="admin-sub">Последняя активность</h3>
      <div className="activity-list">
        <p className="activity-item">
          Новый пользователь <strong>Яна Прохазкова</strong> зарегистрировался
        </p>
        <p className="activity-item">
          Курс <strong>DeFi & Пассивный доход</strong> был обновлён
        </p>
        <p className="activity-item">
          Видео <strong>Урок 2 — Анализ свечей</strong> было загружено
        </p>
        <p className="activity-item">
          Пользователь <strong>Мартин Дворжак</strong> завершил курс DeFi
        </p>
      </div>
    </div>
  );
}

function AdminCourses() {
  return (
    <div className="admin-table view-enter">
      <div className="admin-row-head">
        <span>Курс</span>
        <span>Записалось</span>
        <span>Действия</span>
      </div>
      {COURSES.map((c) => (
        <div key={c.id} className="admin-row">
          <div className="admin-row-info">
            <span className="admin-row-title">{c.title}</span>
            <span className="admin-row-caption">
              {c.category} · {c.level}
            </span>
          </div>
          <span className="admin-row-count">{c.enrolled}</span>
          <div className="admin-actions">
            <button className="a-edit">✎</button>
            <button className="a-del">✕</button>
          </div>
        </div>
      ))}
      <button className="admin-add-btn">+ Добавить курс</button>
    </div>
  );
}

function AdminVideos() {
  return (
    <div className="admin-table view-enter">
      <div className="admin-row-head">
        <span>Видео</span>
        <span>Длительность</span>
        <span>Действия</span>
      </div>
      {ADMIN_VIDEOS.map((v) => (
        <div key={v.id} className="admin-row">
          <div className="admin-row-info">
            <span className="admin-row-title">{v.title}</span>
            <span className="admin-row-caption">
              {v.course} · {v.size}
            </span>
          </div>
          <span className="admin-row-count">{v.duration}</span>
          <div className="admin-actions">
            <button className="a-edit">✎</button>
            <button className="a-del">✕</button>
          </div>
        </div>
      ))}
      <button className="admin-add-btn">+ Загрузить видео</button>
    </div>
  );
}

function AdminUsers() {
  return (
    <div className="admin-table view-enter">
      <div className="admin-row-head">
        <span>Пользователь</span>
        <span>Роль</span>
        <span>Действия</span>
      </div>
      {ALL_USERS.map((u) => (
        <div key={u.id} className="admin-row">
          <div className="admin-row-info">
            <span className="admin-row-title">{u.name}</span>
            <span className="admin-row-caption">{u.email}</span>
          </div>
          <span className={`role-badge role-${u.role}`}>{u.role}</span>
          <div className="admin-actions">
            <button className="a-edit">✎</button>
            <button className="a-del">✕</button>
          </div>
        </div>
      ))}
    </div>
  );
}

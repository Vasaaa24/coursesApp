import { useState } from "react";
import { useAuth } from "../logic/useAuth";
import "../styles/login.css";

export function LoginView() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !password) {
      setError("Введите email и пароль");
      return;
    }
    const ok = login(email, password);
    if (!ok) setError("Неверный email или пароль");
  }

  return (
    <div className="login-root">
      <div className="login-grid" aria-hidden />

      <div className="login-card view-enter">
        <div className="login-logo">
          <svg viewBox="0 0 40 40" fill="none" aria-hidden>
            <circle
              cx="20"
              cy="20"
              r="18"
              stroke="white"
              strokeWidth="0.8"
              strokeOpacity="0.6"
            />
            <circle
              cx="20"
              cy="20"
              r="12"
              stroke="white"
              strokeWidth="0.6"
              strokeOpacity="0.35"
            />
            <circle
              cx="20"
              cy="20"
              r="6"
              stroke="white"
              strokeWidth="0.5"
              strokeOpacity="0.2"
            />
            <circle cx="20" cy="20" r="2.5" fill="white" fillOpacity="0.9" />
          </svg>
        </div>

        <h1 className="login-title">CourseApp</h1>
        <p className="login-sub">Войдите в свой аккаунт</p>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div
            className="login-field"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            <label className="login-label" htmlFor="login-email">
              Email
            </label>
            <input
              id="login-email"
              className="login-input"
              type="email"
              placeholder="yourname@example.com"
              value={email}
              autoComplete="email"
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />
          </div>

          <div
            className="login-field"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            <label className="login-label" htmlFor="login-pass">
              Пароль
            </label>
            <div className="login-pass-wrap">
              <input
                id="login-pass"
                className="login-input"
                type={showPass ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                autoComplete="current-password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
              />
              <button
                type="button"
                className="login-eye"
                aria-label={showPass ? "Скрыть пароль" : "Показать пароль"}
                onClick={() => setShowPass((v) => !v)}
              >
                {showPass ? (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {error && (
            <p className="login-error" role="alert">
              {error}
            </p>
          )}

          <button className="login-btn" type="submit">
            Войти
          </button>
        </form>

        <p className="login-hint">
          Демо:&nbsp;
          <span>alex@courseapp.ru</span>
          &nbsp;/&nbsp;
          <span>admin123</span>
        </p>
      </div>
    </div>
  );
}

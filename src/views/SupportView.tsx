import { useState } from "react";
import { FAQ } from "../logic/mockData";
import "../styles/support.css";

export function SupportView() {
  const [open, setOpen] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (name.trim() && message.trim()) {
      setSent(true);
      setName("");
      setMessage("");
    }
  };

  return (
    <div className="support-view view-enter">
      <header className="support-header">
        <h1>Поддержка</h1>
        <p>Мы здесь для вас</p>
      </header>

      <section className="support-section">
        <h2 className="section-title">Частые вопросы</h2>
        <div className="faq-list">
          {FAQ.map((item, i) => (
            <div key={i} className={`faq-item${open === i ? " open" : ""}`}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className={`faq-arr${open === i ? " up" : ""}`}>›</span>
              </button>
              {open === i && <p className="faq-a">{item.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="support-section">
        <h2 className="section-title">Свяжитесь с нами</h2>
        {sent ? (
          <div className="support-sent">
            <p>✓ Сообщение отправлено</p>
            <span>Ответим в течение 24 часов</span>
          </div>
        ) : (
          <div className="contact-card">
            <input
              className="support-input"
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              className="support-textarea"
              placeholder="Напишите ваш вопрос…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
            <button className="support-send-btn" onClick={handleSend}>
              Отправить сообщение
            </button>
          </div>
        )}
      </section>

      <div className="response-badge">
        Průměrná doba odpovědi: <strong>do 24 hodin</strong>
      </div>
    </div>
  );
}

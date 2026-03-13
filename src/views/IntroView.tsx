import "../styles/intro.css";

type IntroProps = {
  onSkip?: () => void;
  exiting?: boolean;
};

export function IntroView({ onSkip, exiting }: IntroProps) {
  return (
    <div
      className={`intro-root${exiting ? " intro-exit" : ""}`}
      role="dialog"
      aria-label="Intro"
      onClick={onSkip}
    >
      {/* Background dot grid */}
      <div className="intro-grid" aria-hidden />

      {/* Horizontal scan line */}
      <div className="intro-scan" aria-hidden />

      {/* Main content */}
      <div className="intro-stage">
        {/* Rings logo */}
        <div className="intro-logo-wrap">
          <svg
            className="intro-rings-svg"
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden
          >
            {/* Outer ring */}
            <circle
              className="ir-outer"
              cx="50"
              cy="50"
              r="44"
              stroke="white"
              strokeWidth="0.6"
              strokeDasharray="276.46"
              strokeDashoffset="276.46"
            />
            {/* Mid ring — rotates after drawing */}
            <circle
              className="ir-mid"
              cx="50"
              cy="50"
              r="34"
              stroke="white"
              strokeWidth="0.5"
              strokeOpacity="0.45"
              strokeDasharray="213.62"
              strokeDashoffset="213.62"
            />
            {/* Inner ring — counter-rotates */}
            <circle
              className="ir-inner"
              cx="50"
              cy="50"
              r="22"
              stroke="white"
              strokeWidth="0.4"
              strokeOpacity="0.25"
              strokeDasharray="138.23"
              strokeDashoffset="138.23"
            />
            {/* Four tick marks on outer ring */}
            <line
              className="ir-tick"
              x1="50"
              y1="4"
              x2="50"
              y2="10"
              stroke="white"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
            <line
              className="ir-tick"
              x1="50"
              y1="90"
              x2="50"
              y2="96"
              stroke="white"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
            <line
              className="ir-tick"
              x1="4"
              y1="50"
              x2="10"
              y2="50"
              stroke="white"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
            <line
              className="ir-tick"
              x1="90"
              y1="50"
              x2="96"
              y2="50"
              stroke="white"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
            {/* Center dot */}
            <circle className="ir-dot" cx="50" cy="50" r="4" fill="white" />
          </svg>
          {/* Soft glow */}
          <div className="intro-glow" aria-hidden />
        </div>

        {/* Text block */}
        <div className="intro-text">
          <div className="intro-eyebrow-clip">
            <span className="intro-eyebrow">ОБРАЗОВАТЕЛЬНАЯ ПЛАТФОРМА</span>
          </div>
          <div className="intro-title-clip">
            <h1 className="intro-title">
              Course<span className="intro-title-dim">App</span>
            </h1>
          </div>
          <p className="intro-sub">
            Доступ к курсам в любое время и из любой точки мира.
          </p>
        </div>

        {/* Bottom progress + hint */}
        <div className="intro-bottom">
          <div className="intro-track">
            <div className="intro-fill" />
          </div>
          <p className="intro-hint">Нажмите, чтобы пропустить</p>
        </div>
      </div>
    </div>
  );
}

export default IntroView;

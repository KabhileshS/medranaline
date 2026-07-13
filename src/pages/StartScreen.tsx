import { useNavigate } from "react-router-dom";

const StartScreen = () => {
  const navigate = useNavigate();

  return (
    <main className="retro-start-screen min-h-screen flex items-center justify-center px-4 py-10">
      <div className="retro-scanlines" aria-hidden="true" />

      <section className="retro-title-card relative z-10 w-full max-w-4xl text-center">
        <p className="retro-stage-label mb-5">Press Start To Enter</p>

        <h1 className="retro-title mb-6">
          <span className="retro-title-top">MEDRALINE</span>
          <span className="retro-title-year">2026</span>
        </h1>

        <p className="retro-subtitle mx-auto mb-8 max-w-2xl">
          A pixel-arcade opening screen for Medrenaline. Hit start and jump into
          the event universe.
        </p>

        <button
          type="button"
          onClick={() => navigate("/home")}
          className="retro-start-btn"
        >
          START
        </button>
      </section>
    </main>
  );
};

export default StartScreen;

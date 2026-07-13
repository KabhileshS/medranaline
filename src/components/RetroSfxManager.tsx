import { useEffect, useRef } from "react";

const CLICK_SELECTOR = "button, a, [role='button'], .cursor-pointer";

const RetroSfxManager = () => {
  const audioRef = useRef<AudioContext | null>(null);
  const hoverRef = useRef<number>(0);

  const ensureAudio = () => {
    if (typeof window === "undefined") return null;

    if (!audioRef.current) {
      const Ctx = window.AudioContext || (window as any).webkitAudioContext;
      if (!Ctx) return null;
      audioRef.current = new Ctx();
    }

    if (audioRef.current.state === "suspended") {
      void audioRef.current.resume();
    }

    return audioRef.current;
  };

  const playTone = (config: { type: OscillatorType; from: number; to: number; ms: number; gain: number }) => {
    const ctx = ensureAudio();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = config.type;
    osc.frequency.setValueAtTime(config.from, now);
    osc.frequency.exponentialRampToValueAtTime(Math.max(40, config.to), now + config.ms / 1000);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(config.gain, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + config.ms / 1000);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + config.ms / 1000 + 0.02);
  };

  useEffect(() => {
    const clickHandler = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target || !target.closest(CLICK_SELECTOR)) return;

      playTone({ type: "square", from: 780, to: 420, ms: 90, gain: 0.05 });
      setTimeout(() => {
        playTone({ type: "triangle", from: 560, to: 760, ms: 70, gain: 0.03 });
      }, 28);
    };

    const hoverHandler = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target || !target.closest(CLICK_SELECTOR)) return;

      const now = Date.now();
      if (now - hoverRef.current < 120) return;
      hoverRef.current = now;
      playTone({ type: "sine", from: 420, to: 500, ms: 40, gain: 0.012 });
    };

    document.addEventListener("click", clickHandler, true);
    document.addEventListener("pointerover", hoverHandler, true);

    return () => {
      document.removeEventListener("click", clickHandler, true);
      document.removeEventListener("pointerover", hoverHandler, true);
    };
  }, []);

  return null;
};

export default RetroSfxManager;

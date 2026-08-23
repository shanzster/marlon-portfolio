import { useEffect, useRef, useState } from "react";
import { Phone, PhoneOff, PhoneCall, Volume2, VolumeX } from "lucide-react";

type Phase = "ringing" | "connected" | "leaving";

const GREETING = "Hi, thank you for calling — this is Marlon. How may I help you?";
const RING_MS = 2600; // auto-answer after this long
const TYPE_MS = 36; // per-character typing speed
const HOLD_MS = 1500; // pause after greeting finishes before fading out

// Drop your audio files in /public and these will play automatically.
const RINGTONE_SRC = "/ringtone.mp3"; // loops while the phone is ringing
const GREETING_SRC = "/greeting.mp3"; // plays once when the call is answered (optional)

const fmt = (s: number) => `00:${String(s).padStart(2, "0")}`;

const CallIntro = () => {
  const [show, setShow] = useState(false);
  const [phase, setPhase] = useState<Phase>("ringing");
  const [typed, setTyped] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [muted, setMuted] = useState(false);
  const answered = useRef(false);
  const ringRef = useRef<HTMLAudioElement>(null);
  const greetRef = useRef<HTMLAudioElement>(null);

  // Decide whether to play — once per browser session, skipped for reduced-motion.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("callIntroSeen");
    if (reduce || seen) return;
    sessionStorage.setItem("callIntroSeen", "1");
    setShow(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const answer = () => {
    if (answered.current) return;
    answered.current = true;
    // Stop the ringtone, play the greeting audio (both no-op if files aren't added yet).
    const ring = ringRef.current;
    if (ring) {
      ring.pause();
      ring.currentTime = 0;
    }
    if (!muted) greetRef.current?.play().catch(() => {});
    setPhase("connected");
  };

  const dismiss = () => setPhase("leaving");

  // Ringing → play ringtone + auto-answer
  useEffect(() => {
    if (!show || phase !== "ringing") return;
    if (!muted) ringRef.current?.play().catch(() => {});
    const t = setTimeout(answer, RING_MS);
    return () => clearTimeout(t);
  }, [show, phase]);

  // Stop all audio when the intro ends
  useEffect(() => {
    if (phase !== "leaving") return;
    ringRef.current?.pause();
    greetRef.current?.pause();
  }, [phase]);

  // Live mute toggle
  useEffect(() => {
    [ringRef.current, greetRef.current].forEach((a) => {
      if (a) a.muted = muted;
    });
  }, [muted]);

  // Connected → type greeting, run call timer, then leave
  useEffect(() => {
    if (phase !== "connected") return;
    const sec = setInterval(() => setSeconds((s) => s + 1), 1000);
    let i = 0;
    const type = setInterval(() => {
      i += 1;
      setTyped(GREETING.slice(0, i));
      if (i >= GREETING.length) clearInterval(type);
    }, TYPE_MS);
    const leave = setTimeout(() => setPhase("leaving"), GREETING.length * TYPE_MS + HOLD_MS);
    return () => {
      clearInterval(sec);
      clearInterval(type);
      clearTimeout(leave);
    };
  }, [phase]);

  // Leaving → fade out, then unmount + restore scroll
  useEffect(() => {
    if (phase !== "leaving") return;
    const t = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 750);
    return () => clearTimeout(t);
  }, [phase]);

  if (!show) return null;

  const connected = phase === "connected";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-6 transition-opacity duration-700"
      style={{
        opacity: phase === "leaving" ? 0 : 1,
        background: "radial-gradient(circle at 50% 40%, #16233f 0%, #0a1122 70%)",
      }}
      role="dialog"
      aria-label="Incoming call intro"
    >
      <style>{`
        @keyframes ci-shake { 0%,100%{transform:rotate(0)} 20%{transform:rotate(-14deg)} 40%{transform:rotate(12deg)} 60%{transform:rotate(-8deg)} 80%{transform:rotate(6deg)} }
        @keyframes ci-ring { 0%{transform:scale(1);opacity:.5} 100%{transform:scale(2.1);opacity:0} }
        @keyframes ci-eq { 0%,100%{transform:scaleY(.25)} 50%{transform:scaleY(1)} }
        @keyframes ci-dot { 0%,80%,100%{transform:translateY(0);opacity:.4} 40%{transform:translateY(-4px);opacity:1} }
      `}</style>

      {/* Audio — drop /ringtone.mp3 and /greeting.mp3 in public to enable sound */}
      <audio ref={ringRef} src={RINGTONE_SRC} loop preload="auto" />
      <audio ref={greetRef} src={GREETING_SRC} preload="auto" />

      {/* Top controls */}
      <div className="absolute top-5 right-5 flex items-center gap-4">
        <button
          onClick={() => setMuted((m) => !m)}
          className="text-white/40 hover:text-white/80 transition-colors"
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
        <button
          onClick={dismiss}
          className="text-white/40 hover:text-white/80 text-xs font-medium tracking-wide transition-colors"
        >
          Skip intro →
        </button>
      </div>

      {/* Call card */}
      <div className="relative w-[340px] max-w-full rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl px-8 py-9 text-center shadow-2xl">

        {/* Status line */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-6 flex items-center justify-center gap-2 min-h-[16px]">
          {connected ? (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Connected · {fmt(seconds)}
            </>
          ) : (
            <span className="text-sky-300 flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5" style={{ animation: "ci-shake 1s ease-in-out infinite" }} />
              Incoming call
            </span>
          )}
        </p>

        {/* Avatar with ringing rings + phone-call badge */}
        <div className="relative mx-auto mb-5 w-24 h-24">
          {!connected && (
            <>
              <span className="absolute inset-0 rounded-full bg-sky-400/40" style={{ animation: "ci-ring 1.6s ease-out infinite" }} />
              <span className="absolute inset-0 rounded-full bg-sky-400/40" style={{ animation: "ci-ring 1.6s ease-out infinite", animationDelay: "0.5s" }} />
              <span className="absolute inset-0 rounded-full bg-sky-400/40" style={{ animation: "ci-ring 1.6s ease-out infinite", animationDelay: "1s" }} />
            </>
          )}
          <img
            src="/2x2.jpg"
            alt="Marlon Elago"
            className={`relative w-24 h-24 rounded-full object-cover ring-4 transition-all duration-500 ${
              connected ? "ring-emerald-400/60" : "ring-sky-400/60"
            }`}
          />
          {/* Phone-call badge */}
          <span
            className={`absolute -bottom-1 -right-1 w-9 h-9 rounded-full flex items-center justify-center ring-4 ring-[#0a1122] shadow-lg transition-colors duration-500 ${
              connected ? "bg-emerald-500" : "bg-sky-500"
            }`}
          >
            <PhoneCall
              className="w-4 h-4 text-white"
              style={connected ? undefined : { animation: "ci-shake 1s ease-in-out infinite" }}
            />
          </span>
        </div>

        {/* Name */}
        <h2 className="text-white font-bold text-lg leading-tight">Marlon Elago</h2>
        <p className="text-white/50 text-xs mt-0.5 mb-6">Customer Experience Specialist</p>

        {/* --- RINGING STATE --- */}
        {!connected && (
          <>
            {/* ringing dots */}
            <div className="flex items-center justify-center gap-1.5 mb-7 h-4">
              <span className="text-white/40 text-xs tracking-widest mr-1">ringing</span>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-white/60"
                  style={{ animation: "ci-dot 1.4s ease-in-out infinite", animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>

            {/* Decline / Answer */}
            <div className="flex items-center justify-center gap-10">
              <button onClick={dismiss} className="flex flex-col items-center gap-1.5 group" aria-label="Decline">
                <span className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 group-active:scale-95">
                  <PhoneOff className="w-6 h-6 text-white" />
                </span>
                <span className="text-[10px] text-white/40">Decline</span>
              </button>

              <button onClick={answer} className="flex flex-col items-center gap-1.5 group" aria-label="Answer">
                <span className="relative w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 group-active:scale-95">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
                  <Phone className="relative w-6 h-6 text-white" style={{ animation: "ci-shake 1s ease-in-out infinite" }} />
                </span>
                <span className="text-[10px] text-emerald-300 font-medium">Answer</span>
              </button>
            </div>
          </>
        )}

        {/* --- CONNECTED STATE --- */}
        {connected && (
          <>
            {/* Equalizer / voice waveform */}
            <div className="flex items-end justify-center gap-1 h-8 mb-5">
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <span
                  key={i}
                  className="w-1 h-6 rounded-full bg-emerald-400 origin-center"
                  style={{ animation: "ci-eq 0.8s ease-in-out infinite", animationDelay: `${(i % 4) * 0.12}s` }}
                />
              ))}
            </div>

            {/* Typed greeting */}
            <p className="text-white/90 text-sm leading-relaxed min-h-[60px] px-1">
              {typed}
              <span className="caret-blink text-emerald-400 font-normal">|</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CallIntro;

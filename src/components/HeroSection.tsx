import { useEffect, useRef, useState } from "react";
import { MapPin, ArrowDown, Clock, Star, Headphones } from "lucide-react";

const stats = [
  { icon: Clock, target: 7, suffix: "+", label: "Years Experience" },
  { icon: Star, target: 95, suffix: "%", label: "CSAT Score" },
  { icon: Headphones, target: 200, suffix: "+", label: "Tickets / Week" },
];

const roles = [
  "Customer Experience Associate",
  "Application Support Specialist",
  "Shopify Backend Operations",
  "Live Chat & CRM Specialist",
];

/* Count-up number that animates once it mounts */
const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame: number;
    const duration = 1300;
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const progress = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return (
    <p className="text-xs font-bold text-foreground leading-none tabular-nums">
      {value}
      {suffix}
    </p>
  );
};

/* Typewriter that cycles through roles */
const Typewriter = () => {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && text === "") {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
          );
        },
        deleting ? 40 : 75
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <span>
      {text}
      <span className="caret-blink text-primary font-normal">|</span>
    </span>
  );
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x, y });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setParallax({ x: 0, y: 0 })}
      className="hero-sunrise relative flex flex-col justify-center pt-24 pb-24 lg:pt-20 rounded-b-[2.5rem] overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Decorative parallax orbs */}
      <div
        className="animate-float pointer-events-none absolute top-24 left-[8%] w-44 h-44 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(221 90% 60% / 0.35), transparent 70%)",
          transform: `translate(${parallax.x * 40}px, ${parallax.y * 40}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="animate-float pointer-events-none absolute bottom-28 right-[8%] w-56 h-56 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(199 90% 55% / 0.28), transparent 70%)",
          transform: `translate(${parallax.x * -55}px, ${parallax.y * -55}px)`,
          transition: "transform 0.4s ease-out",
          animationDelay: "1.5s",
        }}
      />

      {/* Two-column layout */}
      <div className="hero-content w-full container mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

        {/* LEFT — details */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-last lg:order-first">

          {/* Role badge — typewriter */}
          <span
            className="animate-fade-up text-[10px] font-semibold tracking-widest uppercase text-muted-foreground bg-white/90 backdrop-blur border border-border px-3 py-1 rounded-full mb-4 shadow-sm min-h-[24px] flex items-center"
            style={{ animationDelay: "0.15s" }}
          >
            <Typewriter />
          </span>

          {/* Name */}
          <div className="animate-fade-up mb-3" style={{ animationDelay: "0.25s" }}>
            <span className="block text-sm font-medium text-muted-foreground mb-0.5">Hi, I'm</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Marlon <span className="text-gradient-animate">Elago</span>
            </h1>
          </div>

          {/* Bio */}
          <p
            className="animate-fade-up text-muted-foreground text-sm leading-relaxed max-w-lg mb-5"
            style={{ animationDelay: "0.35s" }}
          >
            Customer service professional with 7+ years delivering exceptional support across phone,
            email, and live calls (inbound &amp; outbound) — known for fast resolution, high
            satisfaction scores, and keeping every interaction human.
          </p>

          {/* Stats row */}
          <div
            className="animate-fade-up flex gap-2 mb-5 w-full max-w-sm"
            style={{ animationDelay: "0.45s" }}
          >
            {stats.map(({ icon: Icon, target, suffix, label }) => (
              <div
                key={label}
                className="lift-hover flex-1 flex items-center gap-1.5 bg-white border border-border rounded-xl px-2 py-2 shadow-sm min-w-0 cursor-default"
              >
                <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-2.5 h-2.5 text-primary" />
                </div>
                <div className="min-w-0">
                  <CountUp target={target} suffix={suffix} />
                  <p className="text-[9px] text-muted-foreground mt-0.5 leading-tight">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Meta chips */}
          <div
            className="animate-fade-up flex flex-wrap justify-center lg:justify-start gap-2 mb-6"
            style={{ animationDelay: "0.55s" }}
          >
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-white border border-border px-3 py-1.5 rounded-full shadow-sm">
              <MapPin className="w-3 h-3 text-primary" />
              Philippines · Remote-ready
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Available for work
            </div>
          </div>

          {/* CTAs */}
          <div className="animate-fade-up flex gap-2" style={{ animationDelay: "0.65s" }}>
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
            <a href="/ElagoMarlon_CV.pdf" download className="btn-secondary">
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT — picture */}
        <div className="animate-fade-up flex justify-center lg:justify-end order-first lg:order-last" style={{ animationDelay: "0.1s" }}>
          <div className="animate-float relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem]">
            {/* rotating conic glow */}
            <div
              className="animate-spin-slow absolute -inset-2 rounded-full opacity-70 blur-[10px]"
              style={{
                background:
                  "conic-gradient(from 0deg, hsl(221 83% 53%), hsl(199 85% 55%), hsl(230 85% 62%), hsl(221 83% 53%))",
              }}
            />
            <div className="absolute inset-0 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
              <img
                src="/2x2.jpg"
                alt="Marlon Elago"
                width={416}
                height={416}
                className="w-full h-full object-cover"
              />
            </div>
            {/* availability badge */}
            <span className="absolute bottom-3 right-3 flex h-6 w-6 items-center justify-center">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500 ring-2 ring-white" />
            </span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#tools"
        className="absolute z-10 bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;

import { MapPin, ArrowDown, Clock, Star, Headphones } from "lucide-react";

const stats = [
  { icon: Clock, value: "5+", label: "Years Experience" },
  { icon: Star, value: "95%", label: "CSAT Score" },
  { icon: Headphones, value: "200+", label: "Tickets / Week" },
];

const HeroSection = () => {
  return (
    <section className="hero-sunrise relative flex flex-col items-center justify-center pt-14 px-6 rounded-b-[2.5rem] overflow-hidden" style={{ minHeight: '100vh' }}>

      {/* Avatar */}
      <div className="relative mb-3 mt-6">
        <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-border shadow-sm">
          <img
            src="/2x2.jpg"
            alt="Marlon Elago"
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Role badge */}
      <span className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground bg-white border border-border px-3 py-1 rounded-full mb-4 shadow-sm text-center">
        Customer Experience Associate / Support Specialist
      </span>

      {/* Name */}
      <div className="mb-3">
        <span className="block text-sm font-medium text-muted-foreground mb-0.5">Hi, I'm</span>
        <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Marlon <span className="text-primary">Elago</span>
        </h1>
      </div>

      {/* Bio */}
      <p className="text-muted-foreground text-sm leading-relaxed text-center max-w-lg mb-5">
        Customer service professional with 5+ years delivering exceptional
        support across phone, email, and live calls |inbound & outbound| — known for fast resolution,
        high satisfaction scores, and keeping every interaction human.
      </p>

      {/* Stats row — always single row, shrink on mobile */}
      <div className="flex justify-center gap-2 mb-5 w-full max-w-sm">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex-1 flex items-center gap-1.5 bg-white border border-border rounded-xl px-2 py-2 shadow-sm min-w-0">
            <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-2.5 h-2.5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-foreground leading-none">{value}</p>
              <p className="text-[9px] text-muted-foreground mt-0.5 leading-tight">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Meta chips */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-white border border-border px-3 py-1.5 rounded-full shadow-sm">
          <MapPin className="w-3 h-3 text-primary" />
          Philippines · Remote-ready
        </div>
      </div>

      {/* CTAs */}
      <div className="flex gap-2 mb-8">
        <a href="#contact" className="btn-primary">
          Get in Touch
        </a>
        <a href="/Elago_Marlon_CV.pdf" download className="btn-secondary">
          Download Resume
        </a>
      </div>

      {/* Scroll hint */}
      <a href="#tools" className="flex flex-col items-center gap-1 text-muted-foreground/50 hover:text-muted-foreground transition-colors">
        <span className="text-[10px] tracking-widest uppercase text-white/60">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-white/60" />
      </a>

    </section>
  );
};

export default HeroSection;

import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "Marlon does exceptionally well in customer service — professional, reliable, and genuinely great with our customers.",
    name: "USUBOV LLC",
    role: "Client",
    accent: "#3b82f6",
  },
  {
    quote:
      "I'm always impressed by how fast Marlon resolves tickets. Issues that could drag on get handled quickly and cleanly.",
    name: "Marie Comas",
    role: "Client",
    accent: "#14b8a6",
  },
  {
    quote:
      "Marlon was the Top 1 Agent at NuSkin — I honestly wouldn't have hit my bonus as a Team Leader without him.",
    name: "Albert",
    role: "Team Leader · NuSkin",
    accent: "#a855f7",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-muted py-24">
      <div className="container mx-auto px-6">

        <p className="text-xs font-semibold tracking-widest uppercase text-primary text-center mb-3">
          Kind Words
        </p>
        <h2 className="section-title">What Clients Say</h2>
        <div className="section-title-underline" />
        <p className="text-muted-foreground text-center text-sm mb-10 -mt-6">
          Real feedback from the people and teams I've supported
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {testimonials.map(({ quote, name, role, accent }, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure
                className="h-full soft-card p-6 flex flex-col gap-4"
                style={{ ["--accent" as string]: accent }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6" style={{ color: `color-mix(in srgb, ${accent} 35%, transparent)` }} />
                </div>

                <blockquote className="text-[13px] text-muted-foreground leading-relaxed italic flex-1">
                  "{quote}"
                </blockquote>

                <figcaption className="flex items-center gap-3 pt-2 border-t border-border">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                    style={{ background: `color-mix(in srgb, ${accent} 14%, white)`, color: accent }}
                  >
                    {name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground leading-tight">{name}</p>
                    <p className="text-[11px] text-muted-foreground">{role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;

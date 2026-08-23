import { AlertCircle, Wrench, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";

// EDIT ME — swap in your own real problem → action → result stories and numbers.
const cases = [
  {
    accent: "#3b82f6",
    tag: "Application Support · EasyPOS",
    metric: "95%",
    metricLabel: "CSAT maintained",
    problem: "Customers hit technical POS issues mid-shift and needed fixes fast before it cost them sales.",
    action: "Provided live remote-desktop troubleshooting via TeamViewer, resolving issues directly on their machines in real time.",
    result: "Consistently high satisfaction and first-contact resolution, keeping merchants running without downtime.",
  },
  {
    accent: "#14b8a6",
    tag: "Support Operations · High-Volume",
    metric: "200+",
    metricLabel: "Tickets / week",
    problem: "A heavy inbound queue across calls, email, and chat risked slow replies and frustrated customers.",
    action: "Triaged and resolved a high daily volume across multiple channels while keeping records clean in the CRM.",
    result: "Fast, reliable turnaround at scale — fewer escalations and a smoother experience for every customer.",
  },
];

const steps = [
  { key: "problem", label: "The Challenge", icon: AlertCircle, color: "#ef4444" },
  { key: "action", label: "What I Did", icon: Wrench, color: "#3b82f6" },
  { key: "result", label: "The Result", icon: TrendingUp, color: "#22c55e" },
] as const;

const ResultsSection = () => {
  return (
    <section id="results" className="section-white py-24">
      <div className="container mx-auto px-6">

        <p className="text-xs font-semibold tracking-widest uppercase text-primary text-center mb-3">
          Proven Outcomes
        </p>
        <h2 className="section-title">Results That Speak</h2>
        <div className="section-title-underline" />
        <p className="text-muted-foreground text-center text-sm mb-10 -mt-6">
          Real support challenges, and the outcomes I delivered
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {cases.map((c, i) => (
            <Reveal key={c.tag} delay={i * 100}>
              <div
                className="h-full soft-card p-6 flex flex-col gap-5"
                style={{ ["--accent" as string]: c.accent }}
              >
                {/* Header: tag + headline metric */}
                <div className="flex items-center justify-between gap-4">
                  <span
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-full border"
                    style={{
                      color: c.accent,
                      borderColor: `color-mix(in srgb, ${c.accent} 28%, transparent)`,
                      background: `color-mix(in srgb, ${c.accent} 8%, white)`,
                    }}
                  >
                    {c.tag}
                  </span>
                  <div className="text-right flex-shrink-0">
                    <p className="text-2xl font-bold leading-none" style={{ color: c.accent }}>{c.metric}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{c.metricLabel}</p>
                  </div>
                </div>

                {/* Problem → Action → Result */}
                <div className="flex flex-col gap-3">
                  {steps.map(({ key, label, icon: Icon, color }) => (
                    <div key={key} className="flex gap-3">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `color-mix(in srgb, ${color} 12%, white)` }}
                      >
                        <Icon className="w-3.5 h-3.5" style={{ color }} />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mb-0.5">
                          {label}
                        </p>
                        <p className="text-[12.5px] text-foreground/90 leading-relaxed">{c[key]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResultsSection;

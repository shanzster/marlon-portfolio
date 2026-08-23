import { useState } from "react";
import { Clock, Globe, Languages, Zap, ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const availability = [
  { icon: Globe, label: "Timezone", value: "Philippines · GMT+8", note: "Overlaps with US, UK & AU hours" },
  { icon: Clock, label: "Working Hours", value: "Flexible shifts", note: "Day, night & graveyard shift ready" },
  { icon: Languages, label: "Languages", value: "English — Fluent", note: "Filipino — Native" },
  { icon: Zap, label: "Response Time", value: "Within 24 hours", note: "Usually much faster" },
];

// EDIT ME — tweak answers to match your real terms.
const faqs = [
  {
    q: "What are your working hours and timezone?",
    a: "I'm based in the Philippines (GMT+8) and work flexible shifts — including night and graveyard hours — so I can fully overlap with US, UK, and Australian business hours.",
  },
  {
    q: "How do you charge — hourly or per project?",
    a: "Both work. I'm happy to do an hourly arrangement for ongoing support or a fixed rate for a defined scope. Message me with what you need and I'll suggest the best fit.",
  },
  {
    q: "Can we start with a trial period?",
    a: "Absolutely. A short paid trial is a great way for us to make sure we're a good match before committing to something longer-term.",
  },
  {
    q: "Which tools and platforms can you work with?",
    a: "I've worked hands-on with HubSpot, Salesforce, Zoho, Genesys, Shopify, Slack, Microsoft Teams, TeamViewer, AnyDesk, and more. If you use something new to me, I pick up tools quickly.",
  },
  {
    q: "How soon can you start?",
    a: "I can typically onboard within a few days. Reach out and let me know your timeline — I'll do my best to accommodate it.",
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-white py-24">
      <div className="container mx-auto px-6">

        <p className="text-xs font-semibold tracking-widest uppercase text-primary text-center mb-3">
          Good to Know
        </p>
        <h2 className="section-title">Availability & FAQ</h2>
        <div className="section-title-underline" />
        <p className="text-muted-foreground text-center text-sm mb-10 -mt-6">
          Everything you need to know before we start working together
        </p>

        {/* Availability strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-12">
          {availability.map(({ icon: Icon, label, value, note }, i) => (
            <Reveal key={label} delay={i * 70}>
              <div className="soft-card p-4 h-full text-center flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-1">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
                <p className="text-sm font-bold text-foreground leading-tight">{value}</p>
                <p className="text-[11px] text-muted-foreground leading-snug">{note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="soft-card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-foreground">{q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-primary flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-[13px] text-muted-foreground leading-relaxed">{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;

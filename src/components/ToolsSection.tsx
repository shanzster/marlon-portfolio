import { useMemo, useState } from "react";
import { LayoutGrid, ArrowUpRight } from "lucide-react";

const tools = [
  {
    name: "TeamViewer",
    category: "Remote Access",
    logo: "https://cdn.simpleicons.org/teamviewer/0E8EE9",
    usedAt: "EasyPOS",
    howIUsedIt: "Provided remote desktop support to customers, troubleshot technical issues directly on their machines in real time.",
  },
  {
    name: "HubSpot",
    category: "CRM",
    logo: "https://cdn.simpleicons.org/hubspot/FF7A59",
    usedAt: "Pizza Hut Deliverit (WFH)",
    howIUsedIt: "Managed customer pipelines, logged interactions, sent follow-up sequences, and tracked deal stages.",
  },
  {
    name: "Microsoft Teams",
    category: "Communication",
    logo: "https://cdn.simpleicons.org/microsoftteams/6264A7",
    usedAt: "EasyPOS, NUSKIN & Pizza Hut Deliverit (WFH)",
    howIUsedIt: "Attended daily standups, collaborated on escalations, and handled internal team communication and meetings.",
  },
  {
    name: "AnyDesk",
    category: "Remote Access",
    logo: "https://cdn.simpleicons.org/anydesk/EF443B",
    usedAt: "Pizza Hut Deliverit (WFH)",
    howIUsedIt: "Used as an alternative remote access tool for quick customer screen sharing and live troubleshooting sessions.",
  },
  {
    name: "DPOS",
    category: "POS System",
    logo: "https://cdn.simpleicons.org/cashapp/00D632",
    usedAt: "Pizza Hut Deliverit (WFH)",
    howIUsedIt: "Processed customer transactions, managed order records, and handled billing inquiries through the POS system.",
  },
  {
    name: "Outlook",
    category: "Communication",
    logo: "https://cdn.simpleicons.org/gmail/EA4335",
    usedAt: "Everyday Use",
    howIUsedIt: "Handled inbound and outbound customer email support, managed inbox queues, and maintained professional correspondence.",
  },
  {
    name: "Zoho",
    category: "CRM",
    logo: "https://cdn.simpleicons.org/zoho/C8202B",
    usedAt: "NUSKIN",
    howIUsedIt: "Managed customer records, tracked support cases, and maintained contact history for seamless follow-ups.",
  },
  {
    name: "Equinox",
    category: "Scheduling",
    logo: "https://cdn.simpleicons.org/googlecalendar/4285F4",
    usedAt: "NUSKIN",
    howIUsedIt: "Used for scheduling and managing customer appointments, tracking service bookings, and coordinating follow-ups.",
  },
  {
    name: "Salesforce CRM",
    category: "CRM",
    logo: "https://cdn.simpleicons.org/salesforce/00A1E0",
    usedAt: "NUSKIN",
    howIUsedIt: "Logged customer interactions, updated contact records, and tracked case history to ensure continuity of support.",
  },
  {
    name: "Genesys",
    category: "CRM",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkgfNCoW234b_N87_AX_P5pG969FaSWetcYg&s",
    usedAt: "NUSKIN",
    howIUsedIt: "Used as the main platform to contact, resolve and update customer service tickets. It is also the primary application used for inbound and outbound calls.",
  },
  {
    name: "Basecamp",
    category: "Project Management",
    logo: "https://cdn.simpleicons.org/basecamp/1D2D35",
    usedAt: "Shopify Backend Operations",
    howIUsedIt: "Resolved backend support tickets and tracked project tasks, coordinating work across the team through organized to-dos and message boards.",
  },
  {
    name: "Slack",
    category: "Communication",
    logo: "https://cdn.simpleicons.org/slack/4A154B",
    usedAt: "Shopify Backend Operations",
    howIUsedIt: "Coordinated real-time team communication, shared status updates, and collaborated on backend tasks and escalations.",
  },
  {
    name: "TIDIO",
    category: "Live Chat",
    logo: "https://cdn.simpleicons.org/tidio/4AAFED",
    usedAt: "Shopify Backend Operations",
    howIUsedIt: "Managed customer relationships and delivered live chat support on the storefront, resolving inquiries and capturing leads in real time.",
  },
  {
    name: "POKY",
    category: "Product Import",
    logo: "https://cdn.simpleicons.org/poky",
    usedAt: "Shopify Backend Operations",
    howIUsedIt: "Imported product listings from competitor stores into Shopify, streamlining catalog setup and speeding up product research.",
  },
  {
    name: "Claude",
    category: "AI Tool",
    logo: "https://cdn.simpleicons.org/claude/D97757",
    usedAt: "Shopify Backend Operations",
    howIUsedIt: "Automated product listing descriptions and generated studio-level product images to accelerate catalog creation.",
  },
  {
    name: "Shopify",
    category: "E-Commerce",
    logo: "https://cdn.simpleicons.org/shopify/95BF47",
    usedAt: "Shopify Backend Operations",
    howIUsedIt: "Managed product listings, configured store settings, and handled backend store operations and catalog administration.",
  },
];

// One solid accent color per category — drives the whole card theme via a CSS var.
const categoryColor: Record<string, string> = {
  Ticketing: "#f97316",
  CRM: "#0ea5e9",
  Communication: "#8b5cf6",
  "Live Chat": "#10b981",
  Productivity: "#f59e0b",
  Design: "#ec4899",
  Scheduling: "#14b8a6",
  "Remote Access": "#3b82f6",
  "POS System": "#22c55e",
  "Project Management": "#6366f1",
  "Product Import": "#f43f5e",
  "AI Tool": "#a855f7",
  "E-Commerce": "#5e8e3e",
};

const DEFAULT_ACCENT = "#3b82f6";

const ToolsSection = () => {
  const [active, setActive] = useState("All");

  // Build filter list — "All" + each category with its count, in first-seen order
  const filters = useMemo(() => {
    const counts = new Map<string, number>();
    tools.forEach((t) => counts.set(t.category, (counts.get(t.category) ?? 0) + 1));
    return [
      { label: "All", count: tools.length },
      ...Array.from(counts, ([label, count]) => ({ label, count })),
    ];
  }, []);

  const visible = active === "All" ? tools : tools.filter((t) => t.category === active);

  return (
    <section id="tools" className="section-muted py-24">
      <div className="container mx-auto px-6">

        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-widest uppercase text-primary text-center mb-3">
          What I Use
        </p>
        <h2 className="section-title">Tools & Platforms</h2>
        <div className="section-title-underline" />
        <p className="text-muted-foreground text-center text-sm mb-10 -mt-6">
          The software and platforms I rely on every day to deliver great support
        </p>

        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => {
            const isActive = active === f.label;
            return (
              <button
                key={f.label}
                onClick={() => setActive(f.label)}
                aria-pressed={isActive}
                className={`group flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full border transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/25 scale-105"
                    : "bg-white text-muted-foreground border-border hover:border-primary/40 hover:text-primary hover:-translate-y-0.5"
                }`}
              >
                {f.label === "All" && <LayoutGrid className="w-3 h-3" />}
                {f.label}
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none ${
                    isActive ? "bg-white/25 text-white" : "bg-muted text-muted-foreground group-hover:bg-primary/10"
                  }`}
                >
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid — re-keyed per filter so cards re-animate in */}
        <div
          key={active}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          {visible.map((tool, i) => {
            const accent = categoryColor[tool.category] ?? DEFAULT_ACCENT;
            return (
              <div
                key={tool.name}
                className="tool-card group soft-card animate-fade-up p-5 flex flex-col gap-4"
                style={{ ["--accent" as string]: accent, animationDelay: `${i * 50}ms` }}
              >
                {/* Corner arrow (reveals on hover) */}
                <ArrowUpRight className="tool-arrow absolute top-4 right-4 w-4 h-4" />

                {/* Header: logo + name + category */}
                <div className="flex items-center gap-3">
                  <div className="tool-tile relative w-11 h-11 rounded-xl border border-border/60 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold select-none">{tool.name.charAt(0)}</span>
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      width={24}
                      height={24}
                      className="absolute inset-0 m-auto w-5 h-5 object-contain bg-white rounded-md p-0.5"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm leading-tight">{tool.name}</h3>
                    <button
                      onClick={() => setActive(tool.category)}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full border mt-1 inline-block transition-transform hover:scale-105"
                      style={{
                        color: accent,
                        borderColor: `color-mix(in srgb, ${accent} 30%, transparent)`,
                        background: `color-mix(in srgb, ${accent} 10%, white)`,
                      }}
                    >
                      {tool.category}
                    </button>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border" />

                {/* Used at */}
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mb-1 flex items-center gap-1.5">
                    <span className="tool-dot w-1.5 h-1.5 rounded-full" />
                    Used at
                  </p>
                  <p className="text-xs font-medium text-foreground">{tool.usedAt}</p>
                </div>

                {/* How I used it */}
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mb-0.5">How I used it</p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{tool.howIUsedIt}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ToolsSection;

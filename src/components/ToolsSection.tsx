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
];

const categoryColor: Record<string, string> = {
  Ticketing: "bg-orange-50 text-orange-600 border-orange-100",
  CRM: "bg-sky-50 text-sky-600 border-sky-100",
  Communication: "bg-violet-50 text-violet-600 border-violet-100",
  "Live Chat": "bg-emerald-50 text-emerald-600 border-emerald-100",
  Productivity: "bg-amber-50 text-amber-600 border-amber-100",
  Design: "bg-pink-50 text-pink-600 border-pink-100",
  Scheduling: "bg-teal-50 text-teal-600 border-teal-100",
  "Remote Access": "bg-blue-50 text-blue-600 border-blue-100",
  "POS System": "bg-green-50 text-green-600 border-green-100",
};

const ToolsSection = () => {
  return (
    <section id="tools" className="section-muted py-24">
      <div className="container mx-auto px-6">

        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-widest uppercase text-primary text-center mb-3">
          What I Use
        </p>
        <h2 className="section-title">Tools & Platforms</h2>
        <div className="section-title-underline" />
        <p className="text-muted-foreground text-center text-sm mb-14 -mt-6">
          The software and platforms I rely on every day to deliver great support
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="soft-card p-5 hover:shadow-md transition-shadow duration-200 flex flex-col gap-4"
            >
              {/* Header: logo + name + category */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    width={22}
                    height={22}
                    className="w-5 h-5 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground text-sm leading-tight">{tool.name}</h3>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border mt-1 inline-block ${categoryColor[tool.category] ?? "bg-muted text-muted-foreground border-border"}`}>
                    {tool.category}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border" />

              {/* Used at */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mb-0.5">Used at</p>
                <p className="text-xs font-medium text-foreground">{tool.usedAt}</p>
              </div>

              {/* How I used it */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mb-0.5">How I used it</p>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{tool.howIUsedIt}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ToolsSection;

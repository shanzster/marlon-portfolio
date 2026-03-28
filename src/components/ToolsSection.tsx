const tools = [
  {
    name: "Zendesk",
    category: "Ticketing",
    description: "Customer support ticketing and knowledge base management",
  },
  {
    name: "Freshdesk",
    category: "Ticketing",
    description: "Helpdesk and customer engagement platform",
  },
  {
    name: "Salesforce",
    category: "CRM",
    description: "Customer relationship management and data tracking",
  },
  {
    name: "HubSpot",
    category: "CRM",
    description: "Inbound marketing, sales, and service platform",
  },
  {
    name: "Slack",
    category: "Communication",
    description: "Team collaboration and internal communication",
  },
  {
    name: "Microsoft Teams",
    category: "Communication",
    description: "Video calls, meetings, and team collaboration",
  },
  {
    name: "Intercom",
    category: "Live Chat",
    description: "Customer messaging and live chat support",
  },
  {
    name: "LiveChat",
    category: "Live Chat",
    description: "Real-time customer chat and engagement",
  },
  {
    name: "Google Workspace",
    category: "Productivity",
    description: "Docs, Sheets, Gmail, and productivity suite",
  },
  {
    name: "Notion",
    category: "Productivity",
    description: "Documentation and knowledge management",
  },
  {
    name: "Zoom",
    category: "Communication",
    description: "Video conferencing and virtual meetings",
  },
  {
    name: "Canva",
    category: "Design",
    description: "Quick graphics and visual content creation",
  },
];

const categoryColors: Record<string, string> = {
  Ticketing: "bg-primary/10 text-primary",
  CRM: "bg-accent/10 text-accent",
  Communication: "bg-primary/15 text-primary",
  "Live Chat": "bg-accent/15 text-accent",
  Productivity: "bg-primary/10 text-primary",
  Design: "bg-accent/10 text-accent",
};

const ToolsSection = () => {
  return (
    <section id="tools" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground text-center mb-3">
          Tools & Platforms
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-sm">
          Software and platforms I work with daily
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {tools.map((tool) => (
            <div key={tool.name} className="neu-card-sm p-5 hover:translate-y-[-2px] transition-transform">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-foreground text-sm">{tool.name}</h3>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${categoryColors[tool.category] || "bg-muted text-muted-foreground"}`}>
                  {tool.category}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;

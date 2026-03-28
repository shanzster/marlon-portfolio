const tools = [
  { name: "Zendesk", category: "Ticketing", description: "Customer support ticketing and knowledge base management" },
  { name: "Freshdesk", category: "Ticketing", description: "Helpdesk and customer engagement platform" },
  { name: "Salesforce", category: "CRM", description: "Customer relationship management and data tracking" },
  { name: "HubSpot", category: "CRM", description: "Inbound marketing, sales, and service platform" },
  { name: "Slack", category: "Communication", description: "Team collaboration and internal communication" },
  { name: "Microsoft Teams", category: "Communication", description: "Video calls, meetings, and team collaboration" },
  { name: "Intercom", category: "Live Chat", description: "Customer messaging and live chat support" },
  { name: "LiveChat", category: "Live Chat", description: "Real-time customer chat and engagement" },
  { name: "Google Workspace", category: "Productivity", description: "Docs, Sheets, Gmail, and productivity suite" },
  { name: "Notion", category: "Productivity", description: "Documentation and knowledge management" },
  { name: "Zoom", category: "Communication", description: "Video conferencing and virtual meetings" },
  { name: "Canva", category: "Design", description: "Quick graphics and visual content creation" },
];

const categoryStyles: Record<string, string> = {
  Ticketing: "bg-primary/10 text-primary",
  CRM: "bg-accent/10 text-accent",
  Communication: "bg-primary/8 text-primary",
  "Live Chat": "bg-accent/8 text-accent",
  Productivity: "bg-primary/10 text-primary",
  Design: "bg-accent/10 text-accent",
};

const ToolsSection = () => {
  return (
    <section id="tools" className="py-20 gradient-section-warm">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Tools & Platforms</h2>
        <p className="text-muted-foreground text-center mb-12 text-sm">
          Software and platforms I work with daily
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {tools.map((tool) => (
            <div key={tool.name} className="neu-card-sm p-4 lg:p-5 hover:scale-[1.02] transition-transform duration-200">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground text-sm">{tool.name}</h3>
                </div>
                <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full w-fit ${categoryStyles[tool.category] || "bg-muted text-muted-foreground"}`}>
                  {tool.category}
                </span>
                <p className="text-[11px] text-muted-foreground leading-relaxed hidden sm:block">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;

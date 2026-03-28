import { Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    role: "Customer Representative Agent",
    company: "Company Name Here",
    period: "2023 – Present",
    description: "Handle inbound and outbound customer inquiries via phone, email, and live chat. Resolve complaints efficiently while maintaining high customer satisfaction scores.",
    highlights: ["95% CSAT Score", "200+ tickets/week", "Top Performer Q3 2024"],
  },
  {
    role: "Customer Support Associate",
    company: "Company Name Here",
    period: "2021 – 2023",
    description: "Provided frontline customer support for an e-commerce platform. Managed order issues, refunds, and product inquiries across multiple channels.",
    highlights: ["Reduced response time by 30%", "Trained 5 new hires", "Quality Assurance Lead"],
  },
  {
    role: "Virtual Assistant",
    company: "Freelance",
    period: "2020 – 2021",
    description: "Supported small businesses with email management, customer follow-ups, data entry, and scheduling.",
    highlights: ["10+ clients served", "Calendar & Email Mgmt", "Social Media Support"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 gradient-section-accent">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Work Experience</h2>
        <p className="text-muted-foreground text-center mb-12 text-sm">
          My professional journey
        </p>

        <div className="max-w-3xl mx-auto space-y-5">
          {experiences.map((exp, index) => (
            <div key={index} className="neu-card p-6 hover:scale-[1.01] transition-transform duration-200">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-bold text-foreground text-sm">{exp.role}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-0.5">
                    <Building2 className="w-3 h-3" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full flex items-center gap-1 w-fit whitespace-nowrap">
                  <Calendar className="w-2.5 h-2.5" />
                  {exp.period}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((h) => (
                  <span key={h} className="text-[10px] font-medium px-3 py-1 rounded-full bg-muted/60 text-foreground border border-border/40">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

import { Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    role: "Customer Representative Agent",
    company: "Company Name Here",
    period: "2023 – Present",
    description:
      "Handle inbound and outbound customer inquiries via phone, email, and live chat. Resolve complaints efficiently while maintaining high customer satisfaction scores.",
    highlights: ["95% CSAT Score", "200+ tickets/week", "Top Performer Q3 2024"],
  },
  {
    role: "Customer Support Associate",
    company: "Company Name Here",
    period: "2021 – 2023",
    description:
      "Provided frontline customer support for an e-commerce platform. Managed order issues, refunds, and product inquiries across multiple channels.",
    highlights: ["Reduced response time by 30%", "Trained 5 new hires", "Quality Assurance Lead"],
  },
  {
    role: "Virtual Assistant",
    company: "Freelance",
    period: "2020 – 2021",
    description:
      "Supported small businesses with email management, customer follow-ups, data entry, and scheduling.",
    highlights: ["10+ clients served", "Calendar & Email Management", "Social Media Support"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 gradient-warm">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground text-center mb-3">
          Work Experience
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-sm">
          My professional journey
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="neu-card p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-bold text-foreground">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-[11px] font-medium px-3 py-1 rounded-full bg-muted text-foreground"
                  >
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

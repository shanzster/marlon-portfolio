import { Calendar, Building2, TrendingUp } from "lucide-react";

const experiences = [
  {
    role: "Customer Support Specialist",
    company: "Buwelo",
    period: "2025 – 2026",
    type: "Full-time",
    description: "Delivering customer support services as a specialist, handling inquiries and resolving issues to maintain high satisfaction standards.",
    highlights: ["Customer Support", "Issue Resolution", "Quality Service"],
  },
  {
    role: "Application Support Specialist",
    company: "EasyPOS Solutions INC",
    period: "Oct 2024 – May 2025",
    type: "Full-time",
    description: "Provided application-level support for EasyPOS software clients, troubleshot system issues, assisted with onboarding, and coordinated with technical teams for escalations.",
    highlights: ["App Troubleshooting", "Client Onboarding", "Technical Escalations"],
  },
  {
    role: "Customer Service Support",
    company: "IQOR (WFH)",
    period: "2022 – 2024",
    type: "Remote",
    description: "Handled inbound customer service for a work-from-home setup, managing inquiries, complaints, and account-related concerns across multiple channels.",
    highlights: ["WFH Setup", "Inbound Support", "Account Management"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-muted py-24">
      <div className="container mx-auto px-6">

        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-widest uppercase text-primary text-center mb-3">
          Where I've Been
        </p>
        <h2 className="section-title">Work Experience</h2>
        <div className="section-title-underline" />
        <p className="text-muted-foreground text-center text-sm mb-14 -mt-6">
          A track record of delivering results across customer-facing roles
        </p>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-6 mb-8 last:mb-0">

              {/* Timeline column */}
              <div className="flex flex-col items-center flex-shrink-0">
                {/* Dot */}
                <div className="w-3 h-3 rounded-full bg-primary border-2 border-white shadow-sm mt-5 flex-shrink-0" />
                {/* Line — hidden on last item */}
                {index < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-2" />
                )}
              </div>

              {/* Card */}
              <div className="flex-1 soft-card p-6 hover:shadow-md transition-shadow duration-200 mb-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{exp.role}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-0.5">
                      <Building2 className="w-3 h-3" />
                      <span>{exp.company}</span>
                      <span className="text-border">·</span>
                      <span className="text-[10px]">{exp.type}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-medium text-muted-foreground bg-background border border-border px-3 py-1 rounded-full flex items-center gap-1 w-fit whitespace-nowrap">
                    <Calendar className="w-2.5 h-2.5" />
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex items-center gap-1.5 mb-2">
                  <TrendingUp className="w-3 h-3 text-primary" />
                  <span className="text-[10px] font-semibold text-primary uppercase tracking-wide">Key Achievements</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-[10px] font-medium px-3 py-1 rounded-full border"
                      style={{ background: 'hsl(25 95% 53% / 0.07)', borderColor: 'hsl(25 95% 53% / 0.2)', color: 'hsl(25 95% 40%)' }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;

import { Calendar, Building2, TrendingUp, Award, Globe } from "lucide-react";

const experiences = [
  {
    role: "Customer Support Specialist",
    company: "NUSKIN - Australian Based Skincare Company",
    period: "2025 – 2026",
    type: "Full-time",
    clients: "New Zealand & Australia",
    description: "Delivering customer support services as a specialist, handling inquiries and resolving issues to maintain high satisfaction standards.",
    highlights: ["Customer Support", "Issue Resolution", "Quality Service"],
    awards: [
      { title: "Top Agent of the Month", date: "November 2025 - July 2026" },
    ],
  },
  {
    role: "Application Support Specialist",
    company: "EasyPOS Solutions INC",
    period: "Oct 2024 – April 2025",
    type: "Full-time",
    clients: "Australia",
    description: "Provided application-level support for EasyPOS software clients, troubleshot system issues, assisted with onboarding, and coordinated with technical teams for escalations.",
    highlights: ["App Troubleshooting", "Client Onboarding", "Technical Escalations"],
    awards: [
      { title: "Best Onboarding Specialist", date: "February 2025" }
    ],
  },
  {
    role: "Seasonal Sales & Customer Service Representative",
    company: "Extra Space Storage / Life Storage / Storage Express",
    period: "05/2024 – 10/2024",
    type: "Seasonal",
    clients: "United States",
    description: "Provided first-level technical support for 50–70 Australian business clients daily via phone, email, and live chat. Resolved 85%+ of Level 1 POS software issues on first contact through troubleshooting and remote support. Escalated complex incidents while maintaining 100% documentation accuracy. Consistently met response time, resolution time, and quality KPIs.",
    highlights: ["Technical Support", "Remote Troubleshooting", "POS Software", "KPI Achievement"],
    awards: [
      { title: "Employee of the Month", date: "2 months" },
    ],
  },
  {
    role: "Customer Service Support",
    company: "Pizza Hut Deliverit (WFH)",
    period: "2022 – 2024",
    type: "Remote",
    clients: "USA",
    description: "Handled inbound customer service for a work-from-home setup, managing inquiries, complaints, and account-related concerns across multiple channels.",
    highlights: ["WFH Setup", "Inbound Support", "Account Management"],
    awards: [
      { title: "Best POS Support", date: "2023" },
    ],
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
                    <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground mt-1">
                      <Globe className="w-3 h-3 flex-shrink-0" />
                      <span>Clients: <span className="font-medium text-foreground">{exp.clients}</span></span>
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

                {/* Awards & Recognition */}
                {exp.awards && exp.awards.length > 0 && (
                  <div className="mt-4">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Award className="w-3 h-3 text-amber-500" />
                      <span className="text-[10px] font-semibold text-amber-500 uppercase tracking-wide">Awards & Recognition</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {exp.awards.map((award) => (
                        <div
                          key={award.title}
                          className="flex items-center justify-between px-3 py-2 rounded-lg border"
                          style={{ background: 'hsl(45 95% 53% / 0.06)', borderColor: 'hsl(45 95% 53% / 0.2)' }}
                        >
                          <span className="text-[11px] font-medium text-foreground">{award.title}</span>
                          {award.date && (
                            <span className="text-[10px] text-muted-foreground ml-3 whitespace-nowrap">{award.date}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;

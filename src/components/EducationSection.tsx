import { GraduationCap, Award, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const EDU_ACCENT = "#3b82f6";
const CERT_ACCENT = "#f59e0b";

const education = [
  {
    degree: "Bachelor of Science in Business Administration",
    major: "Major in Business Management",
    school: "Saint Therese of the Child of Jesus Institute of the Arts and Sciences",
    location: "Pasay, Manila, Philippines",
    year: "Graduated 2013",
    details: "Focused on business management principles, organizational behavior, and communication strategies applicable to customer-facing roles.",
  },
  {
    degree: "Secondary Education",
    major: "",
    school: "Coto High School",
    location: "Masinloc, Zambales",
    year: "",
    details: "",
  },
];

const certifications = [
  { name: "Salesforce Certified Associate", issuer: "Salesforce" },
  { name: "HubSpot Customer Service Certification", issuer: "HubSpot Academy" },
  { name: "Zoho CRM Certified Consultant", issuer: "Zoho" },
  { name: "Microsoft 365 Fundamentals", issuer: "Microsoft" },
  { name: "Customer Service Fundamentals", issuer: "Coursera" },
  { name: "IT Support Professional Certificate", issuer: "Google" },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-white py-24">
      <div className="container mx-auto px-6">

        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-widest uppercase text-primary text-center mb-3">
          Background & Credentials
        </p>
        <h2 className="section-title">Education & Certifications</h2>
        <div className="section-title-underline" />
        <p className="text-muted-foreground text-center text-sm mb-14 -mt-6">
          Academic foundation and professional development milestones
        </p>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `color-mix(in srgb, ${EDU_ACCENT} 12%, white)`, color: EDU_ACCENT }}>
                <GraduationCap className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">Education</h3>
            </div>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <Reveal key={i} delay={i * 90}>
                  <div className="tool-card group soft-card p-5" style={{ ["--accent" as string]: EDU_ACCENT }}>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-foreground text-sm leading-snug">{edu.degree}</h4>
                      {edu.year && <span className="text-[10px] text-muted-foreground whitespace-nowrap mt-0.5">{edu.year}</span>}
                    </div>
                    {edu.major && <p className="text-xs font-medium mb-0.5" style={{ color: EDU_ACCENT }}>{edu.major}</p>}
                    <p className="text-xs font-medium text-foreground mb-0.5">{edu.school}</p>
                    <p className="text-[10px] text-muted-foreground mb-2">{edu.location}</p>
                    {edu.details && <p className="text-xs text-muted-foreground leading-relaxed">{edu.details}</p>}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `color-mix(in srgb, ${CERT_ACCENT} 14%, white)`, color: CERT_ACCENT }}>
                <Award className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">Certifications</h3>
            </div>
            <div className="grid gap-2.5">
              {certifications.map((cert, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div
                    className="skill-chip group soft-card flex items-start gap-3 p-3.5"
                    style={{ ["--accent" as string]: CERT_ACCENT }}
                  >
                    <div className="skill-ico w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground leading-tight">{cert.name}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;

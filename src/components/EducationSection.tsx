import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

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
              <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-3.5 h-3.5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">Education</h3>
            </div>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <div key={i} className="soft-card p-5 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-semibold text-foreground text-sm leading-snug">{edu.degree}</h4>
                    {edu.year && <span className="text-[10px] text-muted-foreground whitespace-nowrap mt-0.5">{edu.year}</span>}
                  </div>
                  {edu.major && <p className="text-xs text-primary font-medium mb-0.5">{edu.major}</p>}
                  <p className="text-xs font-medium text-foreground mb-0.5">{edu.school}</p>
                  <p className="text-[10px] text-muted-foreground mb-2">{edu.location}</p>
                  {edu.details && <p className="text-xs text-muted-foreground leading-relaxed">{edu.details}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                <Award className="w-3.5 h-3.5 text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">Certifications</h3>
            </div>
            <div className="soft-card p-5">
              <ul className="space-y-4">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground leading-tight">{cert.name}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{cert.issuer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;

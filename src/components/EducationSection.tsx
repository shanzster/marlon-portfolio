import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "University Name Here",
    year: "2016 – 2020",
    details: "Relevant coursework in communication, business management, and IT fundamentals.",
  },
  {
    degree: "Senior High School – ICT Strand",
    school: "School Name Here",
    year: "2014 – 2016",
    details: "Focused on information and communications technology.",
  },
];

const certifications = [
  "Customer Service Fundamentals – Coursera",
  "HubSpot Customer Service Certification",
  "Zendesk Support Administrator",
  "Google IT Support Professional Certificate",
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 gradient-section-cool">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Education & Certifications</h2>
        <p className="text-muted-foreground text-center mb-12 text-sm">
          Academic background and professional development
        </p>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-5 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-primary" />
              </div>
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="neu-card p-5">
                  <h4 className="font-semibold text-foreground text-sm mb-1">{edu.degree}</h4>
                  <p className="text-xs text-primary font-semibold mb-0.5">{edu.school}</p>
                  <p className="text-[10px] text-muted-foreground mb-2 font-medium">{edu.year}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-5 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Award className="w-4 h-4 text-accent" />
              </div>
              Certifications
            </h3>
            <div className="neu-card p-5">
              <ul className="space-y-4">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-foreground leading-relaxed">{cert}</span>
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

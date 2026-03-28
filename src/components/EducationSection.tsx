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
    <section id="education" className="py-20 gradient-subtle">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground text-center mb-3">
          Education & Certifications
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-sm">
          Academic background and professional development
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="neu-card p-5">
                  <h4 className="font-semibold text-foreground text-sm mb-1">{edu.degree}</h4>
                  <p className="text-xs text-primary font-medium mb-1">{edu.school}</p>
                  <p className="text-xs text-muted-foreground mb-2">{edu.year}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-accent" />
              <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
            </div>
            <div className="neu-card p-5">
              <ul className="space-y-3">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{cert}</span>
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

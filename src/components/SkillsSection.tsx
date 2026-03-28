import {
  Headphones,
  MessageSquare,
  Clock,
  Shield,
  Users,
  Heart,
  Zap,
  Target,
} from "lucide-react";

const skills = [
  { icon: Headphones, label: "Customer Support", level: 95 },
  { icon: MessageSquare, label: "Live Chat Support", level: 90 },
  { icon: Clock, label: "Time Management", level: 88 },
  { icon: Shield, label: "Conflict Resolution", level: 92 },
  { icon: Users, label: "Team Collaboration", level: 85 },
  { icon: Heart, label: "Empathy & Patience", level: 95 },
  { icon: Zap, label: "Quick Problem Solving", level: 90 },
  { icon: Target, label: "Goal-Oriented", level: 88 },
];

const communicationSkills = [
  { label: "English (Written)", level: 90 },
  { label: "English (Verbal)", level: 85 },
  { label: "Filipino (Native)", level: 100 },
  { label: "Active Listening", level: 95 },
  { label: "Email Etiquette", level: 92 },
  { label: "Phone Etiquette", level: 88 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 gradient-section-cool">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="text-muted-foreground text-center mb-12 text-sm">
          Core competencies that drive results
        </p>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Professional Skills */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-5 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded-full bg-primary" />
              Professional Skills
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div key={skill.label} className="neu-card-sm p-4 flex flex-col items-center text-center gap-2.5 hover:scale-[1.02] transition-transform duration-200">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <skill.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[11px] font-semibold text-foreground leading-tight">{skill.label}</span>
                  <div className="w-full h-1.5 rounded-full bg-muted/60 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary/80"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Communication Skills */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-5 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded-full bg-accent" />
              Communication Skills
            </h3>
            <div className="space-y-3">
              {communicationSkills.map((skill) => (
                <div key={skill.label} className="neu-card-sm p-4">
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-sm font-medium text-foreground">{skill.label}</span>
                    <span className="text-[10px] text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-full">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-muted/60 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${skill.level}%`,
                        background: 'linear-gradient(90deg, hsl(195 70% 42%) 0%, hsl(25 95% 53%) 100%)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

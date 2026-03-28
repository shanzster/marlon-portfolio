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
    <section id="skills" className="py-20 gradient-subtle">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground text-center mb-3">
          Skills & Expertise
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-sm">
          Core competencies that drive results
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Professional Skills */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Professional Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div key={skill.label} className="neu-card-sm p-4 flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <skill.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-foreground">{skill.label}</span>
                  <div className="w-full h-1.5 rounded-full bg-muted neu-inset overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Communication Skills */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Communication Skills
            </h3>
            <div className="space-y-4">
              {communicationSkills.map((skill) => (
                <div key={skill.label} className="neu-card-sm p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.label}</span>
                    <span className="text-xs text-muted-foreground font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-muted neu-inset overflow-hidden">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${skill.level}%` }}
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

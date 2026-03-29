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
    <section id="skills" className="section-white py-24">
      <div className="container mx-auto px-6">

        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-widest uppercase text-primary text-center mb-3">
          What I Bring
        </p>
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="section-title-underline" />
        <p className="text-muted-foreground text-center text-sm mb-14 -mt-6">
          Core competencies built through years of hands-on customer service
        </p>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* Professional Skills */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1 h-4 rounded-full bg-primary" />
              <h3 className="text-sm font-semibold text-foreground">Professional Skills</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="soft-card p-4 flex flex-col items-center text-center gap-2.5 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center" style={{ background: 'hsl(25 95% 53% / 0.08)' }}>
                    <skill.icon style={{ width: 18, height: 18 }} className="text-primary" />
                  </div>
                  <span className="text-[11px] font-semibold text-foreground leading-tight">{skill.label}</span>
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-[9px] text-muted-foreground">Proficiency</span>
                      <span className="text-[9px] font-semibold text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1 rounded-full bg-muted overflow-hidden">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Communication Skills */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1 h-4 rounded-full bg-accent" />
              <h3 className="text-sm font-semibold text-foreground">Communication Skills</h3>
            </div>
            <div className="space-y-3">
              {communicationSkills.map((skill) => (
                <div key={skill.label} className="soft-card p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.label}</span>
                    <span className="text-[10px] text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${skill.level}%` }} />
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

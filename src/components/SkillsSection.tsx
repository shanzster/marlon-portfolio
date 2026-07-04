import {
  Headphones,
  MessageSquare,
  Clock,
  Shield,
  Users,
  Heart,
  Zap,
  Target,
  Monitor,
  Database,
  Wifi,
  BarChart2,
  FileText,
  PhoneCall,
  Mail,
  Globe,
  Settings,
  Layers,
  Search,
  BookOpen,
} from "lucide-react";

const technicalSkills = [
  { icon: Monitor, label: "CRM Software" },
  { icon: Database, label: "POS Systems" },
  { icon: Wifi, label: "Remote Desktop Tools" },
  { icon: PhoneCall, label: "VoIP & Softphones" },
  { icon: Mail, label: "Email Support Platforms" },
  { icon: BarChart2, label: "Reporting & Analytics" },
  { icon: Settings, label: "App Troubleshooting" },
  { icon: Layers, label: "Ticketing Systems" },
  { icon: Globe, label: "Web-Based Tools" },
  { icon: Search, label: "Knowledge Base Navigation" },
  { icon: FileText, label: "Documentation" },
  { icon: BookOpen, label: "Client Onboarding" },
];

const operationalSkills = [
  { icon: Headphones, label: "Customer Support" },
  { icon: MessageSquare, label: "Live Chat Support" },
  { icon: Clock, label: "Time Management" },
  { icon: Shield, label: "Conflict Resolution" },
  { icon: Users, label: "Team Collaboration" },
  { icon: Heart, label: "Empathy & Patience" },
  { icon: Zap, label: "Quick Problem Solving" },
  { icon: Target, label: "Goal-Oriented" },
  { icon: PhoneCall, label: "Phone Etiquette" },
  { icon: Mail, label: "Email Etiquette" },
  { icon: BookOpen, label: "Active Listening" },
  { icon: Globe, label: "Multilingual Communication" },
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

          {/* Technical Skills */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1 h-4 rounded-full bg-primary" />
              <h3 className="text-sm font-semibold text-foreground">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {technicalSkills.map((skill) => (
                <div
                  key={skill.label}
                  className="soft-card flex items-center gap-2 px-3.5 py-2.5 hover:shadow-md transition-shadow duration-200"
                >
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsl(25 95% 53% / 0.08)" }}
                  >
                    <skill.icon style={{ width: 14, height: 14 }} className="text-primary" />
                  </div>
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Operational Skills */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1 h-4 rounded-full bg-accent" />
              <h3 className="text-sm font-semibold text-foreground">Operational Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {operationalSkills.map((skill) => (
                <div
                  key={skill.label}
                  className="soft-card flex items-center gap-2 px-3.5 py-2.5 hover:shadow-md transition-shadow duration-200"
                >
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsl(25 95% 53% / 0.08)" }}
                  >
                    <skill.icon style={{ width: 14, height: 14 }} className="text-primary" />
                  </div>
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">{skill.label}</span>
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

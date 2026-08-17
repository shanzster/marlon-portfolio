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
  ShoppingBag,
  Package,
  Sparkles,
  Bot,
  Cpu,
  HeartHandshake,
  type LucideIcon,
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
  { icon: ShoppingBag, label: "Shopify Backend" },
  { icon: Package, label: "Product Listing Management" },
  { icon: Bot, label: "AI-Assisted Workflows" },
  { icon: Sparkles, label: "AI Product Imaging" },
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

type Skill = { icon: LucideIcon; label: string };

const SkillPanel = ({
  title,
  subtitle,
  icon: Icon,
  accent,
  skills,
}: {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  accent: string;
  skills: Skill[];
}) => (
  <div
    className="soft-card p-6"
    style={{ borderTop: `3px solid ${accent}` }}
  >
    {/* Panel header */}
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `color-mix(in srgb, ${accent} 14%, white)`, color: accent }}
        >
          <Icon className="w-4.5 h-4.5" style={{ width: 18, height: 18 }} />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground leading-tight">{title}</h3>
          <p className="text-[11px] text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <span
        className="text-[11px] font-bold px-2.5 py-1 rounded-full leading-none"
        style={{ background: `color-mix(in srgb, ${accent} 12%, white)`, color: accent }}
      >
        {skills.length}
      </span>
    </div>

    {/* Chips */}
    <div className="flex flex-wrap gap-2.5">
      {skills.map((skill, i) => (
        <div
          key={skill.label}
          className="skill-chip group animate-fade-up flex items-center gap-2 px-3 py-2 rounded-xl border bg-white cursor-default"
          style={{
            ["--accent" as string]: accent,
            animationDelay: `${i * 35}ms`,
            borderColor: `color-mix(in srgb, ${accent} 16%, hsl(220 13% 91%))`,
          }}
        >
          <div className="skill-ico w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0">
            <skill.icon style={{ width: 14, height: 14 }} />
          </div>
          <span className="text-xs font-medium text-foreground whitespace-nowrap">{skill.label}</span>
        </div>
      ))}
    </div>
  </div>
);

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
          Core competencies built through 7+ years of hands-on customer service
        </p>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
          <SkillPanel
            title="Technical Skills"
            subtitle="Tools, systems & platforms"
            icon={Cpu}
            accent="#3b82f6"
            skills={technicalSkills}
          />
          <SkillPanel
            title="Operational Skills"
            subtitle="People, service & soft skills"
            icon={HeartHandshake}
            accent="#14b8a6"
            skills={operationalSkills}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

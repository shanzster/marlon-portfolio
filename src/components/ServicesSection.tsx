import { PhoneCall, Mail, MessageSquare, Users, ShoppingBag, ClipboardList, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: PhoneCall,
    accent: "#3b82f6",
    title: "Inbound & Outbound Calls",
    desc: "Professional phone support that resolves issues on the first call and keeps customers calm and cared for.",
    tags: ["Support calls", "Follow-ups", "Cold & warm outreach"],
  },
  {
    icon: Mail,
    accent: "#14b8a6",
    title: "Email Support",
    desc: "Clear, on-brand email responses that clear your inbox queue and keep every customer in the loop.",
    tags: ["Inbox management", "Ticket replies", "Escalations"],
  },
  {
    icon: MessageSquare,
    accent: "#8b5cf6",
    title: "Live Chat Support",
    desc: "Real-time storefront chat that answers questions instantly, captures leads, and closes sales.",
    tags: ["Storefront chat", "Lead capture", "Quick resolution"],
  },
  {
    icon: Users,
    accent: "#0ea5e9",
    title: "CRM & Ticket Management",
    desc: "Organized pipelines and clean records across HubSpot, Salesforce, Zoho, and Genesys — nothing slips.",
    tags: ["Pipelines", "Case tracking", "Contact history"],
  },
  {
    icon: ShoppingBag,
    accent: "#22c55e",
    title: "Shopify Backend & Orders",
    desc: "Product listings, catalog setup, and order processing that keep your store running behind the scenes.",
    tags: ["Product listings", "Order processing", "Backend ops"],
  },
  {
    icon: ClipboardList,
    accent: "#f59e0b",
    title: "Admin & Data Entry",
    desc: "Reliable back-office support — accurate data entry, scheduling, and the small tasks that add up.",
    tags: ["Data entry", "Scheduling", "Documentation"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-white py-24">
      <div className="container mx-auto px-6">

        <p className="text-xs font-semibold tracking-widest uppercase text-primary text-center mb-3">
          How I Can Help
        </p>
        <h2 className="section-title">What I Do For You</h2>
        <div className="section-title-underline" />
        <p className="text-muted-foreground text-center text-sm mb-10 -mt-6">
          Full-service customer support — pick what your team needs, or hand me all of it
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {services.map(({ icon: Icon, accent, title, desc, tags }, i) => (
            <Reveal key={title} delay={i * 70}>
              <div
                className="group relative h-full soft-card p-6 flex flex-col gap-4 transition-shadow duration-300 hover:shadow-xl"
                style={{ ["--accent" as string]: accent }}
              >
                <ArrowUpRight
                  className="absolute top-5 right-5 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: accent }}
                />

                {/* Icon tile */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `color-mix(in srgb, ${accent} 12%, white)` }}
                >
                  <Icon className="w-6 h-6" style={{ color: accent }} />
                </div>

                <div>
                  <h3 className="font-bold text-foreground text-base leading-tight mb-1.5">{title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{desc}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold px-2 py-1 rounded-full border"
                      style={{
                        color: accent,
                        borderColor: `color-mix(in srgb, ${accent} 28%, transparent)`,
                        background: `color-mix(in srgb, ${accent} 8%, white)`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#contact" className="btn-primary">
            Let's Work Together
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;

import avatarPlaceholder from "@/assets/avatar-placeholder.png";
import { MapPin, Mail, Briefcase } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="gradient-hero min-h-screen flex items-center pt-14">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Avatar - shows on top for mobile, right side for desktop */}
          <div className="lg:order-2 flex-shrink-0">
            <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden avatar-glow border-4 border-white/60">
              <img
                src={avatarPlaceholder}
                alt="Marlon Elago"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="lg:order-1 max-w-xl">
            <div className="inline-block mb-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                Customer Representative Agent
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4">
              Hi, I'm{" "}
              <span className="text-primary">Marlon Elago</span>
            </h1>
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-8">
              Dedicated customer service professional with a passion for
              delivering exceptional support experiences. I specialize in
              resolving issues efficiently while maintaining positive
              relationships with every customer.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <div className="neu-card-sm px-4 py-2 flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Philippines</span>
              </div>
              <div className="neu-card-sm px-4 py-2 flex items-center gap-2 text-xs text-muted-foreground">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span>marlon@email.com</span>
              </div>
              <div className="neu-card-sm px-4 py-2 flex items-center gap-2 text-xs text-muted-foreground">
                <Briefcase className="w-3.5 h-3.5 text-primary" />
                <span>Open to Work</span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="gradient-btn-primary px-7 py-3 rounded-xl text-primary-foreground font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
              >
                Get in Touch
              </a>
              <a
                href="#video"
                className="neu-card-sm px-7 py-3 text-foreground font-semibold text-sm hover:scale-[1.02] transition-all duration-200"
              >
                Watch Intro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

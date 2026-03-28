import avatarPlaceholder from "@/assets/avatar-placeholder.png";
import { MapPin, Mail, Phone, Briefcase } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="gradient-hero min-h-[90vh] flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="order-2 md:order-1">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">
              Customer Representative Agent
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Hi, I'm{" "}
              <span className="text-primary">Marlon Elago</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Dedicated customer service professional with a passion for
              delivering exceptional support experiences. I specialize in
              resolving issues efficiently while maintaining positive
              relationships with every customer.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="neu-card-sm px-4 py-2.5 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Philippines</span>
              </div>
              <div className="neu-card-sm px-4 py-2.5 flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>marlon@email.com</span>
              </div>
              <div className="neu-card-sm px-4 py-2.5 flex items-center gap-2 text-sm text-muted-foreground">
                <Briefcase className="w-4 h-4 text-primary" />
                <span>Open to Work</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="neu-card-sm px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </a>
              <a
                href="#video"
                className="neu-card-sm px-6 py-3 text-foreground font-semibold text-sm hover:opacity-80 transition-opacity"
              >
                Watch Intro
              </a>
            </div>
          </div>

          {/* Right - Avatar */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="neu-card w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden flex items-center justify-center p-2">
              <img
                src={avatarPlaceholder}
                alt="Marlon Elago"
                width={320}
                height={320}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

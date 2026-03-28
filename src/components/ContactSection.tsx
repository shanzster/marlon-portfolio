import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground text-center mb-3">
          Get in Touch
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-sm">
          I'd love to hear from you
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <a href="mailto:marlon@email.com" className="neu-card p-6 flex flex-col items-center text-center gap-3 hover:translate-y-[-2px] transition-transform">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Email</p>
              <p className="text-xs text-muted-foreground">marlon@email.com</p>
            </div>
          </a>

          <a href="tel:+639123456789" className="neu-card p-6 flex flex-col items-center text-center gap-3 hover:translate-y-[-2px] transition-transform">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Phone</p>
              <p className="text-xs text-muted-foreground">+63 912 345 6789</p>
            </div>
          </a>

          <div className="neu-card p-6 flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Location</p>
              <p className="text-xs text-muted-foreground">Philippines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

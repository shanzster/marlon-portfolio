import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 gradient-section-warm">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Get in Touch</h2>
        <p className="text-muted-foreground text-center mb-12 text-sm">
          I'd love to hear from you
        </p>

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          <a href="mailto:marlon@email.com" className="neu-card p-6 flex flex-col items-center text-center gap-3 hover:scale-[1.03] transition-transform duration-200">
            <div className="w-12 h-12 rounded-xl gradient-btn-primary flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Email</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">marlon@email.com</p>
            </div>
          </a>

          <a href="tel:+639123456789" className="neu-card p-6 flex flex-col items-center text-center gap-3 hover:scale-[1.03] transition-transform duration-200">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
              <Phone className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Phone</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">+63 912 345 6789</p>
            </div>
          </a>

          <div className="neu-card p-6 flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Location</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">Philippines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

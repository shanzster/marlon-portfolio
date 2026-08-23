import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const ContactSection = () => {
  return (
    <section id="contact" className="section-muted py-24">
      <div className="container mx-auto px-6">

        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-widest uppercase text-primary text-center mb-3">
          Let's Connect
        </p>
        <h2 className="section-title">Get in Touch</h2>
        <div className="section-title-underline" />
        <p className="text-muted-foreground text-center text-sm mb-14 -mt-6">
          Open to new opportunities — feel free to reach out anytime
        </p>

        <div className="max-w-2xl mx-auto">
          <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <a
              href="mailto:elagomarlon@gmail.com"
              className="soft-card lift-hover p-6 flex flex-col items-center text-center gap-3 group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white text-primary transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">Email</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">elagomarlon@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+639455812187"
              className="soft-card lift-hover p-6 flex flex-col items-center text-center gap-3 group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white text-primary transition-colors duration-200">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">Phone</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">+63 945 581 2187</p>
              </div>
            </a>

            <div className="soft-card lift-hover p-6 flex flex-col items-center text-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white text-primary transition-colors duration-200">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">Location</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">Iba, Zambales, Philippines</p>
                <p className="text-[10px] text-primary font-medium mt-0.5">Open for Remote & Onsite</p>
              </div>
            </div>
          </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={120}>
          <div className="soft-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-foreground">Ready to work together?</p>
              <p className="text-xs text-muted-foreground mt-0.5">Send me a message and I'll get back to you within 24 hours.</p>
            </div>
            <a
              href="mailto:elagomarlon@gmail.com"
              className="btn-primary flex items-center gap-2 whitespace-nowrap"
            >
              Send a Message
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;

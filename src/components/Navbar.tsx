import { useState } from "react";

const allLinks = [
  { label: "Services", href: "#services" },
  { label: "Tools", href: "#tools" },
  { label: "Showcase", href: "#gallery" },
  { label: "Experience", href: "#experience" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const leftLinks = allLinks.slice(0, 4);
const rightLinks = allLinks.slice(4);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
        <div className="container mx-auto px-6 h-14 flex items-center justify-center gap-6">

          {/* Left links — desktop only */}
          <div className="hidden md:flex items-center gap-6">
            {leftLinks.map((link) => (
              <a key={link.label} href={link.href}
                className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* Logo — desktop: scroll to top, mobile: toggle menu */}
          <button
            onClick={() => {
              if (window.innerWidth < 768) {
                setOpen(!open);
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex-shrink-0 focus:outline-none"
            aria-label="Toggle menu"
          >
            <img src="/logo.png" alt="Marlon Elago" className="h-8 w-auto" />
          </button>

          {/* Right links — desktop only */}
          <div className="hidden md:flex items-center gap-6">
            {rightLinks.map((link) => (
              <a key={link.label} href={link.href}
                className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>

        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-md md:hidden">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {allLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-1 border-b border-border/40 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

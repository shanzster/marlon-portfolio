const Navbar = () => {
  const links = [
    { label: "Skills", href: "#skills" },
    { label: "Tools", href: "#tools" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-bold text-foreground text-sm">
          Marlon<span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

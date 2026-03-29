const Navbar = () => {
  const leftLinks = [
    { label: "Tools", href: "#tools" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
  ];

  const rightLinks = [
    { label: "Education", href: "#education" },
    { label: "Setup", href: "#setup" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto px-6 h-14 flex items-center justify-center gap-6">
        {/* Left links */}
        <div className="hidden md:flex items-center gap-6">
          {leftLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Logo center */}
        <a href="#" className="flex-shrink-0">
          <img src="/logo.png" alt="Marlon Elago" className="h-8 w-auto" />
        </a>

        {/* Right links */}
        <div className="hidden md:flex items-center gap-6">
          {rightLinks.map((link) => (
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

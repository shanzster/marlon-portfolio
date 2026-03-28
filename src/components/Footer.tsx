const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50 gradient-section-cool">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Marlon Elago. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

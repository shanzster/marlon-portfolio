const Footer = () => {
  return (
    <footer className="py-10 border-t border-border bg-background">
      <div className="container mx-auto px-6 flex flex-col items-center gap-4">
        <img src="/logo.png" alt="Marlon Elago" className="h-10 w-auto opacity-80" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Marlon Elago. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

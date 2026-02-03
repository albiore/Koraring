export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="kora-container">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-semibold tracking-tight">KORA</div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#science" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Science
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

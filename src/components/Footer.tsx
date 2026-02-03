export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="kora-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-semibold tracking-tight">KORA</div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KORA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

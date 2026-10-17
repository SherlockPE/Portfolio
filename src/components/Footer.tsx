export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-theme-border/80 bg-theme-bg/60 backdrop-blur-xs py-8 text-xs text-theme-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>
          © {currentYear} Fabricio López Reyes · Torrejón de Ardoz, Madrid.
        </span>
        <span className="font-mono text-[11px] text-theme-faint">
          Built with React 19 & Tailwind CSS v4
        </span>
      </div>
    </footer>
  );
}

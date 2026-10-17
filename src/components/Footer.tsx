export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-xs text-slate-500 dark:text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>
          © {currentYear} Fabricio López Reyes · Torrejón de Ardoz, Madrid.
        </span>
        <span className="font-mono text-[11px] text-slate-400">
          Built with React 19 & Tailwind CSS
        </span>
      </div>
    </footer>
  );
}

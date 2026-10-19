export default function BackgroundDecorations() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transform-gpu"
      style={{ transform: "translateZ(0)", contain: "strict" }}
      aria-hidden="true"
    >
      {/* Fondo cuadriculado */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 95% 75% at 50% 15%, black 45%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 95% 75% at 50% 15%, black 45%, transparent 95%)",
        }}
      />

      <div className="absolute -top-32 -right-24 sm:-right-48 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] rounded-full bg-gradient-to-br from-blue-500/25 via-indigo-500/15 to-transparent blur-[140px] opacity-70 dark:opacity-60 transition-opacity duration-700" />
      <div className="absolute top-[38%] -left-36 sm:-left-60 w-[450px] sm:w-[680px] h-[450px] sm:h-[680px] rounded-full bg-gradient-to-tr from-indigo-500/15 via-blue-500/10 to-emerald-500/5 blur-[130px] opacity-60 dark:opacity-45 transition-opacity duration-700" />
      <div className="absolute -bottom-20 -right-24 sm:-right-40 w-[420px] sm:w-[620px] h-[420px] sm:h-[620px] rounded-full bg-gradient-to-tl from-blue-600/20 via-indigo-600/10 to-transparent blur-[130px] opacity-65 dark:opacity-50 transition-opacity duration-700" />
    </div>
  );
}


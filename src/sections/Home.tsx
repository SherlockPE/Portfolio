import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";

export default function Home() {
  const { language } = useApp();
  const t = translations[language].home;

  // Generamos un array aleatorio para las estrellas de fondo
  const stars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${3 + Math.random() * 4}s`,
    size: Math.random() > 0.5 ? "w-1 h-1" : "w-0.5 h-0.5",
  }));

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center overflow-hidden px-4 py-12 md:flex-row md:px-8">
      
      {/* 1. Estrellitas de fondo (Twinkling Stars) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute rounded-full bg-slate-400 dark:bg-white animate-twinkle ${star.size}`}
            style={{
              top: star.top,
              left: star.left,
              "--delay": star.delay,
              "--duration": star.duration,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Contenedor Principal (Capa superior al fondo) */}
      <div className="z-10 mx-auto flex max-w-7xl w-full flex-col-reverse items-center justify-between gap-12 md:flex-row">
        
        {/* TEXTO E INTRODUCCIÓN */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-xl">
          <span className="text-sm font-semibold tracking-wider text-blue-500 uppercase mb-2">
            {t.greeting}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-slate-950 dark:text-white">
            Fabricio
          </h1>
          <h2 className="mt-3 text-2xl font-bold text-slate-600 dark:text-slate-400 sm:text-3xl">
            {t.role}
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400 max-w-md">
            Especializado en ingeniería de software, desarrollo de sistemas de bajo nivel y arquitectura web moderna.
          </p>
          
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              {t.cta}
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-slate-300 dark:border-slate-700 px-6 py-3 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all cursor-pointer"
            >
              Contacto
            </a>
          </div>
        </div>

        {/* 2. ÁREA DE ARTE / ANIMACIÓN DE LA TIERRA */}
        <div className="relative flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96">
          
          {/* Planeta Tierra Rotando (SVG estilizado en el fondo del arte) */}
          <div className="absolute inset-0 animate-slow-spin opacity-20 dark:opacity-40 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-blue-500 fill-none stroke-[0.5]">
              <circle cx="50" cy="50" r="45" strokeDasharray="2 2" />
              <circle cx="50" cy="50" r="35" />
              {/* Líneas de paralelos / meridianos simula rotación tridimensional */}
              <ellipse cx="50" cy="50" rx="45" ry="15" />
              <ellipse cx="50" cy="50" rx="15" ry="45" />
              <path d="M50 5 L50 95 M5 50 L95 50" />
            </svg>
          </div>

          {/* 3. Contenedor de Arte Sentado (Floating Wrapper) */}
          <div className="absolute z-10 w-4/5 h-4/5 animate-float flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-800 rounded-2xl bg-white/10 backdrop-blur-xs">
            {/* TODO: Reemplazar este div por tu tag <img src="..." /> cuando tengas el arte listo */}
            <div className="text-center p-4">
              <span className="text-4xl block mb-2">👨‍💻</span>
              <p className="text-xs font-mono text-slate-400">
                [ Arte de mi sentado ]<br />🎨 Comming Soon
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. SubScroll (Indicador inferior de scroll animado) */}
      <div className="absolute bottom-6 left-120 flex flex-col items-center gap-2 pointer-events-none opacity-60">
        <span className="text-xs font-mono tracking-widest uppercase text-slate-400">
          {t.scrollDown}
        </span>
        <div className="flex h-8 w-5 justify-center rounded-full border-2 border-slate-400 p-1 dark:border-slate-600">
          {/* Bolita del mouse que sube y baja */}
          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500" />
        </div>
      </div>

    </div>
  );
}
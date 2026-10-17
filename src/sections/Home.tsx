import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";
import InteractiveName from "../components/InteractiveName";

export default function Home() {
  const { language } = useApp();
  const t = translations[language].hero;

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl w-full flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* COLUMNA IZQUIERDA: Presentación e Identidad */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl z-10">
          {/* Badge de Disponibilidad en Vivo */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-theme-success/30 bg-theme-success-subtle text-theme-success text-xs font-mono font-medium mb-6 backdrop-blur-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{t.status}</span>
          </div>

          {/* Foto circular con halo de luz ambiental */}
          <div className="relative mb-6 group">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-500/35 via-indigo-500/25 to-blue-600/35 blur-lg opacity-60 group-hover:opacity-95 transition-opacity duration-500" />
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-4 ring-theme-border/70 shadow-2xl border-2 border-theme-bg transition-all duration-300 group-hover:scale-105">
              <img
                src="/linkedin_photo.jpg"
                alt="Fabricio López Reyes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Saludo */}
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-theme-faint mb-1">
            {t.greeting}
          </span>

          {/* Nombre Interactivo: 1 al cargar (Scramble), 3 en hover (Spotlight), 4 al clic (Copiar npx) */}
          <InteractiveName />

          <div className="mt-3 flex items-center gap-2 font-mono text-sm sm:text-base text-theme-muted font-semibold">
            <span>{t.role}</span>
          </div>

          {/* Descripción */}
          <p className="mt-5 text-base sm:text-lg text-theme-secondary leading-relaxed max-w-xl">
            {t.description}
          </p>

          {/* Botones de acción */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start items-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-theme-accent hover:bg-theme-accent-hover px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{t.cta}</span>
              <FiArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-theme-border hover:border-theme-border-glow bg-theme-card hover:bg-theme-card-hover px-6 py-3.5 text-sm font-semibold transition-all cursor-pointer text-theme-text shadow-xs backdrop-blur-sm"
            >
              <span>{t.contactBtn}</span>
            </a>

            {/* Enlaces directos a perfiles */}
            <div className="flex items-center gap-2 ml-2 pl-4 border-l border-theme-border">
              <a
                href="https://github.com/SherlockPE"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-theme-muted hover:text-theme-text hover:bg-theme-card transition-colors"
                title="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-theme-muted hover:text-theme-accent hover:bg-theme-card transition-colors"
                title="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Terminal Técnica & Métricas Reales */}
        <div className="w-full max-w-lg lg:max-w-md relative group">
          {/* Halo ambiental detrás de la terminal */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-transparent blur-xl opacity-60 group-hover:opacity-85 transition-opacity duration-500 -z-10" />

          {/* Tarjeta tipo Terminal Unix */}
          <div className="rounded-2xl border border-theme-border bg-theme-card shadow-2xl overflow-hidden backdrop-blur-xl">
            {/* Barra superior de terminal */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-theme-border-subtle bg-theme-card-header">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-xs font-bold text-theme-text">
                fabricio@42madrid: ~/stack
              </span>
              <div className="w-12" />
            </div>

            {/* Código en ejecución */}
            <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed space-y-3 bg-theme-card/90">
              <div className="flex items-start gap-2">
                <span className="text-theme-accent font-extrabold select-none text-sm">$</span>
                <span className="font-bold text-theme-text tracking-tight">
                  gcc -Wall -Wextra -Werror main.c -o portfolio
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-theme-accent font-extrabold select-none text-sm">$</span>
                <span className="font-bold text-theme-text tracking-tight">
                  ./portfolio --profile
                </span>
                <span className="inline-block w-2 h-4 bg-theme-text animate-pulse" />
              </div>

              {/* Salida formateada con foto y datos reales */}
              <div className="pt-2 border-t border-theme-border-subtle">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/profile_pic_doggy.png"
                    alt="Fabricio López Reyes"
                    className="w-14 h-14 rounded-xl object-cover ring-2 ring-theme-accent/40 shadow-md"
                  />
                  <div>
                    <p className="font-bold text-theme-text text-sm">
                      Fabricio López Reyes
                    </p>
                    <p className="text-xs text-theme-accent font-semibold">
                      42 Madrid Graduate
                    </p>
                    <p className="text-[11px] text-theme-muted">
                      Torrejón de Ardoz, Madrid
                    </p>
                  </div>
                </div>

                {/* Métricas reales destacadas */}
                <div className="grid grid-cols-2 gap-2 pt-2 text-center">
                  <div className="p-2.5 rounded-lg bg-theme-bg/80 border border-theme-border-subtle hover:border-theme-border-glow transition-colors">
                    <span className="block font-bold text-base text-theme-accent font-mono">
                      {t.stats.hackathonsVal}
                    </span>
                    <span className="text-[10px] text-theme-muted uppercase tracking-wider font-semibold">
                      {t.stats.hackathons}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-theme-bg/80 border border-theme-border-subtle hover:border-theme-border-glow transition-colors">
                    <span className="block font-bold text-base text-theme-text font-mono">
                      {t.stats.studentsVal}
                    </span>
                    <span className="text-[10px] text-theme-muted uppercase tracking-wider font-semibold">
                      {t.stats.students}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-theme-bg/80 border border-theme-border-subtle hover:border-theme-border-glow transition-colors">
                    <span className="block font-bold text-xs text-theme-text font-mono truncate">
                      {t.stats.techVal}
                    </span>
                    <span className="text-[10px] text-theme-muted uppercase tracking-wider font-semibold">
                      {t.stats.tech}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-theme-bg/80 border border-theme-border-subtle hover:border-theme-border-glow transition-colors">
                    <span className="block font-bold text-xs text-theme-success font-mono truncate">
                      {t.stats.schoolVal}
                    </span>
                    <span className="text-[10px] text-theme-muted uppercase tracking-wider font-semibold">
                      {t.stats.school}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

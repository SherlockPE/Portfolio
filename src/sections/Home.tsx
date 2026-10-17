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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{t.status}</span>
          </div>

          {/* Foto circular de mi perfil justo encima del nombre */}
          <div className="relative mb-5 group">
            <div className="w-48 h-48 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-4 ring-slate-100 dark:ring-slate-800 shadow-xl border-2 border-white dark:border-slate-900 transition-all duration-300 group-hover:scale-105 group-hover:ring-blue-500/40">
              <img
                src="/linkedin_photo.jpg"
                alt="Fabricio López Reyes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Saludo */}
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
            {t.greeting}
          </span>

          {/* Nombre Interactivo: 1 al cargar (Scramble), 3 en hover (Spotlight), 4 al clic (Copiar npx) */}
          <InteractiveName />

          <div className="mt-3 flex items-center gap-2 font-mono text-sm sm:text-base text-slate-600 dark:text-slate-300 font-semibold">
            <span>{t.role}</span>
          </div>

          {/* Descripción */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
            {t.description}
          </p>

          {/* Botones de acción */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start items-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-blue-500 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{t.cta}</span>
              <FiArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-3.5 text-sm font-semibold hover:border-slate-400 dark:hover:border-slate-600 transition-all cursor-pointer text-slate-800 dark:text-slate-200"
            >
              <span>{t.contactBtn}</span>
            </a>

            {/* Enlaces directos a perfiles */}
            <div className="flex items-center gap-2 ml-2 pl-4 border-l border-slate-200 dark:border-slate-800">
              <a
                href="https://github.com/SherlockPE"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Terminal Técnica & Métricas Reales */}
        <div className="w-full max-w-lg lg:max-w-md">
          {/* Tarjeta tipo Terminal Unix */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
            {/* Barra superior de terminal */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/70">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-xs font-bold text-black dark:text-white">
                fabricio@42madrid: ~/stack
              </span>
              <div className="w-12" />
            </div>

            {/* Código en ejecución */}
            <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed space-y-3 bg-white/95 dark:bg-slate-900/95">
              <div className="flex items-start gap-2">
                <span className="text-black dark:text-white font-extrabold select-none text-sm">$</span>
                <span className="font-bold text-black dark:text-white tracking-tight">
                  gcc -Wall -Wextra -Werror main.c -o portfolio
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-black dark:text-white font-extrabold select-none text-sm">$</span>
                <span className="font-bold text-black dark:text-white tracking-tight">
                  ./portfolio --profile
                </span>
                <span className="inline-block w-2 h-4 bg-black dark:bg-white animate-pulse" />
              </div>

              {/* Salida formateada con foto y datos reales */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/profile_pic_doggy.png"
                    alt="Fabricio López Reyes"
                    className="w-14 h-14 rounded-xl object-cover ring-2 ring-blue-500/30"
                  />
                  <div>
                    <p className="font-bold text-black dark:text-white text-sm">
                      Fabricio López Reyes
                    </p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                      42 Madrid Graduate
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Torrejón de Ardoz, Madrid
                    </p>
                  </div>
                </div>

                {/* Métricas reales destacadas */}
                <div className="grid grid-cols-2 gap-2 pt-2 text-center">
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60">
                    <span className="block font-bold text-base text-blue-600 dark:text-blue-400 font-mono">
                      {t.stats.hackathonsVal}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                      {t.stats.hackathons}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60">
                    <span className="block font-bold text-base text-black dark:text-white font-mono">
                      {t.stats.studentsVal}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                      {t.stats.students}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60">
                    <span className="block font-bold text-xs text-black dark:text-white font-mono truncate">
                      {t.stats.techVal}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                      {t.stats.tech}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60">
                    <span className="block font-bold text-xs text-emerald-600 dark:text-emerald-400 font-mono truncate">
                      {t.stats.schoolVal}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
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

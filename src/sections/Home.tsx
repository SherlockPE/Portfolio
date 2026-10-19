import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiArchlinux } from "react-icons/si";
import InteractiveName from "../components/InteractiveName";

export default function Home() {
  const { language } = useApp();
  const t = translations[language].hero;

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center px-4 pt-20 pb-16 sm:px-6 sm:pt-24 sm:pb-20 lg:px-8">
      <div className="mx-auto flex max-w-7xl w-full flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-theme-success/30 bg-theme-success-subtle text-theme-success text-xs font-mono font-medium mb-6 backdrop-blur-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{t.status}</span>
          </div>

          <div className="relative mb-6 group">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-500/35 via-indigo-500/25 to-blue-600/35 blur-lg opacity-60 group-hover:opacity-95 transition-opacity duration-500" />
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-4 ring-theme-border/70 shadow-2xl border-2 border-theme-bg transition-all duration-300 group-hover:scale-105">
              <picture>
                <source srcSet="/linkedin_photo.webp" type="image/webp" />
                <img
                  src="/linkedin_photo.jpg"
                  alt="Fabricio López Reyes"
                  width={192}
                  height={192}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
          </div>

          <span className="text-xs font-mono font-bold uppercase tracking-widest text-theme-faint mb-1">
            {t.greeting}
          </span>

          <InteractiveName />

          <div className="mt-3 flex items-center gap-2 font-mono text-sm sm:text-base text-theme-muted font-semibold">
            <span>{t.role}</span>
          </div>

          {/* Descripción */}
          <p className="mt-5 text-base sm:text-lg text-theme-secondary leading-relaxed max-w-xl">
            {t.description}
          </p>

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

        <div className="w-full max-w-lg lg:max-w-md relative group">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-transparent blur-xl opacity-60 group-hover:opacity-85 transition-opacity duration-500 -z-10" />

          <div className="rounded-2xl border border-theme-border bg-theme-card shadow-2xl overflow-hidden backdrop-blur-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-theme-border-subtle bg-theme-card-header">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-xs font-bold text-theme-text inline-flex items-center gap-1.5">
                <SiArchlinux className="w-3.5 h-3.5 text-[#1793d1]" title="Arch Linux" />
                <span>fabricio@archlinux: ~/stack</span>
              </span>
              <div className="w-12" />
            </div>

            <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed space-y-2.5 bg-theme-card/90">
              <div className="flex items-start gap-2">
                <span className="text-theme-accent font-extrabold select-none text-sm">$</span>
                <span className="font-bold text-theme-text tracking-tight">
                  make -s CFLAGS="-Wall -Wextra -Werror -pedantic -O2"
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-theme-muted pl-4">
                <span className="text-emerald-500 font-bold select-none">[OK]</span>
                <span>libdependencies.a &amp; portfolio ELF 64-bit compiled (0 warnings)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-theme-accent font-extrabold select-none text-sm">$</span>
                <span className="font-bold text-theme-text tracking-tight">
                  valgrind --leak-check=full ./portfolio
                </span>
                <span className="inline-block w-2 h-4 bg-theme-text animate-pulse" />
              </div>
              <div className="rounded-lg bg-slate-950/70 dark:bg-black/60 p-2.5 text-[11px] font-mono text-emerald-400 border border-emerald-500/25 space-y-0.5">
                <p>All heap blocks were freed -- no leaks are possible</p>
                <p className="text-slate-400">ERROR SUMMARY: 0 errors from 0 contexts</p>
              </div>

              <div className="pt-2 border-t border-theme-border-subtle">
                <div className="flex items-center gap-4 mb-4">
                  <picture>
                    <source srcSet="/profile_pic_doggy.webp" type="image/webp" />
                    <img
                      src="/profile_pic_doggy.png"
                      alt="Fabricio López Reyes"
                      width={56}
                      height={56}
                      loading="lazy"
                      decoding="async"
                      className="w-14 h-14 rounded-xl object-cover ring-2 ring-theme-accent/40 shadow-md"
                    />
                  </picture>
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

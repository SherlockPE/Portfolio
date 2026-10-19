import { useState, useMemo, useEffect, type ReactElement } from "react";
import { createPortal } from "react-dom";
import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import { allSkills, skillsData, type SkillItem, type SkillCategoryId } from "../data/skills";
import SectionHeading from "../components/SectionHeading";
import {
  SiC,
  SiCplusplus,
  SiLinux,
  SiGnubash,
  SiGit,
  SiDocker,
  SiPython,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiMongodb,
  SiUnity,
  SiWebassembly,
  SiCmake,
  SiPostgresql,
  SiNextdotjs,
  SiNodedotjs,
} from "react-icons/si";
import {
  FiCpu,
  FiTerminal,
  FiServer,
  FiLayers,
  FiShield,
  FiCheckCircle,
  FiDatabase,
  FiX,
  FiInfo,
} from "react-icons/fi";
import { TbBinary, TbBug } from "react-icons/tb";
import { VscDebugConsole, VscCircuitBoard } from "react-icons/vsc";

function getSkillIcon(iconKey: string): ReactElement {
  switch (iconKey) {
    case "c":
      return <SiC className="w-5 h-5 text-blue-500 shrink-0" />;
    case "cpp":
      return <SiCplusplus className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />;
    case "linux":
      return <SiLinux className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0" />;
    case "cpu":
      return <FiCpu className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />;
    case "server":
      return <FiServer className="w-5 h-5 text-cyan-500 dark:text-cyan-400 shrink-0" />;
    case "terminal":
      return <FiTerminal className="w-5 h-5 text-sky-500 dark:text-sky-400 shrink-0" />;
    case "binary":
      return <TbBinary className="w-5 h-5 text-indigo-500 dark:text-indigo-400 shrink-0" />;
    case "circuit":
      return <VscCircuitBoard className="w-5 h-5 text-purple-500 dark:text-purple-400 shrink-0" />;
    case "postgres":
      return <SiPostgresql className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0" />;
    case "sql":
      return <FiDatabase className="w-5 h-5 text-blue-500 dark:text-blue-400 shrink-0" />;
    case "node":
      return <SiNodedotjs className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />;
    case "debug":
      return <VscDebugConsole className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />;
    case "bug":
      return <TbBug className="w-5 h-5 text-rose-500 dark:text-rose-400 shrink-0" />;
    case "bash":
      return <SiGnubash className="w-5 h-5 text-slate-700 dark:text-slate-300 shrink-0" />;
    case "git":
      return <SiGit className="w-5 h-5 text-orange-500 shrink-0" />;
    case "docker":
      return <SiDocker className="w-5 h-5 text-sky-500 shrink-0" />;
    case "cmake":
      return <SiCmake className="w-5 h-5 text-red-500 shrink-0" />;
    case "typescript":
      return <SiTypescript className="w-5 h-5 text-blue-500 shrink-0" />;
    case "react":
      return <SiReact className="w-5 h-5 text-cyan-400 shrink-0" />;
    case "nextjs":
      return <SiNextdotjs className="w-5 h-5 text-slate-900 dark:text-white shrink-0" />;
    case "javascript":
      return <SiJavascript className="w-5 h-5 text-amber-400 shrink-0" />;
    case "tailwind":
      return <SiTailwindcss className="w-5 h-5 text-sky-400 shrink-0" />;
    case "vite":
      return <SiVite className="w-5 h-5 text-purple-400 shrink-0" />;
    case "wasm":
      return <SiWebassembly className="w-5 h-5 text-indigo-500 shrink-0" />;
    case "python":
      return <SiPython className="w-5 h-5 text-yellow-500 shrink-0" />;
    case "layers":
      return <FiLayers className="w-5 h-5 text-indigo-500 shrink-0" />;
    case "mongodb":
      return <SiMongodb className="w-5 h-5 text-emerald-500 shrink-0" />;
    case "unity":
      return <SiUnity className="w-5 h-5 text-slate-700 dark:text-slate-200 shrink-0" />;
    default:
      return <FiTerminal className="w-5 h-5 text-theme-accent shrink-0" />;
  }
}

export default function Skills() {
  const { language } = useApp();
  const t = translations[language].skills;

  const [activeCategory, setActiveCategory] = useState<SkillCategoryId>("all");
  const [activeModalSkill, setActiveModalSkill] = useState<SkillItem | null>(null);

  const categories = useMemo(() => [
    { id: "all" as const, label: t.filterAll, count: allSkills.length },
    {
      id: "systems" as const,
      label: t.filterSystems,
      count: allSkills.filter((s) => s.category === "systems").length,
    },
    {
      id: "fullstack" as const,
      label: t.filterFullstack,
      count: allSkills.filter((s) => s.category === "fullstack").length,
    },
    {
      id: "frontend" as const,
      label: t.filterFrontend,
      count: allSkills.filter((s) => s.category === "frontend").length,
    },
    {
      id: "devops" as const,
      label: t.filterDevops,
      count: allSkills.filter((s) => s.category === "devops").length,
    },
  ], [t]);

  const categoryNameMap = useMemo(() => {
    const map: Record<string, string> = {};
    for (const c of skillsData) {
      map[c.id] = c.categoryName[language] || c.id;
    }
    return map;
  }, [language]);

  const filteredSkills = useMemo(() => {
    if (activeCategory === "all") return allSkills;
    return allSkills.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (!activeModalSkill) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalSkill(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalSkill]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        number={t.number}
        title={t.title}
        subtitle={t.subtitle}
      />

      {/* Banner de rigor técnico en bajo nivel & Fullstack */}
      <div className="mb-8 p-5 rounded-2xl border border-theme-accent/30 bg-theme-accent-subtle/50 backdrop-blur-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-theme-accent text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
            <FiShield className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold font-mono text-theme-text uppercase tracking-wider flex items-center gap-2 flex-wrap">
              <span>{t.bannerTitle}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 font-mono border border-blue-500/30">
                {t.bannerPill}
              </span>
            </h4>
            <p className="text-xs text-theme-muted mt-0.5">
              {t.bannerDesc}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono font-medium text-theme-secondary shrink-0">
          <FiCheckCircle className="w-4 h-4 text-emerald-500" />
          <span>Zero Leaks &amp; ACID Certified</span>
        </div>
      </div>

      {/* Filtros por Categoría (Con suficiente margen para las tarjetas flotantes en hover) */}
      <div className="mb-14 sm:mb-16 flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all shrink-0 cursor-pointer ${
              activeCategory === cat.id
                ? "bg-theme-accent text-white shadow-md shadow-blue-500/20 scale-[1.02]"
                : "bg-theme-card border border-theme-border/80 text-theme-muted hover:text-theme-text hover:border-theme-accent/50 hover:bg-theme-card-hover"
            }`}
          >
            {cat.label} ({cat.count})
          </button>
        ))}
      </div>

      {/* Grid de Tecnologías: Tarjeta frontal limpia + Tarjetitas flotantes que suben en hover (Desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {filteredSkills.map((skill) => {
          const categoryName = categoryNameMap[skill.category] || skill.category;

          return (
            <div
              key={skill.id}
              onClick={() => setActiveModalSkill(skill)}
              className={`group relative rounded-2xl bg-white dark:bg-theme-card border transition-all duration-300 p-4 sm:p-4.5 flex items-center justify-between cursor-pointer select-none shadow-sm shadow-slate-200/80 dark:shadow-none hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 ${
                skill.highlight
                  ? "border-blue-400/60 dark:border-theme-accent/40 hover:border-theme-accent"
                  : "border-slate-300/90 dark:border-theme-border/80 hover:border-theme-accent/60 dark:hover:border-theme-border-glow hover:bg-slate-50/80 dark:hover:bg-theme-card-hover"
              }`}
            >
              {/* Tarjeta Frontal Principal: Solo se ve Icono, Nombre y Subtítulo/Badge */}
              <div className="flex items-center gap-3.5 min-w-0 flex-1">
                <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-theme-bg border border-slate-200 dark:border-theme-border-subtle flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:border-theme-accent/50 group-hover:shadow-md group-hover:shadow-blue-500/15 transition-all duration-300">
                  <div className="transition-transform duration-300 group-hover:animate-icon-pop flex items-center justify-center">
                    {getSkillIcon(skill.icon)}
                  </div>
                </div>

                <div className="flex flex-col min-w-0 pr-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono font-bold text-sm text-theme-text truncate group-hover:text-theme-accent transition-colors">
                      {skill.name}
                    </span>
                    {skill.highlight && (
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded-md bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30 shrink-0">
                        Core
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono text-theme-muted mt-0.5 truncate">
                    {skill.badge}
                  </span>
                </div>
              </div>

              {/* Indicador táctil en móvil */}
              <div className="md:hidden shrink-0 pl-1 text-theme-accent">
                <FiInfo className="w-4 h-4 opacity-70" />
              </div>

              {/* Tarjetitas flotantes que suben por detrás hacia arriba al hacer Hover (Desktop) */}
              <div className="hidden md:flex pointer-events-none absolute bottom-full left-0 right-0 mb-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out z-40 flex-col gap-1.5">
                {/* Tarjetita 1: Categoría */}
                <div className="self-start inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-theme-accent text-white font-mono text-[10px] font-bold shadow-md shadow-blue-500/20 uppercase tracking-wider">
                  <span>{categoryName}</span>
                </div>

                {/* Tarjetita 2: Más información técnica detallada */}
                <div className="p-3.5 rounded-xl bg-theme-card/95 border-2 border-theme-accent shadow-2xl shadow-blue-500/20 backdrop-blur-xl text-left relative">
                  <p className="text-xs font-mono text-theme-secondary leading-relaxed">
                    "{skill.description[language]}"
                  </p>
                  {/* Puntero sutil hacia la tarjeta inferior */}
                  <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-theme-card border-r-2 border-b-2 border-theme-accent rotate-45" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal / Dialog emergente centrado en pantalla mediante Portal a document.body (Sin desalineaciones por ancestros transform) */}
      {activeModalSkill &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setActiveModalSkill(null)}
          >
            <div
              className="relative w-full max-w-sm sm:max-w-md m-auto rounded-2xl bg-theme-card border-2 border-theme-accent p-6 sm:p-7 shadow-2xl backdrop-blur-xl animate-in zoom-in-95 duration-200 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón Cerrar (Esquina superior derecha) */}
              <button
                type="button"
                onClick={() => setActiveModalSkill(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-theme-bg border border-theme-border text-theme-muted hover:text-theme-text hover:border-theme-accent transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* Cabecera del Modal */}
              <div className="flex items-center gap-3.5 mb-4 pr-8">
                <div className="w-13 h-13 rounded-2xl bg-theme-bg border border-theme-border-subtle flex items-center justify-center shrink-0 shadow-md">
                  {getSkillIcon(activeModalSkill.icon)}
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-mono font-bold text-base sm:text-lg text-theme-text">
                      {activeModalSkill.name}
                    </h3>
                    {activeModalSkill.highlight && (
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                        Core Focus
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-theme-accent block font-medium">
                    {activeModalSkill.badge}
                  </span>
                </div>
              </div>

              {/* Tarjetita 1 en modal: Categoría */}
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-theme-accent text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                  {skillsData.find((c) => c.id === activeModalSkill.category)?.categoryName[language] ||
                    activeModalSkill.category}
                </span>
              </div>

              {/* Tarjetita 2 en modal: Descripción detallada */}
              <div className="p-4 sm:p-5 rounded-xl bg-theme-bg/85 border border-theme-border-subtle mb-6">
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-theme-muted mb-2 flex items-center gap-1.5">
                  <FiInfo className="w-3.5 h-3.5 text-theme-accent shrink-0" />
                  <span>Aplicación Técnica &amp; Dominio</span>
                </h4>
                <p className="text-xs sm:text-sm font-mono text-theme-secondary leading-relaxed">
                  "{activeModalSkill.description[language]}"
                </p>
              </div>

              {/* Botón de Cerrar grande al centro/abajo del modal */}
              <button
                type="button"
                onClick={() => setActiveModalSkill(null)}
                className="w-full py-3 rounded-xl bg-theme-accent text-white font-mono text-xs font-bold hover:bg-theme-accent-hover shadow-md shadow-blue-500/20 transition-all cursor-pointer text-center"
              >
                {language === "es" ? "Cerrar" : language === "pt" ? "Fechar" : "Close"}
              </button>
            </div>
          </div>,
          document.body
        )}

      {/* Nota sutil de interfaz */}
      <div className="mt-8 flex items-center justify-between text-xs font-mono text-theme-faint px-2">
        <p className="flex items-center gap-1.5">
          <FiInfo className="w-3.5 h-3.5 text-theme-accent shrink-0" />
          <span>
            {language === "es"
              ? "En ordenador pasa el cursor sobre cada tarjeta para desplegar las tarjetas de detalle hacia arriba. En móvil pulsa para abrir el visor centrado."
              : language === "pt"
                ? "No computador, passe o cursor sobre o cartão para ver os detalhes acima. No celular, toque para abrir o modal."
                : "On desktop hover over cards to float detail cards upward. On mobile tap to open the centered modal."}
          </span>
        </p>
        <p className="hidden sm:block">
          {filteredSkills.length} {language === "es" ? "tecnologías mostradas" : language === "pt" ? "tecnologias exibidas" : "technologies shown"}
        </p>
      </div>
    </div>
  );
}

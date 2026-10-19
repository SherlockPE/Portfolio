import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import { skillsData, type SkillCategory } from "../data/skills";
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
} from "react-icons/si";
import {
  FiCpu,
  FiTerminal,
  FiServer,
  FiLayers,
  FiZap,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";
import { TbBinary, TbBug } from "react-icons/tb";
import { VscDebugConsole, VscCircuitBoard } from "react-icons/vsc";
import type { ReactElement } from "react";

function getSkillIcon(iconKey: string): ReactElement {
  switch (iconKey) {
    case "c":
      return <SiC className="w-4 h-4 text-blue-500 shrink-0" />;
    case "cpp":
      return <SiCplusplus className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />;
    case "linux":
      return <SiLinux className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />;
    case "cpu":
      return <FiCpu className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />;
    case "server":
      return <FiServer className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0" />;
    case "terminal":
      return <FiTerminal className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0" />;
    case "binary":
      return <TbBinary className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0" />;
    case "circuit":
      return <VscCircuitBoard className="w-4 h-4 text-purple-500 dark:text-purple-400 shrink-0" />;
    case "debug":
      return <VscDebugConsole className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />;
    case "bug":
      return <TbBug className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0" />;
    case "bash":
      return <SiGnubash className="w-4 h-4 text-slate-700 dark:text-slate-300 shrink-0" />;
    case "git":
      return <SiGit className="w-4 h-4 text-orange-500 shrink-0" />;
    case "docker":
      return <SiDocker className="w-4 h-4 text-sky-500 shrink-0" />;
    case "cmake":
      return <SiCmake className="w-4 h-4 text-red-500 shrink-0" />;
    case "typescript":
      return <SiTypescript className="w-4 h-4 text-blue-500 shrink-0" />;
    case "react":
      return <SiReact className="w-4 h-4 text-cyan-400 shrink-0" />;
    case "javascript":
      return <SiJavascript className="w-4 h-4 text-amber-400 shrink-0" />;
    case "tailwind":
      return <SiTailwindcss className="w-4 h-4 text-sky-400 shrink-0" />;
    case "vite":
      return <SiVite className="w-4 h-4 text-purple-400 shrink-0" />;
    case "wasm":
      return <SiWebassembly className="w-4 h-4 text-indigo-500 shrink-0" />;
    case "python":
      return <SiPython className="w-4 h-4 text-yellow-500 shrink-0" />;
    case "layers":
      return <FiLayers className="w-4 h-4 text-indigo-500 shrink-0" />;
    case "zap":
      return <FiZap className="w-4 h-4 text-amber-500 shrink-0" />;
    case "mongodb":
      return <SiMongodb className="w-4 h-4 text-emerald-500 shrink-0" />;
    case "unity":
      return <SiUnity className="w-4 h-4 text-slate-700 dark:text-slate-200 shrink-0" />;
    default:
      return <FiTerminal className="w-4 h-4 text-theme-accent shrink-0" />;
  }
}

export default function Skills() {
  const { language } = useApp();
  const t = translations[language].skills;

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        number={t.number}
        title={t.title}
        subtitle={t.subtitle}
      />

      {/* Banner de rigor técnico en bajo nivel */}
      <div className="mb-10 p-5 rounded-2xl border border-theme-accent/30 bg-theme-accent-subtle/50 backdrop-blur-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-theme-accent text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
            <FiShield className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold font-mono text-theme-text uppercase tracking-wider flex items-center gap-2">
              <span>Systems Engineering Philosophy</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono">
                POSIX &amp; ISO C Standard
              </span>
            </h4>
            <p className="text-xs text-theme-muted mt-0.5">
              Gestión manual estricta de memoria (Heap & Stack), cero memory leaks con Valgrind, arquitectura POSIX y sockets no bloqueantes.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono font-medium text-theme-secondary shrink-0">
          <FiCheckCircle className="w-4 h-4 text-emerald-500" />
          <span>Zero Memory Leaks Certified</span>
        </div>
      </div>

      {/* Grid de Tarjetas de Tecnologías con Iconos y Micro-Badges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skillsData.map((cat: SkillCategory) => (
          <div
            key={cat.id}
            className={`rounded-2xl p-6 sm:p-7 shadow-xs transition-all backdrop-blur-xs flex flex-col justify-between ${
              cat.highlight
                ? "border-2 border-theme-accent/60 bg-theme-card hover:bg-theme-card-hover shadow-lg shadow-blue-500/5 hover:border-theme-accent"
                : "border border-theme-border/70 bg-theme-card hover:bg-theme-card-hover hover:border-theme-border-glow"
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-sm font-mono font-bold text-theme-accent tracking-wider uppercase flex items-center gap-2">
                  <span>{cat.categoryName[language]}</span>
                  {cat.highlight && (
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                      Primary Focus
                    </span>
                  )}
                </h3>
              </div>

              <p className="text-xs text-theme-muted mb-6">
                {cat.subtitle[language]}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-2 rounded-xl bg-theme-bg/85 px-3 py-2.5 text-xs font-mono border border-theme-border-subtle transition-all hover:border-theme-accent/40 hover:bg-theme-bg hover:translate-x-0.5 group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="p-1 rounded-md bg-theme-card border border-theme-border-subtle group-hover:scale-110 transition-transform">
                        {getSkillIcon(skill.icon)}
                      </span>
                      <span className="font-semibold text-theme-text truncate">
                        {skill.name}
                      </span>
                    </div>

                    {skill.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-theme-card text-theme-faint border border-theme-border-subtle whitespace-nowrap shrink-0 group-hover:text-theme-accent transition-colors">
                        {skill.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

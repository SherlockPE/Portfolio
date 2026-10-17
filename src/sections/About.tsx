import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import SectionHeading from "../components/SectionHeading";
import { FiTerminal, FiLayers, FiZap, FiUsers } from "react-icons/fi";

export default function About() {
  const { language } = useApp();
  const t = translations[language].about;

  const pillarIcons = [
    <FiTerminal key="1" className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    <FiLayers key="2" className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    <FiZap key="3" className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    <FiUsers key="4" className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        number={t.number}
        title={t.title}
        subtitle={t.subtitle}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Narrativa humana personal */}
        <div className="lg:col-span-5 space-y-6">
          <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            {t.description}
          </p>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs space-y-3 font-mono text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center justify-between text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
              <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Base Metodológica
              </span>
              <span>42 Network</span>
            </div>
            <div className="space-y-1.5">
              <p>• Proyectos prácticos en C/C++ sin librerías estándar mágicas</p>
              <p>• Evaluación continua entre pares (peer evaluation)</p>
              <p>• Autonomía total frente a la documentación y el código fuente</p>
            </div>
          </div>
        </div>

        {/* 4 Pilares de competencia técnica */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-blue-400 dark:hover:border-blue-500/50 transition-all shadow-xs group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {pillarIcons[idx]}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

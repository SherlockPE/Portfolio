import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import { skillsData } from "../data/skills";

export default function Skills() {
  const { language } = useApp();
  const t = translations[language].nav;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center tracking-tight text-slate-950 dark:text-white sm:text-4xl">
        {t.skills}
      </h2>
      <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto rounded-full mb-12" />

      {/* Grid de Tarjetas de Habilidades */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillsData.map((cat, idx) => (
          <div 
            key={idx} 
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="text-md font-bold text-blue-500 tracking-wide uppercase mb-4">
              {cat.categoryName[language]}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="inline-flex items-center rounded-lg bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-600/10 dark:bg-slate-950 dark:text-slate-300 dark:ring-slate-400/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import { skillsData } from "../data/skills";
import SectionHeading from "../components/SectionHeading";

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

      {/* Grid de Tarjetas de Habilidades con estética técnica */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillsData.map((cat, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:border-slate-400 dark:hover:border-slate-700 dark:border-slate-800 dark:bg-slate-900/60"
          >
            <h3 className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-5 flex items-center justify-between">
              <span>{cat.categoryName[language]}</span>
            </h3>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md bg-slate-50 dark:bg-slate-950 px-2.5 py-1 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 transition-colors hover:border-blue-400 dark:hover:border-blue-600"
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

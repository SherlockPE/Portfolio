import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import { educationData } from "../data/education";
import SectionHeading from "../components/SectionHeading";

export default function Education() {
  const { language } = useApp();
  const t = translations[language].education;

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        number={t.number}
        title={t.title}
        subtitle={t.subtitle}
      />

      {/* Timeline estructurado de ingeniería */}
      <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-12 max-w-4xl">
        {educationData.map((item) => (
          <div key={item.id} className="relative group">
            {/* Punto indicador del Timeline */}
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-blue-600 ring-4 ring-white dark:ring-slate-950 group-hover:scale-125 transition-transform" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                {item.institution}
              </h3>
              <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md text-blue-600 dark:text-blue-400 w-fit">
                {item.period}
              </span>
            </div>

            <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
              {item.degree[language]}
            </p>

            {item.description && (
              <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.description[language]}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

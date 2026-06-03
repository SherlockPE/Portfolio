import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import { educationData } from "../data/education";

export default function Education() {
  const { language } = useApp();
  const t = translations[language].nav; // Reutilizamos el título del nav o agregamos a translations

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center tracking-tight text-slate-950 dark:text-white sm:text-4xl">
        {t.education}
      </h2>
      <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto rounded-full mb-12" />

      {/* Estructura de Timeline Semántica */}
      <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-32">
        {educationData.map((item) => (
          <div key={item.id} className="mb-10 ml-6 relative">
            {/* Punto del Timeline */}
            <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 ring-8 ring-white dark:ring-slate-950" />
            
            {/* Contenido */}
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                {item.institution}
              </h3>
              <span className="text-xs font-mono font-semibold px-2 py-1 bg-slate-100 dark:bg-slate-900 rounded text-blue-500 md:order-last w-fit">
                {item.period}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {item.degree[language]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
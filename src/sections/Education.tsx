import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import { educationData } from "../data/education";
import { experienceData } from "../data/experience";
import SectionHeading from "../components/SectionHeading";
import { FiBriefcase, FiBookOpen, FiMapPin, FiExternalLink } from "react-icons/fi";

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

      {/* Twin Layout: Dos columnas paralelas en Desktop (Experiencia y Educación) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* ================= COLUMNA 1: EXPERIENCIA LABORAL ================= */}
        <div className="flex flex-col">
          {/* Encabezado de Columna */}
          <div className="flex items-center gap-3 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 ring-1 ring-blue-500/20">
              <FiBriefcase className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                {t.experienceTitle}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.experienceSubtitle}
              </p>
            </div>
          </div>

          {/* Timeline de Experiencia */}
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-5 pl-6 sm:pl-7 pt-6 space-y-10">
            {experienceData.map((item) => (
              <div key={item.id} className="relative group">
                {/* Indicador del Timeline */}
                <span className="absolute -left-[31px] sm:-left-[35px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 ring-4 ring-white dark:ring-slate-950 group-hover:scale-125 transition-transform" />

                {/* Fecha y Ubicación */}
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/40">
                    {item.period}
                  </span>
                  {item.location && (
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                      <FiMapPin className="h-3 w-3" />
                      {item.location}
                    </span>
                  )}
                </div>

                {/* Empresa y Rol */}
                <h4 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.company}
                </h4>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {item.role[language]}
                </p>

                {/* Descripción general */}
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description[language]}
                </p>

                {/* Puntos destacados / Responsabilidades */}
                {item.details && item.details[language] && item.details[language].length > 0 && (
                  <ul className="mt-2.5 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    {item.details[language].map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tags de tecnologías y competencias */}
                {item.tags && item.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ================= COLUMNA 2: EDUCACIÓN & FORMACIÓN ================= */}
        <div className="flex flex-col">
          {/* Encabezado de Columna */}
          <div className="flex items-center gap-3 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 ring-1 ring-indigo-500/20">
              <FiBookOpen className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                {t.educationTitle}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.educationSubtitle}
              </p>
            </div>
          </div>

          {/* Timeline de Educación */}
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-5 pl-6 sm:pl-7 pt-6 space-y-10">
            {educationData.map((item) => (
              <div key={item.id} className="relative group">
                {/* Indicador del Timeline */}
                <span className="absolute -left-[31px] sm:-left-[35px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 ring-4 ring-white dark:ring-slate-950 group-hover:scale-125 transition-transform" />

                {/* Fecha */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-900/40">
                    {item.period}
                  </span>
                </div>

                {/* Institución y Título */}
                <h4 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                  {item.institution}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-indigo-500 transition-colors"
                      title="LinkedIn"
                    >
                      <FiExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </h4>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {item.degree[language]}
                </p>

                {/* Descripción */}
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description[language]}
                </p>

                {/* Tags de aprendizaje */}
                {item.tags && item.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

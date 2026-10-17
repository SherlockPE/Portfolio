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
            className="rounded-2xl border border-theme-border/70 bg-theme-card hover:bg-theme-card-hover p-6 shadow-xs transition-all hover:border-theme-border-glow backdrop-blur-xs"
          >
            <h3 className="text-xs font-mono font-bold text-theme-accent tracking-wider uppercase mb-5 flex items-center justify-between">
              <span>{cat.categoryName[language]}</span>
            </h3>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md bg-theme-bg/80 px-2.5 py-1 text-xs font-mono font-medium text-theme-secondary border border-theme-border-subtle transition-colors hover:border-theme-accent/50 hover:text-theme-accent"
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

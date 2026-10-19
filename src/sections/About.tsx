import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import SectionHeading from "../components/SectionHeading";
import { FiTerminal, FiLayers, FiZap, FiUsers, FiCompass } from "react-icons/fi";

const pillarIcons = [
  <FiTerminal key="1" className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  <FiLayers key="2" className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
  <FiZap key="3" className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
  <FiUsers key="4" className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
];

export default function About() {
  const { language } = useApp();
  const t = translations[language].about;

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        number={t.number}
        title={t.title}
        subtitle={t.subtitle}
      />

      {/* Bloque superior: Descripción a la izquierda, Base Metodológica y Áreas de Interés a la derecha */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          <p className="text-base sm:text-lg leading-relaxed text-theme-secondary">
            {t.description}
          </p>
        </div>

        <div className="lg:col-span-7 space-y-6">
          {/* Base Metodológica */}
          <div className="p-6 rounded-2xl border border-theme-border bg-theme-card/90 backdrop-blur-xs shadow-xs space-y-4 font-mono text-sm text-theme-muted">
            <div className="flex items-center justify-between text-theme-muted border-b border-theme-border-subtle pb-3">
              <span className="font-bold text-theme-text uppercase tracking-wider text-xs sm:text-sm">
                {t.methodologyTitle}
              </span>
              <span className="text-theme-accent font-semibold text-xs px-2.5 py-1 rounded-full bg-theme-accent/10 border border-theme-accent/20">
                {t.methodologyBadge}
              </span>
            </div>
            <div className="space-y-3 text-theme-secondary leading-relaxed text-sm">
              {t.methodologyPoints.map((point: string, idx: number) => (
                <p key={idx} className="flex items-start gap-2.5">
                  <span className="text-theme-accent font-bold select-none shrink-0 mt-0.5">•</span>
                  <span>{point}</span>
                </p>
              ))}
            </div>
          </div>

          {/* Áreas de Interés & Exploración Técnica */}
          <div className="p-6 rounded-2xl border border-theme-border/80 bg-theme-card/80 backdrop-blur-xs shadow-xs space-y-4 font-mono text-sm">
            <div className="flex items-center gap-2 text-theme-muted border-b border-theme-border-subtle pb-3">
              <FiCompass className="w-4 h-4 text-theme-accent shrink-0" />
              <span className="font-bold text-theme-text uppercase tracking-wider text-xs sm:text-sm">
                {t.interestsTitle}
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5 pt-1">
              {t.interests.map((interest: string, idx: number) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-theme-bg border border-theme-border-subtle text-xs sm:text-sm text-theme-secondary font-mono hover:border-theme-accent/40 transition-colors"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bloque inferior: Los 4 pilares en una sola fila horizontal */}
      <div className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {t.pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl border border-theme-border/70 bg-theme-card hover:bg-theme-card-hover hover:border-theme-border-glow backdrop-blur-xs transition-all shadow-xs group flex flex-col justify-start h-full"
          >
            <div className="w-10 h-10 rounded-xl bg-theme-bg/80 border border-theme-border-subtle flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shrink-0">
              {pillarIcons[idx]}
            </div>
            <h3 className="text-base font-bold text-theme-text mb-2">
              {pillar.title}
            </h3>
            <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

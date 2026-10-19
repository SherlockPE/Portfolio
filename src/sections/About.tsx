import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import SectionHeading from "../components/SectionHeading";
import { FiTerminal, FiLayers, FiZap, FiUsers, FiCompass } from "react-icons/fi";

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
        <div className="lg:col-span-5 space-y-6">
          <p className="text-base sm:text-lg leading-relaxed text-theme-secondary">
            {t.description}
          </p>

          <div className="p-5 rounded-2xl border border-theme-border bg-theme-card/90 backdrop-blur-xs shadow-xs space-y-3 font-mono text-xs text-theme-muted">
            <div className="flex items-center justify-between text-theme-muted border-b border-theme-border-subtle pb-2">
              <span className="font-bold text-theme-text uppercase tracking-wider">
                {t.methodologyTitle}
              </span>
              <span className="text-theme-accent font-semibold px-2 py-0.5 rounded-full bg-theme-accent/10 border border-theme-accent/20">
                {t.methodologyBadge}
              </span>
            </div>
            <div className="space-y-2 text-theme-secondary">
              {t.methodologyPoints.map((point: string, idx: number) => (
                <p key={idx} className="flex items-start gap-2">
                  <span className="text-theme-accent font-bold select-none shrink-0">•</span>
                  <span>{point}</span>
                </p>
              ))}
            </div>
          </div>

          {/* Áreas de Interés & Exploración Técnica (Incluye Ada / SPARK) */}
          <div className="p-5 rounded-2xl border border-theme-border/80 bg-theme-card/80 backdrop-blur-xs shadow-xs space-y-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-theme-muted border-b border-theme-border-subtle pb-2">
              <FiCompass className="w-4 h-4 text-theme-accent" />
              <span className="font-bold text-theme-text uppercase tracking-wider text-[11px]">
                {t.interestsTitle}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {t.interests.map((interest: string, idx: number) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-theme-bg border border-theme-border-subtle text-[11px] text-theme-secondary font-mono hover:border-theme-accent/40 transition-colors"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-theme-border/70 bg-theme-card hover:bg-theme-card-hover hover:border-theme-border-glow backdrop-blur-xs transition-all shadow-xs group"
            >
              <div className="w-10 h-10 rounded-xl bg-theme-bg/80 border border-theme-border-subtle flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
    </div>
  );
}

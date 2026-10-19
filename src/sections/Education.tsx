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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <div className="flex flex-col">
          <div className="flex items-center gap-3.5 pb-5 border-b border-theme-border">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-theme-accent-subtle text-theme-accent ring-1 ring-theme-accent/30 shadow-xs">
              <FiBriefcase className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-theme-text">
                {t.experienceTitle}
              </h3>
              <p className="text-xs text-theme-muted">
                {t.experienceSubtitle}
              </p>
            </div>
          </div>

          <div className="relative border-l-2 border-theme-border-subtle ml-4 sm:ml-5 pl-6 sm:pl-7 pt-6 space-y-6">
            <div className="absolute left-[-2px] top-0 h-4/5 w-0.5 bg-gradient-to-b from-theme-accent via-theme-highlight to-transparent pointer-events-none" />

            {experienceData.map((item) => (
              <div
                key={item.id}
                className="relative group p-5 rounded-2xl border border-theme-border/60 hover:border-theme-border-glow bg-theme-card hover:bg-theme-card-hover backdrop-blur-xs transition-all shadow-xs"
              >
                <div className="absolute -left-[33px] sm:-left-[37px] top-6 flex items-center justify-center">
                  <span className="absolute w-4 h-4 rounded-full bg-theme-accent/35 animate-ping opacity-60" />
                  <span className="relative w-3 h-3 rounded-full bg-theme-accent ring-4 ring-theme-bg shadow-xs" />
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-theme-accent-subtle text-theme-accent border border-theme-accent/20">
                    {item.period}
                  </span>
                  {item.location && (
                    <span className="inline-flex items-center gap-1 text-xs text-theme-muted">
                      <FiMapPin className="h-3 w-3" />
                      {item.location}
                    </span>
                  )}
                </div>

                <h4 className="text-base sm:text-lg font-bold text-theme-text group-hover:text-theme-accent transition-colors">
                  {item.company}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-theme-secondary">
                  {item.role[language]}
                </p>

                <p className="mt-2 text-xs sm:text-sm text-theme-muted leading-relaxed">
                  {item.description[language]}
                </p>

                {item.details && item.details[language] && item.details[language].length > 0 && (
                  <ul className="mt-3 space-y-1.5 text-xs text-theme-secondary">
                    {item.details[language].map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-theme-accent shrink-0 mt-1.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.tags && item.tags.length > 0 && (
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-theme-bg/80 text-theme-secondary border border-theme-border-subtle"
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

        <div className="flex flex-col">
          <div className="flex items-center gap-3.5 pb-5 border-b border-theme-border">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-theme-highlight-glow text-theme-highlight ring-1 ring-theme-highlight/30 shadow-xs">
              <FiBookOpen className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-theme-text">
                {t.educationTitle}
              </h3>
              <p className="text-xs text-theme-muted">
                {t.educationSubtitle}
              </p>
            </div>
          </div>

          <div className="relative border-l-2 border-theme-border-subtle ml-4 sm:ml-5 pl-6 sm:pl-7 pt-6 space-y-6">
            <div className="absolute left-[-2px] top-0 h-4/5 w-0.5 bg-gradient-to-b from-theme-highlight via-theme-accent to-transparent pointer-events-none" />

            {educationData.map((item) => (
              <div
                key={item.id}
                className="relative group p-5 rounded-2xl border border-theme-border/60 hover:border-theme-border-glow bg-theme-card hover:bg-theme-card-hover backdrop-blur-xs transition-all shadow-xs"
              >
                <div className="absolute -left-[33px] sm:-left-[37px] top-6 flex items-center justify-center">
                  <span className="absolute w-4 h-4 rounded-full bg-theme-highlight/35 animate-ping opacity-60" />
                  <span className="relative w-3 h-3 rounded-full bg-theme-highlight ring-4 ring-theme-bg shadow-xs" />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-theme-highlight-glow text-theme-highlight border border-theme-highlight/20">
                    {item.period}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-theme-text group-hover:text-theme-highlight transition-colors flex items-center gap-1.5">
                  {item.institution}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-theme-muted hover:text-theme-highlight transition-colors"
                      title="LinkedIn"
                    >
                      <FiExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-theme-secondary">
                  {item.degree[language]}
                </p>

                <p className="mt-2 text-xs sm:text-sm text-theme-muted leading-relaxed">
                  {item.description[language]}
                </p>

                {item.details && item.details[language] && item.details[language].length > 0 && (
                  <ul className="mt-3 space-y-1.5 text-xs text-theme-secondary">
                    {item.details[language].map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-theme-highlight shrink-0 mt-1.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.tags && item.tags.length > 0 && (
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-theme-bg/80 text-theme-secondary border border-theme-border-subtle"
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

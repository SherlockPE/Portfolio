import { useState } from "react";
import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import SectionHeading from "../components/SectionHeading";
import {
  FiMail,
  FiCopy,
  FiCheck,
  FiLinkedin,
  FiGithub,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

export default function Contact() {
  const { language } = useApp();
  const t = translations[language].contact;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("fabriciolopezreyes@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        number={t.number}
        title={t.title}
        subtitle={t.subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        {/* Email */}
        <div className="flex flex-col justify-between p-6 rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/60 shadow-xs hover:border-slate-400 dark:hover:border-slate-700 transition-all group">
          <div>
            <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <FiMail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1 block">
              {t.emailLabel}
            </span>
            <a
              href="mailto:fabriciolopezreyes@gmail.com"
              className="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
            >
              fabriciolopezreyes@gmail.com
            </a>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              {copied ? (
                <FiCheck className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <FiCopy className="w-3.5 h-3.5" />
              )}
              <span>{copied ? t.copied : t.copyEmail}</span>
            </button>
          </div>
        </div>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col justify-between p-6 rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/60 shadow-xs hover:border-slate-400 dark:hover:border-slate-700 transition-all group"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <FiLinkedin className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1 block">
              {t.linkedinLabel}
            </span>
            <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              in/fabricio-lópez-reyes
            </span>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400">
              <span>Conectar en LinkedIn</span>
              <FiArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/SherlockPE"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col justify-between p-6 rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/60 shadow-xs hover:border-slate-400 dark:hover:border-slate-700 transition-all group"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <FiGithub className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1 block">
              {t.githubLabel}
            </span>
            <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              github.com/SherlockPE
            </span>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400">
              <span>Ver código fuente</span>
              <FiArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </a>
      </div>

      <div className="flex items-center gap-2 mt-12 text-xs font-mono text-slate-500">
        <FiMapPin className="w-4 h-4 text-slate-400" />
        <span>{t.location}</span>
      </div>
    </div>
  );
}

import { useApp, type Language } from "../context/AppContext";

export default function LangToggle() {
  const { language, changeLanguage } = useApp();

  const languages: { code: Language; label: string }[] = [
    { code: "es", label: "ES" },
    { code: "en", label: "EN" },
    { code: "pt", label: "PT" },
  ];

  return (
    <div className="flex items-center rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-0.5 text-xs font-mono font-medium">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
            language === lang.code
              ? "bg-white text-slate-950 font-bold shadow-xs dark:bg-slate-800 dark:text-white"
              : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          }`}
          title={`Cambiar idioma a ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
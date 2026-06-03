import { useApp, type Language } from "../context/AppContext";

export default function LangToggle() {
  const { language, changeLanguage } = useApp();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "es", label: "ES", flag: "🇪🇸" },
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "pt", label: "PT", flag: "🇵🇹" },
    // { code: "uk", label: "UKR", flag: "🇺🇦" }
  ];

  return (
    <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-2 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
            language === lang.code
              ? "bg-white text-slate-900 shadow dark:bg-slate-700 dark:text-white"
              : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
          }`}
          title={lang.label}
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.label}
        </button>
      ))}
    </div>
  );
}
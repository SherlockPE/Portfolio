import { useApp, type Language } from "../context/AppContext";

export default function LangToggle() {
  const { language, changeLanguage } = useApp();

  const languages: { code: Language; label: string }[] = [
    { code: "es", label: "ES" },
    { code: "en", label: "EN" },
    { code: "pt", label: "PT" },
  ];

  return (
    <div className="flex items-center rounded-lg border border-theme-border/60 bg-theme-card/60 backdrop-blur-sm p-0.5 text-xs font-mono font-medium">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
            language === lang.code
              ? "bg-theme-card text-theme-text font-bold shadow-xs border border-theme-border-subtle"
              : "text-theme-muted hover:text-theme-text"
          }`}
          title={`Cambiar idioma a ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
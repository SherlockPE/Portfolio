import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark";
export type Language = "es" | "en" | "pt";

interface AppContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  changeLanguage: (lang: Language) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme) return savedTheme;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("lang") as Language;
      if (savedLang) return savedLang;
      const browserLang = navigator.language.split("-")[0];
      if (["es", "en", "pt"].includes(browserLang)) return browserLang as Language;
    }
    return "es";
  });

  // Asegura la sincronización inicial y reactiva
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("lang", language);
    window.document.documentElement.lang = language;
  }, [language]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        const root = window.document.documentElement;
        if (next === "dark") {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
        localStorage.setItem("theme", next);
      }
      return next;
    });
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const value: AppContextType = {
    theme,
    language,
    toggleTheme,
    changeLanguage,
  };

  return <AppContext value={value}>{children}</AppContext>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp debe ser utilizado dentro de un AppProvider");
  }
  return context;
}
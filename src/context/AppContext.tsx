import
{
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
  // Inicializar estado buscando en localStorage o usando valores por defecto
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme) return savedTheme;
      
      // Si no hay guardado, comprobar preferencia del sistema
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("lang") as Language;
      if (savedLang) return savedLang;
      
      // Comprobar idioma del navegador (opcional, recortando a los soportados)
      const browserLang = navigator.language.split("-")[0];
      if (["es", "en", "pt"].includes(browserLang)) return browserLang as Language;
    }
    return "es"; // Idioma por defecto
  });

  // Efecto para aplicar/quitar la clase 'dark' en el elemento <html>
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Efecto para guardar el idioma seleccionado
  useEffect(() => {
    localStorage.setItem("lang", language);
    // Opcional: cambiar el atributo 'lang' del HTML para accesibilidad y SEO
    window.document.documentElement.lang = language;
  }, [language]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
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

  // En React 19 usamos <AppContext value={value}> directamente en lugar de AppContext.Provider
  return <AppContext value={value}>{children}</AppContext>;
}

// Hook personalizado para consumir el contexto fácilmente
export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp debe ser utilizado dentro de un AppProvider");
  }
  return context;
}
import { useApp } from "../context/AppContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useApp();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer text-xl"
      aria-label="Cambiar tema"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
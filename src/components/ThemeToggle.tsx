import { useApp } from "../context/AppContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { flushSync } from "react-dom";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useApp();

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Si el navegador no soporta View Transitions o hay preferencia de movimiento reducido
    if (
      typeof document === "undefined" ||
      !("startViewTransition" in document) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      toggleTheme();
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top + rect.height / 2;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = (
      document as unknown as {
        startViewTransition: (callback: () => void) => {
          ready: Promise<void>;
        };
      }
    ).startViewTransition(() => {
      flushSync(() => {
        toggleTheme();
      });
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 450,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-pointer"
      aria-label={theme === "light" ? "Cambiar a modo noche" : "Cambiar a modo día"}
      title={theme === "light" ? "Modo oscuro" : "Modo claro"}
    >
      {theme === "light" ? (
        <FiMoon className="w-4 h-4 text-slate-700 transition-transform hover:-rotate-12" />
      ) : (
        <FiSun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
      )}
    </button>
  );
}
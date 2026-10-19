import { useApp } from "../context/AppContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { flushSync } from "react-dom";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useApp();

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const isReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Si el navegador no soporta View Transitions o hay preferencia de movimiento reducido
    if (
      typeof document === "undefined" ||
      !("startViewTransition" in document) ||
      isReducedMotion
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

    // Detección de dispositivos de recursos muy limitados (<= 2 hilos de CPU)
    const isLowEnd =
      typeof navigator !== "undefined" &&
      typeof navigator.hardwareConcurrency === "number" &&
      navigator.hardwareConcurrency <= 2;

    const root = document.documentElement;
    root.classList.add("disable-transitions");

    const transition = (
      document as unknown as {
        startViewTransition: (callback: () => void) => {
          ready: Promise<void>;
          finished: Promise<void>;
        };
      }
    ).startViewTransition(() => {
      flushSync(() => {
        toggleTheme();
      });
    });

    transition.finished.finally(() => {
      root.classList.remove("disable-transitions");
    });

    // En dispositivos de muy baja potencia, animamos con un fundido suave de 180ms que consume 0 GPU
    if (isLowEnd) {
      transition.ready.then(() => {
        document.documentElement.animate(
          { opacity: [0, 1] },
          {
            duration: 180,
            easing: "ease-out",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
      return;
    }

    // En dispositivos estándar y móviles modernos: círculo ultra fluido a 320ms con curva de desaceleración natural
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 320,
          easing: "cubic-bezier(0.2, 0, 0, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center justify-center w-9 h-9 rounded-lg border border-theme-border/60 bg-theme-card/60 backdrop-blur-sm text-theme-secondary hover:text-theme-text hover:border-theme-border-glow transition-all cursor-pointer"
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
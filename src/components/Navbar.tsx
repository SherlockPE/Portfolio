import { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";
import { FiChevronRight } from "react-icons/fi";

export default function Navbar() {
  const { language } = useApp();
  const t = translations[language].nav;
  const [isOpen, setIsOpen] = useState(false);

  // Cerrar menú con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Cerrar menú si la pantalla se redimensiona a escritorio (>= 768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { href: "#home", label: t.home, num: "01" },
    { href: "#about", label: t.about, num: "02" },
    { href: "#education", label: t.education, num: "03" },
    { href: "#skills", label: t.skills, num: "04" },
    { href: "#projects", label: t.projects, num: "05" },
    { href: "#contact", label: t.contact, num: "06" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 transition-colors">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Logo / Nombre */}
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-xl font-bold tracking-tight hover:opacity-85 transition-opacity"
          >
            Fabricio<span className="text-blue-500">.</span>
          </a>

          {/* Navegación de Secciones (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-blue-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Controles de la derecha: Toggles + Botón de Hamburguesa en móvil */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LangToggle />
            <ThemeToggle />

            {/* Botón de Hamburguesa animado */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-slate-300 dark:hover:border-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
              aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              <div className="w-4 h-3.5 relative flex flex-col justify-between" aria-hidden="true">
                <span
                  className={`block h-0.5 w-full bg-current rounded-full transition-transform duration-300 ease-in-out origin-center ${
                    isOpen ? "rotate-45 translate-y-[6px]" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current rounded-full transition-opacity duration-200 ease-in-out ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current rounded-full transition-transform duration-300 ease-in-out origin-center ${
                    isOpen ? "-rotate-45 -translate-y-[6px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Menú desplegable para móviles con animación fluida de apertura y cierre */}
        <div
          id="mobile-navigation"
          className={`md:hidden grid transition-all duration-300 ease-out border-t border-slate-100 dark:border-slate-800/60 ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0 pointer-events-none"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="overflow-hidden">
            <nav className="flex flex-col gap-1 px-4 py-3 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/80 dark:hover:bg-slate-900/80 active:scale-[0.99] ${
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-2 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 35}ms` : "0ms",
                  }}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-blue-500 dark:text-blue-400 font-semibold">
                      {item.num}
                    </span>
                    <span>{item.label}</span>
                  </span>
                  <FiChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Backdrop oscuro para móviles cuando el menú está abierto */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-slate-950/20 dark:bg-black/40 backdrop-blur-[2px] md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        onTouchMove={(e) => e.preventDefault()}
        aria-hidden="true"
      />
    </>
  );
}
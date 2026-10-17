import { useState, useEffect, useRef, useCallback } from "react";
import { FiCheck, FiTerminal } from "react-icons/fi";
import { useApp } from "../context/AppContext";

const TARGET_FIRST = "Fabricio";
const TARGET_LAST = "López Reyes";
const CHARS = "01ABCDEF_#!<>/$*&~%0101";

const COPY_TEXT = {
  es: "copiado!",
  en: "copied!",
  pt: "copiado!",
} as const;

export default function InteractiveName() {
  const { theme, language } = useApp();
  const [displayTextFirst, setDisplayTextFirst] = useState(TARGET_FIRST);
  const [displayTextLast, setDisplayTextLast] = useState(TARGET_LAST);
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLHeadingElement>(null);

  // 1. Efecto Desencriptación Hacker (Text Scramble) al cargar la página
  // Más pausadooooooooo, tengo hambreeeeee: ~1.7s con decodificación progresiva de izquierda a derecha
  const runScramble = useCallback(() => {
    let iteration = 0;
    const maxIterations = 38;

    const interval = setInterval(() => {
      setDisplayTextFirst(
        TARGET_FIRST.split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (iteration > 6 + index * 2.2) return TARGET_FIRST[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      setDisplayTextLast(
        TARGET_LAST.split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (iteration > 14 + index * 1.8) return TARGET_LAST[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      iteration += 1;
      if (iteration > maxIterations) {
        clearInterval(interval);
        setDisplayTextFirst(TARGET_FIRST);
        setDisplayTextLast(TARGET_LAST);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Se ejecuta 1 vez al cargar
    const cleanup = runScramble();
    return () => {
      if (cleanup) cleanup();
    };
  }, [runScramble]);

  // 3. Efecto Haz de Luz / Spotlight magnético en modo normal, necessito detectar donde están la x y la y de mi cursor, alguien deme unas pataatas me muero de hambre, quiero trabajo xd
  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  // 4. Acción al Clic: Copiar comando de terminal al portapapeles
  const handleClick = () => {
    navigator.clipboard.writeText("npx fabricio");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <div className="relative inline-block select-none my-1">
      <h1
        ref={containerRef}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] cursor-pointer group transition-all"
        title="Haz clic para copiar comando 'npx fabricio'"
      >
        {/* Capa de texto base con sus colores de diseño */}
        <span className="text-slate-950 dark:text-white transition-colors duration-200">
          {displayTextFirst}
        </span>{" "}
        <span className="text-slate-950 dark:text-white transition-colors duration-200">
          {displayTextLast}
        </span>

        {/* 3. Haz de luz sutil proyectado según posición del ratón.
            IMPORTANTE: Contiene exactamente el texto para que WebkitBackgroundClip: "text"
            recorte el degradado radial ÚNICAMENTE dentro de las letras, sin manchar el contenedor. */}
        {mousePos && (
          <span
            aria-hidden="true"
            className="w-full h-full pointer-events-none absolute inset-0 select-none transition-opacity duration-150"
            style={{
              backgroundImage:
                theme === "dark"
                  ? `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, #ffffff 0%, rgba(186, 230, 253, 1) 18%, rgba(56, 189, 248, 0.95) 38%, rgba(37, 99, 235, 0.85) 62%, rgba(29, 78, 216, 0.3) 80%, transparent 92%)`
                  : `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(14, 165, 233, 1) 0%, rgba(2, 132, 199, 1) 25%, rgba(37, 99, 235, 0.95) 50%, rgba(29, 78, 216, 0.8) 72%, transparent 90%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            {displayTextFirst} {displayTextLast}
          </span>
        )}
      </h1>

      {/* 4. Feedback flotante al hacer clic */}
      {copied && (
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-mono font-semibold shadow-lg animate-in fade-in zoom-in-95 duration-150">
          <FiCheck className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
          <span>fabricio lopez reyes</span>
          <span className="text-[10px] text-slate-400 dark:text-slate-500">{COPY_TEXT[language]}</span>
        </div>
      )}

      {/* Micro-pista tooltip que se muestra con hover suave */}
      {!copied && (
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -bottom-6 left-0 text-[11px] font-mono text-slate-400 dark:text-slate-500 flex items-center gap-1">
          <FiTerminal className="w-3 h-3 text-blue-500" />
          <span>clic para copiar npx</span>
        </span>
      )}
    </div>
  );
}


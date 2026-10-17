import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import { projectsData, type ProjectItem } from "../data/projects";
import SectionHeading from "../components/SectionHeading";
import {
  FiAward,
  FiCamera,
  FiImage,
  FiExternalLink,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiTerminal,
  FiCode,
} from "react-icons/fi";

export default function Projects() {
  const { language } = useApp();
  const t = translations[language].projects;

  // Filtro de categorías: "all" | "systems" | "hackathons"
  const [selectedCategory, setSelectedCategory] = useState<"all" | "systems" | "hackathons">("all");

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === "all") return true;
    return p.category === selectedCategory;
  });

  // Estado para la galería / lightbox modal
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);

  const openGallery = (project: ProjectItem, index = 0) => {
    if (!project.images || project.images.length === 0) return;
    setSelectedProject(project);
    setActivePhotoIdx(index);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setActivePhotoIdx(0);
  };

  const nextPhoto = useCallback(() => {
    if (!selectedProject || selectedProject.images.length === 0) return;
    setActivePhotoIdx((prev) => (prev + 1) % selectedProject.images.length);
  }, [selectedProject]);

  const prevPhoto = useCallback(() => {
    if (!selectedProject || selectedProject.images.length === 0) return;
    setActivePhotoIdx((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  }, [selectedProject]);

  // Manejo de atajos de teclado (Escape, Flechas) y bloqueo del scroll
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGallery();
      else if (e.key === "ArrowRight") nextPhoto();
      else if (e.key === "ArrowLeft") prevPhoto();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, nextPhoto, prevPhoto]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        number={t.number}
        title={t.title}
        subtitle={t.subtitle}
      />

      {/* Selector de Filtros / Categorías */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        <button
          type="button"
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 text-xs font-mono font-semibold rounded-full transition-all cursor-pointer ${
            selectedCategory === "all"
              ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-500/50"
              : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
          }`}
        >
          {t.filterAll} ({projectsData.length})
        </button>

        <button
          type="button"
          onClick={() => setSelectedCategory("systems")}
          className={`px-4 py-2 text-xs font-mono font-semibold rounded-full transition-all cursor-pointer ${
            selectedCategory === "systems"
              ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-500/50"
              : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
          }`}
        >
          {t.filterSystems} ({projectsData.filter((p) => p.category === "systems").length})
        </button>

        <button
          type="button"
          onClick={() => setSelectedCategory("hackathons")}
          className={`px-4 py-2 text-xs font-mono font-semibold rounded-full transition-all cursor-pointer ${
            selectedCategory === "hackathons"
              ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-500/50"
              : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
          }`}
        >
          {t.filterHackathons} ({projectsData.filter((p) => p.category === "hackathons").length})
        </button>
      </div>

      {/* Grid de Proyectos y Hackathons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => {
          const hasImages = project.images && project.images.length > 0;
          const coverImg = project.coverImage || (hasImages ? project.images[0] : null);

          return (
            <div
              key={project.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all hover:border-slate-400 dark:hover:border-slate-700 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60 group"
            >
              {/* Portada / Imagen o Header de Terminal para proyectos de bajo nivel */}
              {coverImg ? (
                <div
                  onClick={() => openGallery(project, 0)}
                  className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer select-none"
                  title={`${t.viewGallery} (${project.images.length} ${t.photosCount})`}
                >
                  <img
                    src={coverImg}
                    alt={project.title[language]}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Gradiente sutil para legibilidad de badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-slate-950/40" />

                  {/* Badges superiores: Premio y Año */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-white/95 dark:bg-slate-900/95 text-blue-700 dark:text-blue-300 border border-slate-200/80 dark:border-slate-700/80 backdrop-blur-md shadow-xs">
                      <FiAward className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>{project.badge[language]}</span>
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-black/60 text-slate-200 backdrop-blur-md border border-white/10">
                      {project.period}
                    </span>
                  </div>

                  {/* Contador de fotos inferior con icono de cámara */}
                  {project.images.length > 1 && (
                    <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md bg-black/75 text-white backdrop-blur-md border border-white/15 hover:bg-black/90 transition-colors">
                      <FiCamera className="w-3.5 h-3.5 text-blue-400" />
                      <span>
                        {project.images.length} {t.photosCount}
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-5 flex flex-col justify-between border-b border-slate-200 dark:border-slate-800">
                  {/* Mini-Terminal Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                        42_MADRID_CORE
                      </span>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10">
                      {project.period}
                    </span>
                  </div>

                  {/* Mini-Terminal Badge & Code Icon */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-blue-950/80 text-blue-300 border border-blue-800/60 backdrop-blur-sm">
                      <FiTerminal className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{project.badge[language]}</span>
                    </span>
                    <FiCode className="w-6 h-6 text-slate-600/60" />
                  </div>
                </div>
              )}

              {/* Contenido de la tarjeta */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title[language]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {project.description[language]}
                  </p>
                </div>

                <div>
                  {/* Etiquetas técnicas en monospace */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800/80 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Acciones: Ver Galería y Ver Enlace */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    {hasImages ? (
                      <button
                        type="button"
                        onClick={() => openGallery(project, 0)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                      >
                        <FiImage className="w-3.5 h-3.5" />
                        <span>{t.viewGallery}</span>
                      </button>
                    ) : (
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <FiTerminal className="w-3 h-3 text-blue-500" />
                        42 Academic
                      </span>
                    )}

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <span>{t.viewPost}</span>
                        <FiExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox / Modal interactivo de imágenes montado en document.body para evitar que se desplace por transformaciones de scroll */}
      {selectedProject &&
        selectedProject.images.length > 0 &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[9999] h-[100dvh] w-[100dvw] flex flex-col justify-between bg-black/95 backdrop-blur-md p-4 sm:p-6 transition-opacity overscroll-contain select-none"
            onClick={closeGallery}
          >
            {/* Header del Lightbox */}
            <div
              className="flex items-center justify-between w-full max-w-6xl mx-auto pb-4 border-b border-white/10 select-none shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-sm sm:base font-bold text-white font-mono">
                  {selectedProject.title[language]}
                </span>
                <span className="text-xs font-mono text-blue-400">
                  ({activePhotoIdx + 1} / {selectedProject.images.length})
                </span>
              </div>

              <button
                type="button"
                onClick={closeGallery}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors text-xs font-mono cursor-pointer"
                aria-label={t.close}
              >
                <span>{t.close}</span>
                <FiX className="w-4 h-4" />
              </button>
            </div>

            {/* Zona central: Imagen ampliada y controles de navegación */}
            <div
              className="relative flex-1 flex items-center justify-center my-4 max-w-6xl w-full mx-auto overflow-hidden select-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón Anterior */}
              {selectedProject.images.length > 1 && (
                <button
                  type="button"
                  onClick={prevPhoto}
                  className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/60 text-white hover:bg-black/90 transition-all border border-white/20 hover:scale-110 cursor-pointer"
                  aria-label={t.prev}
                >
                  <FiChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Imagen activa */}
              <div className="relative max-h-full max-w-full flex items-center justify-center">
                <img
                  src={selectedProject.images[activePhotoIdx]}
                  alt={`${selectedProject.title[language]} - ${activePhotoIdx + 1}`}
                  className="max-h-[68vh] sm:max-h-[72vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10 select-none"
                />
              </div>

              {/* Botón Siguiente */}
              {selectedProject.images.length > 1 && (
                <button
                  type="button"
                  onClick={nextPhoto}
                  className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/60 text-white hover:bg-black/90 transition-all border border-white/20 hover:scale-110 cursor-pointer"
                  aria-label={t.next}
                >
                  <FiChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Carrusel de miniaturas inferior */}
            {selectedProject.images.length > 1 && (
              <div
                className="w-full max-w-4xl mx-auto pt-3 border-t border-white/10 flex items-center justify-center gap-2 overflow-x-auto py-2 shrink-0 select-none"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedProject.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`relative h-12 w-16 sm:h-14 sm:w-20 rounded-md overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activePhotoIdx === idx
                        ? "border-blue-500 scale-105 shadow-md shadow-blue-500/50"
                        : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>,
          document.body
        )}
    </div>
  );
}

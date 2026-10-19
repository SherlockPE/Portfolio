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
  FiInfo,
  FiPlay,
  FiVideo,
} from "react-icons/fi";

function getYouTubeVideoId(url?: string | null): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : null;
}

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
  }, [selectedProject, setActivePhotoIdx]);

  const prevPhoto = useCallback(() => {
    if (!selectedProject || selectedProject.images.length === 0) return;
    setActivePhotoIdx((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  }, [selectedProject, setActivePhotoIdx]);

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
              ? "bg-theme-accent text-white shadow-md shadow-blue-500/25 ring-2 ring-theme-accent/50"
              : "bg-white dark:bg-theme-card text-slate-700 dark:text-theme-secondary hover:bg-slate-100 dark:hover:bg-theme-card-hover border border-slate-300 dark:border-theme-border shadow-xs"
          }`}
        >
          {t.filterAll} ({projectsData.length})
        </button>

        <button
          type="button"
          onClick={() => setSelectedCategory("systems")}
          className={`px-4 py-2 text-xs font-mono font-semibold rounded-full transition-all cursor-pointer ${
            selectedCategory === "systems"
              ? "bg-theme-accent text-white shadow-md shadow-blue-500/25 ring-2 ring-theme-accent/50"
              : "bg-white dark:bg-theme-card text-slate-700 dark:text-theme-secondary hover:bg-slate-100 dark:hover:bg-theme-card-hover border border-slate-300 dark:border-theme-border shadow-xs"
          }`}
        >
          {t.filterSystems} ({projectsData.filter((p) => p.category === "systems").length})
        </button>

        <button
          type="button"
          onClick={() => setSelectedCategory("hackathons")}
          className={`px-4 py-2 text-xs font-mono font-semibold rounded-full transition-all cursor-pointer ${
            selectedCategory === "hackathons"
              ? "bg-theme-accent text-white shadow-md shadow-blue-500/25 ring-2 ring-theme-accent/50"
              : "bg-white dark:bg-theme-card text-slate-700 dark:text-theme-secondary hover:bg-slate-100 dark:hover:bg-theme-card-hover border border-slate-300 dark:border-theme-border shadow-xs"
          }`}
        >
          {t.filterHackathons} ({projectsData.filter((p) => p.category === "hackathons").length})
        </button>
      </div>

      {/* Grid de Proyectos y Hackathons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => {
          const hasImages = project.images && project.images.length > 0;
          const hasVideos = project.images && project.images.some((img) => getYouTubeVideoId(img) !== null);
          const isOnlyGif = !hasVideos && project.images && project.images.length === 1 && project.images[0].toLowerCase().endsWith(".gif");
          const coverImg = project.coverImage || (hasImages ? project.images[0] : null);
          const coverVideoId = getYouTubeVideoId(coverImg) || (hasVideos ? getYouTubeVideoId(project.images[0]) : null);
          const resolvedCoverSrc = coverVideoId ? `https://img.youtube.com/vi/${coverVideoId}/hqdefault.jpg` : coverImg;

          return (
            <div
              key={project.id}
              onClick={(e) => {
                if ((e.target as HTMLElement).closest("a")) return;
                if (hasImages) openGallery(project, 0);
              }}
              role={hasImages ? "button" : undefined}
              tabIndex={hasImages ? 0 : undefined}
              onKeyDown={(e) => {
                if (!hasImages) return;
                if (e.key === "Enter" || e.key === " ") {
                  if ((e.target as HTMLElement).closest("a")) return;
                  e.preventDefault();
                  openGallery(project, 0);
                }
              }}
              className={`flex flex-col overflow-hidden rounded-2xl border border-slate-300/90 dark:border-theme-border/70 bg-white dark:bg-theme-card hover:bg-slate-50/90 dark:hover:bg-theme-card-hover shadow-md shadow-slate-200/90 dark:shadow-none hover:shadow-2xl hover:shadow-blue-500/15 hover:border-theme-accent/60 dark:hover:border-theme-border-glow transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-xs group ${
                hasImages ? "cursor-pointer" : ""
              }`}
            >
              {/* Portada / Imagen o Header de Terminal para proyectos de bajo nivel */}
              {resolvedCoverSrc ? (
                <div
                  className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 select-none"
                  title={hasImages ? (hasVideos ? `Ver Videos (${project.images.length})` : isOnlyGif ? t.viewDemoGif : `${t.viewGallery} (${project.images.length} ${t.photosCount})`) : undefined}
                >
                  <img
                    src={resolvedCoverSrc}
                    alt={project.title[language]}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Gradiente sutil para legibilidad de badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-slate-950/45" />

                  {/* Icono de Play grande si es video */}
                  {hasVideos && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-13 h-13 rounded-full bg-red-600/95 text-white flex items-center justify-center shadow-2xl group-hover:scale-115 group-hover:bg-red-600 transition-all duration-300">
                        <FiPlay className="w-6 h-6 ml-0.5 fill-current" />
                      </div>
                    </div>
                  )}

                  {/* Badges superiores: Premio y Año */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-white/95 dark:bg-slate-900/95 text-blue-700 dark:text-blue-300 border border-slate-200/80 dark:border-slate-700/80 backdrop-blur-md shadow-xs">
                      {project.category === "systems" ? (
                        <FiTerminal className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                      ) : (
                        <FiAward className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                      )}
                      <span>{project.badge[language]}</span>
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-black/60 text-slate-200 backdrop-blur-md border border-white/10">
                      {project.period}
                    </span>
                  </div>

                  {/* Contador de fotos o videos inferior */}
                  {project.images.length > 0 && (
                    <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md bg-black/80 text-white backdrop-blur-md border border-white/15 group-hover:bg-theme-accent group-hover:border-theme-accent/50 transition-colors shadow-sm">
                      {hasVideos ? (
                        <>
                          <FiPlay className="w-3.5 h-3.5 text-red-400 group-hover:text-white fill-current" />
                          <span>
                            {project.images.length} {project.images.length === 1 ? "Video Demo" : "Videos Demo"}
                          </span>
                        </>
                      ) : isOnlyGif ? (
                        <>
                          <FiPlay className="w-3.5 h-3.5 text-blue-400 group-hover:text-white fill-current" />
                          <span>{t.demoGif}</span>
                        </>
                      ) : (
                        <>
                          <FiCamera className="w-3.5 h-3.5 text-blue-400 group-hover:text-white" />
                          <span>
                            {project.images.length} {t.photosCount}
                          </span>
                        </>
                      )}
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
                        SYSTEMS_CORE
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
                  <h3 className="text-lg font-bold text-slate-900 dark:text-theme-text mb-3 group-hover:text-theme-accent transition-colors">
                    {project.title[language]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-theme-muted leading-relaxed mb-6">
                    {project.description[language]}
                  </p>
                </div>

                <div>
                  {/* Etiquetas técnicas en monospace */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-theme-border-subtle mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-theme-bg/80 text-slate-700 dark:text-theme-secondary border border-slate-200/90 dark:border-theme-border-subtle"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Acciones: Ver Galería / Videos y Ver Enlace */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    {hasImages ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 dark:text-theme-secondary group-hover:text-theme-accent transition-colors">
                        {hasVideos ? (
                          <>
                            <FiVideo className="w-3.5 h-3.5 text-red-500" />
                            <span>Ver Demos ({project.images.length})</span>
                          </>
                        ) : isOnlyGif ? (
                          <>
                            <FiPlay className="w-3.5 h-3.5 text-theme-accent fill-current" />
                            <span>{t.viewDemoGif}</span>
                          </>
                        ) : (
                          <>
                            <FiImage className="w-3.5 h-3.5 text-theme-accent" />
                            <span>
                              {t.viewGallery} ({project.images.length})
                            </span>
                          </>
                        )}
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-theme-faint flex items-center gap-1">
                        <FiTerminal className="w-3 h-3 text-theme-accent" />
                        Systems Architecture
                      </span>
                    )}

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-theme-accent hover:underline relative z-10"
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

      {/* Mensaje de ayuda / UX helper idéntico al de Skills */}
      <div className="mt-8 flex items-center justify-between text-xs font-mono text-theme-faint px-2">
        <p className="flex items-center gap-1.5">
          <FiInfo className="w-3.5 h-3.5 text-theme-accent shrink-0" />
          <span>{t.clickCardHint}</span>
        </p>
      </div>

      {/* Lightbox */}
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
                <span className="text-sm sm:text-base font-bold text-white font-mono">
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

              {/* Contenido activo: Video de YouTube o Imagen */}
              {(() => {
                const activeMedia = selectedProject.images[activePhotoIdx];
                const activeVideoId = getYouTubeVideoId(activeMedia);

                if (activeVideoId) {
                  return (
                    <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-black">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                        title={`${selectedProject.title[language]} - Demo Video ${activePhotoIdx + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                    </div>
                  );
                }

                return (
                  <div className="relative max-h-full max-w-full flex items-center justify-center">
                    <img
                      src={activeMedia}
                      alt={`${selectedProject.title[language]} - ${activePhotoIdx + 1}`}
                      className="max-h-[68vh] sm:max-h-[72vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10 select-none"
                    />
                  </div>
                );
              })()}

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
                {selectedProject.images.map((img, idx) => {
                  const videoId = getYouTubeVideoId(img);
                  const thumbSrc = videoId
                    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                    : img;

                  return (
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
                        src={thumbSrc}
                        alt={`Thumbnail ${idx + 1}`}
                        className="h-full w-full object-cover"
                      />
                      {videoId && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <FiPlay className="w-4 h-4 text-white fill-current drop-shadow" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>,
          document.body
        )}
    </div>
  );
}

# Plan de Trabajo & Decisiones de Diseño (Portfolio Fabricio)

## 📌 Histórico de Fases Completadas
- [x] **Fase 1: Iconografía e Identidad Visual (Cero Emojis)**
  - Reemplazo de emojis por iconos SVG vectoriales y migración completa a `react-icons/fi`.
  - Creación de `SectionHeading.tsx` con numeración técnica editorial (`// 01`, `// 02`, etc.).
- [x] **Fase 2: Rediseño del Hero & Terminal Unix**
  - Badge de disponibilidad en vivo con pulso verde esmeralda.
  - Tarjeta de terminal interactiva con comandos reales (`gcc`, `./portfolio --profile`), avatar canino (`/profile_pic_doggy.png`) y métricas reales.
  - Comandos bash con texto en blanco y negro puro de alto impacto (`text-black font-extrabold` / `text-white font-extrabold`) y cursor parpadeante.
- [x] **Fase 3: Copywriting Auténtico y Trilingüe**
  - Narrativa personal centrada en 42 Madrid, depuración en C, concurrencia y hackathons en ES, EN y PT.
- [x] **Fase 4: Proyectos & Hackathones (Sección 04)**
  - Título actualizado en los 3 idiomas: *Proyectos y Hackathones* (ES), *Projects and Hackathons* (EN), *Projetos e Hackathons* (PT).
  - Exportación centralizada de fotos desde carpetas en `public/` en `projectImages.ts`.
  - Lightbox / Modal interactivo en `Projects.tsx` con soporte de teclado (`Esc`, `←`, `→`), carrusel de miniaturas y montado en `document.body` mediante `createPortal` (evitando bugs de desplazamiento de CSS `transform` en scroll).
- [x] **Fase 5: Transición Circular de Tema (Circular Reveal)**
  - Implementación con View Transitions API (`startViewTransition` + `clipPath: circle(...)`).
  - Sincronización en `ThemeToggle.tsx` y `AppContext.tsx`.
- [x] **Fase 6: Trayectoria Twin Layout & Proyectos de Sistemas 42 Madrid**
  - **Twin Layout en Sección 02**: Experiencia Laboral y Educación & Formación organizadas en dos columnas paralelas en Desktop (`grid-cols-2`) y apiladas en móvil (`grid-cols-1`).
  - **Experiencia Laboral (Orden Cronológico Inverso)**: QWAK (Startup), Algorithmics España (Profesor & Auxiliar Administrativo/Ventas), Mentoría Freelance (Superprof & Tusclasesparticulares unificados) y Picardías Eventos (expresión y dinamización).
  - **Educación (Orden Cronológico Inverso)**: ESCP Business School, 42 Madrid (Sistemas), 42 Madrid (C Piscine), Escuela de Artes Escénicas ALEPH y UTEC. Sustitución de menciones de París por 42 Madrid Fundación Telefónica.
  - **Proyectos de Sistemas en Sección 04**: Inclusión de Cub3D (Motor Raycasting en C), ft_irc (Servidor IRC Concurrente en C++) y Minishell (Shell Propia en C) con mini-terminal cards estilizadas y filtros interactivos por categoría (Todos, Sistemas & 42 Madrid, Hackathons).

---

## 🚀 Fase 6: Interactividad Avanzada, Foto Hero & Animaciones de Scroll (En Ejecución)

### 1. Animaciones al Escrollear (Scroll Animations)
- **Principio UX/UI**: Deben ejecutarse **una sola vez** (`IntersectionObserver.unobserve`), con aceleración natural tipo muelle (`cubic-bezier(0.16, 1, 0.3, 1)`), desplazamiento sutil (`18px`) y duración de `1.15s` con escalonamiento de `100ms` para un ritmo pausado y cinematográfico.
- **Respeto a accesibilidad**: Fallback inmediato si el usuario tiene `prefers-reduced-motion: reduce`.

### 2. Integración de la Foto en el Hero
- **Configuración Activa (Avatar Circular)**:
  - Foto de perfil circular (`/profile_pic_doggy.png`) situada directamente sobre el encabezado del nombre con marco sutil (`ring-4 ring-slate-100 dark:ring-slate-800`), sombra pronunciada y hover scale suave.
  - La tarjeta de terminal Unix a la derecha queda totalmente limpia y despejada, sin imágenes superpuestas de fondo.
- **Opciones de Reserva (Documentadas para el futuro)**:
  - *Opción C (Fusión Orgánica / Gradient Bleed)*: Foto grande vertical (`/psapio_pictures/foto_psapio.jpg`) difuminada tras la terminal.
  - *Opción A (Bento Grid Hero)*: Retrato vertical simétrico 3:4 junto a la terminal divididos en cuadrícula equilibrada.

### 3. Interactividad del Nombre ("Fabricio López Reyes")
- **Pilar 1 (Al cargar la página)**: Efecto *Hacker Text Scramble / Decoder* que arranca con caracteres hexadecimales y binarios (`01ABCDEF_#!<>/$*&~%`) y se resuelve de forma deliberada y progresiva de izquierda a derecha en ~1.7s (`38` iteraciones @ `45ms`).
- **Pilar 3 (Modo normal / hover)**: Haz de luz / *Spotlight* magnético ultra-brillante (*shiny* specular luster) proyectado en base a coordenadas del ratón. Paleta puramente tecnológica y limpia en **Cyan Eléctrico, Hielo y Azul Zafiro Cobalto** (sin tonos violetas ni magentas). En modo oscuro cuenta con destello blanco especular (`#ffffff`) en el núcleo; en modo claro con gradiente azul cobalto de alto impacto. El degradado está recortado **estrictamente dentro de los glifos de las letras** (`WebkitBackgroundClip: "text"`, `WebkitTextFillColor: "transparent"`) sin manchar ni proyectarse en el contenedor exterior.
- **Pilar 4 (Al hacer clic)**: Copia interactiva del comando de desarrollador (`npx fabricio`) al portapapeles con micro-badge flotante de confirmación temporal (`[✓ npx fabricio copiado!]`).

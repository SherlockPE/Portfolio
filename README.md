# Fabricio López Reyes — Developer Portfolio

[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=flat-square)](LICENSE)

Portfolio personal de **Fabricio López Reyes**, graduado de **42 Madrid** y desarrollador de software. Diseñado bajo una filosofía de ingeniería limpia, alto contraste y tipografía editorial, sin clichés ni emojis decorativos.

---

## 🚀 Características Principales

### 1. Internacionalización Trilingüe Completa (ES / EN / PT)
* Soporte nativo para tres idiomas: **Español**, **Inglés** y **Portugués**.
* Persistencia en `localStorage` y cambio reactivo en tiempo real sin recarga de página mediante `AppContext`.

### 2. Transición Circular de Tema (Dark / Light Mode)
* Implementación con la **View Transitions API** nativa (`document.startViewTransition` + `document.documentElement.animate({ clipPath: ... })`).
* Expansión circular fluida y suave (600ms) originada desde las coordenadas exactas del botón del ratón.
* Respeto estricto a accesibilidad (`prefers-reduced-motion`).

### 3. Hero Interactivo & Terminal Unix
* **Badge de disponibilidad en vivo** con pulso animado esmeralda.
* **Tarjeta de terminal Unix** interactiva con salida formateada de comandos de bajo nivel (`gcc`, `./portfolio --profile`), cursor parpadeante y métricas técnicas reales.
* Comandos bash en blanco y negro puro (`text-black font-extrabold` / `text-white font-extrabold`) para máxima legibilidad.

### 4. Título Dinámico con Múltiples Estados
* **Efecto Desencriptación Hacker (On-Load Scramble)**: Algoritmo matemático en cascada que decodifica progresivamente caracteres hexadecimales y binarios (`01ABCDEF_#!<>/$*&~%`) hacia el nombre real de izquierda a derecha en ~1.7s.
* **Spotlight Magnético Especular (Hover)**: Haz de luz radial que sigue el cursor del ratón. Utiliza `-webkit-background-clip: text` y `-webkit-text-fill-color: transparent` sobre una réplica del texto, garantizando que el destello cyan/zafiro con reflejo blanco (`#ffffff`) se proyecte **únicamente dentro de los glifos de las letras**, sin manchar el contenedor.
* **Copia Interactiva al Portapapeles (Click)**: Copia el comando `npx fabricio` al hacer clic, con feedback flotante animado localizado en los tres idiomas (`copiado!`, `copied!`).

### 5. Galería de Proyectos & Lightbox con React Portal
* Catálogo de hackathons y proyectos ganadores (HackSat 2026, Reto Mastercard de IA Agéntica, Merge Hack 2025, MVP de QWAK, etc.).
* Gestión centralizada de 59 fotografías de alta resolución organizadas en carpetas temáticas (`src/data/projectImages.ts`).
* **Lightbox Modal interactivo** montado en `document.body` mediante **React Portal (`createPortal`)** para aislarlo de los contenedores de scroll con `transform` y evitar desplazamientos involuntarios en el viewport.
* Soporte completo de navegación por teclado (`Escape`, `Flecha Izquierda`, `Flecha Derecha`) y carrusel inferior de miniaturas.

### 6. Animaciones de Entrada al Escrollear (Scroll Reveal)
* Hook personalizado `useScrollReveal` basado en `IntersectionObserver`.
* Las animaciones se ejecutan **una sola vez** (`observer.unobserve`), con desplazamiento suave (18px), aceleración natural tipo muelle (`cubic-bezier(0.16, 1, 0.3, 1)`) y escalonamiento deliberado de 100ms.

---

## 🛠️ Stack Tecnológico

| Herramienta | Versión | Propósito |
| :--- | :--- | :--- |
| **React** | 19.x | Biblioteca de componentes de interfaz |
| **TypeScript** | 5.x / 6.x | Tipado estático y robustez del código |
| **Tailwind CSS** | v4.x | Motor de estilos moderno `@tailwindcss/vite` |
| **Vite** | 8.x | Bundler ultrarrápido y servidor de desarrollo HMR |
| **React Icons** | 5.x | Iconografía vectorial SVG técnica (`react-icons/fi`) |

---

## 📂 Estructura del Proyecto

```text
Portfolio/
├── public/                     # Activos estáticos, fotos de proyectos y avatares
│   ├── Hack_Sat_AstraLumen/
│   ├── Merge_Hack_2025/
│   ├── Summer_Hack_2025/
│   ├── profile_pic_doggy.png   # Avatar circular del Hero
│   └── ...
├── src/
│   ├── components/             # Componentes reutilizables
│   │   ├── Footer.tsx
│   │   ├── InteractiveName.tsx # Título con scramble, spotlight y copy
│   │   ├── LangToggle.tsx      # Selector de idioma (ES/EN/PT)
│   │   ├── Navbar.tsx          # Barra de navegación fija con backdrop blur
│   │   ├── SectionHeading.tsx  # Títulos de sección con numeración editorial (// 01)
│   │   └── ThemeToggle.tsx     # Toggle de tema con View Transitions API
│   ├── context/
│   │   └── AppContext.tsx      # Estado global de tema (Dark/Light) e idioma (ES/EN/PT)
│   ├── data/
│   │   ├── education.ts        # Datos de trayectoria académica y 42 Madrid
│   │   ├── projectImages.ts    # Centralización de fotos desde /public
│   │   ├── projects.ts         # Lista de proyectos y hackathons
│   │   ├── skills.ts           # Categorías de tecnologías y herramientas
│   │   └── translations.ts     # Diccionario de traducciones (ES, EN, PT)
│   ├── hooks/
│   │   └── useScrollReveal.ts  # IntersectionObserver para animaciones de scroll
│   ├── sections/               # Secciones principales de la Single-Page
│   │   ├── Home.tsx            # Hero con avatar circular y terminal Unix
│   │   ├── About.tsx           # Filosofía de trabajo y pilares técnicos
│   │   ├── Education.tsx       # Timeline de educación y experiencia
│   │   ├── Skills.tsx          # Grid de tecnologías y competencias
│   │   ├── Projects.tsx        # Galería de proyectos con Lightbox Portal
│   │   └── Contact.tsx         # Canales de contacto directo
│   ├── App.tsx                 # Composición principal de la aplicación
│   ├── index.css               # Configuración Tailwind v4, scroll reveal y view transitions
│   └── main.tsx                # Punto de entrada de React 19
├── package.json
└── vite.config.ts
```

---

## 💻 Instalación y Desarrollo Local

### Prerrequisitos
* **Node.js** (v18 o superior recomendado)
* **npm** o **pnpm**

### Pasos

1. Clonar el repositorio o situarse en el directorio del proyecto:
   ```bash
   cd Portfolio
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 🔨 Scripts Disponibles

* `npm run dev`: Inicia el servidor de desarrollo Vite con Hot Module Replacement (HMR).
* `npm run build`: Compila TypeScript (`tsc -b`) y empaqueta la aplicación para producción en `dist/`.
* `npm run lint`: Ejecuta ESLint sobre el proyecto para verificar estándares de código.
* `npm run preview`: Sirve localmente la build de producción generada en `dist/`.

---

## 📐 Decisiones de Ingeniería Notables

### Bug del `containing block` y solución con React Portals
En CSS moderno, cualquier elemento con `transform` o `will-change: transform` (usado comúnmente en animaciones de scroll como `.reveal-on-scroll`) se convierte en el nuevo *containing block* de todos sus elementos hijos, anulando el comportamiento estándar de `position: fixed` respecto al viewport del navegador.

Para evitar que el modal de la galería de proyectos se desplazara fuera de la pantalla cuando el usuario abría un proyecto tras hacer scroll, se utilizó `createPortal(lightboxJsx, document.body)`. De esta forma, el modal se monta directamente en la raíz de `document.body`, garantizando que `fixed inset-0` esté siempre anclado al $100\%$ de la ventana visible.

---

## 👤 Autor

**Fabricio López Reyes**
* **GitHub**: [@SherlockPE](https://github.com/SherlockPE)
* **LinkedIn**: [Fabricio López Reyes](https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/)
* **Ubicación**: Torrejón de Ardoz, Comunidad de Madrid, España

---

## 💻 Instalación y Desarrollo Local

### Prerrequisitos
* **Node.js** (v18 o superior recomendado)
* **npm** o **pnpm**

### Pasos

1. Clonar el repositorio o situarse en el directorio del proyecto:
   ```bash
   cd Portfolio
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 🔨 Scripts Disponibles

* `npm run dev`: Inicia el servidor de desarrollo Vite con Hot Module Replacement (HMR).
* `npm run build`: Compila TypeScript (`tsc -b`) y empaqueta la aplicación para producción en `dist/`.
* `npm run lint`: Ejecuta ESLint sobre el proyecto para verificar estándares de código.
* `npm run preview`: Sirve localmente la build de producción generada en `dist/`.

---

## 📐 Decisiones de Ingeniería Notables

### Bug del `containing block` y solución con React Portals
En CSS moderno, cualquier elemento con `transform` o `will-change: transform` (usado comúnmente en animaciones de scroll como `.reveal-on-scroll`) se convierte en el nuevo *containing block* de todos sus elementos hijos, anulando el comportamiento estándar de `position: fixed` respecto al viewport del navegador.

Para evitar que el modal de la galería de proyectos se desplazara fuera de la pantalla cuando el usuario abría un proyecto tras hacer scroll, se utilizó `createPortal(lightboxJsx, document.body)`. De esta forma, el modal se monta directamente en la raíz de `document.body`, garantizando que `fixed inset-0` esté siempre anclado al $100\%$ de la ventana visible.

---

## 👤 Autor

**Fabricio López Reyes**
* **GitHub**: [@SherlockPE](https://github.com/SherlockPE)
* **LinkedIn**: [Fabricio López Reyes](https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/)
* **Ubicación**: Torrejón de Ardoz, Comunidad de Madrid, España


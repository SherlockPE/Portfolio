export interface SkillItem {
  name: string;
  icon: string;
  badge?: string;
  description?: {
    es: string;
    en: string;
    pt: string;
  };
}

export interface SkillCategory {
  id: string;
  highlight?: boolean;
  categoryName: {
    es: string;
    en: string;
    pt: string;
  };
  subtitle: {
    es: string;
    en: string;
    pt: string;
  };
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "low-level-systems",
    highlight: true,
    categoryName: {
      es: "Bajo Nivel & Sistemas Operativos (Core)",
      en: "Low-Level & Operating Systems (Core)",
      pt: "Baixo Nível e Sistemas Operacionais (Core)",
    },
    subtitle: {
      es: "Bases de computación sin librerías estándar mágicas, control estricto de memoria y arquitectura POSIX",
      en: "Fundamental computing without magic standard libraries, strict memory control, and POSIX architecture",
      pt: "Fundamentos de computação sem bibliotecas mágicas, controle estrito de memória e arquitetura POSIX",
    },
    skills: [
      { name: "C (C99 / C11)", icon: "c", badge: "Standard Core" },
      { name: "C++ (C++98 / C++11)", icon: "cpp", badge: "OOP & RAII" },
      { name: "Linux & POSIX API", icon: "linux", badge: "Syscalls" },
      { name: "Gestión de Memoria", icon: "cpu", badge: "Zero Leaks (Heap/Stack)" },
      { name: "Sockets TCP & Redes", icon: "server", badge: "poll / non-blocking" },
      { name: "Procesos Unix & IPC", icon: "terminal", badge: "fork / execve / pipes" },
      { name: "Estructuras de Datos", icon: "binary", badge: "Desde cero en C" },
      { name: "Raycasting & Gráficos 3D", icon: "circuit", badge: "MiniLibX / DDA" },
    ],
  },
  {
    id: "toolchain-debugging",
    categoryName: {
      es: "Toolchain, Debugging & Linux CLI",
      en: "Toolchain, Debugging & Linux CLI",
      pt: "Toolchain, Depuração & Linux CLI",
    },
    subtitle: {
      es: "Herramientas de depuración profunda, compiladores y automatización del entorno",
      en: "Deep memory debugging tools, compilers, and build automation",
      pt: "Ferramentas de depuração de memória, compiladores e automação",
    },
    skills: [
      { name: "Valgrind / Memcheck", icon: "debug", badge: "0 errors / 0 leaks" },
      { name: "GDB Debugger", icon: "bug", badge: "Breakpoints & Stack traces" },
      { name: "GNU Make", icon: "bash", badge: "Makefiles con -Wall -Werror" },
      { name: "GCC / Clang", icon: "terminal", badge: "Compiladores C/C++" },
      { name: "Bash Scripting", icon: "bash", badge: "Automatización & Pipes" },
      { name: "Git & GitHub", icon: "git", badge: "Control de versiones" },
      { name: "Docker", icon: "docker", badge: "Contenedores & Aislamiento" },
      { name: "CMake", icon: "cmake", badge: "Build System" },
    ],
  },
  {
    id: "web-frontend",
    categoryName: {
      es: "Ecosistema Web & Frontend",
      en: "Web Ecosystem & Frontend",
      pt: "Ecossistema Web e Frontend",
    },
    subtitle: {
      es: "Interfaces modernas de alto rendimiento con tipado estático y arquitectura reactiva",
      en: "Modern high-performance interfaces with strict static typing and reactive architectures",
      pt: "Interfaces modernas de alta performance com tipagem estática e arquiteturas reativas",
    },
    skills: [
      { name: "TypeScript", icon: "typescript", badge: "Strict Type Safety" },
      { name: "React 19", icon: "react", badge: "Hooks / Portals / Transitions" },
      { name: "JavaScript (ES6+)", icon: "javascript", badge: "Modern Web APIs" },
      { name: "Tailwind CSS v4", icon: "tailwind", badge: "Design Systems" },
      { name: "Vite / Next.js", icon: "vite", badge: "Modern Bundling & HMR" },
      { name: "WebAssembly (WASM)", icon: "wasm", badge: "High-performance web" },
    ],
  },
  {
    id: "backend-cloud-specialties",
    categoryName: {
      es: "Backend, APIs & Tecnologías de Impacto",
      en: "Backend, APIs & Impact Tech",
      pt: "Backend, APIs e Tecnologias de Impacto",
    },
    subtitle: {
      es: "Integración de servicios, APIs de red de misión crítica y prototipado rápido",
      en: "Service integration, mission-critical network APIs, and rapid prototyping",
      pt: "Integração de serviços, APIs de rede críticas e prototipagem rápida",
    },
    skills: [
      { name: "Python", icon: "python", badge: "Data, Scripting & Docencia" },
      { name: "REST APIs & JSON", icon: "layers", badge: "Arquitectura de Servicios" },
      { name: "Telefónica OpenGateway", icon: "zap", badge: "Network APIs (KYC/Location)" },
      { name: "MongoDB", icon: "mongodb", badge: "NoSQL Database" },
      { name: "Web3 & Criptografía", icon: "binary", badge: "ECDSA / Blockchain BSV" },
      { name: "Unity", icon: "unity", badge: "Simulación & Game Engine" },
    ],
  },
];

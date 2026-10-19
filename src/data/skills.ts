export type SkillCategoryId = "all" | "systems" | "fullstack" | "frontend" | "devops";

export interface SkillItem {
  id: string;
  name: string;
  icon: string;
  badge: string;
  category: "systems" | "fullstack" | "frontend" | "devops";
  highlight?: boolean;
  description: {
    es: string;
    en: string;
    pt: string;
  };
}

export interface SkillCategory {
  id: "systems" | "fullstack" | "frontend" | "devops";
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
    id: "systems",
    highlight: true,
    categoryName: {
      es: "Bajo Nivel & Sistemas (C/C++)",
      en: "Low-Level & Systems (C/C++)",
      pt: "Baixo Nível e Sistemas (C/C++)",
    },
    subtitle: {
      es: "Control estricto de memoria sin librerías estándar mágicas, llamadas al sistema y arquitectura POSIX",
      en: "Strict memory control without magic standard libraries, syscalls, and POSIX architecture",
      pt: "Controle estrito de memória sem bibliotecas mágicas, syscalls e arquitetura POSIX",
    },
    skills: [
      {
        id: "c-lang",
        name: "C (C99 / C11)",
        icon: "c",
        badge: "Manual Memory & Standard Core",
        category: "systems",
        highlight: true,
        description: {
          es: "Gestión manual de memoria (Heap & Stack), aritmética de punteros, manipulación binaria y desarrollo bajo la estricta Norma de 42.",
          en: "Manual memory allocation (Heap & Stack), pointer arithmetic, bitwise manipulation, and strict adherence to 42 engineering standards.",
          pt: "Gestão manual de memória (Heap & Stack), aritmética de ponteiros e desenvolvimento sob rigorosos padrões de engenharia.",
        },
      },
      {
        id: "cpp-lang",
        name: "C++ (C++98 / C++11)",
        icon: "cpp",
        badge: "OOP, RAII & Templates",
        category: "systems",
        highlight: true,
        description: {
          es: "Programación orientada a objetos estricta, gestión de recursos por RAII, sobrecarga de operadores y servidores de red concurrentes.",
          en: "Strict object-oriented engineering, RAII resource lifecycle, operator overloading, and concurrent network servers.",
          pt: "Programação orientada a objetos, ciclo de vida RAII e servidores de rede concorrentes.",
        },
      },
      {
        id: "linux-posix",
        name: "Linux & POSIX API",
        icon: "linux",
        badge: "Syscalls, Signals & I/O",
        category: "systems",
        highlight: true,
        description: {
          es: "Llamadas al sistema del kernel de Linux, manejo asíncrono de señales (SIGINT, SIGQUIT), descriptores de archivo y pipes.",
          en: "Linux kernel system calls, asynchronous signal handling (SIGINT, SIGQUIT), file descriptors, and pipes.",
          pt: "Chamadas de sistema no kernel Linux, tratamento assíncrono de sinais e pipes POSIX.",
        },
      },
      {
        id: "memory-mgmt",
        name: "Gestión de Memoria",
        icon: "cpu",
        badge: "Heap & Stack (Zero Leaks)",
        category: "systems",
        highlight: true,
        description: {
          es: "Auditoría de memoria profunda: prevención de double free, invalid reads/writes, buffer overflows y memoria huérfana con Valgrind.",
          en: "Deep memory auditing: preventing double frees, invalid reads/writes, buffer overflows, and dangling memory with Valgrind.",
          pt: "Auditoria de memória: prevenção de double free, leituras inválidas e vazamentos com Valgrind.",
        },
      },
      {
        id: "sockets-tcp",
        name: "Sockets TCP & Redes",
        icon: "server",
        badge: "poll() & Non-blocking I/O",
        category: "systems",
        highlight: true,
        description: {
          es: "Arquitectura de red cliente-servidor: multiplexación de E/S no bloqueante con poll(), sockets BSD y protocolo IRC RFC 1459.",
          en: "Client-server network architecture: non-blocking I/O multiplexing with poll(), BSD sockets, and RFC 1459 IRC protocol.",
          pt: "Arquitetura cliente-servidor: multiplexação I/O não-bloqueante com poll(), sockets BSD e RFC 1459.",
        },
      },
      {
        id: "unix-ipc",
        name: "Procesos Unix & IPC",
        icon: "terminal",
        badge: "fork / execve / pipes",
        category: "systems",
        highlight: true,
        description: {
          es: "Creación de árboles de procesos con fork(), reemplazo de imagen con execve(), redirección de descriptores con dup2() y sincronización.",
          en: "Process tree management with fork(), execution with execve(), descriptor redirection with dup2(), and waitpid synchronization.",
          pt: "Criação de árvores de processos com fork(), execução com execve(), redirecionamento com dup2() e waitpid.",
        },
      },
      {
        id: "data-structs",
        name: "Estructuras de Datos",
        icon: "binary",
        badge: "Desde cero en C puro",
        category: "systems",
        description: {
          es: "Implementación desde cero en C puro de listas enlazadas, colas, pilas, tablas hash y árboles de parsing sintáctico (AST).",
          en: "Bare-metal implementation in C of linked lists, queues, stacks, hash tables, and AST syntax trees.",
          pt: "Implementação do zero em C de listas encadeadas, filas, pilhas, tabelas hash e árvores sintáticas.",
        },
      },
      {
        id: "raycasting",
        name: "Raycasting & Gráficos 3D",
        icon: "circuit",
        badge: "MiniLibX & Algoritmo DDA",
        category: "systems",
        description: {
          es: "Motor 3D tipo Wolfenstein en C con MiniLibX: algoritmo DDA, cálculo trigonométrico, proyección euclidiana y detección de colisiones.",
          en: "Wolfenstein-style 3D raycasting engine in C with MiniLibX: DDA algorithm, euclidean projections, and collision detection.",
          pt: "Motor 3D estilo Wolfenstein em C com MiniLibX: algoritmo DDA e cálculos trigonométricos em tempo real.",
        },
      },
    ],
  },
  {
    id: "fullstack",
    highlight: true,
    categoryName: {
      es: "Fullstack, Bases de Datos & Backend",
      en: "Fullstack, Databases & Backend",
      pt: "Fullstack, Bancos de Dados & Backend",
    },
    subtitle: {
      es: "Bases de datos relacionales, consultas complejas, APIs concurrentes y desarrollo de servicios",
      en: "Relational databases, complex queries, concurrent APIs, and backend service engineering",
      pt: "Bancos de dados relacionais, queries complexas, APIs concorrentes e serviços backend",
    },
    skills: [
      {
        id: "postgresql",
        name: "PostgreSQL",
        icon: "postgres",
        badge: "ACID, Índices & Triggers",
        category: "fullstack",
        highlight: true,
        description: {
          es: "Modelado relacional robusto, transacciones ACID, índices B-Tree, optimización de planes de ejecución y consultas analíticas complejas.",
          en: "Relational modeling, ACID transactions, B-Tree indexing, execution plan optimization, and complex analytical queries.",
          pt: "Modelagem relacional, transações ACID, índices B-Tree e otimização de queries complexas.",
        },
      },
      {
        id: "sql-relational",
        name: "SQL & Modelado Relacional",
        icon: "sql",
        badge: "Normalización & Esquemas",
        category: "fullstack",
        highlight: true,
        description: {
          es: "Diseño de esquemas relacionales (3FN), integridad referencial con claves foráneas, vistas, triggers y agregaciones avanzadas.",
          en: "Relational schema design (3NF), foreign key referential integrity, views, triggers, and advanced aggregations.",
          pt: "Modelagem de esquemas relacionais, integridade referencial, views, triggers e agregações avançadas.",
        },
      },
      {
        id: "nodejs-express",
        name: "Node.js & Express",
        icon: "node",
        badge: "Backend RESTful & Middlewares",
        category: "fullstack",
        highlight: true,
        description: {
          es: "Servidores backend asíncronos en Node.js, arquitectura de capas, middlewares de validación/seguridad y endpoints RESTful.",
          en: "Asynchronous backend servers in Node.js, layered architecture, validation/auth middlewares, and RESTful endpoints.",
          pt: "Servidores backend assíncronos em Node.js, arquitetura em camadas e endpoints RESTful.",
        },
      },
      {
        id: "mongodb",
        name: "MongoDB",
        icon: "mongodb",
        badge: "Bases NoSQL & Colecciones BSON",
        category: "fullstack",
        description: {
          es: "Almacenamiento NoSQL flexible orientado a documentos BSON, modelado de esquemas dinámicos y pipelines de agregación.",
          en: "Document-oriented NoSQL storage with BSON, dynamic schema modeling, and aggregation pipelines.",
          pt: "Armazenamento NoSQL orientado a documentos BSON e pipelines de agregação.",
        },
      },
      {
        id: "python",
        name: "Python",
        icon: "python",
        badge: "FastAPI, Scripting & Docencia",
        category: "fullstack",
        description: {
          es: "Automatización de tareas, prototipado rápido de APIs con FastAPI, procesamiento de datos y pedagogía técnica en algoritmia.",
          en: "Task automation, rapid API prototyping with FastAPI, data processing, and algorithmic computer science pedagogy.",
          pt: "Automação de scripts, prototipagem rápida com FastAPI e ensino de algoritmia.",
        },
      },
      {
        id: "rest-apis",
        name: "APIs & Microservicios",
        icon: "layers",
        badge: "Arquitectura de Servicios & JSON",
        category: "fullstack",
        description: {
          es: "Diseño de interfaces HTTP conformes a REST, autenticación JWT/OAuth, control de tasas (rate-limiting) y contratos JSON estrictos.",
          en: "REST-compliant HTTP interface design, JWT/OAuth auth, rate-limiting, and strict JSON API contracts.",
          pt: "Design de interfaces HTTP RESTful, autenticação JWT, rate-limiting e contratos JSON rígidos.",
        },
      },
    ],
  },
  {
    id: "frontend",
    categoryName: {
      es: "Frontend & Ecosistema Web",
      en: "Frontend & Modern Web",
      pt: "Frontend e Ecossistema Web",
    },
    subtitle: {
      es: "Interfaces reactivas de alto rendimiento, diseño adaptable y tipado estático riguroso",
      en: "High-performance reactive interfaces, responsive design, and strict static typing",
      pt: "Interfaces reativas de alta performance, design responsivo e tipagem estática",
    },
    skills: [
      {
        id: "typescript",
        name: "TypeScript",
        icon: "typescript",
        badge: "Strict Type Safety & Generics",
        category: "frontend",
        highlight: true,
        description: {
          es: "Tipado estricto sin atajos ('any'), genéricos avanzados, interfaces de dominio y reducción de errores en tiempo de compilación.",
          en: "Strict typing without 'any', advanced generics, domain interfaces, and compile-time error prevention.",
          pt: "Tipagem estrita sem 'any', tipos genéricos avançados e prevenção de erros em compilação.",
        },
      },
      {
        id: "react-19",
        name: "React 19",
        icon: "react",
        badge: "Hooks, Portals & State",
        category: "frontend",
        highlight: true,
        description: {
          es: "Desarrollo de SPAs reactivas con React 19: hooks personalizados, transiciones concurrentes, gestión de estado y portales modales.",
          en: "Reactive SPA development with React 19: custom hooks, concurrent transitions, state patterns, and modal portals.",
          pt: "Desenvolvimento SPA com React 19: hooks customizados, transições concorrentes e portais modais.",
        },
      },
      {
        id: "nextjs",
        name: "Next.js",
        icon: "nextjs",
        badge: "SSR, SSG & Server Components",
        category: "frontend",
        description: {
          es: "Renderizado en servidor (SSR), generación de sitios estáticos (SSG), optimización de Core Web Vitals y enrutamiento App Router.",
          en: "Server-side rendering (SSR), static site generation (SSG), Core Web Vitals optimization, and App Router architecture.",
          pt: "Renderização no servidor (SSR), geração estática (SSG) e otimização para Core Web Vitals.",
        },
      },
      {
        id: "javascript",
        name: "JavaScript (ES6+)",
        icon: "javascript",
        badge: "Modern Web APIs & Event Loop",
        category: "frontend",
        description: {
          es: "Dominio del Event Loop, Promesas, async/await, closures, prototipos y APIs nativas modernas del navegador.",
          en: "Mastery of the Event Loop, Promises, async/await, closures, prototypes, and modern browser APIs.",
          pt: "Domínio do Event Loop, Promises, async/await, closures e APIs nativas do navegador.",
        },
      },
      {
        id: "tailwind",
        name: "Tailwind CSS v4",
        icon: "tailwind",
        badge: "Design Systems & Flexbox/Grid",
        category: "frontend",
        description: {
          es: "Sistemas de diseño modernos con Tailwind v4: temas claro/oscuro con variables CSS, animaciones fluidas y layout responsive.",
          en: "Modern design systems with Tailwind v4: light/dark themes via CSS variables, fluid animations, and responsive layout.",
          pt: "Design systems modernos com Tailwind v4: temas claro/escuro, variáveis CSS e layout responsivo.",
        },
      },
      {
        id: "vite",
        name: "Vite",
        icon: "vite",
        badge: "Modern Bundling & Fast HMR",
        category: "frontend",
        description: {
          es: "Configuración de tooling moderno para frontend: Hot Module Replacement (HMR) instantáneo, optimización de bundles y TypeScript.",
          en: "Modern frontend tooling configuration: instantaneous HMR, production bundle optimization, and TypeScript integration.",
          pt: "Configuração de tooling moderno: HMR instantâneo, otimização de bundles e TypeScript.",
        },
      },
      {
        id: "wasm",
        name: "WebAssembly (WASM)",
        icon: "wasm",
        badge: "C nativo en Navegador",
        category: "frontend",
        description: {
          es: "Compilación de módulos de cálculo intensivo escritos en C hacia binarios WebAssembly ejecutables directamente en el navegador.",
          en: "Compiling computationally intensive C modules into WebAssembly binaries running client-side at near-native speed.",
          pt: "Compilação de módulos C de computação pesada para binários WebAssembly no navegador.",
        },
      },
    ],
  },
  {
    id: "devops",
    categoryName: {
      es: "Toolchain, Debugging & DevOps",
      en: "Toolchain, Debugging & DevOps",
      pt: "Toolchain, Depuração & DevOps",
    },
    subtitle: {
      es: "Herramientas de depuración de memoria profunda, compiladores, automatización y contenedores",
      en: "Deep memory debugging tools, compilers, build automation, and containers",
      pt: "Ferramentas de depuração de memória, compiladores, automação e contêineres",
    },
    skills: [
      {
        id: "valgrind",
        name: "Valgrind / Memcheck",
        icon: "debug",
        badge: "0 leaks / 0 memory errors",
        category: "devops",
        highlight: true,
        description: {
          es: "Depuración profunda de memoria: diagnóstico de memory leaks, conditional jumps dependientes de memoria no inicializada y heap blocks.",
          en: "Deep memory profiling: diagnosing leaks, uninitialized memory conditional jumps, and heap corruption.",
          pt: "Depuração profunda de memória: diagnóstico de vazamentos e corrupção de heap com Memcheck.",
        },
      },
      {
        id: "gdb",
        name: "GDB Debugger",
        icon: "bug",
        badge: "Breakpoints & Stack traces",
        category: "devops",
        description: {
          es: "Inspección paso a paso de ejecución nativa: breakpoints, watchpoints, análisis de stack frames y depuración de core dumps.",
          en: "Native step-by-step debugging: breakpoints, watchpoints, stack frame inspection, and core dump post-mortems.",
          pt: "Inspeção passo a passo de binários: breakpoints, análise de stack frames e core dumps.",
        },
      },
      {
        id: "docker",
        name: "Docker",
        icon: "docker",
        badge: "Contenedores & Aislamiento",
        category: "devops",
        highlight: true,
        description: {
          es: "Creación de imágenes multi-stage reproducibles, configuración de redes virtuales y orquestación de servicios con Docker Compose.",
          en: "Multi-stage reproducible Docker images, virtual container networks, and microservice orchestration with Docker Compose.",
          pt: "Criação de imagens multi-stage reproduzíveis e orquestração de serviços com Docker Compose.",
        },
      },
      {
        id: "git",
        name: "Git & GitHub",
        icon: "git",
        badge: "Control de versiones & CI/CD",
        category: "devops",
        description: {
          es: "Flujos de trabajo con ramas (feature branch, rebase interactivo), resolución de conflictos y automatización de pipelines CI/CD.",
          en: "Branch workflows (feature branches, interactive rebase), clean conflict resolution, and CI/CD automation pipelines.",
          pt: "Fluxos de trabalho com branches, rebase interativo, resolução de conflitos e CI/CD.",
        },
      },
      {
        id: "gnu-make",
        name: "GNU Make",
        icon: "bash",
        badge: "Makefiles con -Wall -Werror",
        category: "devops",
        description: {
          es: "Construcción automatizada de proyectos C/C++: reglas implícitas, dependencias incrementales y flags estrictas (-Wall -Wextra -Werror).",
          en: "Automated C/C++ build pipelines: implicit rules, incremental dependency graphs, and strict compiler flags (-Wall -Wextra -Werror).",
          pt: "Automação de compilação em C/C++ com regras de dependência incremental e flags estritas.",
        },
      },
      {
        id: "gcc-clang",
        name: "GCC / Clang",
        icon: "terminal",
        badge: "Compiladores C/C++",
        category: "devops",
        description: {
          es: "Compilación optimizada de binarios ELF 64-bit, flags de optimización (-O2/-O3), AddressSanitizer y análisis estático.",
          en: "ELF 64-bit binary compilation, optimization flags (-O2/-O3), AddressSanitizer, and static compiler diagnostics.",
          pt: "Compilação otimizada ELF 64-bit, flags de otimização (-O2/-O3) e AddressSanitizer.",
        },
      },
      {
        id: "bash",
        name: "Bash Scripting",
        icon: "bash",
        badge: "Automatización Unix & Pipes",
        category: "devops",
        description: {
          es: "Scripts de automatización del sistema: pipelines con pipes, redirecciones, sustitución de comandos y tests automatizados.",
          en: "System automation scripts: pipelines with pipes, redirections, command substitution, and automated test suites.",
          pt: "Scripts de automação Unix: pipelines, redirecionamentos e testes automatizados.",
        },
      },
      {
        id: "cmake",
        name: "CMake",
        icon: "cmake",
        badge: "Cross-platform Build System",
        category: "devops",
        description: {
          es: "Generación de sistemas de construcción multiplataforma para proyectos C y C++ complejos con dependencias externas.",
          en: "Cross-platform build system generation for modern C and C++ projects with external library dependencies.",
          pt: "Sistemas de compilação multiplataforma para projetos C e C++ complexos.",
        },
      },
    ],
  },
];

export const allSkills: SkillItem[] = skillsData.flatMap((cat) => cat.skills);

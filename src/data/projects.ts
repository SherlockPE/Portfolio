import {
  hackSatImages,
  mergeHackImages,
  summerHackImages,
  laCabinaImages,
  nasaSpaceAppsImages,
  medRecordsImages,
  vottunHackImages,
  hackEsicImages,
  wayraImages,
} from "./projectImages";

export * from "./projectImages";

export interface ProjectItem {
  id: string;
  category: "hackathons" | "systems";
  title: {
    es: string;
    en: string;
    pt: string;
  };
  badge: {
    es: string;
    en: string;
    pt: string;
  };
  period: string;
  description: {
    es: string;
    en: string;
    pt: string;
  };
  tags: string[];
  link?: string;
  images: string[];
  coverImage?: string;
}

// TODO: poner links que funcionen, no todos a mi linkedin xd
export const projectsData: ProjectItem[] = [
  // --- HACKATHONS Y PRODUCTOS STARTUP ---
  {id: "hacksat-2026",
    category: "hackathons",
    title: {
      es: "HackSat 2026 - ASTRALUMEN",
      en: "HackSat 2026 - ASTRALUMEN",
      pt: "HackSat 2026 - ASTRALUMEN",
    },
    badge: {
      es: "2º Puesto · Física Espacial",
      en: "2nd Place · Space Physics",
      pt: "2º Lugar · Física Espacial",
    },
    period: "2026",
    description: {
      es: "Solución para detectar basura espacial menor a 10 cm con constelación de CubeSats, observación anti-solar para captar reflejos de luz e IA orbital para reconstruir trayectorias. Desarrollado con el Grupo de Estudiantes de la Real Sociedad Española de Física.",
      en: "Space-debris tracking solution targeting objects under 10 cm using CubeSat constellations, anti-solar light observation, and orbital AI trajectory reconstruction with the Spanish Royal Physics Society Students Group.",
      pt: "Solução para detecção de detritos espaciais menores que 10 cm usando CubeSats, observação anti-solar e IA orbital para reconstrução de trajetórias.",
    },
    tags: ["CubeSats", "IA Orbital", "Python", "Space Tech"],
    link: "https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/",
    images: hackSatImages,
    coverImage: "/Hack_Sat_AstraLumen/HAck_complutensex42_1.jpg",
  },

  {id: "merge-hackathon-2025",
    category: "hackathons",
    title: {
      es: "Merge Hackathon 2025 - ClearWeb",
      en: "Merge Hackathon 2025 - ClearWeb",
      pt: "Merge Hackathon 2025 - ClearWeb",
    },
    badge: {
      es: "1er Puesto · Reto Mastercard",
      en: "Winner · Mastercard Challenge",
      pt: "1º Lugar · Desafio Mastercard",
    },
    period: "2025",
    description: {
      es: "ClearWeb: Modelo económico para una web privada sin anuncios ni trackers utilizando 2 agentes autónomos interactuando con protocolo X402, micro-pagos reales en blockchain BSV, firmas ECDSA y frontend en tiempo real.",
      en: "ClearWeb: A privacy-first web monetization model driven by 2 autonomous agents running on the X402 protocol, on-chain micro-payments on BSV blockchain, and ECDSA cryptography.",
      pt: "ClearWeb: Modelo econômico para uma web privada sem anúncios com 2 agentes autônomos, protocolo X402 e micro-pagamentos na blockchain BSV.",
    },
    tags: ["Agentic AI", "Blockchain BSV", "ECDSA", "React", "TypeScript"],
    link: "https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/",
    images: mergeHackImages,
    coverImage: "/Merge_Hack_2025/Merge_winners_team.jpg",
  },

  {id: "nasa-space-apps-2025",
    category: "hackathons",
    title: {
      es: "NASA Space Apps 2025 - Building Mars",
      en: "NASA Space Apps 2025 - Building Mars",
      pt: "NASA Space Apps 2025 - Building Mars",
    },
    badge: {
      es: "NASA Space Apps · 2025",
      en: "NASA Space Apps · 2025",
      pt: "NASA Space Apps · 2025",
    },
    period: "2025",
    description: {
      es: "Herramienta técnica desarrollada con Unity y MATLAB para diseñar y predecir las capacidades de vida, coste y combustible de hábitats espaciales habitables fuera de la Tierra.",
      en: "Technical software tool developed with Unity and MATLAB to model and predict the habitability, structural layout, and life-support capacities of off-Earth space habitats.",
      pt: "Ferramenta técnica desenvolvida com Unity e MATLAB para projetar e prever capacidades de habitats espaciais habitáveis fora da Terra.",
    },
    tags: ["Unity", "MATLAB", "Simulation", "Space Habitat"],
    link: "https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/",
    images: nasaSpaceAppsImages,
    coverImage: "/Nasa_space_apps_2025/Nasa_space_Apps.jpg",
  },

  {
    id: "qwak",
    category: "hackathons",
    title: {
      es: "QWAK · Wayra Innovation & Telefónica #LaCabina",
      en: "QWAK · Wayra Innovation & Telefónica #LaCabina",
      pt: "QWAK · Wayra Innovation & Telefónica #LaCabina",
    },
    badge: {
      es: "Startup MVP · Wayra & #LaCabina",
      en: "Startup MVP · Wayra & #LaCabina",
      pt: "Startup MVP · Wayra & #LaCabina",
    },
    period: "2025",
    description: {
      es: "Evolución de QWAK tras el Summer Hackathon: desarrollo y validación del producto a lo largo de 6 meses (junio a noviembre de 2025). Plataforma B2B para trazabilidad logística y visibilidad de cadena de suministro con alertas inteligentes por checkpoints y banderas. Acelerada y validada en el ecosistema emprendedor de Wayra Telefónica e incorporada al showroom tecnológico de innovación #LaCabina de Telefónica para demostraciones de alto nivel ante clientes corporativos e inversores.",
      en: "The 6-month product evolution of QWAK following the Summer Hackathon (June to November 2025). Built an intelligent B2B supply chain tracking platform with proactive checkpoint alerts. Accelerated within Wayra Telefónica's open innovation hub and showcased at Telefónica's flagship tech showroom #LaCabina for enterprise leaders and investors.",
      pt: "Evolução do QWAK após o Summer Hackathon: 6 meses de desenvolvimento e validação (junho a novembro de 2025). Plataforma B2B para rastreabilidade logística com alertas inteligentes. Acelerada no hub Wayra Telefónica e exibida no showroom de inovação tecnológica #LaCabina da Telefónica.",
    },
    tags: ["TypeScript", "React", "Wayra Telefónica", "#LaCabina", "OpenGateway APIs", "Docker", "Supply Chain"],
    link: "https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/",
    images: [...laCabinaImages, ...wayraImages],
    coverImage: "/la_cabina/La_cabina_1.jpg",
  },

  {
    id: "summer-hackathon-qwak",
    category: "hackathons",
    title: {
      es: "Summer Hackathon 2025 - QWAK",
      en: "Summer Hackathon 2025 - QWAK",
      pt: "Summer Hackathon 2025 - QWAK",
    },
    badge: {
      es: "Premio Especial Telefónica #LaCabina",
      en: "Special Award · Telefónica #LaCabina",
      pt: "Prêmio Especial Telefónica #LaCabina",
    },
    period: "2025",
    description: {
      es: "Prototipo inicial desarrollado durante el hackathon de verano: plataforma B2B para trazabilidad logística y supply chain tracking con alertas inteligentes. Integrada con APIs de red de Telefónica OpenGateway (Device Swap, Location, KYC, Roaming). Ganadora del premio especial con acceso directo a incubación y exposición en el centro de innovación La Cabina.",
      en: "Initial prototype engineered during the summer hackathon: B2B supply chain tracking with automated alerts powered by Telefónica OpenGateway network APIs (Device Swap, Location, KYC, Roaming). Won the special award granting direct incubation and showroom exhibition at Telefónica's La Cabina.",
      pt: "Protótipo inicial desenvolvido durante o hackathon de verão: plataforma B2B para rastreabilidade logística integrada com APIs da Telefónica OpenGateway. Vencedor do prêmio especial com exposição no centro de inovação La Cabina.",
    },
    tags: ["TypeScript", "React", "Telefónica OpenGateway", "MongoDB", "Docker"],
    link: "https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/",
    images: summerHackImages,
    coverImage: "/Summer_Hack_2025/summer_hack_1.jpg",
  },

  {id: "vottun-hackathon",
    category: "hackathons",
    title: {
      es: "Vottun Hackathon - Web3 & Tokenización",
      en: "Vottun Hackathon - Web3 & Tokenization",
      pt: "Vottun Hackathon - Web3 & Tokenização",
    },
    badge: {
      es: "Desafío Web3 & Smart Contracts",
      en: "Web3 Challenge · Smart Contracts",
      pt: "Desafio Web3 · Smart Contracts",
    },
    period: "2024",
    description: {
      es: "Desarrollo de soluciones descentralizadas e integración con la infraestructura Web3 y APIs de Vottun para smart contracts, credenciales verificables y trazabilidad en blockchain.",
      en: "Decentralized solution engineering and Web3 integration using Vottun APIs for automated smart contract deployment, verifiable credentials, and blockchain auditability.",
      pt: "Desenvolvimento de soluções descentralizadas e integração com a infraestrutura Web3 e APIs da Vottun para smart contracts e rastreabilidade em blockchain.",
    },
    tags: ["Web3", "Blockchain", "Smart Contracts", "Vottun APIs"],
    link: "https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/",
    images: vottunHackImages,
    coverImage: "/Vottun_hack/vottun_first_hack.webp",
  },

  {id: "hack-esic-42",
    category: "hackathons",
    title: {
      es: "Hackathon ESIC x 42 Madrid",
      en: "Hackathon ESIC x 42 Madrid",
      pt: "Hackathon ESIC x 42 Madrid",
    },
    badge: {
      es: "Innovación Tecnológica & Negocio",
      en: "Tech Innovation & Business Strategy",
      pt: "Inovação Tecnológica & Negócios",
    },
    period: "2024",
    description: {
      es: "Reto intensivo de co-creación que unió el talento técnico y de ingeniería de 42 Madrid con la visión estratégica y validación de modelo de negocio de ESIC Business School.",
      en: "Intensive co-creation hackathon joining 42 Madrid's low-level engineering and systems skills with ESIC Business School's strategy and business validation methodology.",
      pt: "Desafio intensivo de inovação unindo engenharia de software da 42 Madrid com estratégia de negócios da ESIC Business School.",
    },
    tags: ["Innovation", "Business Model", "Prototyping", "Teamwork"],
    link: "https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/",
    images: hackEsicImages,
    coverImage: "/hack_esic/hack_esicx42_1.jpg",
  },

  {id: "medrecords-dapp",
    category: "hackathons",
    title: {
      es: "MedRecords DApp - Premio Social Impact",
      en: "MedRecords DApp - Social Impact Award",
      pt: "MedRecords DApp - Prêmio Impacto Social",
    },
    badge: {
      es: "Premio Social Impact · Blockchain",
      en: "Social Impact Award · Blockchain",
      pt: "Prêmio Impacto Social · Blockchain",
    },
    period: "2024",
    description: {
      es: "DApp descentralizada en blockchain para garantizar el acceso seguro a historiales clínicos en emergencias y salvar vidas mediante verificación inviolable con Smart Contracts, React y Tailwind CSS.",
      en: "Decentralized blockchain DApp providing secure, instant access to patient medical records during emergency scenarios using Smart Contracts, React, and Tailwind CSS.",
      pt: "DApp descentralizada em blockchain para garantir acesso seguro a históricos clínicos em emergências médicas.",
    },
    tags: ["Blockchain", "Smart Contracts", "React", "Tailwind CSS"],
    link: "https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/",
    images: medRecordsImages,
    coverImage: "/Med_Records/Lemon_hack_win.jpg",
  },

  // --- PROYECTOS DE SISTEMAS & 42 MADRID (BAJO NIVEL) ---
  {id: "cub3d-raycaster",
    category: "systems",
    title: {
      es: "Cub3D - Motor Gráfico Raycasting",
      en: "Cub3D - Raycasting Graphics Engine",
      pt: "Cub3D - Motor Gráfico Raycasting",
    },
    badge: {
      es: "42 Madrid · Motor Gráfico en C",
      en: "42 Madrid · C Graphics Engine",
      pt: "42 Madrid · Motor Gráfico em C",
    },
    period: "2024",
    description: {
      es: "Desarrollo de un motor gráfico en C basado en raycasting, inspirado en Wolfenstein 3D, capaz de renderizar entornos en tiempo real. Incluye sistema de texturas en alta definición, movimiento fluido del jugador, soporte para rotación vertical de la cámara (look up / look down), detección de colisiones, parsing de mapas .cub y arquitectura modular en Linux con MiniLibX.",
      en: "Development of a real-time raycasting graphics engine in C inspired by Wolfenstein 3D. Features HD texture mapping, smooth player physics, vertical camera pitch (look up / look down), .cub map parsing, wall collision detection, and modular architecture using MiniLibX on Linux.",
      pt: "Desenvolvimento de um motor gráfico em C baseado em raycasting inspirado em Wolfenstein 3D com renderização em tempo real. Inclui texturas HD, física de movimentação, rotação vertical da câmera, colisão e parsing de mapas .cub no Linux.",
    },
    tags: ["C", "Raycasting", "MiniLibX", "Matemáticas 3D", "Linux", "Motor Gráfico"],
    link: "https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/",
    images: [],
  },

  {id: "ft-irc-server",
    category: "systems",
    title: {
      es: "ft_irc - Servidor IRC Concurrente",
      en: "ft_irc - Concurrent IRC Server",
      pt: "ft_irc - Servidor IRC Concorrente",
    },
    badge: {
      es: "42 Madrid · Redes & Concurrencia en C++",
      en: "42 Madrid · C++ Concurrency & Networking",
      pt: "42 Madrid · Redes e Concorrência em C++",
    },
    period: "2024",
    description: {
      es: "Servidor IRC completo en C++ que soporta múltiples clientes y múltiples canales concurrentes bajo el protocolo RFC 1459. Comunicación en tiempo real mediante sockets TCP y multiplexación no bloqueante (select/poll). Incluye autenticación de usuarios, gestión de permisos de operador, canales privados con contraseña, moderación y validación estricta de comandos.",
      en: "Full-featured IRC server in C++ compliant with RFC 1459 supporting multiple concurrent clients and channels. Real-time communication powered by non-blocking TCP sockets and I/O multiplexing (select/poll). Includes authentication, operator privilege management, password-protected channels, and strict command parsing.",
      pt: "Servidor IRC em C++ com suporte ao protocolo RFC 1459, múltiplos clientes e canais simultâneos via sockets TCP e multiplexação I/O (poll/select).",
    },
    tags: ["C++", "Sockets TCP", "Multiplexación (poll)", "Concurrencia", "RFC 1459", "Redes"],
    link: "https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/",
    images: [],
  },

  {id: "minishell-unix",
    category: "systems",
    title: {
      es: "Minishell - Shell Propia Unix",
      en: "Minishell - Custom Unix Shell",
      pt: "Minishell - Shell Própria Unix",
    },
    badge: {
      es: "42 Madrid · Sistemas Operativos en C",
      en: "42 Madrid · Unix Systems & POSIX",
      pt: "42 Madrid · Sistemas Operacionais em C",
    },
    period: "2024",
    description: {
      es: "Implementación de una shell propia en C que replica con fidelidad el comportamiento de Bash. Incluye tokenización y parsing sintáctico de comandos, árbol de ejecución de procesos con fork/execve, gestión manual estricta de memoria dinámica (cero memory leaks), soporte de múltiples pipes (|), redirecciones (<, >, >>, <<), variables de entorno ($?, $PATH) y manejo de señales Unix (SIGINT, SIGQUIT).",
      en: "Full Bash-like Unix shell implementation written in C. Features complete command tokenization and AST parsing, process trees via fork/execve, zero-leak manual memory management, multi-pipe chaining (|), I/O redirection (<, >, >>, <<), environment variable resolution ($?, $PATH), and Unix signal handling (SIGINT, SIGQUIT).",
      pt: "Implementação de uma shell Unix própria em C replicando o comportamento do Bash. Inclui parsing sintático, gerenciamento de processos (fork/execve), pipes múltiplos, redirecionamento e sinais Unix.",
    },
    tags: ["C", "POSIX", "Procesos Unix", "Pipes", "Gestión de Memoria", "Bash"],
    link: "https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/",
    images: [],
  },
];

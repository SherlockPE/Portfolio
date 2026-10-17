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

export const projectsData: ProjectItem[] = [
  {id: "hacksat-2026",
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
    coverImage: "/Merge_Hack_2025/Merge_winn.webp",
  },

  {id: "nasa-space-apps-2025",
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
  
  {id: "wayra-innovation",
    title: {
      es: "Wayra / Telefónica Open Future",
      en: "Wayra / Telefónica Open Future",
      pt: "Wayra / Telefónica Open Future",
    },
    badge: {
      es: "Ecosistema Emprendedor & Venture",
      en: "Startup Ecosystem & Venture",
      pt: "Ecossistema Empreendedor & Venture",
    },
    period: "2025",
    description: {
      es: "Participación en dinámicas de aceleración, pitches tecnológicos y validación en el hub global de innovación abierta de Wayra Telefónica.",
      en: "Participation in startup acceleration sessions, technical venture pitches, and innovation validation at Wayra Telefónica's global tech hub.",
      pt: "Participação em aceleração de startups, pitches tecnológicos e validação no hub de inovação Wayra Telefónica.",
    },
    tags: ["Startups", "Networking", "Innovation", "Telefónica"],
    link: "https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/",
    images: wayraImages,
    coverImage: "/Wayra/Wayrra_3.jpg",
  },

  {id: "summer-hackathon-qwak",
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
      es: "Plataforma B2B para trazabilidad logística y supply chain tracking con alertas inteligentes. Integrada con APIs de Telefónica OpenGateway (Device Swap, Location, KYC, Roaming). Premiada con exposición en el centro de innovación La Cabina ante +1.800 clientes anuales.",
      en: "B2B supply chain visibility platform with intelligent checkpoint alerts. Built with Telefónica OpenGateway network APIs (Device Swap, Location, KYC, Roaming). Awarded exhibition at Telefónica's La Cabina Innovation Center.",
      pt: "Plataforma B2B para rastreabilidade logística e alertas inteligentes na cadeia de suprimentos integrada com APIs da Telefónica OpenGateway.",
    },
    tags: ["TypeScript", "React", "Telefónica OpenGateway", "MongoDB", "Docker"],
    link: "https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/",
    images: summerHackImages,
    coverImage: "/Summer_Hack_2025/summer_hack_1.jpg",
  },

  {id: "vottun-hackathon",
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

];

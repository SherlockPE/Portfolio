export interface ExperienceItem {
  id: string;
  company: string;
  role: {
    es: string;
    en: string;
    pt: string;
  };
  period: string;
  location?: string;
  description: {
    es: string;
    en: string;
    pt: string;
  };
  details?: {
    es: string[];
    en: string[];
    pt: string[];
  };
  tags: string[];
  link?: string;
}

export const experienceData: ExperienceItem[] = [
  {id: "algorithmics-espana",
    company: "Algorithmics España",
    role: {
      es: "Profesor de Programación & Auxiliar Administrativo",
      en: "Coding Instructor & Administrative Assistant",
      pt: "Professor de Programação & Auxiliar Administrativo",
    },
    period: "may. 2025 - jun. 2026",
    location: "Madrid · Presencial",
    description: {
      es: "Doble rol de impacto pedagógico y operativo en academia internacional de programación, combinando docencia técnica con gestión administrativa y ventas.",
      en: "Dual-impact role combining technical programming instruction with administrative operations and sales management at an international coding academy.",
      pt: "Função dupla de impacto pedagógico e operacional, combinando ensino de programação com suporte administrativo e comercial.",
    },
    details: {
      es: [
        "Docencia técnica: Impartición de clases prácticas de programación a estudiantes de nivel inicial e intermedio en Python, Scratch y desarrollo de videojuegos, fomentando el pensamiento lógico y la resolución de problemas.",
        "Gestión administrativa & Ventas: Organización de datos académicos, horarios y seguimiento pedagógico. Atención al cliente, llamadas comerciales a potenciales familias y formalización de inscripciones.",
      ],
      en: [
        "Technical Instruction: Taught hands-on programming courses in Python, Scratch, and game development to beginner and intermediate students, reinforcing algorithmic thinking.",
        "Administrative & Sales Support: Coordinated student data, course scheduling, parent communication, and educational program admissions.",
      ],
      pt: [
        "Ensino Técnico: Aulas de programação em Python, Scratch e desenvolvimento de jogos para estudantes iniciantes e intermediários.",
        "Gestão e Vendas: Apoio operacional na gestão de turmas, horários e atendimento comercial a famílias para novas matrículas.",
      ],
    },
    tags: ["Python", "Scratch", "Game Dev", "Pedagogía", "Gestión Administrativa", "Ventas"],
    link: "https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/",
  },

  {id: "qwak-startup",
    company: "QWAK (Supply Chain Tech Startup)",
    role: {
      es: "Co-Founder & Fullstack Developer",
      en: "Co-Founder & Fullstack Developer",
      pt: "Co-Founder & Desenvolvedor Fullstack",
    },
    period: "jun. 2025 - oct. 2025",
    location: "Madrid · Híbrido",
    description: {
      es: "Participación activa como co-fundador en la arquitectura técnica y desarrollo del MVP de una plataforma de trazabilidad logística y visibilidad para la cadena de suministro.",
      en: "Active participation as technical co-founder in the architecture and MVP development of a supply chain tracking and visibility platform.",
      pt: "Participação ativa como co-fundador na arquitetura técnica e desenvolvimento do MVP de plataforma de rastreabilidade logística.",
    },
    details: {
      es: [
        "Desarrollo full-stack del producto utilizando TypeScript, React, Tailwind CSS, Docker y arquitectura de APIs.",
        "Implementación de un sistema de alertas proactivas basado en banderas de colores y checkpoints para optimizar la coordinación entre conductores y equipos de negocio.",
        "Colaboración en la validación temprana con usuarios, dinámicas de startup y organización del roadmap tecnológico.",
      ],
      en: [
        "Full-stack MVP development using TypeScript, React, Tailwind CSS, Docker, and API-first architecture.",
        "Engineered an automated checkpoint & color-flag alert system to streamline coordination between drivers and operations teams.",
        "Collaborated on early user discovery, startup product roadmap, and technical validation.",
      ],
      pt: [
        "Desenvolvimento full-stack do MVP utilizando TypeScript, React, Tailwind CSS, Docker e APIs.",
        "Criação de sistema de alertas baseado em cores e checkpoints para coordenar motoristas e equipes operacionais.",
        "Validação de produto, discovery com usuários e definição do roadmap técnico da startup.",
      ],
    },
    tags: ["TypeScript", "React", "Tailwind CSS", "Docker", "APIs", "Supply Chain"],
    link: "https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/",
  },

  {id: "freelance-teaching",
    company: "Mentoría & Clases Particulares de Programación",
    role: {
      es: "Profesor de Programación & Mentor Técnico (Freelance)",
      en: "Freelance Programming Instructor & Technical Mentor",
      pt: "Professor Particular de Programação & Mentor Técnico",
    },
    period: "nov. 2023 - jun. 2025",
    location: "Madrid · Híbrido (Superprof & Tusclasesparticulares)",
    description: {
      es: "Formación y tutoría técnica personalizada para estudiantes de diversas edades y niveles académicos en lenguajes clave de computación y desarrollo de software.",
      en: "Tailored 1-on-1 technical tutoring and mentorship in core programming languages and computational problem-solving.",
      pt: "Aulas particulares e mentoria técnica individual em linguagens fundamentais de programação e algoritmia.",
    },
    details: {
      es: [
        "Diagnóstico de nivel y diseño de planes de estudio individualizados con proyectos prácticos.",
        "Tutoría en lenguajes de bajo y alto nivel: C, C++, Python y JavaScript, con énfasis en buenas prácticas de código y depuración.",
      ],
      en: [
        "Designed personalized learning roadmaps based on each student's baseline and goals.",
        "Guided hands-on practice in C, C++, Python, and JavaScript, focusing on debugging and clean code principles.",
      ],
      pt: [
        "Elaboração de planos de estudo personalizados com desafios práticos de código.",
        "Mentoria em C, C++, Python e JavaScript, com foco em boas práticas e resolução de problemas.",
      ],
    },
    tags: ["C", "C++", "Python", "JavaScript", "Algoritmos", "Mentoría"],
    link: "https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/",
  },

  {id: "picardias-eventos",
    company: "Picardías Eventos Empresariales",
    role: {
      es: "Recreador de Eventos Infantiles (Comunicación & Expresión)",
      en: "Event Facilitator & Host (Communication & Stage Presence)",
      pt: "Recreador de Eventos Infantis (Comunicação e Oratória)",
    },
    period: "oct. 2022 - dic. 2022",
    location: "Perú · Presencial",
    description: {
      es: "Dinamización de grupos y audiencias infantiles en eventos de alta concurrencia, fortaleciendo habilidades de oratoria, improvisación y liderazgo en vivo.",
      en: "Live stage facilitation and crowd engagement for children events, developing active listening, public speaking, and rapid problem-solving skills.",
      pt: "Dinamização de grupos em eventos infantis, aprimorando oratória, escuta ativa e liderança interpessoal.",
    },
    details: {
      es: [
        "Liderazgo de grupos y coordinación de actividades lúdicas con comunicación clara y asertiva.",
        "Resolución ágil de imprevistos ante público y gestión de la energía escénica.",
      ],
      en: [
        "Group leadership and coordination of engaging activities with clear, dynamic communication.",
        "Rapid conflict resolution and active stage management under fast-paced live conditions.",
      ],
      pt: [
        "Coordenação de dinâmicas coletivas com comunicação assertiva e dinâmica.",
        "Resolução rápida de imprevistos e controle de palco em tempo real.",
      ],
    },
    tags: ["Oratoria", "Liderazgo de Grupos", "Comunicación", "Soft Skills"],
    link: "https://www.linkedin.com/in/fabricio-l%C3%B3pez-reyes/",
  },
  
];


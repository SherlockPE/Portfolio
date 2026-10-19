export interface EducationItem {
  id: string;
  institution: string;
  period: string;
  degree: {
    es: string;
    en: string;
    pt: string;
  };
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
  tags?: string[];
  link?: string;
}

export const educationData: EducationItem[] = [
  {
    id: "42-madrid-student",
    institution: "42 Madrid Fundación Telefónica",
    period: "sept. 2023 - Actualidad",
    degree: {
      es: "42 Student, Computer Science & Systems Programming",
      en: "42 Student, Computer Science & Systems Programming",
      pt: "42 Student, Ciência da Computação e Sistemas",
    },
    description: {
      es: "Campus tecnológico de alta exigencia basado en la metodología peer-to-peer y aprendizaje colaborativo sin profesores. Desarrollo riguroso de software en C y C++, motores gráficos, servidores de red y utilidades de sistemas operativos.",
      en: "High-intensity peer-to-peer computer science curriculum without teachers. Deep focus on C and C++ software engineering, graphic engines, network protocols, and Unix operating system architectures.",
      pt: "Formação intensiva peer-to-peer sem professores. Foco em engenharia de software em C e C++, motores gráficos, protocolos de rede e arquitetura de sistemas Unix.",
    },
    details: {
      es: [
        "Arquitectura de Unix Shell (Minishell): reimplementación de Bash con parsing AST, control de procesos con fork()/execve(), redirecciones, pipes y señales POSIX.",
        "Servidor concurrente RFC 1459 (ft_irc): sockets TCP no bloqueantes con multiplexación I/O (poll), autenticación y canales en C++98.",
        "Motor gráfico 3D (Cub3D): algoritmo de raycasting DDA (Wolfenstein 3D) en C con MiniLibX, proyección euclidiana y colisiones en tiempo real.",
        "Cero memory leaks: proyectos verificados estrictamente con Valgrind (--leak-check=full) bajo flags -Wall -Wextra -Werror -pedantic.",
      ],
      en: [
        "Unix Shell Architecture (Minishell): Bash reimplementation with AST parsing, process execution via fork()/execve(), piping, and POSIX signal handling.",
        "RFC 1459 Concurrent Server (ft_irc): non-blocking TCP sockets with poll() I/O multiplexing, authentication, and channels in C++98.",
        "3D Graphics Engine (Cub3D): DDA raycasting engine (Wolfenstein 3D) in C with MiniLibX, euclidean projection, and real-time collision detection.",
        "Zero Memory Leaks: systems code audited strictly with Valgrind (--leak-check=full) under -Wall -Wextra -Werror -pedantic.",
      ],
      pt: [
        "Arquitetura Unix Shell (Minishell): implementação do Bash em C com parsing AST, processos (fork/execve), pipes e sinais POSIX.",
        "Servidor Concorrente RFC 1459 (ft_irc): sockets TCP não bloqueantes com poll(), autenticação e canais em C++98.",
        "Motor Gráfico 3D (Cub3D): motor raycasting DDA em C com MiniLibX, projeção euclidiana e detecção de colisão em tempo real.",
        "Zero vazamentos de memória: projetos auditados estritamente com Valgrind (--leak-check=full) sob flags estritas.",
      ],
    },
    tags: ["C", "C++", "Sistemas Unix", "Gestión de Memoria", "Algoritmia", "Peer-to-Peer"],
    link: "https://www.42madrid.com/",
  },

  { id: "escp-business-school",
    institution: "ESCP Business School",
    period: "sept. 2025 - dic. 2025",
    degree: {
      es: "Option E: Social Entrepreneurship (Parte de Master in Management)",
      en: "Option E: Social Entrepreneurship (Part of Master in Management)",
      pt: "Option E: Empreendedorismo Social (Parte de Master in Management)",
    },
    description: {
      es: "Especialización internacional en modelos de emprendimiento social, innovación estratégica, finanzas de impacto y validación de oportunidades de negocio tecnológico.",
      en: "International specialization in social entrepreneurship frameworks, strategic tech innovation, and business model validation.",
      pt: "Especialização em modelos de empreendedorismo social, inovação estratégica e validação de novos modelos de negócios.",
    },
    tags: ["Emprendimiento Social", "Business Models", "Innovación", "Estrategia"],
  },
  {
    id: "42-madrid-piscine",
    institution: "42 Madrid Fundación Telefónica",
    period: "may. 2023 - jun. 2023",
    degree: {
      es: "C Piscine Candidate, Computer Science Intensive Bootcamp",
      en: "C Piscine Candidate, Computer Science Intensive Bootcamp",
      pt: "C Piscine Candidate, Bootcamp Intensivo de Ciência da Computação",
    },
    description: {
      es: "Bootcamp inmersivo y eliminatorio de 26 días consecutivos programando en C y entornos Unix bajo estricta presión y entregas diarias contrarreloj para obtener plaza en el campus de Fundación Telefónica.",
      en: "Immersive 26-day consecutive bootcamp programming in C and Unix environments under strict deadlines to qualify for a spot at Fundación Telefónica's campus.",
      pt: "Bootcamp imersivo eliminatório de 26 dias consecutivos programando em C e Unix sob alta pressão.",
    },
    tags: ["C", "Shell Scripting", "Unix CLI", "Resiliencia"],
  },
  {
    id: "aleph-performing-arts",
    institution: "Escuela de Artes Escénicas 'ALEPH'",
    period: "Ago. 2022 - ene. 2023",
    degree: {
      es: "Performing Arts & Expresión Escénica",
      en: "Performing Arts & Theatrical Creation",
      pt: "Artes Cênicas & Expressão Teatral",
    },
    description: {
      es: "Entrenamiento actoral, puesta en escena, expresión corporal y oratoria teatral. Desarrollo de presencia escénica, empatía grupal y control de comunicación no verbal.",
      en: "Actor training, stage direction, body expression, and public speaking. Honed stage presence, vocal projection, and dynamic non-verbal communication.",
      pt: "Treinamento cênico, expressão corporal, oratória e presença de palco em equipe.",
    },
    tags: ["Artes Escénicas", "Oratoria", "Expresión Corporal", "Trabajo en Equipo"],
  },
  {
    id: "utec-cs",
    institution: "Universidad de Ingeniería y Tecnología (UTEC)",
    period: "mar. 2022 - jul. 2022",
    degree: {
      es: "Computer Science (Fundamentos Universitarios)",
      en: "Computer Science (University Fundamentals)",
      pt: "Ciência da Computação (Fundamentos Universitários)",
    },
    description: {
      es: "Formación universitaria en matemáticas discretas, álgebra lineal y fundamentos teóricos de la computación y algoritmos.",
      en: "University-level coursework in discrete mathematics, linear algebra, and computer science theoretical foundations.",
      pt: "Bases universitárias em matemática discreta, álgebra linear e fundamentos teóricos da computação.",
    },
    tags: ["Matemáticas Discretas", "Álgebra Lineal", "Algoritmos", "Ciencias de la Computación"],
    link: "https://utec.edu.pe/",
  },
];

export interface EducationItem {
  id: string;
  institution: string;
  period: string;
  degree: {
    es: string;
    en: string;
    pt: string;
  };
  description?: {
    es: string;
    en: string;
    pt: string;
  };
}

export const educationData: EducationItem[] = [
  {
    id: "1",
    institution: "42 Madrid Fundación Telefónica",
    period: "2023 - 2026",
    degree: {
      es: "42 Graduate / Student, Ciencias de la Computación & Sistemas",
      en: "42 Graduate / Student, Computer Science & Systems Programming",
      pt: "42 Graduate / Estudante, Ciência da Computação e Sistemas",
    },
    description: {
      es: "Formación integral peer-to-peer enfocada en algoritmia avanzada, gestión de memoria, programación concurrente y desarrollo de sistemas en C y C++.",
      en: "Intensive peer-to-peer curriculum focused on advanced algorithms, manual memory management, concurrency, and systems programming in C and C++.",
      pt: "Formação intensiva peer-to-peer com foco em algoritmos avançados, gestão de memória, concorrência e programação de sistemas em C e C++.",
    },
  },
  {
    id: "2",
    institution: "ESCP Business School",
    period: "2025",
    degree: {
      es: "Option E: Social Entrepreneurship & Digital Business",
      en: "Option E: Social Entrepreneurship & Digital Business",
      pt: "Option E: Empreendedorismo Social e Negócios Digitais",
    },
    description: {
      es: "Especialización en modelos de emprendimiento social, innovación estratégica y validación de propuestas tecnológicas.",
      en: "Specialization in social entrepreneurship models, strategic tech innovation, and business validation.",
      pt: "Especialização em modelos de empreendedorismo social, inovação estratégica e validação de negócios.",
    },
  },
  {
    id: "3",
    institution: "42 Madrid (C Piscine)",
    period: "2023",
    degree: {
      es: "C Piscine, Computer Science Intensive Bootcamp",
      en: "C Piscine, Computer Science Intensive Bootcamp",
      pt: "C Piscine, Bootcamp Intensivo de Ciência da Computação",
    },
    description: {
      es: "Superación del mes inmersivo eliminatorio en programación en C, scripting en Unix y resolución algorítmica bajo alta presión.",
      en: "Successful completion of the 1-month immersive selection bootcamp in C, Unix shell scripting, and algorithmic problem-solving under deadlines.",
      pt: "Conclusão do bootcamp seletivo imersivo de 1 mês em C, scripting Unix e algoritmos sob alta pressão.",
    },
  },
  {
    id: "4",
    institution: "Universidad de Ingeniería y Tecnología (UTEC)",
    period: "2022",
    degree: {
      es: "Computer Science (Fundamentos Universitarios)",
      en: "Computer Science (University Fundamentals)",
      pt: "Ciência da Computação (Fundamentos Universitários)",
    },
    description: {
      es: "Formación en matemáticas discretas, álgebra lineal y fundamentos de computación.",
      en: "Foundations in discrete mathematics, linear algebra, and computer science principles.",
      pt: "Fundamentos em matemática discreta, álgebra linear e princípios de computação.",
    },
  },
];


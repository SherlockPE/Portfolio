export interface SkillCategory {
  categoryName: {
    es: string;
    en: string;
    pt: string;
  };
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    categoryName: {
      es: "Bajo Nivel & Sistemas",
      en: "Low-Level & Systems",
      pt: "Baixo Nível e Sistemas",
    },
    skills: ["C", "C++", "Assembly", "Linux", "Git / GitHub", "Gestión de Memoria"],
  },
  {
    categoryName: {
      es: "Ecosistema Web & Frontend",
      en: "Web Ecosystem & Frontend",
      pt: "Ecossistema Web e Frontend",
    },
    skills: ["React 19", "TypeScript", "JavaScript", "Tailwind CSS v4", "Next.js / Vite"],
  },
  {
    categoryName: {
      es: "Backend, APIs & Cloud",
      en: "Backend, APIs & Cloud",
      pt: "Backend, APIs e Nuvem",
    },
    skills: ["Python", "Docker", "MongoDB", "Telefónica OpenGateway", "REST APIs"],
  },
  {
    categoryName: {
      es: "Metodologías & Otras Tecnologías",
      en: "Tools, Methods & Specialities",
      pt: "Ferramentas, Métodos e Tecnologias",
    },
    skills: ["POO (OOP)", "Unity", "Scratch (Docencia)", "Blockchain / Smart Contracts", "Anki / Speed Learning"],
  },
];


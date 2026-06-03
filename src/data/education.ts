export interface EducationItem {
  id: string;
  institution: string;
  period: string;
  degree: {
    es: string;
    en: string;
    pt: string;
  };
}

export const educationData: EducationItem[] = [
  {
    id: "1",
    institution: "42 Madrid",
    period: "2024 - Present",
    degree: {
      es: "Ingeniería de Software y Programación de Sistemas",
      en: "Software Engineering & Systems Programming",
      pt: "Engenharia de Software e Programação de Sistemas"
    }
  },
  {
    id: "2",
    institution: "ESCP Business School",
    period: "2025 - 2026",
    degree: {
      es: "Estudios de Negocios y Emprendimiento Tecnológico",
      en: "Business Studies & Tech Entrepreneurship",
      pt: "Estudos de Negócios e Empreendedorismo Tecnológico"
    }
  },
  {
    id: "3",
    institution: "Universidad de Ingeniería y Tecnología (UTEC)",
    period: "2021 - 2023",
    degree: {
      es: "Ciencias de la Computación (Fundamentos Universitarios)",
      en: "Computer Science (University Fundamentals)",
      pt: "Ciência da Computação (Fundamentos Universitários)"
    }
  }
];
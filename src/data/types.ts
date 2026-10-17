export interface NavData {
  work: string;
  about: string;
  contact: string;
}

export interface HeaderData {
  name: string;
  headline: string;
  nav: NavData;
}

export interface ProfileData {
  tag: string;
  name: string;
  role: string;
  location: string;
  bio: string;
  avatarUrl: string;
}

export interface TimelineEntry {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface AchievementEntry {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description?: string;
}

export interface LanguageEntry {
  name: string;
  level: string;
}

export interface ContactData {
  email: string;
  linkedin: {
    label: string;
    url: string;
  };
  github: {
    label: string;
    url: string;
  };
}

export interface SectionTitles {
  experience: string;
  education: string;
  achievements: string;
  skills: string;
  interests: string;
  languages: string;
  contact: string;
}

export interface PortfolioData {
  header: HeaderData;
  profile: ProfileData;
  sectionTitles: SectionTitles;
  experience: TimelineEntry[];
  education: TimelineEntry[];
  achievements: AchievementEntry[];
  skills: string[];
  interests: string[];
  languages: LanguageEntry[];
  contact: ContactData;
}


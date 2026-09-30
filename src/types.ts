export interface ToolItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops';
  icon: string;
  level: number;
}

export interface TrainingLogItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  details: string;
}

export interface ExperienceLogItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  missions: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'soft_skill' | 'hard_skill';
  level: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  flag: string;
  percentage: number;
}

export interface MissionProject {
  id: string;
  title: string;
  category: string;
  description: string;
  xpReward: number;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  codeUrl?: string;
  featured: boolean;
}

export interface UserPortfolioProfile {
  name: string;
  age: number;
  yearTitle: string;
  playerLevel: string;
  xpText: string;
  role: string;
  mission: string;
  status: string;
  bio: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  avatarUrl: string;
  catName: string;
  tools: ToolItem[];
  trainingLogs: TrainingLogItem[];
  experiences: ExperienceLogItem[];
  skills: SkillItem[];
  languages: LanguageItem[];
  hobbies: string[];
  certifications: string[];
  projects: MissionProject[];
}

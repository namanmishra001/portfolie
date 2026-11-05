export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  tech: string[];
  image: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0-100 percentage
  tier?: 'Expert' | 'Advanced' | 'Proficient';
  experience?: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
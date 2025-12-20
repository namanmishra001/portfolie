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
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
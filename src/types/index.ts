// src/types/index.ts
export interface Experience {
  role: string;
  company: string;
  period: string;
  tasks: string[];
}

export interface Project {
  title: string;
  role: string;
  year: string;
  description: string;
  tags: string[];
  icon: any; // Kita akan simpan Component icon langsung disini
}

export interface SkillSet {
  hard: string[];
  soft: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Profile {
  name: string;
  shortName: string;
  role: string;
  location: string;
  about: string;
  availability: string; // Contoh: "Open to Work"
  contact: {
    email: string;
    phone: string;
    linkedin: string; // Label display
    linkedinUrl: string;
  };
  stats: Stat[];
}
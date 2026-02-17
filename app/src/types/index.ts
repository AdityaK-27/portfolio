export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  date: string;
  highlights: string[];
  image: string;
  featured?: boolean;
  links?: {
    github?: string;
    demo?: string;
  };
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  achievements: string[];
  techStack?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

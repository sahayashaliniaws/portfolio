export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  featured: boolean;
  problem: string;
  solution: string;
  architecture: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  tools: string[];
  githubUrl: string;
  demoUrl?: string;
  architectureFlow: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: number;
    experience: string;
    highlight?: boolean;
    tags: string[];
  }[];
}

export interface ExperienceItem {
  company: string;
  client: string;
  role: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  keyResponsibilities: string[];
  technologies: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badgeType: 'aws' | 'devops' | 'academic';
  credentialId?: string;
  highlights: string[];
}

export interface AwsService {
  name: string;
  category: 'Compute' | 'Containers' | 'Networking' | 'Storage & DB' | 'Security & Management';
  tagline: string;
  description: string;
  useCase: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  typingTitles: string[];
  email: string;
  phone: string;
  location: string;
  githubUsername: string;
  githubUrl: string;
  linkedinUrl: string;
  avatarUrl: string;
  summary: string;
  yearsOfExperience: number;
  projectsCompleted: number;
  clientsServed: number;
  codeLines: string;
  mission: string;
  coreStrengths: string[];
  technicalInterests: string[];
  values: { title: string; description: string; icon: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  type: string; // Full-time, Contract, etc.
  startDate: string;
  endDate: string; // or "Present"
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // 0-100
    years?: number;
    icon?: string;
    isPrimary?: boolean;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  image: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  role: string;
  duration: string;
  achievements?: string[];
  featured?: boolean;
  status: 'Production' | 'Active' | 'Completed';
}

export interface SoftwareSolution {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  icon: string;
  features: string[];
  architecture: string[];
  technologies: string[];
  challengesSolved: string[];
  futureImprovements: string[];
  previewType: 'gym' | 'barber' | 'rental' | 'vibe' | 'cashbook';
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  location: string;
  duration: string;
  achievements: string[];
  courses: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  issueDate: string;
  credentialUrl?: string;
  badgeImage?: string;
  skills: string[];
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics?: string[];
  homepage?: string;
}

export interface GitHubProfile {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  html_url: string;
  location: string;
  company?: string;
}

export interface PortfolioConfig {
  profile: ProfileInfo;
  experiences: ExperienceItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  softwareSolutions: SoftwareSolution[];
  education: EducationItem[];
  certifications: CertificationItem[];
}

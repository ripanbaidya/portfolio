export type LinkIconName =
  | "github"
  | "linkedin"
  | "email"
  | "x"
  | "instagram"
  | "leetcode"
  | "youtube"
  | "resume"
  | "external";

export type TechnologyIconName =
  | "java"
  | "python"
  | "sql"
  | "springboot"
  | "spring"
  | "rest"
  | "rabbitmq"
  | "junit"
  | "maven"
  | "typescript"
  | "react"
  | "tailwind"
  | "postgresql"
  | "mongodb"
  | "redis"
  | "googlecloud"
  | "docker"
  | "kubernetes"
  | "git"
  | "githubactions";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LinkIconName;
  hoverClassName: string;
  iconClassName: string;
}

export interface Experience {
  company: string;
  logoUrl: string;
  role: string;
  duration: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  icon: LinkIconName;
  hoverClassName: string;
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  links: ProjectLink[];
}

export interface Profile {
  name: string;
  email: string;
  title: string[];
  intro: string;
  imageUrl: string;
  imageAlt: string;
}

export interface Technology {
  name: string;
  icon: TechnologyIconName;
  colorClassName: string;
}

export interface UsesCategory {
  label: string;
  items: UsesItem[];
}

export interface UsesItem {
  name: string;
  description: string;
}

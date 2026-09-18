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
  | "nodejs"
  | "react"
  | "tailwind"
  | "postgresql"
  | "mysql"
  | "mongodb"
  | "redis"
  | "googlecloud"
  | "aws"
  | "docker"
  | "kubernetes"
  | "git"
  | "githubactions"
  | "linux"
  ;

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
  slug: string;
  name: string;
  description: string;
  videoUrl: string;
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

export interface BlogPost {
  title: string;
  description: string;
  href: string;
}

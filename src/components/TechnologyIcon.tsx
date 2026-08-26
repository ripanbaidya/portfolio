import {
  SiDocker,
  SiGit,
  SiGooglecloud,
  SiJunit5,
  SiApachemaven,
  SiKubernetes,
  SiMongodb,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiSpring,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiGithubactions,
} from "react-icons/si";

import type { TechnologyIconName } from "../types/portfolio";

interface TechnologyIconProps {
  name: TechnologyIconName;
  className?: string;
}

const iconMap = {
  java: SiOpenjdk,
  python: SiPython,
  sql: SiPostgresql, // fallback; SQL has no dedicated Simple Icons icon

  springboot: SiSpringboot,
  spring: SiSpring,
  rest: SiSpring, // fallback; REST APIs has no dedicated Simple Icons icon
  rabbitmq: SiRabbitmq,
  junit: SiJunit5,
  maven: SiApachemaven,

  typescript: SiTypescript,
  react: SiReact,
  tailwind: SiTailwindcss,

  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  redis: SiRedis,

  googlecloud: SiGooglecloud,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  git: SiGit,
  githubactions: SiGithubactions,
};

export function TechnologyIcon({
  name,
  className = "h-12 w-12",
}: TechnologyIconProps) {
  const Icon = iconMap[name];

  return <Icon className={className} aria-hidden="true" />;
}
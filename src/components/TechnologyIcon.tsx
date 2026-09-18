import {
  SiDocker,
  SiGit,
  SiGooglecloud,
  SiJunit5,
  SiApachemaven,
  SiKubernetes,
  SiMongodb,
  SiNodedotjs,
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
import { FaAws } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FcLinux } from "react-icons/fc";

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
  nodejs: SiNodedotjs,
  react: SiReact,
  tailwind: SiTailwindcss,

  postgresql: SiPostgresql,
  mysql: DiMysql,
  mongodb: SiMongodb,
  redis: SiRedis,

  googlecloud: SiGooglecloud,
  aws: FaAws,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  git: SiGit,
  githubactions: SiGithubactions,
  linux: FcLinux,
};

export function TechnologyIcon({
  name,
  className = "h-12 w-12",
}: TechnologyIconProps) {
  const Icon = iconMap[name];

  return <Icon className={className} aria-hidden="true" />;
}
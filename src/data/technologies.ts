import type { Technology } from "../types/portfolio";

// Add new technologies here. The marquee duplicates this list automatically for a seamless loop.

export const technologies: Technology[] = [
  // Languages
  { name: "Java", icon: "java", colorClassName: "text-[#ED8B00]" },
  { name: "Python", icon: "python", colorClassName: "text-[#3776AB]" },
  { name: "SQL", icon: "sql", colorClassName: "text-[#4479A1]" },

  // Backend
  { name: "Spring Boot", icon: "springboot", colorClassName: "text-[#6DB33F]" },
  { name: "Spring AI", icon: "spring", colorClassName: "text-[#6DB33F]" },
  { name: "REST APIs", icon: "rest", colorClassName: "text-[#009688]" },
  { name: "RabbitMQ", icon: "rabbitmq", colorClassName: "text-[#FF6600]" },
  { name: "JUnit", icon: "junit", colorClassName: "text-[#25A162]" },
  { name: "Maven", icon: "maven", colorClassName: "text-[#C71A36]" },

  // Frontend
  { name: "TypeScript", icon: "typescript", colorClassName: "text-[#3178C6]" },
  { name: "React", icon: "react", colorClassName: "text-[#61DAFB]" },
  { name: "Tailwind CSS", icon: "tailwind", colorClassName: "text-[#06B6D4]" },

  // Databases
  { name: "PostgreSQL", icon: "postgresql", colorClassName: "text-[#4169E1]" },
  { name: "MongoDB", icon: "mongodb", colorClassName: "text-[#47A248]" },
  { name: "Redis", icon: "redis", colorClassName: "text-[#DC382D]" },

  // Cloud & DevOps
  { name: "Google Cloud", icon: "googlecloud", colorClassName: "text-[#4285F4]" },
  { name: "Docker", icon: "docker", colorClassName: "text-[#2496ED]" },
  { name: "Kubernetes", icon: "kubernetes", colorClassName: "text-[#326CE5]" },
  { name: "Git", icon: "git", colorClassName: "text-[#F05032]" },
  { name: "GitHub Actions", icon: "githubactions", colorClassName: "text-[#2088FF]" },
];
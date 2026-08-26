import type { Project } from "../types/portfolio";

// Add, remove, or reorder projects here without changing the Projects section UI.
export const projects: Project[] = [
  {
    name: "LuneCare",
    description:
      "Distributed Doctor Appointment Booking Platform",
    techStack: ["Spring Cloud", "Microservices", "Redis", "Kafka", "Kubernetes"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ripanbaidya/lune-care",
        icon: "github",
        hoverClassName: "hover:text-white",
      },
      {
        label: "Live",
        href: "https://lunecare.vercel.app/",
        icon: "external",
        hoverClassName: "hover:text-white",
      },
    ],
  },
  {
    name: "WalletIQ",
    description:
      "RAG Based AI Finance Manager",
    techStack: ["Spring Boot", "PostgreSQL", "Docker", "GCP", "React.js"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ripanbaidya/wallet-iq",
        icon: "github",
        hoverClassName: "hover:text-white",
      },
      {
        label: "Live",
        href: "https://www.walletiq.online/",
        icon: "external",
        hoverClassName: "hover:text-white",
      },
    ],
  },
  {
    name: "Portfolio",
    description:
      "Pesonal Portfolio ",
    techStack: ["TypeScript", "React.js", "Tailwind CSS"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ripanbaidya/portfolio",
        icon: "github",
        hoverClassName: "hover:text-white",
      },
    ],
  },
];

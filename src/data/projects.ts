import type { Project } from "../types/portfolio";

// Add, remove, or reorder projects here without changing the Projects section UI.
export const projects: Project[] = [
  {
    slug: "lunecare",
    name: "LuneCare",
    description: "Distributed Doctor Appointment Booking Platform",
    videoUrl: "/videos/lunecare.mp4",
    techStack: [
      "Spring Cloud",
      "Microservices",
      "Redis",
      "Kafka",
      "Kubernetes",
    ],
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
      {
        label: "YouTube",
        href: "https://youtu.be/GIwSpIFIxvk?si=WbwcEEWJka7gBNNs",
        icon: "youtube",
        hoverClassName: "hover:text-white",
      },
    ],
  },
  {
    slug: "wallet-iq",
    name: "WalletIQ",
    description: "RAG Based AI Finance Manager",
    videoUrl: "/videos/walletiq.mp4",
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
      {
        label: "YouTube",
        href: "https://youtu.be/RR1aa-eNq60?si=UgvIFWFCaCqLmI1d",
        icon: "youtube",
        hoverClassName: "hover:text-white",
      },
    ],
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    description: "Personal Portfolio",
    videoUrl: "/videos/portfolio.mp4",
    techStack: ["TypeScript", "React.js", "Tailwind CSS"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ripanbaidya/portfolio",
        icon: "github",
        hoverClassName: "hover:text-white",
      },
      {
        label: "Live",
        href: "https://ripanbaidya.vercel.app/",
        icon: "external",
        hoverClassName: "hover:text-white",
      },
    ],
  },
];

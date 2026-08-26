import type { UsesCategory } from "../types/portfolio";

export const usesCategories: UsesCategory[] = [
  {
    label: "Development",
    items: [
      { name: "MacBook M2", description: "My main machine for development." },
      { name: "iPhone 11", description: "For testing and everyday use." },
      { name: "Boat Air Buds", description: "For focus while working." },
    ],
  },
  {
    label: "Productivity",
    items: [{ name: "Notion", description: "For notes, planning, and organizing ideas." }],
  },
];
import { SectionHeading } from "../components/SectionHeading";
import { HorizontalProjects } from "../components/HorizontalProjects";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="bg-neutral-950 scroll-mt-24 py-16">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        colorfulTitle
      />

      <HorizontalProjects projects={projects} />
    </section>
  );
}

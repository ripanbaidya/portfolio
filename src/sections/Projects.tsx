import { SectionHeading } from "../components/SectionHeading";
import { LinkIcon } from "../components/LinkIcon";
import { getGoogleColor, GOOGLE_COLORS } from "../data/googlePalette";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="bg-neutral-950 scroll-mt-24 py-16">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        colorfulTitle
      />

      <div className="divide-y divide-white/10">
        {projects.map((project, projectIndex) => (
          <article
            key={project.name}
            className="group relative flex flex-col gap-5 bg-neutral-950 py-7 transition-colors duration-300 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:gap-8"
          >
            <div className="min-w-44 sm:pt-1">
              <h3
                className="text-xl font-semibold transition-colors duration-300 group-hover:text-white"
                style={{ color: "white" }}
              >
                {project.name}
              </h3>
            </div>

            <div className="flex-1">
              <p className="leading-7 text-neutral-300">
                {project.description}
              </p>

              <ul
                className="mt-4 flex flex-wrap gap-x-4 gap-y-2"
                aria-label={`${project.name} technology stack`}
              >
                {project.techStack.map((tech, techIndex) => (
                  <li
                    key={tech}
                    className="project-tech-name text-sm font-medium transition-colors duration-200"
                    style={{ color: getGoogleColor(techIndex) }}
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-label={link.label}
                    className={`project-link relative isolate inline-flex h-10 w-10 items-center justify-center rounded-full p-[2px] text-sm text-neutral-300 transition duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-950 ${link.hoverClassName}`}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http") ? "noreferrer" : undefined
                    }
                  >
                    <span
                      className="project-link-ring pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-200"
                      style={{
                        background: `conic-gradient(from 120deg, ${GOOGLE_COLORS.join(", ")}, ${GOOGLE_COLORS[0]})`,
                      }}
                      aria-hidden="true"
                    />
                    <span className="relative z-10 flex h-full w-full items-center justify-center rounded-full">
                      <LinkIcon name={link.icon} className="h-5 w-5" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

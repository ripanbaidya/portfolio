import { Container } from "../components/Container";
import { LinkIcon } from "../components/LinkIcon";
import { Navbar } from "../components/Navbar";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import { getGoogleColor, GOOGLE_COLORS } from "../data/googlePalette";
import { projects } from "../data/projects";
import { Footer } from "./Footer";

export function ProjectDetail() {
  const slug = window.location.pathname.split("/").filter(Boolean).pop();
  const project = projects.find((item) => item.slug === slug);

  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 font-sans text-neutral-100">
      <Navbar />
      <main className="flex-1" aria-label="Project detail">
        <Container>
          {project ? (
            <article className="py-14 sm:py-20">
              <a
                href="/#projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span aria-hidden="true">&larr;</span>
                Back
              </a>
              <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.6fr)] lg:items-end lg:gap-16">
                <div>
                  <h2 className="mt-4 text-3xl font-light tracking-tight text-white sm:text-4xl">
                    {project.name}
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-xl">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      aria-label={`${project.name} ${link.label}`}
                      title={link.label}
                      className={`project-link relative isolate inline-flex h-12 w-12 items-center justify-center rounded-full p-[2px] text-neutral-300 transition duration-200 hover:scale-110 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-950 ${link.hoverClassName}`}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
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
                      <span className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-neutral-900">
                        <LinkIcon name={link.icon} className="h-5 w-5" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-12 overflow-hidden border-y border-white/10 bg-black sm:mt-16">
                <video
                  className="mx-auto max-h-[min(70svh,42rem)] w-full object-contain"
                  src={project.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  aria-label={`${project.name} project preview`}
                />
              </div>

              <div className="mt-12 grid gap-10 border-t border-white/10 pt-8 sm:grid-cols-[minmax(10rem,0.35fr)_minmax(0,1fr)] sm:gap-16">
                <h2 className="text-sm font-semibold normal-case tracking-[0.2em] text-neutral-500">
                  Built with
                </h2>
                <ul
                  className="flex flex-wrap gap-x-6 gap-y-3"
                  aria-label={`${project.name} technology stack`}
                >
                  {project.techStack.map((tech, index) => (
                    <li
                      key={tech}
                      className="text-base font-medium"
                      style={{ color: getGoogleColor(index) }}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ) : (
            <div className="flex min-h-[60vh] flex-col items-start justify-center py-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EA4335]">
                Project not found
              </p>
              <h1 className="mt-4 text-4xl font-semibold text-white">
                That project does not exist.
              </h1>
              <a
                href="/#projects"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Return to projects
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          )}
        </Container>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

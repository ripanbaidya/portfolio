import { useEffect, useRef } from "react";
import type { Project } from "../types/portfolio";
import { LinkIcon } from "./LinkIcon";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.1 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <article className="group relative h-[min(72svh,42rem)] min-h-[30rem] w-[calc(100vw-2rem)] shrink-0 snap-start overflow-hidden border-y border-white/10 bg-neutral-950 sm:h-[30rem] sm:min-h-0 sm:w-[min(70vw,48rem)] lg:h-[34rem]">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full bg-black object-contain"
        src={project.videoUrl}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-label={`${project.name} project preview`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-transparent" />
      {/* Projects numbers, like - 01, 02 and so on. */}
      {/* <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-neutral-950/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300">
        0{index + 1}
      </span> */}

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-6">
        <p className="max-w-xl text-base leading-7 text-neutral-200 sm:text-lg">{project.description}</p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href={`/projects/${project.slug}`}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900 px-4 text-sm font-medium text-neutral-100 transition duration-200 hover:border-neutral-500 hover:bg-neutral-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
          >
            View project
            <LinkIcon name="external" className="h-4 w-4" />
          </a>

          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-label={`${project.name} ${link.label}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-950 text-sm text-neutral-300 transition duration-200 hover:border-neutral-500 hover:bg-neutral-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <LinkIcon name={link.icon} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
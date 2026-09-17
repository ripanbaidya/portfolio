import { useEffect, useRef, useState } from "react";
import type { Project } from "../types/portfolio";
import { ProjectCard } from "./ProjectCard";

interface HorizontalProjectsProps {
  projects: Project[];
}

export function HorizontalProjects({ projects }: HorizontalProjectsProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [horizontalDistance, setHorizontalDistance] = useState(0);

  useEffect(() => {
    const stage = stageRef.current;
    const viewport = viewportRef.current;
    const rail = railRef.current;

    if (!stage || !viewport || !rail) {
      return;
    }

    const distanceRef = { current: 0 };
    const updateDistance = () => {
      const distance = Math.max(0, rail.scrollWidth - viewport.clientWidth);
      distanceRef.current = distance;
      setHorizontalDistance(distance);
    };

    const resizeObserver = new ResizeObserver(updateDistance);
    resizeObserver.observe(viewport);
    resizeObserver.observe(rail);
    updateDistance();

    let frameId = 0;
    const updateRail = () => {
      frameId = 0;
      const sectionStart = stage.offsetTop;
      const scrollableHeight = Math.max(1, stage.offsetHeight - window.innerHeight);
      const progress = Math.min(
        1,
        Math.max(0, (window.scrollY - sectionStart) / scrollableHeight),
      );
      rail.style.transform = `translate3d(${-progress * distanceRef.current}px, 0, 0)`;
    };
    const handleScroll = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateRail);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateRail();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="relative"
      style={{ minHeight: `calc(100vh + ${horizontalDistance}px)` }}
    >
      <div
        ref={viewportRef}
        className="sticky top-16 flex h-[calc(100vh-4rem)] items-center overflow-hidden"
      >
        <div className="w-full overflow-hidden" aria-label="Selected projects">
          <div
            ref={railRef}
            className="flex w-max snap-x snap-mandatory gap-4 px-4 py-8 will-change-transform sm:gap-6 sm:px-8 lg:px-12"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
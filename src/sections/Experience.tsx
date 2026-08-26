import { SectionHeading } from "../components/SectionHeading";
import { experiences } from "../data/experience";

export function Experience() {
  return (
    <section id="experience" className="bg-neutral-950 scroll-mt-24 py-16">
      <SectionHeading
        eyebrow="Experience"
        title="Where I have worked"
        colorfulTitle
      />

      <div className="space-y-1">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className="group relative border-l border-white/15 py-6 pl-6 transition-colors duration-300 hover:border-[#4285F4] sm:pl-8"
          >
            {/* Timeline dot */}
            <span
              className="absolute -left-1.5 top-8 h-3 w-3 rounded-full border-2 border-neutral-950 bg-neutral-600 transition-all duration-300 group-hover:bg-[#4285F4] group-hover:ring-4 group-hover:ring-[#4285F4]/10"
              aria-hidden="true"
            />

            <div className="flex items-start gap-4 border-b border-white/10 pb-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white p-1 transition-colors duration-300 group-hover:border-[#4285F4]">
                <img
                  src={experience.logoUrl}
                  alt={`${experience.company} logo`}
                  className="h-full w-full rounded-lg object-contain"
                />
              </span>

              <div>
                <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#4285F4]">
                  {experience.company}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-neutral-300">
                  <p>{experience.role}</p>
                  <span className="text-neutral-500">•</span>
                  <p className="text-neutral-400">{experience.duration}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

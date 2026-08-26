import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { TechnologyIcon } from "../components/TechnologyIcon";
import { technologies } from "../data/technologies";

export function TechnologyMarquee() {
  return (
    <section
      aria-labelledby="technology-heading"
      className="overflow-hidden bg-[linear-gradient(to_bottom,#0a0a0a_0%,#0a0a0a_28%,rgba(19,78,74,0.8)_68%,#0a0a0a_100%)] pb-16 pt-4 sm:pb-20 sm:pt-8"
    >
      <div className="py-10 sm:py-14">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Tech Stack"
              title="Tools I use to build modern products"
              colorfulTitle
            />
          </div>
        </Container>

        <div className="relative mt-16 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-22 bg-gradient-to-r from-neutral-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-22 bg-gradient-to-l from-[#0a0a0a]/70 to-transparent" />
          <div className="flex w-max animate-marquee [will-change:transform]">
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                className="flex shrink-0 items-center gap-16 pr-16 sm:gap-24 sm:pr-24"
                aria-hidden={groupIndex === 1}
              >
                {technologies.map((technology) => (
                  <div
                    key={`${technology.name}-${groupIndex}`}
                    className="flex min-w-24 flex-col items-center gap-4 text-center"
                  >
                    <TechnologyIcon
                      name={technology.icon}
                      className={`h-8 w-8 sm:h-10 sm:w-10 ${technology.colorClassName}`}
                    />
                    <p className="text-base font-thin text-neutral-100 sm:text-sm">
                      {technology.name}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Container } from "../components/Container";
import { usesCategories } from "../data/uses";

export function Uses() {
  return (
    <div className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(66,133,244,0.14),transparent_68%)]" />
      <Container>
        <header className="relative max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
            <span className="text-[#4285F4]">{"<"}</span> Uses{" />"}
          </p>

          <p className="mt-6 max-w-xl text-base leading-7 text-neutral-400 sm:text-lg">
            A living list of the things I use to build, learn, and make everyday
            work a little more thoughtful.
          </p>
        </header>

        <div className="relative mt-6 border-white/10 sm:mt-20">
          {usesCategories.map((category) => (
            <section
              key={category.label}
              className="grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[minmax(10rem,0.35fr)_1fr] sm:gap-10 sm:py-10"
              aria-labelledby={`uses-${category.label}`}
            >
              <h2
                id={`uses-${category.label}`}
                className="text-2xl font-light text-white"
              >
                {category.label}
              </h2>
              <ul className="flex flex-col gap-5 text-base text-neutral-300">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="group max-w-xl transition-colors hover:text-white"
                  >
                    <p className="font-medium text-neutral-200">{item.name}</p>
                    <p className="mt-1 text-sm text-neutral-500 transition-colors group-hover:text-neutral-300">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}

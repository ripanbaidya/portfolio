import { Container } from "../components/Container";
import { blogPosts } from "../data/blog";

export function Blog() {
  return (
    <div className="relative overflow-hidden bg-neutral-950 pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(66,133,244,0.14),transparent_68%)]" />
      <Container>
        <header className="relative max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
            <span className="text-[#4285F4]">{"<"}</span> Blog{" "}
            <span className="text-[#EA4335]">{" />"}</span>
          </p>

          <p className="mt-6 max-w-xl text-base leading-7 text-neutral-400 sm:text-lg">
            Writing about software engineering, learning, and the ideas I find
            useful along the way.
          </p>
        </header>

        <div className="relative mt-6 sm:mt-20">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="grid gap-4 border-b border-white/10 py-8 sm:grid-cols-[minmax(12rem,0.35fr)_1fr_auto] sm:items-start sm:gap-10 sm:py-10"
            >
              <h2 className="text-2xl font-light text-white">{post.title}</h2>
              <p className="max-w-xl text-base leading-7 text-neutral-400">
                {post.description}
              </p>
              <a
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-neutral-300 transition-colors hover:text-blue-500 sm:pt-1"
              >
                Read article <span aria-hidden="true">-&gt;</span>
              </a>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}

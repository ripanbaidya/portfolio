import { useEffect, useState } from "react";

import { Container } from "../components/Container";
import { getGoogleColor, GOOGLE_COLORS } from "../data/googlePalette";
import { profile } from "../data/profile";

export function Hero() {
  const [activeTitleIndex, setActiveTitleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTitleIndex(
        (currentIndex) => (currentIndex + 1) % profile.title.length,
      );
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  const currentTitle = profile.title[activeTitleIndex];
  const currentTitleColor = getGoogleColor(activeTitleIndex);

  return (
    <section id="home" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 text-center md:grid-cols-[1fr_280px] md:text-left">
          <div className="order-2 max-w-3xl md:order-1">
            <p className="mt-4 text-2xl font-light text-neutral-300 sm:text-3xl">
              Hi, I'm
            </p>
            <h1
              className="mt-2 max-w-full text-[clamp(3rem,14vw,8rem)] font-thin leading-[0.95] tracking-tight"
              aria-label={profile.name}
            >
              {profile.name.split(" ").map((word, wordIndex) => (
                <span
                  key={word}
                  className="inline-block whitespace-nowrap"
                  aria-hidden="true"
                >
                  {Array.from(word).map((character, characterIndex) => (
                    <span
                      key={`${character}-${characterIndex}`}
                      className="hero-name-character"
                      style={{
                        color: getGoogleColor(
                          (wordIndex * word.length + characterIndex) %
                            GOOGLE_COLORS.length,
                        ),
                      }}
                    >
                      {character}
                    </span>
                  ))}
                  {wordIndex < profile.name.split(" ").length - 1 ? " " : ""}
                </span>
              ))}
            </h1>
            <div className="mt-6 flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-300 sm:text-[11px]">
                I am a
              </span>
              <span
                key={`${currentTitle}-${activeTitleIndex}`}
                className="hero-title-in text-sm font-semibold uppercase tracking-[0.12em] sm:text-[13px]"
                style={{ color: currentTitleColor }}
                aria-live="polite"
              >
                {currentTitle}
              </span>
            </div>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8 md:mx-0">
              {profile.intro}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href="#projects"
                className="rounded-full border px-5 py-3 text-sm font-semibold transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-950"
                style={{
                  color: GOOGLE_COLORS[0],
                  borderColor: `${GOOGLE_COLORS[0]}66`,
                  backgroundColor: "rgba(66, 133, 244, 0.04)",
                }}
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                className="rounded-full border px-5 py-3 text-sm font-semibold transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-950"
                style={{
                  color: GOOGLE_COLORS[1],
                  borderColor: `${GOOGLE_COLORS[1]}66`,
                  backgroundColor: "rgba(234, 67, 53, 0.04)",
                }}
              >
                Resume
              </a>
            </div>
          </div>
          <div className="order-1 mx-auto md:order-2 md:mx-0 md:justify-self-end">
            <div
              className="relative isolate rounded-full p-[2px] shadow-[0_0_0_1px_rgba(255,255,255,0.08)] sm:p-[3px]"
            >
              <span
                className="google-profile-ring absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(from 120deg, ${GOOGLE_COLORS.join(", ")}, ${GOOGLE_COLORS[0]})`,
                }}
                aria-hidden="true"
              />
              <img
                src={profile.imageUrl}
                alt={profile.imageAlt}
                className="relative z-10 h-40 w-40 rounded-full border-2 border-neutral-950/40 object-cover sm:h-56 sm:w-56 md:h-60 md:w-60"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

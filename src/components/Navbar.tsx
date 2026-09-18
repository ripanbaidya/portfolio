import { useState } from "react";
import {
  HiBars3,
  HiBookOpen,
  HiHome,
  HiWrenchScrewdriver,
  HiXMark,
} from "react-icons/hi2";
import { navLinks } from "../data/navigation";
import { GOOGLE_COLORS } from "../data/googlePalette";
import type { NavigationIconName } from "../types/portfolio";
import { Container } from "./Container";
import BrandMark from "./BrandMark";

const navigationIconMap = {
  home: HiHome,
  uses: HiWrenchScrewdriver,
  blog: HiBookOpen,
} satisfies Record<NavigationIconName, typeof HiHome>;

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/95 backdrop-blur-sm">
      <Container>
        <nav
          className="relative flex min-h-16 items-center justify-between gap-4"
          aria-label="Primary navigation"
        >
          <a
            href="/"
            className="
              group inline-flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-full p-[2px]
              transition-transform duration-300
              hover:scale-110
              focus:outline-none
              focus:ring-2 focus:ring-white
              focus:ring-offset-2
              focus:ring-offset-neutral-950
              sm:h-10 sm:w-10
            "
            
            aria-label="Go to homepage"
            title="Homepage"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="flex h-full w-full items-center justify-center rounded-full bg-neutral-950">
              <BrandMark />
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-neutral-200 transition hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-950 sm:hidden"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? (
              <HiXMark className="h-5 w-5" aria-hidden="true" />
            ) : (
              <HiBars3 className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <ul
            id="primary-navigation"
            className={`
              ${
                isMenuOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0 pointer-events-none"
              }
              absolute left-0 right-0 top-[calc(100%+0.75rem)]
              flex flex-col gap-1
              rounded-2xl border border-white/10
              bg-neutral-950/98 p-2
              shadow-2xl shadow-black/40
              transition-all duration-200 ease-out
              sm:static sm:visible sm:pointer-events-auto sm:translate-y-0 sm:flex sm:w-auto
              sm:flex-row sm:items-center sm:gap-3
              sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0
              sm:opacity-100 sm:shadow-none
            `}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex min-h-12 w-full items-center gap-3 rounded-xl px-4 text-sm font-medium text-neutral-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white sm:min-h-0 sm:w-auto sm:gap-2 sm:rounded-md sm:px-3 sm:py-2 sm:hover:bg-transparent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {(() => {
                    const Icon = navigationIconMap[link.icon];

                    return (
                      <Icon
                        className="h-5 w-5 shrink-0 sm:h-4 sm:w-4"
                        aria-hidden="true"
                      />
                    );
                  })()}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

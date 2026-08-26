import { useState } from "react";
import { navLinks } from "../data/navigation";
import { GOOGLE_COLORS } from "../data/googlePalette";
import { Container } from "./Container";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/95">
      <Container>
        <nav className="relative flex min-h-16 items-center justify-between gap-4" aria-label="Primary navigation">
          <a
            href="#home"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full p-[2px] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-950"
            style={{
              background: `conic-gradient(from 25deg, ${GOOGLE_COLORS[0]} 0deg 105deg, ${GOOGLE_COLORS[1]} 105deg 195deg, ${GOOGLE_COLORS[2]} 195deg 280deg, ${GOOGLE_COLORS[3]} 280deg 360deg)`,
            }}
            aria-label="Go to homepage"
            title="Homepage"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="flex h-full w-full items-center justify-center rounded-full bg-neutral-950 text-lg font-bold text-white">
              R
            </span>
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 sm:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="space-y-1.5" aria-hidden="true">
              <span className="block h-0.5 w-5" style={{ backgroundColor: GOOGLE_COLORS[0] }} />
              <span className="block h-0.5 w-5" style={{ backgroundColor: GOOGLE_COLORS[1] }} />
              <span className="block h-0.5 w-5" style={{ backgroundColor: GOOGLE_COLORS[2] }} />
            </span>
          </button>
          <ul
            className={`${isMenuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-x border-b border-white/10 bg-neutral-950 px-5 pb-4 pt-2 shadow-xl shadow-black/20 sm:static sm:flex sm:w-auto sm:flex-row sm:items-center sm:gap-3 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-neutral-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white sm:inline-block sm:hover:bg-transparent"
                  onClick={() => setIsMenuOpen(false)}
                >
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

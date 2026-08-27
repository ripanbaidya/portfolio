import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

import { GOOGLE_COLORS } from "../data/googlePalette";

export function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.dispatchEvent(new Event("portfolio:scroll-top"))}
      className="scroll-to-top-button isolate fixed z-50 flex h-11 w-11 items-center justify-center rounded-full p-[2px] text-white shadow-lg transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
    >
      <span
        className="scroll-top-ring pointer-events-none absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(from 120deg, ${GOOGLE_COLORS.join(", ")}, ${GOOGLE_COLORS[0]})`,
        }}
        aria-hidden="true"
      />
      <span className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-neutral-900">
        <FiArrowUp className="h-5 w-5" />
      </span>
    </button>
  );
}

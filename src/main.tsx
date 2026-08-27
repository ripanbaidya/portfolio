import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Lenis from "lenis";
import App from "./App";
import "./index.css";

function AppWithSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      anchors: true,
      lerp: 0.075,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });
    let frameId = 0;

    const scrollToTop = () => lenis.scrollTo(0);
    window.addEventListener("portfolio:scroll-top", scrollToTop);

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };

    frameId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("portfolio:scroll-top", scrollToTop);
      lenis.destroy();
    };
  }, []);

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppWithSmoothScroll />
  </React.StrictMode>,
);

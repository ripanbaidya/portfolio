import { useEffect } from "react";
import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { Blog } from "./sections/Blog";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { ProjectDetail } from "./sections/ProjectDetail";
import { TechnologyMarquee } from "./sections/TechnologyMarquee";
import { Uses } from "./sections/Uses";

export default function App() {
  useEffect(() => {
    if (!window.location.hash) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(window.location.hash.slice(1));
      target?.scrollIntoView();
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (window.location.pathname.startsWith("/projects/")) {
    return <ProjectDetail />;
  }

  if (window.location.pathname === "/uses") {
    return (
      <div className="flex min-h-screen flex-col bg-neutral-950 font-sans text-neutral-100">
        <Navbar />
        <main className="flex-1 bg-neutral-950">
          <Uses />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    );
  }

  if (window.location.pathname === "/blog") {
    return (
      <div className="flex min-h-screen flex-col bg-neutral-950 font-sans text-neutral-100">
        <Navbar />
        <main className="flex-1 bg-neutral-950">
          <Blog />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 font-sans text-neutral-100">
      <Navbar />
      <main className="flex-1 bg-neutral-950">
        <Hero />
        <Container>
          <Experience />
        </Container>
        <TechnologyMarquee />
        <Container>
          <Projects />
        </Container>
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

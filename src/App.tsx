import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { TechnologyMarquee } from "./sections/TechnologyMarquee";
import { Uses } from "./sections/Uses";

export default function App() {
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

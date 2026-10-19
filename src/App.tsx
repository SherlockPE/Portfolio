import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Footer from "./components/Footer";
import BackgroundDecorations from "./components/background/BackgroundDecorations";
import { useScrollReveal } from "./hooks/useScrollReveal";

const About = lazy(() => import("./sections/About"));
const Education = lazy(() => import("./sections/Education"));
const Skills = lazy(() => import("./sections/Skills"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen antialiased bg-theme-bg text-theme-text selection:bg-theme-accent selection:text-white transition-colors duration-300 relative overflow-x-hidden">
      <BackgroundDecorations />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <section id="home" className="reveal-on-scroll">
            <Home />
          </section>
          <section id="about" className="bg-theme-subtle/40 border-y border-theme-border-subtle/50 backdrop-blur-xs reveal-on-scroll content-visibility-auto">
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <About />
            </Suspense>
          </section>
          <section id="education" className="reveal-on-scroll content-visibility-auto">
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <Education />
            </Suspense>
          </section>
          <section id="skills" className="bg-theme-subtle/40 border-y border-theme-border-subtle/50 backdrop-blur-xs reveal-on-scroll content-visibility-auto">
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <Skills />
            </Suspense>
          </section>
          <section id="projects" className="reveal-on-scroll content-visibility-auto">
            <Suspense fallback={<div className="min-h-[500px]" />}>
              <Projects />
            </Suspense>
          </section>
          <section id="contact" className="bg-theme-subtle/40 border-t border-theme-border-subtle/50 backdrop-blur-xs reveal-on-scroll content-visibility-auto">
            <Suspense fallback={<div className="min-h-[300px]" />}>
              <Contact />
            </Suspense>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
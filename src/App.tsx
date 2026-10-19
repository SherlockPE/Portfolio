import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import BackgroundDecorations from "./components/background/BackgroundDecorations";
import { useScrollReveal } from "./hooks/useScrollReveal";

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
          <section id="about" className="bg-theme-subtle/40 border-y border-theme-border-subtle/50 backdrop-blur-xs reveal-on-scroll">
            <About />
          </section>
          <section id="education" className="reveal-on-scroll">
            <Education />
          </section>
          <section id="skills" className="bg-theme-subtle/40 border-y border-theme-border-subtle/50 backdrop-blur-xs reveal-on-scroll">
            <Skills />
          </section>
          <section id="projects" className="reveal-on-scroll">
            <Projects />
          </section>
          <section id="contact" className="bg-theme-subtle/40 border-t border-theme-border-subtle/50 backdrop-blur-xs reveal-on-scroll">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
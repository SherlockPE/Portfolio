import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen antialiased bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <section id="home" className="reveal-on-scroll">
          <Home />
        </section>
        <section id="about" className="bg-slate-50/50 dark:bg-slate-900/20 reveal-on-scroll">
          <About />
        </section>
        <section id="education" className="reveal-on-scroll">
          <Education />
        </section>
        <section id="skills" className="bg-slate-50/50 dark:bg-slate-900/20 reveal-on-scroll">
          <Skills />
        </section>
        <section id="projects" className="reveal-on-scroll">
          <Projects />
        </section>
        <section id="contact" className="bg-slate-50/50 dark:bg-slate-900/20 reveal-on-scroll">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
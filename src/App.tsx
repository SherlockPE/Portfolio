import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen antialiased bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about" className="bg-slate-50/50 dark:bg-slate-900/20">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills" className="bg-slate-50/50 dark:bg-slate-900/20">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact" className="bg-slate-50/50 dark:bg-slate-900/20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
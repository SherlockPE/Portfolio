import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";

export default function App() {
  return (
    <div className="min-h-screen antialiased transition-colors duration-300 bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about" className="bg-slate-50/50 dark:bg-slate-900/20"><About /></section>
        <section id="education"><Education /></section>
        <section id="skills" className="bg-slate-50/50 dark:bg-slate-900/20"><Skills /></section>
        {/* Próximamente: <Projects /> y <Contact /> */}
      </main>
    </div>
  );
}
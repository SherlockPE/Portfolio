import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
// Importa el resto de tus secciones conforme las crees...

export default function App() {
  return (
    <div className="min-h-screen antialiased selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        {/* Aquí irán <Education />, <Skills />, <Projects />, <Contact /> */}
      </main>
    </div>
  );
}
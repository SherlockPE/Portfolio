import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";

export default function About() {
  const { language } = useApp();
  const t = translations[language].about;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Espacio para una foto secundaria o elemento visual */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r fly from-blue-600 to-cyan-500 rounded-2xl blur-sm opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative px-8 py-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-center">
              <span className="text-6xl">🚀</span>
            </div>
          </div>
        </div>

        {/* Texto descriptivo */}
        <div className="w-full md:w-2/3 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            {t.title}
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto md:mx-0 rounded-full" />
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.description}
          </p>
        </div>
      </div>
    </div>
  );
}
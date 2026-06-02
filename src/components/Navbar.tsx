import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";

export default function Navbar() {
	const { language } = useApp();
	
	// Obtenemos los textos correspondientes al idioma actual
	const t = translations[language].nav;

	return (
		<header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 transition-colors">
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
				{/* Logo / Nombre */}
				<div className="text-xl font-bold tracking-tight">
					Fabricio<span className="text-blue-500">.</span>
				</div>

				{/* Navegación de Secciones */}
				<nav className="hidden md:flex items-center gap-6 text-sm font-medium">
					<a href="#home" className="hover:text-blue-500 transition-colors">{t.home}</a>
					<a href="#about" className="hover:text-blue-500 transition-colors">{t.about}</a>
					<a href="#education" className="hover:text-blue-500 transition-colors">{t.education}</a>
					<a href="#skills" className="hover:text-blue-500 transition-colors">{t.skills}</a>
					<a href="#projects" className="hover:text-blue-500 transition-colors">{t.projects}</a>
					<a href="#contact" className="hover:text-blue-500 transition-colors">{t.contact}</a>
				</nav>

				{/* Toggles (Idioma y Tema) */}
				<div className="flex items-center gap-4">
					<LangToggle />
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}
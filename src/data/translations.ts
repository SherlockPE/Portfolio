export const translations = {
	es:
	{
		nav:
		{
			home: "Inicio",
			education: "Educación",
			about: "Sobre mí",
			skills: "Habilidades",
			projects: "Proyectos",
			contact: "Contacto"
		},
		home:
		{
			greeting: "Hola, soy",
			role: "Software Developer",
			cta: "Ver mi trabajo",
			scrollDown: "Desliza para ver más"
		},
		about:
		{
			title: "Sobre mí",
			description: "Desarrollador de software enfocado en crear soluciones eficientes, limpias y escalables. Me apasiona el desarrollo de bajo nivel y construir experiencias web modernas."
		},
		projects:
		{
			title: "Proyectos Destacados",
			viewCode: "Ver Código",
			viewLive: "Demo en Vivo"
		},
		contact:
		{
			title: "Contacto",
			subtitle: "¿Tienes un proyecto en mente o quieres charlar?",
			button: "Enviar Mensaje"
		}
	},

	en:
	{
		nav:
		{
			home: "Home",
			education: "Education",
			about: "About",
			skills: "Skills",
			projects: "Projects",
			contact: "Contact"
		},
		home:
		{
			greeting: "Hi, I'm",
			role: "Software Developer",
			cta: "View my work",
			scrollDown: "Scroll down for more"
		},
		about:
		{
			title: "About Me",
			description: "Software developer focused on creating efficient, clean, and scalable solutions. Passionate about low-level programming and building modern web experiences."
		},
		projects:
		{
			title: "Featured Projects",
			viewCode: "View Code",
			viewLive: "Live Demo"
		},
		contact:
		{
			title: "Contact",
			subtitle: "Have a project in mind or just want to chat?",
			button: "Send Message"
		}
	},

	pt:
	{
		nav:
		{
			home: "Início",
			education: "Educação",
			about: "Sobre mim",
			skills: "Habilidades",
			projects: "Projetos",
			contact: "Contato"
		},
		home:
		{
			greeting: "Olá, eu sou",
			role: "Software Developer",
			cta: "Ver meu trabalho",
			scrollDown: "Desça para ver mais"
		},
		about:
		{
			title: "Sobre mim",
			description: "Desenvolvedor de software focado em criar soluções eficientes, limpas e escaláveis. Apaixonado por programação de baixo nível e por construir experiências web modernas."
		},
		projects:
		{
			title: "Projetos em Destaque",
			viewCode: "Ver Código",
			viewLive: "Demonstração"
		},
		contact:
		{
			title: "Contato",
			subtitle: "Tem um projeto em mente ou quer conversar?",
			button: "Enviar Mensagem"
		}
	},

	// uc:
	// {
    // nav:
    // {
    //     home: "Головна",
    //     education: "Освіта",
    //     about: "Про мене",
    //     skills: "Навички",
    //     projects: "Проекти",
    //     contact: "Контакти"
    // },
    // home:
    // {
    //     greeting: "Привіт, я",
    //     role: "Розробник програмного забезпечення",
    //     cta: "Переглянути мої роботи",
    //     scrollDown: "Прокрутіть вниз, щоб побачити більше"
    // },
    // about:
    // {
    //     title: "Про мене",
    //     description: "Розробник програмного забезпечення, що спеціалізується на створенні ефективних, чітких та масштабованих рішень. Захоплююся низькорівневим програмуванням та створенням сучасних веб-досвідів."
    // },
    // projects:
    // {
    //     title: "Вибрані проекти",
    //     viewCode: "Переглянути код",
    //     viewLive: "Демо в режимі реального часу"
    // },
    // contact:
    // {
    //     title: "Контакти",
    //     subtitle: "Маєте проект або просто хочете поспілкуватися?",
    //     button: "Надіслати повідомлення"
    // }
  	// },

} as const; // 'as const' asegura que TypeScript mantenga los tipos exactos y literales

// Tipo auxiliar para ayudarnos en los componentes si fuera necesario
export type TranslationKeys = typeof translations.es;
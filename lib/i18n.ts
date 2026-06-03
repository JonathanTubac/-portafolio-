export type Lang = 'en' | 'es';

const en = {
  nav: {
    experience: 'Experience',
    projects: 'Projects',
    stack: 'Stack',
    certifications: 'Certifications',
    contact: 'Contact',
    cta: "Let's Talk",
  },
  hero: {
    badge: 'Guatemala 🇬🇹 · Open to opportunities',
    line1: 'Building products,',
    line2: 'not just websites.',
    subtitle:
      'Full Stack Developer building React SPAs, REST APIs, and complete web applications — from architecture and Docker setup to production deployment.',
    cta1: 'View Projects →',
    cta2: 'Get in Touch',
    stats: { projects: 'Projects', years: 'Years', technologies: 'Technologies' },
  },
  experience: {
    tag: 'Background',
    title: 'Experience &',
    titleHighlight: 'Education',
    workLabel: 'Work',
    educationLabel: 'Education',
    softSkillsLabel: 'Soft Skills',
    present: 'Present',
    work: [
      {
        role: 'Software Engineer',
        company: 'SkIoT',
        period: 'Jan 2026 — Present',
        bullets: [
          'Building and maintaining software solutions for IoT infrastructure.',
          'Developing full-stack features across web applications.',
          'Collaborating in cross-functional engineering teams.',
        ],
      },
      {
        role: 'IT Support Intern',
        company: 'Corporación T — Banco Industrial',
        period: 'Aug 2023 — Oct 2023',
        bullets: [
          'Performed preventive maintenance on computer systems to minimize failures.',
          'Configured new workstations with corporate software and optimized initial performance.',
        ],
      },
    ],
    education: [
      {
        degree: 'CS & IT Engineering',
        institution: 'Universidad del Valle de Guatemala',
        period: '2024 — 2029',
      },
      {
        degree: 'Industrial Bachillerato · Computer Science',
        institution: 'Instituto Emiliani Somascos',
        period: '2018 — 2023',
      },
    ],
    softSkills: ['Proactivity', 'Leadership', 'Team Collaboration', 'Self-learning', 'English B1'],
  },
  projects: {
    tag: 'Featured Work',
    title: "Projects I've",
    titleHighlight: 'built',
    subtitle: 'Real applications built in teams and solo — from hackathons to production systems.',
    awardLabel: 'Award',
    roleLabel: 'Role',
    techLabel: 'Tech',
    github: 'GitHub',
    items: [
      {
        title: 'WaterWay+',
        subtitle: 'Hackathon · Copernicus x SENACYT · 🏆 1st Place',
        description:
          'Real-time web monitoring system for the Motagua River basin. Built the admin interface in React with live sensor data from a REST API, enabling visualisation of environmental metrics at scale.',
        highlight: 'Copernicus x SENACYT',
      },
      {
        title: 'CHEMIQ',
        subtitle: 'Management System · UVG Chemistry Association',
        description:
          'Full-stack management platform for the UVG chemistry association. Co-designed the architecture, built REST API endpoints with Node.js + PostgreSQL, and led the database migration to MongoDB for better scalability.',
        highlight: 'Architecture + Backend',
      },
      {
        title: 'Spotter',
        subtitle: 'Web App · Exercise Recommendation + Gym Matching',
        description:
          'Graph-powered app that recommends exercises and matches gym partners via Neo4j relationships. Designed and built the full REST API with Node.js + Express, co-led frontend architecture with React and Next.js.',
        highlight: 'Graph DB · Neo4j',
      },
      {
        title: 'Kontrol',
        subtitle: 'Project Management Platform · Vue 3 + Node.js + AI',
        description:
          'Full-stack project management platform with team coordination, inventory tracking, and marketing tools. Features real-time communication via Socket.IO, an integrated AI agent, and Google OAuth authentication.',
        highlight: 'AI + Socket.IO',
      },
    ],
  },
  stack: {
    tag: 'Technology',
    title: 'My',
    titleHighlight: 'stack',
    subtitle:
      'The tools I use to build full-stack products — chosen for reliability, performance, and developer experience.',
    exploringTitle: 'Currently exploring',
    exploringDesc: 'Currently studying CS at UVG — continuously expanding the stack.',
  },
  certifications: {
    tag: 'Credentials',
    titleStart: 'Certifi',
    titleHighlight: 'cations',
    subtitle: 'Courses and credentials that back up the skills.',
    viewCredential: 'View credential',
    openUrl: 'Open URL ↗',
    bottomNote: 'Always learning — continuously expanding knowledge.',
  },
  metrics: {
    tag: 'By the numbers',
    title: 'The',
    titleHighlight: 'impact',
    bottomNote: 'Currently available for freelance, contract, and full-time opportunities.',
    items: [
      { label: 'Projects Built', description: 'Real applications shipped' },
      { label: 'Years in Dev', description: 'Full-stack development' },
      { label: 'Technologies', description: 'Languages, frameworks & DBs' },
      { label: 'Hackathon Win', description: 'Copernicus x SENACYT' },
    ],
  },
  contact: {
    tag: 'Contact',
    title: "Let's",
    titleHighlight: 'connect',
    subtitle: "Have a project in mind or want to chat? Drop a command below or reach out directly.",
    emailLabel: 'javiertubac1290.e@gmail.com →',
    placeholder: 'Type a command...',
    hint: 'Try: whoami · stack · github · contact · clear',
    commands: {
      help: 'Commands: whoami | stack | github | contact | location | clear',
      whoami: 'Jonathan Tubac — Full Stack Developer, Guatemala City 🇬🇹',
      stack: 'React · Next.js · Node.js · TypeScript · PostgreSQL · Docker · REST APIs',
      github: '→ github.com/JonathanTubac  (public repos + live demos)',
      contact: 'Email: javiertubac1290.e@gmail.com',
      location: 'Guatemala City, Guatemala 🇬🇹 — Open to local & remote',
      unknown: (cmd: string) => `Command not found: ${cmd}. Type 'help' for available commands.`,
    },
    autoCommands: [
      {
        input: 'whoami',
        output: [
          'Jonathan Tubac — Full Stack Developer',
          'Location: Guatemala City, Guatemala 🇬🇹',
          'Focus: React SPAs · REST APIs · Docker',
          'Status: Open to local & remote opportunities',
        ],
      },
      {
        input: 'cat stack.txt',
        output: [
          'Frontend  → React, Next.js, TypeScript, Tailwind CSS',
          'Backend   → Node.js, Express · REST APIs',
          'Database  → PostgreSQL, MongoDB, Neo4j',
          'Tools     → Docker, Git, AWS, Google Cloud',
        ],
      },
      {
        input: 'open github',
        output: [
          '→ github.com/JonathanTubac',
          '  ↳ Public repos with READMEs and live demos',
          '  ↳ React SPAs · REST APIs · Dockerized projects',
        ],
      },
    ],
    terminalTitle: 'jonathan@portfolio — bash',
  },
  footer: {
    built: 'Built with Next.js 15 · Designed for impact',
    github: 'GitHub',
    email: 'Email',
  },
};

const es: typeof en = {
  nav: {
    experience: 'Experiencia',
    projects: 'Proyectos',
    stack: 'Stack',
    certifications: 'Certificaciones',
    contact: 'Contacto',
    cta: 'Hablemos',
  },
  hero: {
    badge: 'Guatemala 🇬🇹 · Abierto a oportunidades',
    line1: 'Construyendo productos,',
    line2: 'no solo sitios web.',
    subtitle:
      'Desarrollador Full Stack construyendo SPAs en React, REST APIs y aplicaciones web completas — desde la arquitectura y Docker hasta el despliegue en producción.',
    cta1: 'Ver Proyectos →',
    cta2: 'Contáctame',
    stats: { projects: 'Proyectos', years: 'Años', technologies: 'Tecnologías' },
  },
  experience: {
    tag: 'Trayectoria',
    title: 'Experiencia y',
    titleHighlight: 'Educación',
    workLabel: 'Trabajo',
    educationLabel: 'Educación',
    softSkillsLabel: 'Habilidades Blandas',
    present: 'Presente',
    work: [
      {
        role: 'Ingeniero de Software',
        company: 'SkIoT',
        period: 'Ene 2026 — Presente',
        bullets: [
          'Construcción y mantenimiento de soluciones de software para infraestructura IoT.',
          'Desarrollo de funcionalidades full-stack en aplicaciones web.',
          'Colaboración en equipos de ingeniería multidisciplinarios.',
        ],
      },
      {
        role: 'Práctica de Soporte IT',
        company: 'Corporación T — Banco Industrial',
        period: 'Ago 2023 — Oct 2023',
        bullets: [
          'Mantenimiento preventivo de sistemas de cómputo para minimizar fallas.',
          'Configuración de nuevos equipos con software corporativo y optimización del rendimiento.',
        ],
      },
    ],
    education: [
      {
        degree: 'Ingeniería en CC y TI',
        institution: 'Universidad del Valle de Guatemala',
        period: '2024 — 2029',
      },
      {
        degree: 'Bachillerato Industrial · Computación',
        institution: 'Instituto Emiliani Somascos',
        period: '2018 — 2023',
      },
    ],
    softSkills: ['Proactividad', 'Liderazgo', 'Trabajo en equipo', 'Aprendizaje autónomo', 'Inglés B1'],
  },
  projects: {
    tag: 'Trabajo Destacado',
    title: 'Proyectos que he',
    titleHighlight: 'construido',
    subtitle: 'Aplicaciones reales en equipo y en solitario — desde hackathons hasta sistemas en producción.',
    awardLabel: 'Premio',
    roleLabel: 'Rol',
    techLabel: 'Tech',
    github: 'GitHub',
    items: [
      {
        title: 'WaterWay+',
        subtitle: 'Hackathon · Copernicus x SENACYT · 🏆 1er Lugar',
        description:
          'Sistema web de monitoreo en tiempo real para la cuenca del Río Motagua. Desarrollé la interfaz de administrador en React con datos en vivo de una API REST, permitiendo la visualización de métricas ambientales a escala.',
        highlight: 'Copernicus x SENACYT',
      },
      {
        title: 'CHEMIQ',
        subtitle: 'Sistema de Gestión · Asociación de Química UVG',
        description:
          'Plataforma de gestión full-stack para la asociación de química de la UVG. Co-diseñé la arquitectura, construí endpoints REST API con Node.js + PostgreSQL, y lideré la migración de base de datos a MongoDB.',
        highlight: 'Arquitectura + Backend',
      },
      {
        title: 'Spotter',
        subtitle: 'App Web · Recomendación de Ejercicios + Match de Gimnasio',
        description:
          'App basada en grafos que recomienda ejercicios y conecta compañeros de gimnasio mediante relaciones Neo4j. Diseñé y construí la API REST completa con Node.js + Express, y co-lideré la arquitectura frontend.',
        highlight: 'Base de Grafos · Neo4j',
      },
      {
        title: 'Kontrol',
        subtitle: 'Plataforma de Gestión · Vue 3 + Node.js + IA',
        description:
          'Plataforma full-stack de gestión de proyectos con coordinación de equipos, control de inventario y herramientas de marketing. Comunicación en tiempo real con Socket.IO, agente de IA integrado y autenticación con Google OAuth.',
        highlight: 'IA + Socket.IO',
      },
    ],
  },
  stack: {
    tag: 'Tecnología',
    title: 'Mi',
    titleHighlight: 'stack',
    subtitle:
      'Las herramientas que uso para construir productos full-stack — elegidas por confiabilidad, rendimiento y experiencia de desarrollo.',
    exploringTitle: 'Actualmente explorando',
    exploringDesc: 'Estudiando Ingeniería en UVG — expandiendo el stack constantemente.',
  },
  certifications: {
    tag: 'Credenciales',
    titleStart: 'Certifi',
    titleHighlight: 'caciones',
    subtitle: 'Cursos y credenciales que respaldan las habilidades.',
    viewCredential: 'Ver credencial',
    openUrl: 'Abrir URL ↗',
    bottomNote: 'Siempre aprendiendo — expandiendo conocimiento continuamente.',
  },
  metrics: {
    tag: 'En números',
    title: 'El',
    titleHighlight: 'impacto',
    bottomNote: 'Disponible para freelance, contratos y oportunidades de tiempo completo.',
    items: [
      { label: 'Proyectos', description: 'Aplicaciones reales entregadas' },
      { label: 'Años en Dev', description: 'Desarrollo full-stack' },
      { label: 'Tecnologías', description: 'Lenguajes, frameworks y DBs' },
      { label: 'Hackathon', description: 'Copernicus x SENACYT' },
    ],
  },
  contact: {
    tag: 'Contacto',
    title: '¡',
    titleHighlight: 'Conectemos',
    subtitle: '¿Tienes un proyecto en mente o quieres conversar? Escribe un comando o contáctame directamente.',
    emailLabel: 'javiertubac1290.e@gmail.com →',
    placeholder: 'Escribe un comando...',
    hint: 'Prueba: whoami · stack · github · contacto · limpiar',
    commands: {
      help: 'Comandos: whoami | stack | github | contacto | ubicacion | limpiar',
      whoami: 'Jonathan Tubac — Desarrollador Full Stack, Ciudad de Guatemala 🇬🇹',
      stack: 'React · Next.js · Node.js · TypeScript · PostgreSQL · Docker · REST APIs',
      github: '→ github.com/JonathanTubac  (repos públicos + demos en vivo)',
      contact: 'Email: javiertubac1290.e@gmail.com',
      location: 'Ciudad de Guatemala 🇬🇹 — Disponible local y remoto',
      unknown: (cmd: string) => `Comando no encontrado: ${cmd}. Escribe 'help' para ver los disponibles.`,
    },
    autoCommands: [
      {
        input: 'whoami',
        output: [
          'Jonathan Tubac — Desarrollador Full Stack',
          'Ubicación: Ciudad de Guatemala 🇬🇹',
          'Enfoque: React SPAs · REST APIs · Docker',
          'Estado: Abierto a oportunidades locales y remotas',
        ],
      },
      {
        input: 'cat stack.txt',
        output: [
          'Frontend  → React, Next.js, TypeScript, Tailwind CSS',
          'Backend   → Node.js, Express · REST APIs',
          'Base de datos → PostgreSQL, MongoDB, Neo4j',
          'Herramientas  → Docker, Git, AWS, Google Cloud',
        ],
      },
      {
        input: 'open github',
        output: [
          '→ github.com/JonathanTubac',
          '  ↳ Repos públicos con READMEs y demos en vivo',
          '  ↳ React SPAs · REST APIs · Proyectos con Docker',
        ],
      },
    ],
    terminalTitle: 'jonathan@portafolio — bash',
  },
  footer: {
    built: 'Construido con Next.js 15 · Diseñado para impactar',
    github: 'GitHub',
    email: 'Email',
  },
};

export const translations = { en, es } as const;
export type Translations = typeof en;

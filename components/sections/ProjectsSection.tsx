'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import BrowserWindow from '@/components/ui/BrowserWindow';
import { useLang } from '@/components/providers/LanguageProvider';

const projects = [
  {
    title: 'WaterWay+',
    subtitle: 'Hackathon · Copernicus x SENACYT · 🏆 1st Place',
    description:
      'Real-time web monitoring system for the Motagua River basin. Built the admin interface in React with live sensor data from a REST API, enabling visualisation of environmental metrics at scale.',
    tags: ['React', 'REST API', 'MongoDB', 'Node.js'],
    url: 'water-way.netlify.app',
    status: '1st Place',
    color: '#06B6D4',
    img: '/waterway.PNG',
    highlight: { label: 'Award', value: 'Copernicus x SENACYT' },
    backend: 'React · REST API · MongoDB',
    links: [
      { label: 'Frontend', url: 'https://github.com/kinalitos/waterway-frontend', isLive: false },
      { label: 'Backend',  url: 'https://github.com/kinalitos/waterway-backend',  isLive: false },
      { label: 'Live ↗',   url: 'https://water-way.netlify.app/',                 isLive: true  },
    ],
  },
  {
    title: 'CHEMIQ',
    subtitle: 'Management System · UVG Chemistry Association',
    description:
      'Full-stack management platform for the UVG chemistry association. Co-designed the architecture, built REST API endpoints with Node.js + PostgreSQL, and led the database migration to MongoDB for better scalability.',
    tags: ['React', 'Node.js', 'REST API', 'PostgreSQL', 'MongoDB'],
    url: 'chemiq · academic project',
    status: 'Academic',
    color: '#14B8A6',
    img: '/Chemiq.PNG',
    highlight: { label: 'Role', value: 'Architecture + Backend' },
    backend: 'Node.js · REST API · PostgreSQL → MongoDB',
    links: [
      { label: 'Frontend', url: 'https://github.com/asanabria-2021067/frontend-quimica',  isLive: false },
      { label: 'Backend',  url: 'https://github.com/asanabria-2021067/chemiq-backend',    isLive: false },
    ],
  },
  {
    title: 'Spotter',
    subtitle: 'Web App · Exercise Recommendation + Gym Matching',
    description:
      'Graph-powered app that recommends exercises and matches gym partners via Neo4j relationships. Designed and built the full REST API with Node.js + Express, co-led frontend architecture with React and Next.js.',
    tags: ['React', 'Next.js', 'Node.js', 'Express', 'Neo4j', 'REST API'],
    url: 'spotter · academic project',
    status: 'Academic',
    color: '#F59E0B',
    img: '/spotter.PNG',
    highlight: { label: 'Tech', value: 'Graph DB · Neo4j' },
    backend: 'Node.js · Express · REST API · Neo4j',
    links: [
      { label: 'Frontend', url: 'https://github.com/jsam1904/Spotter',                    isLive: false },
      { label: 'Backend',  url: 'https://github.com/JonathanTubac/Spotter-neo4j-backend', isLive: false },
    ],
  },
  {
    title: 'Kontrol',
    subtitle: 'Project Management Platform · Vue 3 + Node.js + AI',
    description:
      'Full-stack project management platform with team coordination, inventory tracking, and marketing tools. Features real-time communication via Socket.IO, AI agent integration, and Google OAuth authentication.',
    tags: ['Vue 3', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Docker', 'Socket.IO'],
    url: '34.121.51.151.nip.io',
    status: 'Open Source',
    color: '#6366F1',
    img: '/kontrol.PNG',
    highlight: { label: 'Tech', value: 'AI + Socket.IO' },
    backend: 'Vue 3 · Node.js · PostgreSQL · MongoDB · Docker',
    links: [
      { label: 'Repo',   url: 'https://github.com/PabloVS044/Kontrol',  isLive: false },
      { label: 'Live ↗', url: 'https://34.121.51.151.nip.io/',          isLive: true  },
    ],
  },
];

function ImagePreview({ src, alt, color }: { src: string; alt: string; color: string }) {
  return (
    <div className="h-64 overflow-hidden relative">
      <Image
        src={src}
        alt={alt}
        width={900}
        height={256}
        className="w-full h-full object-cover object-top"
        priority={false}
      />
      {/* subtle color tint overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

interface ProjectCardProps {
  project: Omit<(typeof projects)[0], 'highlight'> & { highlight: { label: string; value: string } };
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
        <div
          className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-sm"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${project.color}25 0%, transparent 70%)` }}
        />

        <BrowserWindow url={project.url}>
          <ImagePreview src={project.img} alt={project.title} color={project.color} />

          {/* Project info */}
          <div className="px-5 py-5 border-t border-white/[0.06]">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-bold text-white">{project.title}</h3>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full font-mono"
                    style={{ backgroundColor: project.color + '15', color: project.color }}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-xs text-white/40">{project.subtitle}</p>
              </div>
              <div className="shrink-0 text-right">
                <div className="text-xs font-bold text-white">{project.highlight.value}</div>
                <div className="text-[10px] text-white/25 capitalize">{project.highlight.label}</div>
              </div>
            </div>

            <p className="text-sm text-white/40 leading-relaxed mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.05] text-white/30 font-mono border border-white/[0.06]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links footer */}
          <div className="flex items-center justify-between px-5 py-3.5 border-t border-white/[0.05] bg-white/[0.01] gap-3">
            <span className="text-[10px] text-white/20 font-mono truncate">{project.backend}</span>
            <div className="flex gap-2 shrink-0">
              {project.links.map((link) => (
                link.isLive ? (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium rounded-lg border transition-all duration-200"
                    style={{ backgroundColor: project.color + '15', borderColor: project.color + '40', color: project.color }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium rounded-lg border border-white/[0.10] text-white/50 hover:text-white hover:border-white/25 hover:bg-white/[0.05] transition-all duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    {link.label}
                  </a>
                )
              ))}
            </div>
          </div>
        </BrowserWindow>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { t } = useLang();
  const p = t.projects;
  const projectData = projects.map((proj, i) => ({
    ...proj,
    title: p.items[i].title,
    subtitle: p.items[i].subtitle,
    description: p.items[i].description,
    highlight: { ...proj.highlight, value: p.items[i].highlight },
  }));

  return (
    <section id="projects" className="relative py-32 md:py-40 bg-[var(--bg-alt)] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-white/10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-white/25 mb-4">{p.tag}</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              {p.title}{' '}
              <span className="gradient-text">{p.titleHighlight}</span>
            </h2>
            <p className="text-white/35 max-w-sm text-sm leading-relaxed md:text-right">
              {p.subtitle}
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projectData.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

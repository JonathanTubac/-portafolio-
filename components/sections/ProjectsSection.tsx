'use client';

import { useRef, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import BrowserWindow from '@/components/ui/BrowserWindow';

const projects = [
  {
    title: 'WaterWay+',
    subtitle: 'Hackathon · Copernicus x SENACYT · 🏆 1st Place',
    description:
      'Real-time web monitoring system for the Motagua River basin. Built the admin interface in React with live sensor data from a REST API, enabling visualisation of environmental metrics at scale.',
    tags: ['React', 'REST API', 'MongoDB', 'Node.js'],
    url: 'waterway.app',
    status: '1st Place',
    color: '#06B6D4',
    preview: 'water',
    highlight: { label: 'Award', value: 'Copernicus x SENACYT' },
    githubUrl: 'https://github.com/JonathanTubac',
    liveUrl: null,
    backend: 'React · REST API · MongoDB',
  },
  {
    title: 'CHEMIQ',
    subtitle: 'Management System · UVG Chemistry Association',
    description:
      'Full-stack management platform for the UVG chemistry association. Co-designed the architecture, built REST API endpoints with Node.js + PostgreSQL, and led the database migration to MongoDB for better scalability.',
    tags: ['React', 'Node.js', 'REST API', 'PostgreSQL', 'MongoDB'],
    url: 'chemiq.app',
    status: 'Deployed',
    color: '#14B8A6',
    preview: 'management',
    highlight: { label: 'Role', value: 'Architecture + Backend' },
    githubUrl: 'https://github.com/JonathanTubac',
    liveUrl: null,
    backend: 'Node.js · REST API · PostgreSQL → MongoDB',
  },
  {
    title: 'Spotter',
    subtitle: 'Web App · Exercise Recommendation + Gym Matching',
    description:
      'Graph-powered app that recommends exercises and matches gym partners via Neo4j relationships. Designed and built the full REST API with Node.js + Express, co-led frontend architecture with React and Next.js.',
    tags: ['React', 'Next.js', 'Node.js', 'Express', 'Neo4j', 'REST API'],
    url: 'spotter.app',
    status: 'Deployed',
    color: '#F59E0B',
    preview: 'spotter',
    highlight: { label: 'Tech', value: 'Graph DB · Neo4j' },
    githubUrl: 'https://github.com/JonathanTubac',
    liveUrl: null,
    backend: 'Node.js · Express · REST API · Neo4j',
  },
];

function WaterPreview({ color }: { color: string }) {
  return (
    <div className="bg-[#060e08] p-4 h-64">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: color }} />
          <span className="text-[10px] font-mono" style={{ color }}>Live · Motagua River</span>
        </div>
        <span className="text-[10px] text-white/25 font-mono">Copernicus x SENACYT</span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {[['Water Level', '4.2m', '+0.3m'], ['Flow Rate', '12.4 m³/s', 'normal'], ['Turbidity', '18 NTU', 'clear']].map(([label, val, sub], i) => (
          <div key={label} className="bg-white/[0.03] rounded-lg p-2.5 border border-white/[0.06]">
            <div className="text-[9px] text-white/30 mb-1">{label}</div>
            <div className="text-xs font-bold text-white">{val}</div>
            <div className="text-[9px] mt-0.5" style={{ color: i === 0 ? '#F59E0B' : color }}>{sub}</div>
          </div>
        ))}
      </div>

      <div className="bg-white/[0.02] rounded-xl border border-white/[0.05] p-3 h-28 relative overflow-hidden">
        <div className="text-[10px] text-white/25 mb-2">Water level — 24h</div>
        <svg viewBox="0 0 300 55" className="w-full h-14" preserveAspectRatio="none">
          <defs>
            <linearGradient id="water-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,40 C30,38 60,30 90,32 C120,34 140,28 160,22 C180,16 210,24 240,18 C265,13 285,20 300,16" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M0,40 C30,38 60,30 90,32 C120,34 140,28 160,22 C180,16 210,24 240,18 C265,13 285,20 300,16 L300,55 L0,55 Z" fill="url(#water-grad)" />
        </svg>
      </div>
    </div>
  );
}

function ManagementPreview({ color }: { color: string }) {
  return (
    <div className="bg-[#060e08] p-4 h-64">
      <div className="flex gap-3 h-full">
        <div className="w-24 shrink-0 flex flex-col gap-1.5">
          {['Dashboard', 'Members', 'Inventory', 'Events', 'Reports'].map((item, i) => (
            <div key={item} className="px-2.5 py-1.5 rounded-lg text-[10px] font-medium"
              style={i === 2 ? { backgroundColor: color + '20', color } : { color: 'rgba(255,255,255,0.3)' }}>
              {item}
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center justify-between mb-1">
            <div className="text-[10px] text-white/40">Inventory — CHEMIQ</div>
            <div className="text-[9px] px-2 py-0.5 rounded-full" style={{ backgroundColor: color + '20', color }}>UVG</div>
          </div>
          {[['HCl 35%', 'Reagent', '12 u'], ['NaOH', 'Base', '8 u'], ['Ethanol', 'Solvent', '24 u'], ['H₂SO₄', 'Acid', '6 u']].map(([name, cat, qty], i) => (
            <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div>
                <div className="text-[10px] text-white font-mono">{name}</div>
                <div className="text-[9px] text-white/30 mt-0.5">{cat}</div>
              </div>
              <div className="text-[10px] font-bold" style={{ color }}>{qty}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SpotterPreview({ color }: { color: string }) {
  return (
    <div className="bg-[#060e08] p-4 h-64">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-mono text-white/40">Gym Partner Matches</span>
        <div className="flex items-center gap-1.5 text-[9px] px-2 py-0.5 rounded-full" style={{ backgroundColor: color + '20', color }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
          Neo4j Graph
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        {[['Alex M.', 'Push · Pull · Legs', 94], ['Sofia R.', 'HIIT · Strength', 88], ['Diego V.', 'Powerlifting', 76]].map(([name, routine, match], i) => (
          <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border shrink-0"
              style={{ borderColor: color + '40', backgroundColor: color + '15', color }}>
              {(name as string)[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-semibold text-white">{name}</div>
              <div className="text-[9px] text-white/30 truncate">{routine}</div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-xs font-bold" style={{ color }}>{match}%</div>
              <div className="text-[9px] text-white/25">match</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), { stiffness: 400, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), { stiffness: 400, damping: 30 });

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const resetMouse = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 1200 }}
        onMouseMove={handleMouse}
        onMouseLeave={resetMouse}
        className="group relative"
      >
        {/* Glow */}
        <div
          className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-sm"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${project.color}25 0%, transparent 70%)` }}
        />

        <BrowserWindow url={project.url}>
          {/* Preview */}
          {project.preview === 'water' && <WaterPreview color={project.color} />}
          {project.preview === 'management' && <ManagementPreview color={project.color} />}
          {project.preview === 'spotter' && <SpotterPreview color={project.color} />}

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

          {/* GitHub CTA */}
          <div className="flex items-center justify-between px-5 py-3.5 border-t border-white/[0.05] bg-white/[0.01]">
            <span className="text-[10px] text-white/20 font-mono truncate mr-4">{project.backend}</span>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium rounded-lg border border-white/[0.10] text-white/50 hover:text-white hover:border-white/25 hover:bg-white/[0.05] transition-all duration-200 shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </BrowserWindow>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 md:py-40 bg-[#040c08] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-white/10" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-white/25 mb-4">Featured Work</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Projects I&apos;ve{' '}
              <span className="gradient-text">built</span>
            </h2>
            <p className="text-white/35 max-w-sm text-sm leading-relaxed md:text-right">
              Real applications built in teams and solo — from hackathons to production systems.
            </p>
          </div>
        </motion.div>

        {/* Project cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

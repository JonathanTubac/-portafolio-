'use client';

import { useRef, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import BrowserWindow from '@/components/ui/BrowserWindow';

const projects = [
  {
    title: 'Nexus Analytics',
    subtitle: 'SaaS Dashboard Platform',
    description:
      'Real-time business intelligence platform with multi-tenant support, customizable dashboards, and automated reporting for SMBs.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe'],
    url: 'app.nexusanalytics.io',
    status: 'Production',
    color: '#3B82F6',
    preview: 'dashboard',
    metrics: { users: '2.4k', uptime: '99.9%', events: '1.2M/day' },
  },
  {
    title: 'FlowCommerce',
    subtitle: 'E-Commerce Engine',
    description:
      'Full-featured e-commerce platform with inventory management, multi-currency support, Stripe payments, and an admin dashboard.',
    tags: ['React', 'NestJS', 'MongoDB', 'Stripe', 'Docker'],
    url: 'store.flowcommerce.app',
    status: 'Production',
    color: '#8B5CF6',
    preview: 'ecommerce',
    metrics: { orders: '890/day', conversion: '3.4%', revenue: '$48k/mo' },
  },
  {
    title: 'DevHub',
    subtitle: 'Internal Developer Toolkit',
    description:
      'Centralized hub for managing microservices, monitoring deployments, viewing logs, and coordinating dev team workflows.',
    tags: ['Next.js', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS'],
    url: 'internal.devhub.tools',
    status: 'In Development',
    color: '#10B981',
    preview: 'devops',
    metrics: { services: '24', deploys: '12/day', alerts: '0 critical' },
  },
];

function DashboardPreview({ color }: { color: string }) {
  return (
    <div className="bg-[#0a0a0f] p-4 h-64">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <div className="w-16 h-1.5 rounded-full bg-white/10" />
          <div className="w-10 h-1.5 rounded-full bg-white/5" />
        </div>
        <div className="flex gap-1.5">
          <div className="w-6 h-6 rounded-md bg-white/5 border border-white/5" />
          <div className="w-6 h-6 rounded-md" style={{ backgroundColor: color + '30', border: `1px solid ${color}30` }} />
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {['Revenue', 'Users', 'Conversion', 'MRR'].map((label, i) => (
          <div key={label} className="bg-white/[0.03] rounded-lg p-2.5 border border-white/[0.06]">
            <div className="text-[10px] text-white/30 mb-1">{label}</div>
            <div className="text-sm font-bold text-white">
              {['$48k', '2.4k', '3.4%', '$18k'][i]}
            </div>
            <div className="text-[10px] mt-0.5" style={{ color: color }}>
              +{[12, 8, 0.4, 15][i]}%
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white/[0.02] rounded-xl border border-white/[0.05] p-3 h-28 relative overflow-hidden">
        <div className="text-[10px] text-white/25 mb-2">Revenue 30d</div>
        <svg viewBox="0 0 300 60" className="w-full h-16" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`grad-${color}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 C20,48 40,35 60,30 C80,25 100,38 120,28 C140,18 160,22 180,15 C200,8 220,20 240,12 C260,4 280,10 300,6"
            fill="none"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M0,50 C20,48 40,35 60,30 C80,25 100,38 120,28 C140,18 160,22 180,15 C200,8 220,20 240,12 C260,4 280,10 300,6 L300,60 L0,60 Z"
            fill={`url(#grad-${color})`}
          />
        </svg>
      </div>
    </div>
  );
}

function EcommercePreview({ color }: { color: string }) {
  return (
    <div className="bg-[#0a0a0f] p-4 h-64">
      <div className="flex gap-3 h-full">
        {/* Sidebar */}
        <div className="w-28 shrink-0 flex flex-col gap-1.5">
          {['Dashboard', 'Products', 'Orders', 'Customers', 'Analytics'].map((item, i) => (
            <div
              key={item}
              className="px-2.5 py-1.5 rounded-lg text-[10px] font-medium"
              style={
                i === 2
                  ? { backgroundColor: color + '20', color: color }
                  : { color: 'rgba(255,255,255,0.3)' }
              }
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="text-xs text-white/40">Recent Orders</div>
            <div className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: color + '20', color: color }}>
              890 today
            </div>
          </div>
          {['#ORD-4821', '#ORD-4820', '#ORD-4819', '#ORD-4818'].map((order, i) => (
            <div key={order} className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div>
                <div className="text-[10px] text-white font-mono">{order}</div>
                <div className="text-[9px] text-white/30 mt-0.5">{['2 items', '1 item', '5 items', '3 items'][i]}</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-bold text-white">${[142, 89, 534, 210][i]}</div>
                <div className="text-[9px]" style={{ color: ['#10B981', '#10B981', '#F59E0B', '#10B981'][i] }}>
                  {['Shipped', 'Processing', 'Pending', 'Shipped'][i]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DevOpsPreview({ color }: { color: string }) {
  return (
    <div className="bg-[#0a0a0f] p-4 h-64 font-mono text-[10px]">
      <div className="flex gap-2 mb-3">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[9px]" style={{ backgroundColor: color + '20', color }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: color }} />
          24 Services
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 text-white/40 text-[9px]">
          12 Deploys today
        </div>
      </div>

      {['api-gateway', 'auth-service', 'billing-worker', 'notification-svc'].map((svc, i) => (
        <div key={svc} className="flex items-center justify-between py-1.5 border-b border-white/[0.04] last:border-0">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: [color, '#10B981', '#10B981', '#F59E0B'][i] }} />
            <span className="text-white/60">{svc}</span>
          </div>
          <div className="flex items-center gap-3 text-white/30">
            <span>{['v2.4.1', 'v1.8.0', 'v3.1.2', 'v1.2.0'][i]}</span>
            <span>{['healthy', 'healthy', 'healthy', 'deploying'][i]}</span>
          </div>
        </div>
      ))}

      <div className="mt-3 p-2 rounded-lg bg-black/40 border border-white/[0.04]">
        <span className="text-white/25">$ </span>
        <span style={{ color }}>kubectl</span>
        <span className="text-white/50"> get pods --all-namespaces</span>
        <span className="inline-block w-1.5 h-3 ml-1 bg-white/40 animate-blink" />
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[number];
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
          {project.preview === 'dashboard' && <DashboardPreview color={project.color} />}
          {project.preview === 'ecommerce' && <EcommercePreview color={project.color} />}
          {project.preview === 'devops' && <DevOpsPreview color={project.color} />}

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
              <div className="flex gap-4 shrink-0">
                {Object.entries(project.metrics).map(([k, v]) => (
                  <div key={k} className="text-center">
                    <div className="text-xs font-bold text-white">{v}</div>
                    <div className="text-[10px] text-white/25 capitalize">{k}</div>
                  </div>
                ))}
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
        </BrowserWindow>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 md:py-40 bg-[#060610] overflow-hidden">
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
              Products I&apos;ve{' '}
              <span className="gradient-text">shipped</span>
            </h2>
            <p className="text-white/35 max-w-sm text-sm leading-relaxed md:text-right">
              Each project is a real application — not a prototype. Interactive previews below.
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

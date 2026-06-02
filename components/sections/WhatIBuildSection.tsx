'use client';

import { motion } from 'framer-motion';

const categories = [
  {
    title: 'SaaS Platforms',
    description: 'Multi-tenant applications with subscriptions, billing, team management, and role-based access.',
    color: '#3B82F6',
    index: '01',
  },
  {
    title: 'E-Commerce Systems',
    description: 'End-to-end stores with inventory, cart, Stripe payments, order management, and analytics.',
    color: '#8B5CF6',
    index: '02',
  },
  {
    title: 'Dashboards & Analytics',
    description: 'Data-rich interfaces with real-time charts, KPIs, filters, and exportable reports.',
    color: '#10B981',
    index: '03',
  },
  {
    title: 'Admin Panels',
    description: 'Internal back-office tools for managing users, content, permissions, and operations at scale.',
    color: '#EC4899',
    index: '04',
  },
  {
    title: 'Internal Tools',
    description: 'Custom automation software that replaces slow manual processes and improves team efficiency.',
    color: '#F59E0B',
    index: '05',
  },
  {
    title: 'API Services',
    description: 'Documented, versioned REST and GraphQL APIs designed for reliability, scale, and developer experience.',
    color: '#06B6D4',
    index: '06',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function WhatIBuildSection() {
  return (
    <section className="relative py-32 md:py-40 bg-bg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-white/25 mb-4">Expertise</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-xl">
              What I <span className="gradient-text">build</span>
            </h2>
            <p className="text-white/40 text-lg max-w-sm md:text-right leading-relaxed">
              Full-stack products designed to solve real business problems at scale.
            </p>
          </div>
        </motion.div>

        {/* Categories grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.index}
              variants={itemVariants}
              className="group relative p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.14] transition-all duration-500 cursor-default overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 0% 0%, ${cat.color}10 0%, transparent 70%)`,
                }}
              />

              {/* Index */}
              <span className="text-xs font-mono text-white/20 mb-5 block">{cat.index}</span>

              {/* Color accent line */}
              <div
                className="w-8 h-0.5 rounded-full mb-5 transition-all duration-500 group-hover:w-14"
                style={{ backgroundColor: cat.color }}
              />

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                {cat.title}
              </h3>

              {/* Description */}
              <p className="text-white/40 text-sm leading-relaxed">{cat.description}</p>

              {/* Arrow */}
              <motion.div
                className="mt-6 flex items-center gap-1.5 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: cat.color }}
              >
                <span>Explore</span>
                <span>→</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

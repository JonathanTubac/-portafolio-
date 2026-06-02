'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    index: '01',
    title: 'Research',
    description: 'Understand the problem, the users, and the business context before writing a single line of code.',
    color: '#3B82F6',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
      </svg>
    ),
  },
  {
    index: '02',
    title: 'Design',
    description: 'Wireframes, prototypes, and design systems built with the user journey at the center.',
    color: '#8B5CF6',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
      </svg>
    ),
  },
  {
    index: '03',
    title: 'Development',
    description: 'Feature branches, code reviews, and continuous integration from the very first commit.',
    color: '#10B981',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    index: '04',
    title: 'Testing',
    description: 'Unit, integration, and end-to-end tests. No feature ships without coverage.',
    color: '#F59E0B',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    index: '05',
    title: 'Deployment',
    description: 'Automated pipelines push to staging first, then production — with rollback ready.',
    color: '#EC4899',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>
      </svg>
    ),
  },
  {
    index: '06',
    title: 'Monitoring',
    description: 'Real-time dashboards, error tracking, and alerting so issues surface before users notice.',
    color: '#06B6D4',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-32 md:py-40 bg-[#060610] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-white/25 mb-4">How I Work</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-xl">
              Structured process,{' '}
              <span className="gradient-text">reliable results</span>
            </h2>
            <p className="text-white/35 text-sm max-w-sm md:text-right leading-relaxed">
              Six phases that take a project from messy requirements to clean production — every time.
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.07] to-transparent hidden md:block" />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.index}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex items-start gap-8 py-8 md:py-10"
              >
                {/* Step icon + connector dot */}
                <div className="relative shrink-0 z-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover:scale-110"
                    style={{
                      borderColor: step.color + '30',
                      backgroundColor: step.color + '0E',
                      color: step.color,
                    }}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-white/20">{step.index}</span>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <div
                      className="ml-auto w-6 h-px opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-12"
                      style={{ backgroundColor: step.color }}
                    />
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed max-w-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

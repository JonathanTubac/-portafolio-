'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

const stages = [
  {
    step: '01',
    title: 'Idea',
    subtitle: 'Where everything begins',
    description:
      'Every product starts with a problem worth solving. Deep research, user validation, and defining what to build — and more importantly, what not to build.',
    tags: ['Market Research', 'User Stories', 'Scoping', 'Wireframes'],
    color: '#3B82F6',
  },
  {
    step: '02',
    title: 'Design',
    subtitle: 'Form follows function',
    description:
      'Translating ideas into intuitive interfaces. From low-fi sketches to pixel-perfect prototypes, every interaction is designed with purpose.',
    tags: ['UI/UX Design', 'Prototyping', 'Design System', 'Figma'],
    color: '#8B5CF6',
  },
  {
    step: '03',
    title: 'Development',
    subtitle: 'Code that scales',
    description:
      'Clean, maintainable code built with modern patterns. React, Next.js, TypeScript on the frontend. Node.js, NestJS on the backend. Performance is a feature.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'REST / GraphQL'],
    color: '#10B981',
  },
  {
    step: '04',
    title: 'Database',
    subtitle: 'Data architecture that lasts',
    description:
      'Thoughtful schema design for relational and document databases. Optimized queries, proper indexing, migrations that never break production.',
    tags: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
    color: '#A78BFA',
  },
  {
    step: '05',
    title: 'API',
    subtitle: 'The backbone of the product',
    description:
      'Robust, versioned APIs with proper authentication, rate limiting, and error handling. Documented with OpenAPI. Built to be consumed reliably at scale.',
    tags: ['REST', 'GraphQL', 'JWT / OAuth', 'OpenAPI'],
    color: '#EC4899',
  },
  {
    step: '06',
    title: 'Deployment',
    subtitle: 'Ship with confidence',
    description:
      'Automated CI/CD pipelines. Zero-downtime deployments. Containerized with Docker, deployed to AWS or Vercel with full health monitoring.',
    tags: ['Docker', 'GitHub Actions', 'AWS / Vercel', 'CI/CD'],
    color: '#06B6D4',
  },
  {
    step: '07',
    title: 'Growth',
    subtitle: 'Build, measure, learn',
    description:
      'Analytics, error tracking, and performance monitoring from day one. Data-driven iterations that improve the product continuously after launch.',
    tags: ['Analytics', 'Error Tracking', 'A/B Testing', 'Monitoring'],
    color: '#FBBF24',
  },
];

export default function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      const idx = Math.min(stages.length - 1, Math.floor(v * stages.length));
      if (idx >= 0) setActiveStage(idx);
    });
  }, [scrollYProgress]);

  const stage = stages[activeStage];

  return (
    <section ref={containerRef} className="relative" style={{ height: `${stages.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#060610]" />
        <div className="absolute inset-0 bg-grid opacity-50" />

        {/* Ambient color blob that changes with stage */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full blur-[150px] pointer-events-none"
          animate={{ backgroundColor: stage.color + '08' }}
          transition={{ duration: 0.8 }}
        />

        {/* Header */}
        <div className="relative z-10 pt-24 text-center px-4">
          <p className="text-xs uppercase tracking-[0.25em] text-white/25 mb-3">The Process</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            From idea to <span className="gradient-text">production</span>
          </h2>
        </div>

        {/* Stage content */}
        <div className="relative z-10 h-[calc(100vh-200px)] flex items-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-3xl mx-auto px-6"
            >
              <div className="flex items-start gap-8 md:gap-14">
                {/* Step number */}
                <div className="shrink-0 pt-1">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center border text-base font-bold font-mono transition-colors duration-300"
                    style={{
                      borderColor: stage.color + '35',
                      backgroundColor: stage.color + '0D',
                      color: stage.color,
                    }}
                  >
                    {stage.step}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p
                    className="text-xs uppercase tracking-[0.2em] mb-2 transition-colors duration-300"
                    style={{ color: stage.color + 'CC' }}
                  >
                    {stage.subtitle}
                  </p>
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5">
                    {stage.title}
                  </h3>
                  <p className="text-white/45 text-lg leading-relaxed mb-7 max-w-xl">
                    {stage.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stage.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full border font-mono"
                        style={{
                          borderColor: stage.color + '28',
                          backgroundColor: stage.color + '08',
                          color: stage.color + 'AA',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {stages.map((s, i) => (
            <div
              key={s.step}
              className="rounded-full transition-all duration-400"
              style={{
                width: i === activeStage ? '24px' : '6px',
                height: '6px',
                backgroundColor: i <= activeStage ? s.color : 'rgba(255,255,255,0.12)',
                opacity: i === activeStage ? 1 : i < activeStage ? 0.5 : 0.25,
              }}
            />
          ))}
        </div>

        {/* Stage counter */}
        <div className="absolute bottom-8 right-6 z-20 font-mono text-xs text-white/20">
          {String(activeStage + 1).padStart(2, '0')} / {String(stages.length).padStart(2, '0')}
        </div>
      </div>
    </section>
  );
}

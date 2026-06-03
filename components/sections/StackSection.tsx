'use client';

import { motion } from 'framer-motion';

const stack = {
  Frontend: [
    { name: 'React', color: '#61DAFB', icon: '⚛' },
    { name: 'Next.js', color: '#ffffff', icon: '▲' },
    { name: 'Tailwind CSS', color: '#06B6D4', icon: '~' },
    { name: 'HTML5 / CSS3', color: '#E44D26', icon: '</>' },
  ],
  Backend: [
    { name: 'Node.js', color: '#339933', icon: '⬡' },
    { name: 'Express', color: '#ffffff', icon: 'Ex' },
    { name: 'JWT', color: '#FB015B', icon: '🔑' },
    { name: 'OAuth2', color: '#4285F4', icon: '◎' },
  ],
  Database: [
    { name: 'PostgreSQL', color: '#336791', icon: '🐘' },
    { name: 'MongoDB', color: '#47A248', icon: '🍃' },
    { name: 'Neo4j', color: '#008CC1', icon: '◉' },
  ],
  Languages: [
    { name: 'JavaScript', color: '#F7DF1E', icon: 'JS' },
    { name: 'Python', color: '#3776AB', icon: '🐍' },
    { name: 'SQL', color: '#CC2927', icon: '⊞' },
    { name: 'C# / Java', color: '#9B4F96', icon: '{}' },
  ],
};

const categoryColors: Record<string, string> = {
  Frontend: '#3B82F6',
  Backend: '#10B981',
  Database: '#8B5CF6',
  Languages: '#F59E0B',
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function StackSection() {
  return (
    <section id="stack" className="relative py-32 md:py-40 bg-bg overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28 text-center"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-white/25 mb-4">Technology</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
            My <span className="gradient-text">stack</span>
          </h2>
          <p className="text-white/35 text-lg max-w-md mx-auto leading-relaxed">
            The tools I use to build full-stack products — chosen for reliability, performance, and developer experience.
          </p>
        </motion.div>

        {/* Stack grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(stack).map(([category, techs]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3"
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: categoryColors[category] }}
                />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  {category}
                </span>
              </div>

              {/* Tech items */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-2"
              >
                {techs.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    className="group flex items-center gap-3 p-3.5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-300 cursor-default"
                  >
                    {/* Icon */}
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-sm border shrink-0 font-mono font-bold transition-all duration-300 group-hover:scale-110"
                      style={{
                        borderColor: tech.color + '30',
                        backgroundColor: tech.color + '10',
                        color: tech.color,
                      }}
                    >
                      {tech.icon}
                    </div>

                    {/* Name */}
                    <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>

                    {/* Dot indicator */}
                    <div
                      className="ml-auto w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: tech.color }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="text-white font-semibold mb-1">Always learning</p>
            <p className="text-white/35 text-sm">
              Currently studying CS at UVG — continuously expanding the stack.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            {['TypeScript', 'Docker', 'Git'].map((t) => (
              <span key={t} className="px-3 py-1 text-xs rounded-full border border-white/10 text-white/40 font-mono">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

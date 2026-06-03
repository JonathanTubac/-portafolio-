'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type Tech = {
  name: string;
  color: string;
  img?: string;
  icon?: string;
};

const stack: Record<string, Tech[]> = {
  Frontend: [
    { name: 'React',       color: '#61DAFB', img: '/react.png' },
    { name: 'Next.js',     color: '#ffffff', img: '/next.png' },
    { name: 'Vue',         color: '#42B883', img: '/vue.png' },
    { name: 'Tailwind CSS',color: '#06B6D4', img: '/tailwind.png' },
    { name: 'HTML5 / CSS3',color: '#E44D26', icon: '</>' },
  ],
  Backend: [
    { name: 'Node.js', color: '#339933', img: '/node.png' },
    { name: 'Express', color: '#ffffff',  img: '/express-js.png' },
    { name: 'JWT',     color: '#FB015B', icon: '🔑' },
    { name: 'OAuth2',  color: '#4285F4', icon: '◎' },
  ],
  Database: [
    { name: 'PostgreSQL', color: '#336791', img: '/Postgresql_elephant.svg' },
    { name: 'MongoDB',    color: '#47A248', img: '/mongo.webp' },
    { name: 'Neo4j',      color: '#008CC1', img: '/neo.avif' },
  ],
  Languages: [
    { name: 'JavaScript', color: '#F7DF1E', img: '/js.png' },
    { name: 'TypeScript', color: '#3178C6', img: '/ts.png' },
    { name: 'Python',     color: '#3776AB', img: '/python.png' },
    { name: 'Go',         color: '#00ADD8', img: '/go.png' },
    { name: 'SQL',        color: '#CC2927', icon: '⊞' },
    { name: 'C# / Java',  color: '#9B4F96', icon: '{}' },
  ],
  Tools: [
    { name: 'Docker',       color: '#2496ED', img: '/docker.png' },
    { name: 'Git',          color: '#F05032', img: '/git.png' },
    { name: 'AWS',          color: '#FF9900', img: '/aws.png' },
    { name: 'Google Cloud', color: '#4285F4', img: '/google-cloud.png' },
    { name: 'Linux',        color: '#FCC624', img: '/linux.png' },
    { name: 'Figma',        color: '#F24E1E', img: '/figma.svg' },
  ],
};

const categoryColors: Record<string, string> = {
  Frontend:  '#3B82F6',
  Backend:   '#10B981',
  Database:  '#8B5CF6',
  Languages: '#F59E0B',
  Tools:     '#EC4899',
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden:   { opacity: 0, scale: 0.85, y: 12 },
  visible:  { opacity: 1, scale: 1,    y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function TechIcon({ tech }: { tech: Tech }) {
  return (
    <div
      className="w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 transition-all duration-300 group-hover:scale-110 overflow-hidden"
      style={{ borderColor: tech.color + '30', backgroundColor: tech.color + '10' }}
    >
      {tech.img ? (
        <Image
          src={tech.img}
          alt={tech.name}
          width={20}
          height={20}
          className="w-5 h-5 object-contain"
        />
      ) : (
        <span className="text-sm font-mono font-bold" style={{ color: tech.color }}>
          {tech.icon}
        </span>
      )}
    </div>
  );
}

export default function StackSection() {
  return (
    <section id="stack" className="relative py-32 md:py-40 bg-bg overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: categoryColors[category] }} />
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
                    <TechIcon tech={tech} />

                    <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>

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
            <p className="text-white font-semibold mb-1">Currently exploring</p>
            <p className="text-white/35 text-sm">
              Diving deeper into cloud infrastructure and backend architecture at UVG.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            {['Kubernetes', 'GraphQL', 'CI/CD'].map((t) => (
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

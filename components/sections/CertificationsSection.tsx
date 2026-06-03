'use client';

import { motion } from 'framer-motion';

const certs = [
  {
    name: 'Your Certification Name',
    issuer: 'Platform / Issuer',
    year: '2024',
    color: '#3B82F6',
    icon: '🎓',
  },
  {
    name: 'Your Certification Name',
    issuer: 'Platform / Issuer',
    year: '2024',
    color: '#8B5CF6',
    icon: '📜',
  },
  {
    name: 'Your Certification Name',
    issuer: 'Platform / Issuer',
    year: '2023',
    color: '#10B981',
    icon: '✅',
  },
  {
    name: 'Your Certification Name',
    issuer: 'Platform / Issuer',
    year: '2023',
    color: '#F59E0B',
    icon: '🏆',
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-32 md:py-40 bg-bg overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-purple-500/5 blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28 text-center"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-white/25 mb-4">Credentials</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
            Certifi<span className="gradient-text">cations</span>
          </h2>
          <p className="text-white/35 text-lg max-w-md mx-auto leading-relaxed">
            Courses and credentials that back up the skills.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.14] transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${cert.color}12 0%, transparent 70%)` }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 border transition-all duration-300 group-hover:scale-110"
                style={{ borderColor: cert.color + '30', backgroundColor: cert.color + '10' }}
              >
                {cert.icon}
              </div>

              {/* Year badge */}
              <div
                className="absolute top-5 right-5 text-[10px] font-mono px-2 py-0.5 rounded-full"
                style={{ backgroundColor: cert.color + '15', color: cert.color }}
              >
                {cert.year}
              </div>

              {/* Text */}
              <h3 className="text-sm font-semibold text-white/80 mb-1.5 leading-snug group-hover:text-white transition-colors">
                {cert.name}
              </h3>
              <p className="text-xs text-white/30">{cert.issuer}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}50, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-white/20 text-xs font-mono mt-12"
        >
          Always learning — continuously expanding knowledge.
        </motion.p>
      </div>
    </section>
  );
}

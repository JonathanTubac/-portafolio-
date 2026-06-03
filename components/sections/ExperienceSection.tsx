'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/components/providers/LanguageProvider';

const workColors = ['#22C55E', '#10B981'];
const eduColors  = ['#14B8A6', '#F59E0B'];

export default function ExperienceSection() {
  const { t } = useLang();
  const e = t.experience;

  return (
    <section id="experience" className="relative py-32 md:py-40 bg-[var(--bg-alt)] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-white/10" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-green-500/5 blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-white/25 mb-4">{e.tag}</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            {e.title} <span className="gradient-text">{e.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Work */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                </svg>
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">{e.workLabel}</span>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/[0.07]" />
              <div className="flex flex-col gap-10">
                {e.work.map((item, i) => (
                  <motion.div
                    key={item.company}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex gap-6"
                  >
                    <div className="relative shrink-0 mt-1.5">
                      <div className="w-[23px] h-[23px] rounded-full border-2 flex items-center justify-center"
                        style={{ borderColor: workColors[i] + '60', backgroundColor: workColors[i] + '15' }}>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: workColors[i] }} />
                      </div>
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                        <h3 className="text-base font-bold text-white">{item.role}</h3>
                        <span className="text-xs font-mono text-white/30">{item.period}</span>
                      </div>
                      <p className="text-sm font-medium mb-3" style={{ color: workColors[i] }}>{item.company}</p>
                      <ul className="flex flex-col gap-1.5">
                        {item.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-white/40 leading-relaxed">
                            <span className="mt-[7px] w-1 h-1 rounded-full bg-white/20 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">{e.educationLabel}</span>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/[0.07]" />
              <div className="flex flex-col gap-10">
                {e.education.map((item, i) => (
                  <motion.div
                    key={item.institution}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex gap-6"
                  >
                    <div className="relative shrink-0 mt-1.5">
                      <div className="w-[23px] h-[23px] rounded-full border-2 flex items-center justify-center"
                        style={{ borderColor: eduColors[i] + '60', backgroundColor: eduColors[i] + '15' }}>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: eduColors[i] }} />
                      </div>
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                        <h3 className="text-base font-bold text-white">{item.degree}</h3>
                        <span className="text-xs font-mono text-white/30">{item.period}</span>
                      </div>
                      <p className="text-sm font-medium" style={{ color: eduColors[i] }}>{item.institution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-14 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-white/25 mb-4">{e.softSkillsLabel}</p>
              <div className="flex flex-wrap gap-2">
                {e.softSkills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-xs rounded-lg border border-white/[0.08] bg-white/[0.03] text-white/50 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

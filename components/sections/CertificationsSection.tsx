'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/components/providers/LanguageProvider';

const certs = [
  {
    name: 'JavaScript: From First Steps to Professional',
    issuer: 'Frontend Masters',
    year: 'Apr 2026',
    color: '#E8292C',
    issuerLogo: '/frontendmasters-logo.webp',
    certImg: '/frontedmasters-js.PNG',
    credentialUrl: 'https://www.credential.net/39a02473f7-FFUQWovrnh',
  },
  {
    name: 'The Complete Full-Stack Development Bootcamp',
    issuer: 'Udemy',
    year: '2026',
    color: '#A435F0',
    issuerLogo: '/udemy-logo.png',
    certImg: '/udemy-fullstack.PNG',
    credentialUrl: null,
  },
];

function CertModal({ cert, onClose, openUrlLabel }: { cert: (typeof certs)[0]; onClose: () => void; openUrlLabel: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 16 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-3xl w-full rounded-2xl overflow-hidden border border-white/[0.10] bg-[var(--bg-card)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
              <Image src={cert.issuerLogo} alt={cert.issuer} width={24} height={24} className="w-6 h-6 object-contain" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{cert.name}</p>
              <p className="text-xs text-white/35 mt-0.5">{cert.issuer} · {cert.year}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium rounded-lg border border-white/[0.10] text-white/50 hover:text-white hover:border-white/25 hover:bg-white/[0.05] transition-all duration-200"
              >
                {openUrlLabel}
              </a>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/[0.10] text-white/40 hover:text-white hover:border-white/25 hover:bg-white/[0.06] transition-all duration-200"
              aria-label="Close"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M1 1l10 10M11 1L1 11" />
              </svg>
            </button>
          </div>
        </div>

        {/* Certificate image */}
        <div className="relative w-full bg-white/[0.02]">
          <Image
            src={cert.certImg}
            alt={cert.name}
            width={900}
            height={640}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CertificationsSection() {
  const [activeCert, setActiveCert] = useState<(typeof certs)[0] | null>(null);
  const { t } = useLang();
  const c = t.certifications;

  return (
    <>
      <section id="certifications" className="relative py-32 md:py-40 bg-[var(--bg)] overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-teal-500/5 blur-[160px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20 md:mb-28 text-center"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-white/25 mb-4">{c.tag}</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
              {c.titleStart}<span className="gradient-text">{c.titleHighlight}</span>
            </h2>
            <p className="text-white/35 text-lg max-w-md mx-auto leading-relaxed">{c.subtitle}</p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.14] transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${cert.color}12 0%, transparent 70%)` }}
                />

                {/* Issuer logo */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border transition-all duration-300 group-hover:scale-110 overflow-hidden"
                  style={{ borderColor: cert.color + '30', backgroundColor: cert.color + '10' }}
                >
                  <Image
                    src={cert.issuerLogo}
                    alt={cert.issuer}
                    width={36}
                    height={36}
                    className="w-8 h-8 object-contain"
                  />
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
                <p className="text-xs text-white/30 mb-5">{cert.issuer}</p>

                {/* View credential button */}
                <button
                  onClick={() => setActiveCert(cert)}
                  className="mt-auto flex items-center gap-2 px-4 py-2 rounded-lg border text-xs font-medium transition-all duration-200 w-fit"
                  style={{
                    borderColor: cert.color + '30',
                    color: cert.color + 'bb',
                    backgroundColor: cert.color + '08',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = cert.color + '18';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = cert.color + '60';
                    (e.currentTarget as HTMLButtonElement).style.color = cert.color;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = cert.color + '08';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = cert.color + '30';
                    (e.currentTarget as HTMLButtonElement).style.color = cert.color + 'bb';
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                  {c.viewCredential}
                </button>

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
            {c.bottomNote}
          </motion.p>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeCert && (
          <CertModal cert={activeCert} onClose={() => setActiveCert(null)} openUrlLabel={c.openUrl} />
        )}
      </AnimatePresence>
    </>
  );
}

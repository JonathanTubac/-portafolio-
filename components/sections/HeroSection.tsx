'use client';

import { motion } from 'framer-motion';
import NetworkCanvas from '@/components/canvas/NetworkCanvas';
import MagneticButton from '@/components/ui/MagneticButton';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-bg">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Animated network canvas */}
      <NetworkCanvas />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, #030806 70%)',
        }}
      />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-green-500/8 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-teal-500/8 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-sm text-white/50 mb-10 backdrop-blur-sm"
        >
          <span className="relative flex w-2 h-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Guatemala 🇬🇹 · Open to opportunities
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold tracking-tight leading-[1.06]"
          >
            Building products,
            <br />
            <span className="gradient-text">not just websites.</span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Full Stack Developer building React SPAs, REST APIs, and complete
          web applications — from architecture and Docker setup to production deployment.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <MagneticButton
            href="#projects"
            className="px-7 py-3.5 bg-white text-black text-sm font-semibold rounded-xl hover:bg-white/90 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            View Projects →
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="px-7 py-3.5 bg-white/[0.06] text-white text-sm font-medium rounded-xl border border-white/10 hover:bg-white/[0.1] hover:border-white/20 transition-all backdrop-blur-sm"
          >
            Get in Touch
          </MagneticButton>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-20 flex justify-center gap-10 sm:gap-16"
        >
          {[
            { value: '3+', label: 'Projects' },
            { value: '2+', label: 'Years' },
            { value: '13+', label: 'Technologies' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/30 mt-0.5 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-10 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}

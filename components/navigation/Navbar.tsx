'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import { cn } from '@/lib/utils';

const links = [
  { label: 'Work', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'py-3 bg-[#050509]/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'py-5'
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
              <span className="text-sm font-bold tracking-tight">JT</span>
            </div>
            <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors hidden sm:block">
              Jonathan Tubac
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-white/50 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:jonathan.tubac@skiot.net"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              jonathan.tubac@skiot.net
            </a>
            <MagneticButton
              href="#contact"
              className="px-4 py-2 text-sm bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              Let&apos;s Talk
            </MagneticButton>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-white origin-center"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-px bg-white"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-white origin-center"
              transition={{ duration: 0.3 }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#050509]/95 backdrop-blur-xl md:hidden flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl font-bold text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="mailto:jonathan.tubac@skiot.net"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-8 text-sm text-white/40"
              >
                jonathan.tubac@skiot.net
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

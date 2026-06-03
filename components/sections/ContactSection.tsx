'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';

const COMMANDS: { input: string; output: string[] }[] = [
  {
    input: 'whoami',
    output: [
      'Jonathan Tubac — Full Stack Developer',
      'Location: Guatemala City, Guatemala 🇬🇹',
      'Focus: React SPAs · REST APIs · Docker',
      'Status: Open to local & remote opportunities',
    ],
  },
  {
    input: 'cat stack.txt',
    output: [
      'Frontend  → React, Next.js, TypeScript, Tailwind CSS',
      'Backend   → Node.js, NestJS, Express · REST APIs',
      'Database  → PostgreSQL, MongoDB, Redis',
      'DevOps    → Docker, GitHub Actions, Vercel, AWS',
      'Testing   → Vitest, Jest, Supertest',
    ],
  },
  {
    input: 'open github',
    output: [
      '→ github.com/JonathanTubac',
      '  ↳ Public repos with READMEs and live demos',
      '  ↳ React SPAs · REST APIs · Dockerized projects',
      '  ↳ Commit history shows consistent activity',
    ],
  },
];

interface Line {
  type: 'input' | 'output' | 'blank';
  text: string;
  done?: boolean;
}

function useTerminal() {
  const [lines, setLines] = useState<Line[]>([
    { type: 'output', text: '  ╔══════════════════════════════════╗', done: true },
    { type: 'output', text: '  ║     Jonathan Tubac — Portfolio   ║', done: true },
    { type: 'output', text: '  ╚══════════════════════════════════╝', done: true },
    { type: 'blank', text: '', done: true },
  ]);
  const [phase, setPhase] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (phase >= COMMANDS.length) return;

    const cmd = COMMANDS[phase];

    if (!typing) {
      // Start typing the input
      const delay = setTimeout(() => {
        setLines((prev) => [...prev, { type: 'input', text: '', done: false }]);
        setTyping(true);
        setCharIdx(0);
      }, 600);
      return () => clearTimeout(delay);
    }

    if (charIdx <= cmd.input.length) {
      const t = setTimeout(() => {
        setLines((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            text: cmd.input.slice(0, charIdx),
          };
          return updated;
        });
        setCharIdx((c) => c + 1);
      }, 55 + Math.random() * 40);
      return () => clearTimeout(t);
    }

    // Done typing input — show output
    const t = setTimeout(() => {
      setLines((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].done = true;
        return [
          ...updated,
          ...cmd.output.map((text) => ({ type: 'output' as const, text, done: true })),
          { type: 'blank', text: '', done: true },
        ];
      });
      setTyping(false);
      setPhase((p) => p + 1);
    }, 350);
    return () => clearTimeout(t);
  }, [phase, typing, charIdx]);

  return lines;
}

export default function ContactSection() {
  const lines = useTerminal();
  const terminalRef = useRef<HTMLDivElement>(null);
  const [userInput, setUserInput] = useState('');
  const [userLines, setUserLines] = useState<{ input: string; output: string }[]>([]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines, userLines]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = userInput.trim().toLowerCase();
    const responses: Record<string, string> = {
      help: 'Commands: whoami | stack | github | contact | resume | location | clear',
      whoami: 'Jonathan Tubac — Full Stack Developer, Guatemala City 🇬🇹',
      stack: 'React · Next.js · Node.js · TypeScript · PostgreSQL · Docker · REST APIs',
      skills: 'React · Next.js · Node.js · TypeScript · PostgreSQL · Docker · REST APIs',
      github: '→ github.com/JonathanTubac  (public repos + live demos)',
      contact: 'Email: javiertubac1290.e@gmail.com',
      location: 'Guatemala City, Guatemala 🇬🇹 — Open to local & remote',
      resume: 'Opening CV... → /jonathan-tubac-cv.pdf',
      clear: '__clear__',
    };
    const output = responses[cmd] ?? `Command not found: "${cmd}" — type "help" for available commands`;
    if (output === '__clear__') {
      setUserLines([]);
    } else {
      setUserLines((prev) => [...prev, { input: userInput, output }]);
    }
    setUserInput('');
  };

  return (
    <section id="contact" className="relative py-32 md:py-40 bg-[#040c08] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-green-500/5 blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-white/25 mb-4">Contact</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
            Let&apos;s build{' '}
            <span className="gradient-text">something</span>
          </h2>
          <p className="text-white/35 text-lg max-w-lg mx-auto leading-relaxed">
            Have a project in mind? Let&apos;s talk. I&apos;m available for freelance, contract, and full-time opportunities.
          </p>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_40px_100px_rgba(0,0,0,0.6)]"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-3 px-5 py-3.5 bg-[#111118] border-b border-white/[0.06]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <span className="flex-1 text-center text-xs text-white/20 font-mono">
              jonathan@portfolio — bash
            </span>
          </div>

          {/* Terminal body */}
          <div
            ref={terminalRef}
            className="bg-[#0b0b10] p-6 font-mono text-sm overflow-y-auto"
            style={{ minHeight: 340, maxHeight: 400 }}
          >
            {lines.map((line, i) => (
              <div key={i} className="leading-relaxed">
                {line.type === 'input' && (
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 shrink-0">❯</span>
                    <span className="text-white/80">{line.text}</span>
                    {!line.done && (
                      <span className="inline-block w-2 h-4 bg-white/50 animate-blink ml-0.5" />
                    )}
                  </div>
                )}
                {line.type === 'output' && (
                  <div className="text-white/40 pl-4">{line.text}</div>
                )}
                {line.type === 'blank' && <div className="h-2" />}
              </div>
            ))}

            {/* User interaction lines */}
            {userLines.map((ul, i) => (
              <div key={`u-${i}`}>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">❯</span>
                  <span className="text-white/80">{ul.input}</span>
                </div>
                <div className="text-white/40 pl-4 mb-2">{ul.output}</div>
              </div>
            ))}

            {/* Interactive input */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-1">
              <span className="text-emerald-400 shrink-0">❯</span>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="type a command..."
                className="flex-1 bg-transparent text-white/70 outline-none placeholder:text-white/15 caret-emerald-400"
                spellCheck={false}
                autoComplete="off"
              />
            </form>
          </div>
        </motion.div>

        {/* Help text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-white/20 text-xs font-mono mt-4"
        >
          try: help · contact · resume · skills · clear
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <MagneticButton
            href="mailto:javiertubac1290.e@gmail.com"
            className="px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-xl hover:bg-white/90 transition-colors"
          >
            javiertubac1290.e@gmail.com →
          </MagneticButton>
          <MagneticButton
            href="https://github.com/JonathanTubac"
            className="px-8 py-3.5 bg-white/[0.06] text-white text-sm font-medium rounded-xl border border-white/10 hover:bg-white/[0.1] transition-all"
          >
            GitHub Profile
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

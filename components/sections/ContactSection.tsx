'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import { useLang } from '@/components/providers/LanguageProvider';

interface Line {
  type: 'input' | 'output' | 'blank';
  text: string;
  done?: boolean;
}

function useTerminal(commands: { input: string; output: string[] }[]) {
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
    if (phase >= commands.length) return;
    const cmd = commands[phase];

    if (!typing) {
      const delay = setTimeout(() => {
        setLines((prev) => [...prev, { type: 'input', text: '', done: false }]);
        setTyping(true);
        setCharIdx(0);
      }, 800);
      return () => clearTimeout(delay);
    }

    if (charIdx < cmd.input.length) {
      const t = setTimeout(() => {
        setLines((prev) => {
          const next = [...prev];
          const last = next[next.length - 1];
          if (last.type === 'input') {
            next[next.length - 1] = { ...last, text: cmd.input.slice(0, charIdx + 1) };
          }
          return next;
        });
        setCharIdx((c) => c + 1);
      }, 55 + Math.random() * 40);
      return () => clearTimeout(t);
    }

    const outputDelay = setTimeout(() => {
      setLines((prev) => {
        const next = [...prev];
        next[next.length - 1] = { ...next[next.length - 1], done: true };
        const outputLines: Line[] = cmd.output.map((text) => ({ type: 'output', text, done: true }));
        return [...next, ...outputLines, { type: 'blank', text: '', done: true }];
      });
      setPhase((p) => p + 1);
      setTyping(false);
    }, 400);
    return () => clearTimeout(outputDelay);
  }, [phase, typing, charIdx, commands]);

  return lines;
}

export default function ContactSection() {
  const { t } = useLang();
  const c = t.contact;

  const lines = useTerminal(c.autoCommands);
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
      help: c.commands.help,
      whoami: c.commands.whoami,
      stack: c.commands.stack,
      skills: c.commands.stack,
      github: c.commands.github,
      contact: c.commands.contact,
      contacto: c.commands.contact,
      location: c.commands.location,
      ubicacion: c.commands.location,
      clear: '__clear__',
      limpiar: '__clear__',
    };
    const output = responses[cmd] ?? c.commands.unknown(userInput.trim());
    if (output === '__clear__') {
      setUserLines([]);
    } else {
      setUserLines((prev) => [...prev, { input: userInput, output }]);
    }
    setUserInput('');
  };

  return (
    <section id="contact" className="relative py-32 md:py-40 bg-[var(--bg-alt)] overflow-hidden">
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
          <p className="text-xs uppercase tracking-[0.25em] text-white/25 mb-4">{c.tag}</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
            {c.title}<span className="gradient-text">{c.titleHighlight}</span>
          </h2>
          <p className="text-white/35 text-lg max-w-lg mx-auto leading-relaxed">{c.subtitle}</p>
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
          <div className="flex items-center gap-3 px-5 py-3.5 bg-[var(--bg-chrome)] border-b border-white/[0.06]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <span className="flex-1 text-center text-xs text-white/20 font-mono">
              {c.terminalTitle}
            </span>
          </div>

          {/* Terminal body */}
          <div
            ref={terminalRef}
            className="bg-[var(--bg-card)] p-6 font-mono text-sm overflow-y-auto"
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

            {userLines.map((ul, i) => (
              <div key={`u-${i}`}>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">❯</span>
                  <span className="text-white/80">{ul.input}</span>
                </div>
                <div className="text-white/40 pl-4 mb-2">{ul.output}</div>
              </div>
            ))}

            <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-1">
              <span className="text-emerald-400 shrink-0">❯</span>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder={c.placeholder}
                className="flex-1 bg-transparent text-white/70 outline-none placeholder:text-white/15 caret-emerald-400"
                spellCheck={false}
                autoComplete="off"
              />
            </form>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-white/20 text-xs font-mono mt-4"
        >
          {c.hint}
        </motion.p>

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
            {c.emailLabel}
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

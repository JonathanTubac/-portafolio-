'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

// ─── Data ──────────────────────────────────────────────────────────────────

const stages = [
  {
    step: '01', title: 'Idea', subtitle: 'Where everything begins',
    description: 'Every product starts with a problem worth solving. Deep research, user validation, and defining what to build — and what not to.',
    tags: ['Market Research', 'User Stories', 'Scoping', 'Wireframes'],
    color: '#3B82F6',
  },
  {
    step: '02', title: 'Design', subtitle: 'Form follows function',
    description: 'From low-fi sketches to pixel-perfect prototypes. Every screen, every interaction designed with purpose and clarity.',
    tags: ['UI/UX Design', 'Prototyping', 'Design System', 'Figma'],
    color: '#8B5CF6',
  },
  {
    step: '03', title: 'Development', subtitle: 'Code that scales',
    description: 'Clean, typed code built with modern patterns. React SPAs on the frontend. Node.js REST APIs on the backend. Performance is a feature.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'REST / GraphQL'],
    color: '#10B981',
  },
  {
    step: '04', title: 'Database', subtitle: 'Data architecture that lasts',
    description: 'Thoughtful schema design, optimized queries, proper indexing, and migrations that never break production.',
    tags: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
    color: '#A78BFA',
  },
  {
    step: '05', title: 'API', subtitle: 'The backbone of the product',
    description: 'Robust versioned APIs with JWT auth, rate limiting, and error handling. Documented with OpenAPI. Built to be consumed at scale.',
    tags: ['REST', 'GraphQL', 'JWT / OAuth', 'OpenAPI'],
    color: '#EC4899',
  },
  {
    step: '06', title: 'Deployment', subtitle: 'Ship with confidence',
    description: 'Automated CI/CD pipelines, zero-downtime deploys, Dockerized environments, and real-time health monitoring.',
    tags: ['Docker', 'GitHub Actions', 'AWS / Vercel', 'CI/CD'],
    color: '#06B6D4',
  },
  {
    step: '07', title: 'Growth', subtitle: 'Build, measure, learn',
    description: 'Analytics, error tracking, and performance dashboards from day one. Data-driven iterations that improve the product continuously.',
    tags: ['Analytics', 'Error Tracking', 'A/B Testing', 'Monitoring'],
    color: '#FBBF24',
  },
];

// ─── Shared animation primitives ───────────────────────────────────────────

function Float({
  children,
  y = 10,
  duration = 4,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  y?: number;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -y, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  );
}

function Glow({ color, size = 130 }: { color: string; size?: number }) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      animate={{ opacity: [0.55, 0.9, 0.55] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      style={{ width: size, height: size, backgroundColor: color, filter: `blur(${size * 0.45}px)` }}
    />
  );
}

function Spark({
  color, x, y, delay, size = 4,
}: {
  color: string; x: number; y: number; delay: number; size?: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, backgroundColor: color }}
      animate={{ opacity: [0.05, 0.65, 0.05], scale: [0.7, 1.4, 0.7] }}
      transition={{ duration: 2.2 + delay * 0.4, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  );
}

// ─── Stage Visuals ─────────────────────────────────────────────────────────

function IdeaVisual({ color }: { color: string }) {
  const Bulb = ({ w }: { w: number }) => (
    <svg width={w} height={w} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21h6M10 17h4M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-1.8C7.21 13.16 6 11.22 6 9a6 6 0 0 1 6-6z" />
    </svg>
  );
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Glow color={color} size={120} />
      <Float y={13} duration={4.2} className="relative z-10"><Bulb w={72} /></Float>
      <motion.div className="absolute top-8 right-8 opacity-40"
        animate={{ y: [0, -8, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3.3, repeat: Infinity, delay: 0.8 }}>
        <Bulb w={30} />
      </motion.div>
      <motion.div className="absolute bottom-10 left-7 opacity-25"
        animate={{ y: [0, -5, 0], opacity: [0.1, 0.32, 0.1] }}
        transition={{ duration: 2.7, repeat: Infinity, delay: 1.4 }}>
        <Bulb w={18} />
      </motion.div>
      {/* Rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <motion.div key={deg}
          className="absolute w-px rounded-full"
          style={{
            height: 8 + (i % 3) * 4,
            top: '50%', left: '50%',
            backgroundColor: color,
            transformOrigin: '0 0',
            transform: `rotate(${deg}deg) translateX(44px)`,
          }}
          animate={{ opacity: [0.05, 0.3, 0.05] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
        />
      ))}
      <Spark color={color} x={12} y={18} delay={0} />
      <Spark color={color} x={82} y={14} delay={0.7} size={3} />
      <Spark color={color} x={18} y={78} delay={1.3} size={3} />
      <Spark color={color} x={85} y={80} delay={0.4} />
    </div>
  );
}

function DesignVisual({ color }: { color: string }) {
  const Pen = ({ w }: { w: number }) => (
    <svg width={w} height={w} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
  const palette = ['#EC4899', '#3B82F6', '#10B981', color, '#F59E0B'];
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Glow color={color} size={115} />
      <Float y={10} duration={4.5} className="relative z-10"><Pen w={66} /></Float>
      <motion.div className="absolute top-8 left-8 opacity-35"
        animate={{ y: [0, -7, 0], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 3.1, repeat: Infinity, delay: 0.9 }}>
        <Pen w={26} />
      </motion.div>
      {/* Bezier arc */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 220 380" fill="none" preserveAspectRatio="none">
        <path d="M20 320 C 70 220, 160 160, 200 70" stroke={color} strokeWidth="0.8"
          strokeDasharray="5 5" opacity="0.15" />
        <circle cx="20" cy="320" r="3.5" fill={color} opacity="0.4" />
        <circle cx="200" cy="70" r="3.5" fill={color} opacity="0.4" />
        <circle cx="70" cy="220" r="2" fill={color} opacity="0.25" />
        <line x1="20" y1="320" x2="70" y2="220" stroke={color} strokeWidth="0.6" opacity="0.15" />
        <line x1="200" y1="70" x2="160" y2="160" stroke={color} strokeWidth="0.6" opacity="0.15" />
      </svg>
      {/* Color swatches */}
      <div className="absolute bottom-9 flex justify-center gap-2 w-full px-4">
        {palette.map((c, i) => (
          <motion.div key={i} className="w-5 h-5 rounded-full border border-white/10"
            style={{ backgroundColor: c + 'AA' }}
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.22 }} />
        ))}
      </div>
      <Spark color={color} x={82} y={17} delay={0.5} />
      <Spark color={color} x={88} y={58} delay={1.1} size={3} />
    </div>
  );
}

function DevVisual({ color }: { color: string }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center font-mono overflow-hidden">
      <Glow color={color} size={110} />
      {/* Big brackets */}
      <Float y={8} duration={5} className="relative z-10 flex items-center gap-0.5 select-none">
        <motion.span className="text-6xl font-black leading-none"
          style={{ color }}
          animate={{ x: [0, -5, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}>{'<'}</motion.span>
        <motion.span className="text-4xl font-bold leading-none opacity-50"
          style={{ color }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}>/</motion.span>
        <motion.span className="text-6xl font-black leading-none"
          style={{ color }}
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}>{'>'}</motion.span>
      </Float>
      {/* Terminal lines */}
      {[28, 44, 60, 76].map((top, i) => (
        <motion.div key={i} className="absolute h-px rounded-full"
          style={{
            top: `${top}%`, left: '10%',
            backgroundColor: color,
            width: `${[55, 38, 65, 28][i]}%`,
          }}
          animate={{ opacity: [0.04, 0.18, 0.04], scaleX: [0.85, 1, 0.85] }}
          transition={{ duration: 2.1 + i * 0.35, repeat: Infinity, delay: i * 0.38, ease: 'easeInOut' }}
        />
      ))}
      {/* Blinking cursor */}
      <motion.div className="absolute w-2 h-4 rounded-sm"
        style={{ top: '76%', left: '14%', backgroundColor: color }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }} />
      <Spark color={color} x={84} y={14} delay={0} />
      <Spark color={color} x={12} y={17} delay={0.9} size={3} />
      <Spark color={color} x={82} y={84} delay={1.6} />
    </div>
  );
}

function DatabaseVisual({ color }: { color: string }) {
  const Db = ({ w, op }: { w: number; op: number }) => (
    <svg width={w} height={w} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity={op}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19a9 3 0 0 0 18 0V5" />
      <path d="M3 12a9 3 0 0 0 18 0" />
    </svg>
  );
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Glow color={color} size={120} />
      <Float y={11} duration={4.2} className="relative z-10"><Db w={70} op={0.78} /></Float>
      <motion.div className="absolute top-7 right-8"
        animate={{ y: [0, -8, 0], opacity: [0.22, 0.48, 0.22] }}
        transition={{ duration: 3.4, repeat: Infinity, delay: 0.65 }}>
        <Db w={30} op={0.7} />
      </motion.div>
      <motion.div className="absolute bottom-10 left-7"
        animate={{ y: [0, -5, 0], opacity: [0.1, 0.28, 0.1] }}
        transition={{ duration: 2.7, repeat: Infinity, delay: 1.3 }}>
        <Db w={18} op={0.6} />
      </motion.div>
      {/* Side connection dots */}
      {[33, 50, 67].map((top, i) => (
        <motion.div key={i} className="absolute right-5 w-1.5 h-1.5 rounded-full"
          style={{ top: `${top}%`, backgroundColor: color }}
          animate={{ opacity: [0.12, 0.55, 0.12], x: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.3 }} />
      ))}
      <Spark color={color} x={10} y={18} delay={0.3} />
      <Spark color={color} x={82} y={13} delay={1.1} size={3} />
      <Spark color={color} x={14} y={82} delay={0.8} size={3} />
      <Spark color={color} x={80} y={82} delay={1.7} />
    </div>
  );
}

function ApiVisual({ color }: { color: string }) {
  const Zap = ({ w, op }: { w: number; op: number }) => (
    <svg width={w} height={w} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity={op}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
  /* Nodes for network graph feel */
  const nodes = [
    { cx: 110, cy: 190, r: 5 },
    { cx: 55,  cy: 110, r: 3 },
    { cx: 165, cy: 110, r: 3 },
    { cx: 55,  cy: 270, r: 3 },
    { cx: 165, cy: 270, r: 3 },
  ];
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Glow color={color} size={115} />
      {/* Connection lines SVG overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 220 380" preserveAspectRatio="none">
        {nodes.slice(1).map((n, i) => (
          <motion.line key={i}
            x1={nodes[0].cx} y1={nodes[0].cy} x2={n.cx} y2={n.cy}
            stroke={color} strokeWidth="0.8" opacity="0.15"
            animate={{ opacity: [0.06, 0.22, 0.06] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} />
        ))}
        {nodes.map((n, i) => (
          <motion.circle key={i} cx={n.cx} cy={n.cy} r={n.r}
            fill={color}
            animate={{ opacity: [0.2, 0.7, 0.2], r: [n.r, n.r * 1.4, n.r] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.25 }} />
        ))}
      </svg>
      <Float y={12} duration={3.9} className="relative z-10"><Zap w={68} op={0.78} /></Float>
      <motion.div className="absolute top-8 left-9"
        animate={{ y: [0, -7, 0], opacity: [0.18, 0.45, 0.18] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}>
        <Zap w={27} op={0.65} />
      </motion.div>
      {/* API path label */}
      <motion.div className="absolute bottom-8 left-0 right-0 flex justify-center"
        animate={{ opacity: [0.12, 0.38, 0.12] }}
        transition={{ duration: 2.5, repeat: Infinity }}>
        <span className="text-[9px] font-mono tracking-wide" style={{ color: color + '99' }}>
          GET /api/v1/data → 200 OK
        </span>
      </motion.div>
      <Spark color={color} x={82} y={16} delay={0} />
      <Spark color={color} x={10} y={22} delay={0.8} size={3} />
      <Spark color={color} x={88} y={78} delay={1.5} />
    </div>
  );
}

function DeployVisual({ color }: { color: string }) {
  const Cloud = ({ w, op }: { w: number; op: number }) => (
    <svg width={w} height={w} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity={op}>
      <polyline points="16 16 12 12 8 16" />
      <line x1="12" y1="12" x2="12" y2="21" />
      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
    </svg>
  );
  /* CI pipeline steps */
  const steps = ['Build', 'Test', 'Deploy'];
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Glow color={color} size={120} />
      <Float y={13} duration={4.6} className="relative z-10"><Cloud w={70} op={0.78} /></Float>
      <motion.div className="absolute top-8 right-8"
        animate={{ y: [0, -7, 0], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 3.2, repeat: Infinity, delay: 0.7 }}>
        <Cloud w={28} op={0.65} />
      </motion.div>
      {/* CI pipeline pills */}
      <div className="absolute bottom-9 flex justify-center gap-1.5 w-full px-4">
        {steps.map((s, i) => (
          <motion.div key={s}
            className="flex items-center gap-1 px-2 py-1 rounded-md text-[9px] font-mono border"
            style={{ borderColor: color + '28', backgroundColor: color + '08', color: color + '99' }}
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.4 }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
            {s}
          </motion.div>
        ))}
      </div>
      {/* Checkmark */}
      <motion.div className="absolute bottom-[30%] left-8"
        animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.25, 0.65, 0.25] }}
        transition={{ duration: 2.2, repeat: Infinity, delay: 0.4 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color}
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </motion.div>
      <Spark color={color} x={12} y={17} delay={0.2} />
      <Spark color={color} x={82} y={14} delay={1.0} size={3} />
      <Spark color={color} x={88} y={55} delay={0.6} />
    </div>
  );
}

function GrowthVisual({ color }: { color: string }) {
  const bars = [28, 42, 36, 58, 72];
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Glow color={color} size={110} />
      {/* Bar chart */}
      <Float y={7} duration={5.2} className="relative z-10 flex items-end gap-2">
        {bars.map((h, i) => (
          <motion.div key={i} className="w-7 rounded-t-md"
            style={{ height: h, backgroundColor: i === 4 ? color + 'DD' : color + '44' }}
            animate={{ opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 1.9, repeat: Infinity, delay: i * 0.22 }} />
        ))}
      </Float>
      {/* Trend line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" viewBox="0 0 220 380" fill="none" preserveAspectRatio="none">
        <path d="M35 305 C 75 270, 105 245, 135 215 C 155 195, 175 175, 205 148"
          stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        {[35, 90, 135, 170, 205].map((x, i) => (
          <motion.circle key={i} cx={x} cy={[305, 268, 242, 200, 148][i]} r="3.5"
            fill={color}
            animate={{ opacity: [0.4, 1, 0.4], r: [3.5, 5, 3.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.28 }} />
        ))}
      </svg>
      {/* Percentage badge */}
      <motion.div
        className="absolute top-8 right-5 px-2.5 py-1 rounded-lg border text-[10px] font-mono font-bold"
        style={{ borderColor: color + '30', backgroundColor: color + '10', color }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.8, repeat: Infinity }}>
        +127%
      </motion.div>
      <Spark color={color} x={10} y={18} delay={0.3} />
      <Spark color={color} x={14} y={72} delay={1.1} size={3} />
      <Spark color={color} x={88} y={84} delay={0.7} />
    </div>
  );
}

const VISUALS: Record<string, React.ComponentType<{ color: string }>> = {
  '01': IdeaVisual,
  '02': DesignVisual,
  '03': DevVisual,
  '04': DatabaseVisual,
  '05': ApiVisual,
  '06': DeployVisual,
  '07': GrowthVisual,
};

// ─── Main component ────────────────────────────────────────────────────────

export default function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardAreaRef  = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  const [activeStage, setActiveStage] = useState(0);
  const [mouse, setMouse]             = useState({ x: 0, y: 0 });

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      setActiveStage(Math.min(stages.length - 1, Math.floor(v * stages.length)));
    });
  }, [scrollYProgress]);

  const stage  = stages[activeStage];
  const Visual = VISUALS[stage.step];

  return (
    <section ref={containerRef} className="relative" style={{ height: `${stages.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* Backgrounds */}
        <div className="absolute inset-0 bg-[#060610]" />
        <div className="absolute inset-0 bg-grid opacity-50" />

        {/* Ambient color blob */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full pointer-events-none"
          animate={{ backgroundColor: stage.color + '07' }}
          transition={{ duration: 0.9 }}
          style={{ filter: 'blur(140px)' }}
        />

        {/* Section header */}
        <div className="relative z-10 text-center mb-7 px-4">
          <p className="text-xs uppercase tracking-[0.25em] text-white/25 mb-2">The Process</p>
          <h2 className="text-2xl md:text-3xl font-bold">
            From idea to <span className="gradient-text">production</span>
          </h2>
        </div>

        {/* ─── 3D Card ─────────────────────────────────────────── */}
        <div
          ref={cardAreaRef}
          className="relative z-10 w-full max-w-[860px] px-4"
          onMouseMove={(e) => {
            const rect = cardAreaRef.current?.getBoundingClientRect();
            if (!rect) return;
            setMouse({
              x: (e.clientX - rect.left  - rect.width  / 2) / (rect.width  / 2),
              y: (e.clientY - rect.top   - rect.height / 2) / (rect.height / 2),
            });
          }}
          onMouseLeave={() => setMouse({ x: 0, y: 0 })}
        >
          {/* Outer wrapper handles 3D tilt from mouse */}
          <motion.div
            animate={{ rotateX: mouse.y * -5, rotateY: mouse.x * 7 }}
            transition={{ type: 'spring', stiffness: 130, damping: 18, mass: 0.8 }}
            style={{ transformPerspective: 1400, transformStyle: 'preserve-3d' }}
          >
            {/* Inner card handles stage transition */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, scale: 0.93, filter: 'blur(14px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit  ={{ opacity: 0, scale: 0.93, filter: 'blur(14px)' }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-3xl overflow-hidden border"
                style={{
                  borderColor: stage.color + '22',
                  backgroundColor: '#0b0b13',
                  boxShadow: `0 0 120px ${stage.color}0B, 0 40px 90px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)`,
                }}
              >
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${stage.color}70, transparent)` }} />

                {/* Card body */}
                <div className="flex flex-col md:flex-row" style={{ minHeight: 360 }}>

                  {/* ── Left: text ─────────────────────────────── */}
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      {/* Step badge + subtitle */}
                      <div className="flex items-center gap-2.5 mb-8">
                        <span
                          className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border"
                          style={{
                            color: stage.color,
                            borderColor: stage.color + '30',
                            backgroundColor: stage.color + '0C',
                          }}
                        >
                          {stage.step}
                        </span>
                        <div className="w-px h-3 bg-white/10" />
                        <span className="text-xs text-white/30">{stage.subtitle}</span>
                      </div>

                      {/* Title */}
                      <motion.h3
                        key={`t${activeStage}`}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.38, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
                      >
                        {stage.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        key={`d${activeStage}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.38, delay: 0.13, ease: [0.16, 1, 0.3, 1] }}
                        className="text-white/40 text-sm leading-relaxed max-w-sm"
                      >
                        {stage.description}
                      </motion.p>
                    </div>

                    {/* Tags */}
                    <motion.div
                      key={`g${activeStage}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.18 }}
                      className="flex flex-wrap gap-1.5 mt-6 md:mt-0"
                    >
                      {stage.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] rounded-full border font-mono"
                          style={{
                            borderColor: stage.color + '28',
                            backgroundColor: stage.color + '08',
                            color: stage.color + 'AA',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  {/* ── Right: visual panel ─────────────────────── */}
                  <div className="hidden md:block w-[220px] shrink-0 border-l border-white/[0.05] relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid opacity-70" />
                    <Visual color={stage.color} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Progress dots */}
        <div className="relative z-10 mt-7 flex items-center gap-2">
          {stages.map((s, i) => (
            <div
              key={s.step}
              className="rounded-full transition-all duration-500"
              style={{
                width:           i === activeStage ? '28px' : '6px',
                height:          '6px',
                backgroundColor: i <= activeStage ? s.color : 'rgba(255,255,255,0.1)',
                opacity:         i === activeStage ? 1 : i < activeStage ? 0.45 : 0.2,
              }}
            />
          ))}
        </div>

        {/* Stage counter */}
        <div className="absolute bottom-7 right-8 z-20 font-mono text-xs text-white/20 select-none">
          {String(activeStage + 1).padStart(2, '0')} / {String(stages.length).padStart(2, '0')}
        </div>
      </div>
    </section>
  );
}

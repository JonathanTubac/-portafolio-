'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const metrics = [
  { value: 3, suffix: '+', label: 'Projects Built', description: 'Real applications shipped' },
  { value: 2, suffix: '+', label: 'Years in Dev', description: 'Full-stack development' },
  { value: 13, suffix: '+', label: 'Technologies', description: 'Languages, frameworks & DBs' },
  { value: 1, suffix: 'st', label: 'Hackathon Win', description: 'Copernicus x SENACYT' },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.round(eased * value);
      setCurrent(val);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span>
      {current}
      {suffix}
    </span>
  );
}

export default function MetricsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-28 md:py-36 bg-bg overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-green-500/6 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-white/25 mb-4">By the numbers</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            The <span className="gradient-text">impact</span>
          </h2>
        </motion.div>

        {/* Metrics grid */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-bg px-8 py-10 flex flex-col items-center text-center group hover:bg-white/[0.025] transition-colors duration-300"
            >
              {/* Number */}
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-3 tabular-nums">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} inView={inView} />
              </div>

              {/* Label */}
              <div className="text-base font-semibold text-white mb-1">{metric.label}</div>

              {/* Description */}
              <div className="text-sm text-white/30">{metric.description}</div>

              {/* Hover line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: `linear-gradient(90deg, transparent, rgba(34,197,94,0.5), transparent)`,
                  transformOrigin: 'center',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Open source / availability note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-white/25 text-sm mt-10"
        >
          Currently available for freelance, contract, and full-time opportunities.
        </motion.p>
      </div>
    </section>
  );
}

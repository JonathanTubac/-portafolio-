'use client';

import { useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  strength?: number;
}

export default function MagneticButton({
  children,
  href,
  className,
  onClick,
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [xy, setXY] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setXY({
      x: (e.clientX - rect.left - rect.width / 2) * strength,
      y: (e.clientY - rect.top - rect.height / 2) * strength,
    });
  };

  const reset = () => setXY({ x: 0, y: 0 });

  const inner = (
    <motion.div
      ref={ref}
      animate={xy}
      transition={{ type: 'spring', stiffness: 180, damping: 18, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={cn('inline-flex cursor-pointer', className)}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {inner}
      </a>
    );
  }

  return inner;
}

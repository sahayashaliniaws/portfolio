import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

/* ── Reusable scroll-triggered wrapper ─────────────────────────── */

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

export function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.15
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  const offsets: Record<string, { x: number; y: number }> = {
    up:    { x: 0, y: 40 },
    down:  { x: 0, y: -40 },
    left:  { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none:  { x: 0, y: 0 }
  };

  const { x, y } = offsets[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Staggered children container ──────────────────────────────── */

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
  amount?: number;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger }
  })
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

export function StaggerContainer({
  children,
  className = '',
  stagger = 0.1,
  once = true,
  amount = 0.1
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      custom={stagger}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={childVariants}>
      {children}
    </motion.div>
  );
}

/* ── Scale-in for badges / icons ───────────────────────────────── */

export function ScaleIn({
  children,
  className = '',
  delay = 0,
  once = true
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

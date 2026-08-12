'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { createElement } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.5, // Reduced for a snappier feel
  x = 0,
  y = 30,
  className,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.23, 1, 0.32, 1], // Strong ease-out for premium feel
      }}
    >
      {children}
    </motion.div>
  );
}

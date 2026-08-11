'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

function CharSpan({ char, rangeStart, rangeEnd, scrollYProgress }: {
  char: string;
  rangeStart: number;
  rangeEnd: number;
  scrollYProgress: MotionValue<number>;
}) {
  const opacity = useTransform(scrollYProgress, [rangeStart, rangeEnd], [0.2, 1]);
  const displayChar = char === ' ' ? '\u00A0' : char;
  return (
    <motion.span
      style={{ position: 'relative', display: 'inline-block', opacity }}
      aria-hidden={char === ' '}
    >
      {displayChar}
    </motion.span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  return (
    <p ref={ref} className={className} style={style}>
      {text.split('').map((char, i) => (
        <CharSpan
          key={i}
          char={char}
          rangeStart={i / text.length}
          rangeEnd={(i + 1) / text.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
}

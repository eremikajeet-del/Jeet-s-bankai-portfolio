'use client';

import { useEffect, useRef, useState } from 'react';

const COLORS_ROW1 = [
  '#1a1a2e', '#16213e', '#0f3460', '#533483', '#e94560', '#1a1a2e',
];
const COLORS_ROW2 = [
  '#0f3460', '#533483', '#e94560', '#1a1a2e', '#16213e', '#0f3460',
];

function Tile({ color, w, h }: { color: string; w: number; h: number }) {
  return (
    <div
      className="shrink-0 rounded-2xl"
      style={{ width: w, height: h, background: color }}
    />
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollOffset =
        (window.scrollY - (rect.top + window.scrollY) + window.innerHeight) * 0.3;
      setOffset(scrollOffset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ background: '#0C0C0C' }}
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform' as const,
          }}
        >
          {[...COLORS_ROW1, ...COLORS_ROW1].map((c, i) => (
            <Tile key={i} color={c} w={420} h={270} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform' as const,
          }}
        >
          {[...COLORS_ROW2, ...COLORS_ROW2].map((c, i) => (
            <Tile key={i} color={c} w={420} h={270} />
          ))}
        </div>
      </div>
    </section>
  );
}

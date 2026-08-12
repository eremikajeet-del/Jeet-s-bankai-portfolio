'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

const IMAGES_ROW1 = [
  '/projects/user/1.jpg',
  '/projects/user/2.jpg',
  '/projects/user/3.jpg',
  '/projects/user/4.jpg',
  '/projects/user/5.png',
  '/projects/user/6.png',
];
const IMAGES_ROW2 = [
  '/projects/user/7.jpg',
  '/projects/user/8.jpg',
  '/projects/user/9.jpg',
  '/projects/user/1.jpg',
  '/projects/user/2.jpg',
  '/projects/user/3.jpg',
];

function Tile({ src, w, h }: { src: string; w: number; h: number }) {
  return (
    <div
      className="shrink-0 rounded-2xl relative overflow-hidden bg-surface-strong"
      style={{ width: w, height: h }}
    >
      <Image src={src} alt="Project snippet" fill className="object-cover" />
    </div>
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
          {[...IMAGES_ROW1, ...IMAGES_ROW1].map((src, i) => (
            <Tile key={i} src={src} w={420} h={270} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform' as const,
          }}
        >
          {[...IMAGES_ROW2, ...IMAGES_ROW2].map((src, i) => (
            <Tile key={i} src={src} w={420} h={270} />
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import FadeIn from '@/components/portfolio/FadeIn';

export default function ResponsiveShowcase() {
  return (
    <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <FadeIn delay={0.2} y={30} className="w-full md:w-1/3">
          <h2 className="text-text-tertiary font-bold text-3xl md:text-5xl uppercase tracking-tight mb-6">
            Optimized for every screen size
          </h2>
          <p className="text-text-tertiary/80 font-light text-lg">
            Whether your users are on a 4K monitor or a smartphone, they will get a flawless, high-performance experience.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4} y={40} className="w-full md:w-2/3 flex items-end justify-center md:justify-end gap-4 sm:gap-6 relative">
          {/* Desktop */}
          <div className="w-[60%] aspect-video bg-surface-strong border-2 border-border-muted/20 rounded-[12px] sm:rounded-[20px] flex items-center justify-center shadow-2xl relative z-10">
            <span className="text-text-primary/30 text-sm">Desktop</span>
          </div>
          {/* Tablet */}
          <div className="w-[30%] aspect-[3/4] bg-surface-strong border-2 border-border-muted/20 rounded-[12px] sm:rounded-[20px] flex items-center justify-center shadow-2xl absolute -bottom-4 right-[15%] z-20">
            <span className="text-text-primary/30 text-xs">Tablet</span>
          </div>
          {/* Mobile */}
          <div className="w-[15%] aspect-[9/19] bg-surface-strong border-2 border-border-muted/20 rounded-[8px] sm:rounded-[16px] flex items-center justify-center shadow-2xl absolute -bottom-8 -right-2 z-30">
            <span className="text-text-primary/30 text-[10px]">Mobile</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

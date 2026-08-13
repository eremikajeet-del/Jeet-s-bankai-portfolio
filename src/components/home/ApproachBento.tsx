'use client';

import FadeIn from '@/components/portfolio/FadeIn';

export default function ApproachBento() {
  return (
    <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto">
      <FadeIn delay={0.1} y={20}>
        <h2 className="text-text-tertiary font-bold text-3xl md:text-5xl uppercase tracking-tight text-center mb-12">
          The approach to infinite your growth
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Large Card */}
        <FadeIn delay={0.2} y={30} className="md:col-span-2">
          <div className="bg-surface-strong border border-border-muted/10 rounded-[40px] p-8 h-full min-h-[300px] flex flex-col justify-between">
            <h3 className="text-text-primary font-bold text-2xl uppercase tracking-wide">Discovery & Strategy</h3>
            <div className="w-full h-32 mt-6 rounded-[20px] bg-text-primary/5 border border-border-muted/10 flex items-center justify-center">
              <span className="text-text-primary/30 text-sm">Visual Placeholder</span>
            </div>
          </div>
        </FadeIn>
        
        {/* Small Card 1 */}
        <FadeIn delay={0.3} y={30}>
          <div className="bg-surface-strong border border-border-muted/10 rounded-[40px] p-8 h-full min-h-[300px] flex flex-col justify-between">
            <h3 className="text-text-primary font-bold text-xl uppercase tracking-wide">Design UI/UX</h3>
            <div className="w-full h-32 mt-6 rounded-[20px] bg-text-primary/5 border border-border-muted/10 flex items-center justify-center">
              <span className="text-text-primary/30 text-sm">Visual</span>
            </div>
          </div>
        </FadeIn>
        
        {/* Small Card 2 */}
        <FadeIn delay={0.4} y={30}>
          <div className="bg-surface-strong border border-border-muted/10 rounded-[40px] p-8 h-full min-h-[300px] flex flex-col justify-between">
            <h3 className="text-text-primary font-bold text-xl uppercase tracking-wide">Development</h3>
            <div className="w-full h-32 mt-6 rounded-[20px] bg-text-primary/5 border border-border-muted/10 flex items-center justify-center">
              <span className="text-text-primary/30 text-sm">Visual</span>
            </div>
          </div>
        </FadeIn>

        {/* Large Card 2 */}
        <FadeIn delay={0.5} y={30} className="md:col-span-2">
          <div className="bg-surface-strong border border-border-muted/10 rounded-[40px] p-8 h-full min-h-[300px] flex flex-col justify-between">
            <h3 className="text-text-primary font-bold text-2xl uppercase tracking-wide">Launch & Optimize</h3>
            <div className="w-full h-32 mt-6 rounded-[20px] bg-text-primary/5 border border-border-muted/10 flex items-center justify-center">
              <span className="text-text-primary/30 text-sm">Visual Placeholder</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

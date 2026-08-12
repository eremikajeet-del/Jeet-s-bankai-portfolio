'use client';

import FadeIn from '@/components/portfolio/FadeIn';

export default function FeaturesList() {
  const features = [
    'Complete custom web design',
    'High-performance development',
    'SEO-optimized architecture',
    'Responsive on every device',
  ];

  return (
    <section className="py-12 px-6 md:px-10 max-w-6xl mx-auto">
      <FadeIn delay={0.2} y={30}>
        <div className="bg-surface-strong border border-border-muted/10 rounded-[40px] md:rounded-[60px] p-8 md:p-16">
          <h2 className="text-text-tertiary font-bold text-2xl md:text-4xl mb-8 uppercase tracking-wide">
            Why work with me
          </h2>
          <ul className="flex flex-col gap-6">
            {features.map((feature, i) => (
              <FadeIn key={i} delay={0.3 + (i * 0.1)} y={20}>
                <li className="flex items-center gap-4 text-text-tertiary/80 text-lg md:text-xl font-light">
                  <div className="w-8 h-8 rounded-full bg-text-tertiary/10 flex items-center justify-center shrink-0">
                    <div className="w-3 h-3 rounded-full bg-text-tertiary"></div>
                  </div>
                  {feature}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </FadeIn>
    </section>
  );
}

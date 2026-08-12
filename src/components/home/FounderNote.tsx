'use client';

import FadeIn from '@/components/portfolio/FadeIn';

export default function FounderNote() {
  return (
    <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Image Placeholder */}
        <FadeIn delay={0.2} y={30} className="w-full md:w-5/12">
          <div className="w-full aspect-[3/4] md:aspect-[4/5] rounded-[40px] border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 flex flex-col items-center justify-center p-8 text-center">
            <span className="text-[#D7E2EA]/40 text-lg font-medium">Founder Image</span>
            <span className="text-[#D7E2EA]/30 text-sm mt-2">Placeholder</span>
          </div>
        </FadeIn>

        {/* Text Content */}
        <FadeIn delay={0.4} y={30} className="w-full md:w-7/12">
          <h2 className="text-[#D7E2EA] font-bold text-3xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-none mb-8">
            Built with purpose, crafted with care.
          </h2>
          <p className="text-[#D7E2EA]/80 font-light text-lg md:text-xl leading-relaxed mb-8">
            &quot;I believe in building websites that don&apos;t just look good, but actually solve problems and drive results. Every line of code and every design decision is made with intention to create a seamless user experience.&quot;
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/10"></div>
            <div>
              <p className="text-[#D7E2EA] font-bold uppercase tracking-wide">Jeet</p>
              <p className="text-[#D7E2EA]/60 text-sm font-light uppercase tracking-wider">Founder & Developer</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

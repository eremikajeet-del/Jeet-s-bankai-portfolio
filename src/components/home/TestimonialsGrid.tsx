'use client';

import FadeIn from '@/components/portfolio/FadeIn';

export default function TestimonialsGrid() {
  return (
    <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto">
      <FadeIn delay={0.1} y={20}>
        <h2 className="text-[#D7E2EA] font-bold text-3xl md:text-5xl uppercase tracking-tight mb-12 text-center md:text-left">
          Loved by founders and teams
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <FadeIn key={i} delay={i * 0.15} y={30}>
            <div className="bg-[#111111] border border-[#D7E2EA]/10 rounded-[30px] p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4 text-[#D7E2EA]">
                  ★★★★★
                </div>
                <p className="text-[#D7E2EA]/80 font-light text-sm italic mb-6">
                  &quot;This is a placeholder for a testimonial. The design is clean and the development process was smooth.&quot;
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D7E2EA]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#D7E2EA]/40 text-xs">IMG</span>
                </div>
                <div>
                  <p className="text-[#D7E2EA] font-bold text-sm uppercase">Client {i}</p>
                  <p className="text-[#D7E2EA]/50 text-xs">CEO, Company</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

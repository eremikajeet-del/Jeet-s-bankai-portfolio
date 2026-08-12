'use client';

import FadeIn from '@/components/portfolio/FadeIn';

export default function ComparisonCards() {
  return (
    <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto">
      <FadeIn delay={0.1} y={20}>
        <h2 className="text-[#D7E2EA] font-bold text-3xl md:text-5xl uppercase tracking-tight text-center mb-12">
          Scale your business <br/> without scaling costs
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <FadeIn key={i} delay={i * 0.2} y={30}>
            <div className={`
              bg-[#111111] border border-[#D7E2EA]/10 rounded-[40px] p-8 h-full flex flex-col gap-6
              ${i === 2 ? 'md:-mt-6 md:mb-6 border-[#D7E2EA]/30 shadow-[0_0_40px_rgba(215,226,234,0.05)]' : ''}
            `}>
              <h3 className="text-[#D7E2EA] font-bold text-xl uppercase tracking-wide">Option {i}</h3>
              <div className="text-[#D7E2EA] font-light">
                <span className="text-4xl font-bold">$XX</span> / month
              </div>
              <ul className="flex flex-col gap-4 mt-4 flex-1">
                <li className="text-[#D7E2EA]/70 font-light text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D7E2EA]"></div> Feature 1
                </li>
                <li className="text-[#D7E2EA]/70 font-light text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D7E2EA]"></div> Feature 2
                </li>
                <li className="text-[#D7E2EA]/70 font-light text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D7E2EA]"></div> Feature 3
                </li>
              </ul>
              <button className={`
                w-full py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all
                ${i === 2 
                  ? 'bg-[#D7E2EA] text-[#0C0C0C]' 
                  : 'bg-transparent border border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10'}
              `}>
                Select Plan
              </button>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

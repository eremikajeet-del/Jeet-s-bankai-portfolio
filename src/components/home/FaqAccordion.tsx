'use client';

import FadeIn from '@/components/portfolio/FadeIn';

export default function FaqAccordion() {
  const faqs = [
    'How long does a website take to build?',
    'What is your design process?',
    'Do you offer maintenance after launch?',
    'How much does a custom website cost?'
  ];

  return (
    <section className="py-20 px-6 md:px-10 max-w-4xl mx-auto">
      <FadeIn delay={0.1} y={20}>
        <h2 className="text-[#D7E2EA] font-bold text-3xl md:text-5xl uppercase tracking-tight text-center mb-12">
          Got questions?
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, i) => (
          <FadeIn key={i} delay={i * 0.15} y={20}>
            <div className="bg-transparent border border-[#D7E2EA]/20 rounded-[20px] p-6 flex justify-between items-center cursor-pointer hover:bg-[#D7E2EA]/5 transition-colors">
              <h3 className="text-[#D7E2EA] font-medium text-lg md:text-xl">{faq}</h3>
              <div className="w-8 h-8 rounded-full border border-[#D7E2EA]/40 flex items-center justify-center shrink-0">
                <span className="text-[#D7E2EA]">+</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

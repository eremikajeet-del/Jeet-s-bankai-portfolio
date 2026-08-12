'use client';

import { useState } from 'react';
import FadeIn from '@/components/portfolio/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: 'How long does a website take to build?', a: 'Typically, a custom website takes between 2-6 weeks depending on the complexity, number of pages, and features required.' },
    { q: 'What is your design process?', a: 'I start with a discovery phase to understand your goals, move to wireframing and prototyping, and finally develop the high-fidelity site once the design is approved.' },
    { q: 'Do you offer maintenance after launch?', a: 'Yes, I offer ongoing maintenance and support packages to ensure your website remains secure, fast, and up-to-date.' },
    { q: 'How much does a custom website cost?', a: 'Projects vary based on requirements. A simple landing page might start at a lower price point, while full web apps or e-commerce sites will scale according to features.' }
  ];

  return (
    <section className="py-20 px-6 md:px-10 max-w-4xl mx-auto">
      <FadeIn delay={0.1} y={20}>
        <h2 className="text-text-tertiary font-bold text-3xl md:text-5xl uppercase tracking-tight text-center mb-12">
          Got questions?
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          
          return (
            <FadeIn key={i} delay={i * 0.15} y={20}>
              <div 
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="bg-transparent border border-border-muted/20 rounded-[20px] p-6 cursor-pointer hover:bg-text-tertiary/5 transition-colors overflow-hidden"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-text-tertiary font-medium text-lg md:text-xl">{faq.q}</h3>
                  <motion.div 
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="w-8 h-8 rounded-full border border-border-muted/40 flex items-center justify-center shrink-0"
                  >
                    <span className="text-text-tertiary">+</span>
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <p className="pt-4 text-text-tertiary/70 font-light leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

'use client';

import FadeIn from '@/components/portfolio/FadeIn';

import { motion } from 'framer-motion';

const CATEGORIES = ['All', 'Web', 'Mobile', 'UI', 'UX', 'Logo', 'Dev'];

export default function CategoryPills() {
  return (
    <section className="py-12 px-6 md:px-10 max-w-6xl mx-auto flex justify-center">
      <FadeIn delay={0.1} y={20}>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {CATEGORIES.map((cat, i) => (
            <motion.button 
              key={cat}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`
                px-6 py-3 rounded-full text-sm sm:text-base font-medium uppercase tracking-wider transition-colors
                ${i === 0 
                  ? 'bg-[#D7E2EA] text-[#0C0C0C]' 
                  : 'border border-[#D7E2EA]/30 text-[#D7E2EA] hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10'}
              `}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

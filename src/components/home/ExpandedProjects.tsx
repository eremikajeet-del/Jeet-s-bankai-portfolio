'use client';

import FadeIn from '@/components/portfolio/FadeIn';
import TiltCard from '@/components/portfolio/TiltCard';
import { motion } from 'framer-motion';

export default function ExpandedProjects() {
  return (
    <section className="py-12 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <FadeIn key={i} delay={i * 0.1} y={30}>
            <TiltCard>
              <div className="flex flex-col gap-4">
                {/* Image Placeholder */}
                <div className="w-full aspect-[4/3] rounded-[30px] border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 flex items-center justify-center">
                <span className="text-[#D7E2EA]/30 font-medium">Project Image {i}</span>
              </div>
              {/* Text Placeholder */}
              <div>
                <h3 className="text-[#D7E2EA] font-semibold text-lg uppercase tracking-wide">Project Title {i}</h3>
                <p className="text-[#D7E2EA]/60 font-light text-sm">UI/UX Design • Web Development</p>
              </div>
            </div>
            </TiltCard>
          </FadeIn>
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <button className="px-8 py-3 rounded-full border border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-wider hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-colors">
          Load More
        </button>
      </div>
    </section>
  );
}

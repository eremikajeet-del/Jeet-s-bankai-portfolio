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
                <div className="w-full aspect-[4/3] rounded-[30px] border border-border-muted/20 bg-text-tertiary/5 flex items-center justify-center">
                <span className="text-text-tertiary/30 font-medium">Project Image {i}</span>
              </div>
              {/* Text Placeholder */}
              <div>
                <h3 className="text-text-tertiary font-semibold text-lg uppercase tracking-wide">Project Title {i}</h3>
                <p className="text-text-tertiary/60 font-light text-sm">UI/UX Design • Web Development</p>
              </div>
            </div>
            </TiltCard>
          </FadeIn>
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <button className="px-8 py-3 rounded-full border border-border-default text-text-tertiary font-medium uppercase tracking-wider hover:bg-text-tertiary hover:text-surface-base transition-colors">
          Load More
        </button>
      </div>
    </section>
  );
}

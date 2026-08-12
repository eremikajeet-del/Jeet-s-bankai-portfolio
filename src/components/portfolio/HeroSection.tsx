'use client';

import FadeIn from './FadeIn';
import ContactButton from './ContactButton';



export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col" style={{ overflowX: 'clip' }}>


      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40}>
        <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
          <h1
            className="
              hero-heading font-black uppercase tracking-tight leading-none
              whitespace-nowrap w-full
              text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]
            "
          >
            Hi, i&apos;m jeet
          </h1>
        </div>
      </FadeIn>


      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 mt-auto">
        <FadeIn delay={0.35} y={20}>
            <p
              className="
              text-text-tertiary font-light uppercase tracking-wide leading-snug
              text-center max-w-[80vw] sm:max-w-2xl
              "
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            Full-Stack Developer building digital experiences that help businesses grow
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

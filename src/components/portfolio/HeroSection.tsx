'use client';

import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: 'https://wa.me/919970313187' },
];

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="
                text-[#D7E2EA] font-medium uppercase tracking-wider
                text-sm md:text-lg lg:text-[1.4rem]
                hover:opacity-70 transition-opacity duration-200
                no-underline
              "
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

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

      {/* Hero Portrait */}
      <FadeIn delay={0.6} y={30}>
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="
            absolute left-1/2 -translate-x-1/2 z-10
            w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]
            top-1/2 -translate-y-1/2
            sm:top-auto sm:translate-y-0 sm:bottom-0
          "
        >
          <div
            className="
              w-full aspect-[3/4] rounded-full
              bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]
              opacity-40
            "
            style={{
              filter: 'blur(1px)',
            }}
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 mt-auto">
        <FadeIn delay={0.35} y={20}>
          <p
            className="
              text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
              max-w-[160px] sm:max-w-[220px] md:max-w-[260px]
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

'use client';

import HeroSection from '@/components/portfolio/HeroSection';
import MarqueeSection from '@/components/portfolio/MarqueeSection';
import ServicesSection from '@/components/portfolio/ServicesSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';

export default function Home() {
  return (
    <main className="bg-[#0C0C0C] min-h-screen" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <ProjectsSection limit={1} showCTA={true} />
    </main>
  );
}

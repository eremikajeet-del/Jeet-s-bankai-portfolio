'use client';

import HeroSection from '@/components/portfolio/HeroSection';
import MarqueeSection from '@/components/portfolio/MarqueeSection';
import ServicesSection from '@/components/portfolio/ServicesSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import CategoryPills from '@/components/home/CategoryPills';
import ExpandedProjects from '@/components/home/ExpandedProjects';
import FeaturesList from '@/components/home/FeaturesList';
import FounderNote from '@/components/home/FounderNote';
import ApproachBento from '@/components/home/ApproachBento';
import ComparisonCards from '@/components/home/ComparisonCards';
import ResponsiveShowcase from '@/components/home/ResponsiveShowcase';
import TestimonialsGrid from '@/components/home/TestimonialsGrid';
import FaqAccordion from '@/components/home/FaqAccordion';
import ContactFooter from '@/components/home/ContactFooter';

export default function Home() {
  return (
    <main className="bg-surface-base min-h-screen" style={{ overflowX: 'clip' }}>
      <HeroSection />
      
      {/* New Category Pills below Hero */}
      <CategoryPills />
      
      <MarqueeSection />
      
      <ServicesSection />
      
      {/* Original Projects Section Condensed */}
      <ProjectsSection limit={1} showCTA={false} />

      {/* New Prototype Sections */}
      <ExpandedProjects />
      <FeaturesList />
      <FounderNote />
      <ApproachBento />
      <ComparisonCards />
      <ResponsiveShowcase />
      <TestimonialsGrid />
      <FaqAccordion />
      <ContactFooter />
    </main>
  );
}

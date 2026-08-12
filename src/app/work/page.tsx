import ProjectsSection from '@/components/portfolio/ProjectsSection';

export const metadata = {
  title: 'Work — Jeet',
  description: 'A collection of my recent projects and web development work.',
};

export default function WorkPage() {
  return (
    <main className="bg-[#0C0C0C] min-h-screen pt-24 md:pt-32" style={{ overflowX: 'clip' }}>
      <ProjectsSection />
    </main>
  );
}

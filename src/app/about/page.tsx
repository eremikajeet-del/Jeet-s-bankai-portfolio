import FadeIn from '@/components/portfolio/FadeIn';

export const metadata = {
  title: 'About — Jeet',
  description: 'Class 12 student and self-taught web developer.',
};

export default function AboutPage() {
  return (
    <main className="bg-[#0C0C0C] min-h-screen pt-32 pb-20 px-6 md:px-10" style={{ overflowX: 'clip' }}>
      <div className="max-w-4xl mx-auto flex flex-col gap-12 sm:gap-16">
        <FadeIn delay={0} y={30}>
          <h1 
            className="hero-heading font-black uppercase tracking-tight leading-none"
            style={{ fontSize: 'clamp(3rem, 8vw, 100px)' }}
          >
            Who I Am
          </h1>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <div className="text-[#D7E2EA] font-light text-lg sm:text-xl md:text-2xl leading-relaxed flex flex-col gap-6">
            <p>
              I am a Class 12 student and a self-taught developer. I build websites and digital 
              experiences because I love the process of turning ideas into functional software.
            </p>
            <p>
              I don&apos;t have a massive agency or decades of corporate experience. What I do have 
              is a genuine passion for coding, a strong work ethic, and a drive to keep learning 
              and building things that work well and look great.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <div className="mt-8 border-t border-[#D7E2EA]/20 pt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[#D7E2EA] font-bold text-2xl uppercase tracking-wider mb-6">What I&apos;m Learning</h2>
              <ul className="text-[#D7E2EA]/80 font-light text-lg flex flex-col gap-3">
                <li>Advanced React Patterns</li>
                <li>Next.js App Router</li>
                <li>UI/UX Design Principles</li>
                <li>Web Performance Optimization</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-[#D7E2EA] font-bold text-2xl uppercase tracking-wider mb-6">Tools I Use</h2>
              <ul className="text-[#D7E2EA]/80 font-light text-lg flex flex-col gap-3">
                <li>React & Next.js</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>TypeScript</li>
                <li>Git & GitHub</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}

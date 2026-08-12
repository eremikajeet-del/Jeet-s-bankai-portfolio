import FadeIn from '@/components/portfolio/FadeIn';

export const metadata = {
  title: 'Contact — Jeet',
  description: 'Get in touch with me.',
};

const SOCIAL_LINKS = [
  { name: 'WhatsApp', href: 'https://wa.me/919970313187' },
  { name: 'Email', href: 'mailto:your.email@example.com' },
  { name: 'Instagram', href: 'https://instagram.com/yourhandle' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourhandle' },
];

export default function ContactPage() {
  return (
    <main className="bg-[#0C0C0C] min-h-screen pt-32 pb-20 px-6 md:px-10 flex flex-col justify-center" style={{ overflowX: 'clip' }}>
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-12 sm:gap-16">
        <FadeIn delay={0} y={30}>
          <h1 
            className="hero-heading font-black uppercase tracking-tight leading-none"
            style={{ fontSize: 'clamp(3rem, 8vw, 100px)' }}
          >
            Get In Touch
          </h1>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <p className="text-[#D7E2EA] font-light text-xl md:text-2xl max-w-2xl">
            I work directly with clients to build websites that meet their specific needs.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-8">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xl hover:text-white hover:underline transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </main>
  );
}

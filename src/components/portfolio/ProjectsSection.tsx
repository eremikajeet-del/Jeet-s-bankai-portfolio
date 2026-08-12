'use client';

import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

const PROJECTS = [
  {
    num: '01',
    name: 'Ember & Oak',
    category: 'Restaurant / Hospitality',
    url: 'https://ember-and-oak-website.netlify.app/',
    images: [
      '/projects/ember-oak-1.png',
      '/projects/ember-oak-2.png',
      '/projects/ember-oak-3.png',
    ],
  },
  {
    num: '02',
    name: 'Madina Hotel',
    category: 'Hotel / Restaurant',
    url: 'https://madina-hotelcom.netlify.app/',
    images: [
      '/projects/madina-hotel-1.png',
      '/projects/madina-hotel-2.png',
      '/projects/madina-hotel-3.png',
    ],
  },
  {
    num: '03',
    name: 'REBORN FITNESS',
    category: 'Fitness / Business',
    url: 'https://gym-website-marcus.netlify.app/',
    images: [
      '/projects/gym-website-1.png',
      '/projects/gym-website-2.png',
      '/projects/gym-website-3.png',
    ],
  },
];

export default function ProjectsSection({ limit, showCTA }: { limit?: number, showCTA?: boolean }) {
  const displayProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <section
      id="projects"
      className="
        bg-[#0C0C0C]
        rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14
        z-10 relative
        px-5 sm:px-8 md:px-10 pt-16 sm:pt-20 md:pt-24
      "
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-12 sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {limit ? 'Selected Work' : 'Projects'}
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto flex flex-col gap-16 sm:gap-20 md:gap-24 pb-20">
        {displayProjects.map((project, i) => (
          <FadeIn key={project.num} delay={i * 0.1}>
            <div
              className="
                rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
                border-2 border-[#D7E2EA]
                bg-[#0C0C0C]
                p-4 sm:p-6 md:p-8
              "
            >
              {/* Top Row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                  <span
                    className="font-black leading-none shrink-0 text-[#D7E2EA]"
                    style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                  >
                    {project.num}
                  </span>
                  <div className="flex flex-col gap-0.5 sm:gap-1">
                    <span
                      className="text-[#D7E2EA] uppercase tracking-widest font-light"
                      style={{ fontSize: 'clamp(0.65rem, 1.2vw, 0.85rem)' }}
                    >
                      {project.category}
                    </span>
                    <h3
                      className="font-medium uppercase text-[#D7E2EA]"
                      style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)' }}
                    >
                      {project.name}
                    </h3>
                  </div>
                </div>
                <LiveProjectButton url={project.url} />
              </div>

              {/* Image Grid */}
              <div className="flex gap-3 sm:gap-4">
                {/* Left Column — 40% */}
                <div className="w-[40%] flex flex-col gap-3 sm:gap-4">
                  <div
                    className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden"
                    style={{ height: 'clamp(130px, 16vw, 230px)' }}
                  >
                    <img
                      src={project.images[0]}
                      alt={`${project.name} preview 1`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden flex-1"
                    style={{ minHeight: 'clamp(160px, 22vw, 340px)' }}
                  >
                    <img
                      src={project.images[1]}
                      alt={`${project.name} preview 2`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                {/* Right Column — 60% */}
                <div className="w-[60%] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden">
                  <img
                    src={project.images[2]}
                    alt={`${project.name} preview 3`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        ))}

        {showCTA && (
          <FadeIn delay={0.2} y={20}>
            <div className="flex justify-center mt-8">
              <a 
                href="/work" 
                className="
                  border border-[#D7E2EA] text-[#D7E2EA] 
                  px-8 py-4 rounded-full font-medium uppercase tracking-wider
                  hover:bg-[#D7E2EA] hover:text-[#0c0c0c] transition-colors duration-300
                "
              >
                View All Work
              </a>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

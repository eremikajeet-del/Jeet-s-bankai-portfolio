'use client';

import FadeIn from './FadeIn';

const SERVICES = [
  {
    num: '01',
    name: 'Website Development',
    description:
      'Custom, responsive websites built to represent your business professionally and perform well across all devices.',
  },
  {
    num: '02',
    name: 'E-commerce Development',
    description:
      'Online stores designed for smooth shopping experiences, from product display to checkout.',
  },
  {
    num: '03',
    name: 'SaaS / Web Applications',
    description:
      'Full-stack web applications with real functionality — dashboards, user systems, and business logic.',
  },
  {
    num: '04',
    name: 'Restaurant & Business Websites',
    description:
      'Websites designed for restaurants, cafés, and local businesses — menus, reservations, and contact built in.',
  },
  {
    num: '05',
    name: 'Landing Pages',
    description:
      'Focused, single-purpose pages built to capture attention and convert visitors into leads or customers.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="
        bg-surface-strong rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32
      "
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="
            text-text-primary font-black uppercase text-center
          "
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          SERVICES
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto mt-16 sm:mt-20 md:mt-28">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.num} delay={i * 0.1}>
            <div
              className="
                flex items-start gap-4 sm:gap-6 md:gap-8
                py-8 sm:py-10 md:py-12
              "
              style={{
                borderBottom:
                  i < SERVICES.length - 1
                    ? '1px solid rgba(12, 12, 12, 0.15)'
                    : 'none',
              }}
            >
              <span
                className="font-black shrink-0 leading-none"
                style={{
                  fontSize: 'clamp(3rem, 10vw, 140px)',
                  color: '#0C0C0C',
                }}
              >
                {service.num}
              </span>
              <div className="flex flex-col gap-1 sm:gap-2 pt-2 sm:pt-4">
                <h3
                  className="font-medium uppercase"
                  style={{
                    fontSize: 'clamp(1rem, 2.2vw, 2.1rem)',
                    color: '#0C0C0C',
                  }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                    color: '#0C0C0C',
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

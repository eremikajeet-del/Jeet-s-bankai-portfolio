'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full fixed top-0 z-50 bg-surface-base/80 backdrop-blur-md"
    >
      <div className="flex w-full justify-between items-center mx-auto">
        <Link 
          href="/"
          className="text-text-tertiary font-bold uppercase tracking-wider text-xl md:text-2xl hover:opacity-70 transition-opacity"
        >
          Jeet
        </Link>
        <div className="flex gap-4 sm:gap-6 md:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="
                text-text-tertiary font-medium uppercase tracking-wider
                text-sm md:text-lg lg:text-[1.4rem]
                hover:text-text-primary transition-colors duration-200
                no-underline
              "
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

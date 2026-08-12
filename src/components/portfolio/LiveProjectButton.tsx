'use client';

import { ExternalLink } from 'lucide-react';

interface LiveProjectButtonProps {
  url: string;
}

export default function LiveProjectButton({ url }: LiveProjectButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center justify-center gap-2
        rounded-full border-2 border-border-default
        text-text-tertiary font-medium uppercase tracking-widest
        text-sm sm:text-base md:text-lg
        transition-all duration-300
        hover:bg-text-tertiary/10
        transition-colors duration-200
        cursor-pointer no-underline
      "
    >
      <ExternalLink size={14} />
      Live Project
    </a>
  );
}

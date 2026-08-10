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
        rounded-full border-2 border-[#D7E2EA]
        text-[#D7E2EA] font-medium uppercase tracking-widest
        px-8 py-3 sm:px-10 sm:py-3.5
        text-sm sm:text-base
        hover:bg-[#D7E2EA]/10
        transition-colors duration-200
        cursor-pointer no-underline
      "
    >
      <ExternalLink size={14} />
      Live Project
    </a>
  );
}

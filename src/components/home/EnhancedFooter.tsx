'use client';

import FadeIn from '@/components/portfolio/FadeIn';

export default function EnhancedFooter() {
  return (
    <footer className="mt-32 pt-20 pb-10 bg-[#0C0C0C] border-t border-[#D7E2EA]/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <FadeIn delay={0.1} y={20}>
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="w-full md:w-1/3">
              <h2 className="text-[#D7E2EA] font-black text-4xl uppercase tracking-widest mb-6">Jeet</h2>
              <p className="text-[#D7E2EA]/60 font-light text-sm max-w-sm">
                Building digital experiences that help businesses grow. Custom development and design.
              </p>
            </div>
            
            <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div className="flex flex-col gap-4">
                <h4 className="text-[#D7E2EA] font-bold uppercase tracking-wider text-sm mb-2">Navigation</h4>
                <a href="#" className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] text-sm transition-colors">Home</a>
                <a href="#about" className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] text-sm transition-colors">About</a>
                <a href="#services" className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] text-sm transition-colors">Services</a>
                <a href="#projects" className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] text-sm transition-colors">Work</a>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-[#D7E2EA] font-bold uppercase tracking-wider text-sm mb-2">Socials</h4>
                <a href="#" className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] text-sm transition-colors">Instagram</a>
                <a href="#" className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] text-sm transition-colors">LinkedIn</a>
                <a href="#" className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] text-sm transition-colors">Twitter</a>
              </div>
              <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
                <h4 className="text-[#D7E2EA] font-bold uppercase tracking-wider text-sm mb-2">Contact</h4>
                <a href="#" className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] text-sm transition-colors">hello@jeet.com</a>
                <a href="#" className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] text-sm transition-colors">+91 9970313187</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#D7E2EA]/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#D7E2EA]/40 text-xs">
              © {new Date().getFullYear()} Jeet. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#D7E2EA]/40 hover:text-[#D7E2EA] text-xs transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#D7E2EA]/40 hover:text-[#D7E2EA] text-xs transition-colors">Terms of Service</a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}

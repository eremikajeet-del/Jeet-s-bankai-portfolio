'use client';

import FadeIn from '@/components/portfolio/FadeIn';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function ContactFooter() {
  return (
    <section className="relative bg-[#050505] text-white overflow-hidden pt-32 pb-8 border-t border-white/5 font-sans">
      {/* Background texture/glow effect - purely CSS */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
          
          {/* Left Column: Contact Info & Profile */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <FadeIn delay={0.1} y={20}>
              {/* Profile Card */}
              <div className="bg-[#111111] border border-white/10 rounded-sm overflow-hidden mb-16 max-w-sm">
                <div className="relative h-48 w-full bg-[#1a1a1a]">
                  {/* The uploaded image goes here. */}
                  <Image 
                    src="/projects/user/10.jpg" 
                    alt="Creative Team" 
                    fill 
                    className="object-cover grayscale" 
                  />
                  {/* Fake profile overlay in the corner */}
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md rounded-full py-1.5 px-3 flex items-center gap-2 border border-white/10 z-10">
                     <div className="w-6 h-6 rounded-full overflow-hidden relative">
                        <Image src="/projects/user/10.jpg" alt="Mohammad Ehsan" fill className="object-cover" />
                     </div>
                     <span className="text-xs font-bold text-white tracking-wide">Mohammad Ehsan</span>
                  </div>
                </div>
                
                <div className="p-8 bg-white text-black flex flex-col items-center text-center">
                  <p className="font-medium text-[15px] leading-relaxed mb-6">
                    I&apos;ll personally review your brief and get back to you within two hours.
                  </p>
                  <div className="w-full flex items-center gap-4">
                    <div className="flex-1 h-px bg-black/20"></div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-black/60 uppercase">Creative Director</span>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-2">Contact</span>
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">+91 96925 44587</h3>
                <a href="mailto:hello@webcros.com" className="text-base font-medium hover:text-white/70 transition-colors">
                  hello@webcros.com
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 lg:pl-16">
            <FadeIn delay={0.2} y={20}>
              <p className="text-[11px] sm:text-[13px] font-bold tracking-[0.15em] text-white/50 uppercase leading-relaxed max-w-xl mb-24">
                Whether you have a full brief or just an idea, we&apos;re here to help shape it. No pitch decks, no sales calls — <span className="text-white">Just a clear next step.</span>
              </p>

              <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
                
                {/* Name Input */}
                <div className="relative border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between group focus-within:border-white/50 transition-colors">
                  <input 
                    type="text" 
                    placeholder="Alex Johnson"
                    className="bg-transparent text-lg text-white placeholder-white/30 outline-none w-full sm:w-2/3 peer order-2 sm:order-1 mt-2 sm:mt-0"
                  />
                  <label className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase order-1 sm:order-2 shrink-0 group-focus-within:text-white/70 transition-colors">
                    Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between group focus-within:border-white/50 transition-colors">
                  <input 
                    type="email" 
                    placeholder="example@email.com"
                    className="bg-transparent text-lg text-white placeholder-white/30 outline-none w-full sm:w-2/3 peer order-2 sm:order-1 mt-2 sm:mt-0"
                  />
                  <label className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase order-1 sm:order-2 shrink-0 group-focus-within:text-white/70 transition-colors">
                    Your Email Address
                  </label>
                </div>

                {/* Dropdown Input */}
                <div className="relative border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between group cursor-pointer">
                  <div className="flex items-center justify-between w-full sm:w-2/3 order-2 sm:order-1 mt-2 sm:mt-0">
                    <span className="text-lg font-bold">I need a new website</span>
                    <ChevronDown className="w-5 h-5 text-white/40" />
                  </div>
                  <label className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase order-1 sm:order-2 shrink-0">
                    What are you looking for?
                  </label>
                </div>

                {/* Submit Area */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
                  <button type="submit" className="bg-white text-black text-xs font-bold tracking-[0.2em] uppercase px-8 py-5 hover:bg-white/90 transition-colors shrink-0">
                    Send Message
                  </button>
                  <p className="text-xs text-white/40 max-w-xs leading-relaxed">
                    By submitting, you agree to our <a href="#" className="text-white hover:underline font-medium">Terms</a> and <a href="#" className="text-white hover:underline font-medium">Privacy Policy.</a>
                  </p>
                </div>
                
              </form>
            </FadeIn>
          </div>
          
        </div>

        {/* Footer Bottom Row */}
        <FadeIn delay={0.3} y={20}>
          <div className="border border-white/10 rounded-3xl p-6 sm:p-10 flex flex-col xl:flex-row items-center justify-between gap-8 backdrop-blur-sm bg-white/[0.02]">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 shrink-0">
                 <div className="w-4 h-8 bg-white -skew-x-12"></div>
                 <div className="w-4 h-8 bg-white/60 -skew-x-12"></div>
                 <div className="w-4 h-8 bg-white/30 -skew-x-12"></div>
              </div>
              <span className="font-bold text-2xl tracking-tight">webCros<sup className="text-xs font-normal">®</sup></span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              <a href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Home</a>
              <a href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Services</a>
              <a href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Work</a>
              <a href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Contact</a>
              <a href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Blog</a>
            </div>

            {/* Social & Legal */}
            <div className="flex items-center gap-4 sm:gap-6 shrink-0 flex-wrap justify-center">
              <div className="flex gap-2">
                 <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 transition-colors">
                    <span className="text-xs">X</span>
                 </a>
                 <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 transition-colors">
                    <span className="text-xs">In</span>
                 </a>
              </div>
              <div className="w-px h-4 bg-white/20 hidden sm:block"></div>
              <a href="#" className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase hover:text-white transition-colors">Terms</a>
            </div>

            <div className="flex flex-col items-center xl:items-end gap-2">
               <a href="mailto:hello@webcros.com" className="font-medium text-lg hover:text-white/70 transition-colors">hello@webcros.com</a>
               <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">© 2025 Webcros</span>
            </div>

          </div>
        </FadeIn>
        
      </div>
    </section>
  );
}

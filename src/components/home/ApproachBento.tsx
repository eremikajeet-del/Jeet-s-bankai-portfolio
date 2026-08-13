'use client';

import FadeIn from '@/components/portfolio/FadeIn';
import { Check, Zap, X } from 'lucide-react';

export default function ApproachBento() {
  return (
    <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto bg-surface-strong/30 rounded-[60px] my-10 border border-border-muted/5 shadow-sm">
      <FadeIn delay={0.1} y={20}>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 px-4">
          <h2 className="text-text-primary font-bold text-5xl md:text-7xl tracking-tight max-w-3xl leading-[1.1]">
            The <span className="bg-gradient-to-r from-[#ffe869] via-[#4db2f8] to-[#ff5d9e] text-text-primary px-4 py-1 rounded-[16px] inline-block shadow-sm">smarter</span> way <br/>
            to build your website.
          </h2>
          <p className="text-text-primary/60 text-lg md:text-xl max-w-sm md:text-right font-medium">
            When websites stop being a problem and start being your solution
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
        
        {/* Card 1: Black Card - Col Span 1 */}
        <FadeIn delay={0.2} y={30} className="md:col-span-1">
          <div className="bg-[#1C1C1C] rounded-[32px] p-8 h-full flex flex-col justify-between text-white relative overflow-hidden min-h-[420px] shadow-lg">
            <div>
              <X className="w-8 h-8 mb-8 text-white/90" strokeWidth={3} />
              <ul className="flex flex-col gap-4 text-sm font-medium tracking-wide">
                <li className="flex gap-4 items-center border-b border-white/10 pb-4">
                  <span className="text-white/40 font-mono text-xs">// 01</span> Design
                </li>
                <li className="flex gap-4 items-center border-b border-white/10 pb-4">
                  <span className="text-white/40 font-mono text-xs">// 02</span> Build
                </li>
                <li className="flex gap-4 items-center border-b border-white/10 pb-4">
                  <span className="text-white/40 font-mono text-xs">// 03</span> Deploy
                </li>
                <li className="flex gap-4 items-center">
                  <span className="text-white/40 font-mono text-xs">// 04</span> Care
                </li>
              </ul>
            </div>
            
            <div className="mt-12">
              <h3 className="font-bold text-2xl mb-3 leading-tight">
                Everything you<br/>need in one place
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Design, build, deploy, and maintain — all from <strong className="text-white">one senior team.</strong>
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Card 2: Real Projects - Col Span 2 */}
        <FadeIn delay={0.3} y={30} className="md:col-span-2">
          <div className="bg-white rounded-[32px] p-8 h-full min-h-[420px] shadow-sm border border-border-muted/5 flex flex-col relative overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <span className="text-text-primary/40 text-xs font-mono">// Shipped work</span>
              <span className="text-text-primary/60 text-sm font-medium flex items-center gap-1 cursor-pointer hover:text-text-primary transition-colors">
                All projects ↗
              </span>
            </div>
            <h3 className="text-text-primary font-bold text-3xl mb-12">Real projects, live right now</h3>
            
            <div className="flex-1 relative flex items-end justify-center gap-6 px-4">
              {/* Mockup 1 */}
              <div className="w-[30%] bg-[#f8f9fa] rounded-t-2xl border border-border-muted/10 shadow-lg translate-y-4 hover:-translate-y-2 transition-transform duration-500 overflow-hidden flex flex-col h-[200px]">
                <div className="h-7 bg-white border-b border-border-muted/10 flex items-center px-3 gap-1.5 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-text-primary/20"></div>
                  <div className="w-2 h-2 rounded-full bg-text-primary/20"></div>
                  <div className="w-2 h-2 rounded-full bg-text-primary/20"></div>
                  <span className="text-[9px] text-text-primary/40 ml-2">samones1.com</span>
                </div>
                <div className="flex-1 bg-gradient-to-b from-[#fff1e5] to-white p-4">
                  <div className="w-full h-8 bg-white rounded-md shadow-sm mb-4"></div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-100"></div>
                    <div className="w-8 h-8 rounded-full bg-orange-100"></div>
                  </div>
                </div>
              </div>

              {/* Mockup 2 */}
              <div className="w-[40%] bg-[#111] rounded-t-3xl border border-border-muted/10 shadow-2xl z-10 translate-y-2 hover:-translate-y-4 transition-transform duration-500 overflow-hidden flex flex-col h-[240px]">
                <div className="h-8 bg-[#222] border-b border-white/10 flex items-center px-4 gap-2 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <span className="text-[10px] text-white/40 ml-2">joblaunchuk.com</span>
                </div>
                <div className="flex-1 bg-[#111] p-6 text-white flex flex-col justify-center">
                  <div className="text-xl font-bold leading-tight mb-2">Your Clear Path<br/>Market.</div>
                  <div className="flex gap-2 mt-4">
                     <div className="w-10 h-3 bg-white/20 rounded-sm"></div>
                     <div className="w-10 h-3 bg-[#628ef4] rounded-sm"></div>
                  </div>
                </div>
              </div>

              {/* Mockup 3 */}
              <div className="w-[30%] bg-white rounded-t-2xl border border-border-muted/10 shadow-lg translate-y-6 hover:-translate-y-1 transition-transform duration-500 overflow-hidden flex flex-col h-[180px]">
                 <div className="h-7 bg-[#f5f5f5] border-b border-border-muted/10 flex items-center px-3 gap-1.5 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-text-primary/20"></div>
                  <div className="w-2 h-2 rounded-full bg-text-primary/20"></div>
                  <div className="w-2 h-2 rounded-full bg-text-primary/20"></div>
                  <span className="text-[9px] text-text-primary/40 ml-2">peckerschicken.co.uk</span>
                </div>
                <div className="flex-1 bg-[#1a1a1a] p-3 flex flex-col justify-end">
                   <div className="w-full h-12 bg-white/10 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Card 3: 3 Steps - Col Span 1 */}
        <FadeIn delay={0.4} y={30} className="md:col-span-1">
          <div className="bg-white rounded-[32px] p-8 h-full shadow-sm border border-border-muted/5 flex flex-col justify-between min-h-[420px]">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-text-primary/40 text-xs font-mono">// Process</span>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#b4ec51]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#b4ec51]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#b4ec51]"></div>
                </div>
              </div>
              <h3 className="text-text-primary font-bold text-3xl leading-tight">
                3 steps<br/>to launch
              </h3>
            </div>
            
            <ul className="flex flex-col gap-6 mt-12">
              <li className="flex justify-between items-center text-base font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#b4ec51] flex items-center justify-center text-[#2a4505]">
                    <Check className="w-3.5 h-3.5" strokeWidth={4} />
                  </div>
                  Scope & design
                </div>
                <span className="text-text-primary/30 font-mono text-sm">01</span>
              </li>
              <li className="flex justify-between items-center text-base font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#b4ec51] flex items-center justify-center text-[#2a4505]">
                    <Check className="w-3.5 h-3.5" strokeWidth={4} />
                  </div>
                  Build & test
                </div>
                <span className="text-text-primary/30 font-mono text-sm">02</span>
              </li>
              <li className="flex justify-between items-center text-base font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#b4ec51] flex items-center justify-center text-[#2a4505]">
                    <Check className="w-3.5 h-3.5" strokeWidth={4} />
                  </div>
                  Launch & care
                </div>
                <span className="text-text-primary/30 font-mono text-sm">03</span>
              </li>
            </ul>
          </div>
        </FadeIn>

        {/* Card 4: Save Money - Col Span 2 */}
        <FadeIn delay={0.5} y={30} className="md:col-span-2">
           <div className="bg-white rounded-[32px] p-8 h-full shadow-sm border border-border-muted/5 flex flex-col justify-between min-h-[340px]">
             <div className="flex justify-between items-start mb-6">
                <span className="text-text-primary/40 text-xs font-mono">// Pricing</span>
                <span className="bg-[#b4ec51] text-[#2a4505] text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                  Save up to 80%
                </span>
             </div>
             <div className="mb-10">
               <h3 className="text-text-primary font-bold text-3xl mb-4">Save money without<br/>sacrificing quality</h3>
               <p className="text-text-primary/60 text-base max-w-sm">
                 Cut overhead, not quality. Pay for the work,<br/>not the org chart between you and the engineer.
               </p>
             </div>
             
             <div className="flex flex-col gap-4 mt-auto">
                <div className="flex items-center gap-6">
                  <span className="w-20 text-sm text-text-primary/60 font-medium">Others</span>
                  <div className="flex-1 bg-[#f5f5f5] rounded-xl h-12 flex items-center px-4 relative overflow-hidden">
                    <span className="text-sm font-bold z-10 w-full text-center text-text-primary/60">Up to ₹2,00,000</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="w-20 text-sm text-text-primary font-bold">webCros</span>
                  <div className="w-[35%] bg-[#628ef4] rounded-xl h-12 flex items-center px-4 shadow-md shadow-blue-500/20">
                    <span className="text-sm font-bold text-white">From ₹40,000</span>
                  </div>
                  <div className="flex-1"></div>
                </div>
             </div>
           </div>
        </FadeIn>

        {/* Card 5: 24h Support - Col Span 1 */}
        <FadeIn delay={0.6} y={30} className="md:col-span-1">
           <div className="bg-white rounded-[32px] p-8 h-full shadow-sm border border-border-muted/5 flex flex-col min-h-[340px]">
             <span className="text-text-primary/40 text-xs font-mono mb-8 block">// Support</span>
             
             <div className="flex-1 flex flex-col justify-center items-center mb-8">
               <div className="text-text-primary font-black text-8xl tracking-tighter leading-none flex items-baseline">
                 24<span className="text-[#628ef4] text-7xl">h</span>
               </div>
             </div>
             
             <div className="flex items-start gap-3 mt-auto justify-center">
                <div className="w-2 h-2 rounded-full bg-[#b4ec51] mt-1.5 shrink-0"></div>
                <p className="text-text-primary/60 text-sm leading-relaxed font-medium">
                  Email us anytime — a real reply within a day.
                </p>
             </div>
           </div>
        </FadeIn>

        {/* Card 6: Focus on business - Col Span 1 */}
        <FadeIn delay={0.7} y={30} className="md:col-span-1">
           <div className="bg-[#628ef4] rounded-[32px] p-8 h-full flex flex-col text-white relative overflow-hidden min-h-[340px] shadow-lg shadow-blue-500/20">
             {/* Large background decorative X */}
             <X className="absolute -right-12 -top-12 w-80 h-80 text-white/5 rotate-12" strokeWidth={1} />
             
             <div className="relative z-10 mb-8">
               <h3 className="font-bold text-3xl mb-8 leading-tight">
                 Focus on your business.<br/>We&apos;ll handle the web.
               </h3>
               
               <ul className="flex flex-col gap-4">
                 <li className="flex items-center gap-3 text-sm font-medium text-white/90">
                   <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                     <Check className="w-3 h-3 text-white" strokeWidth={3} />
                   </div>
                   Senior engineers
                 </li>
                 <li className="flex items-center gap-3 text-sm font-medium text-white/90">
                   <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                     <Check className="w-3 h-3 text-white" strokeWidth={3} />
                   </div>
                   Bespoke design
                 </li>
                 <li className="flex items-center gap-3 text-sm font-medium text-white/90">
                   <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                     <Check className="w-3 h-3 text-white" strokeWidth={3} />
                   </div>
                   Post-launch care
                 </li>
               </ul>
             </div>
             
             <button className="mt-auto w-full bg-white text-[#628ef4] font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-white/90 transition-all shadow-md relative z-10 hover:scale-[1.02]">
               <Zap className="w-4 h-4 fill-[#628ef4]" />
               Get a project estimate
             </button>
           </div>
        </FadeIn>

      </div>
    </section>
  );
}

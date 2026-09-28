"use client";

import { Cpu, Globe, Layers, ShieldCheck, Zap, Terminal, Sparkles, Database } from "lucide-react";

const MARQUEE_ITEMS = [
  { label: "NEXT.JS 14 APP ROUTER", icon: Zap },
  { label: "AI AGENT WORKFLOWS", icon: Sparkles },
  { label: "REACT NATIVE MOBILE", icon: Globe },
  { label: "HIGH-THROUGHPUT BACKENDS", icon: Cpu },
  { label: "DISTRIBUTED CLOUD DEVOPS", icon: Layers },
  { label: "TYPESCRIPT PRODUCTION ARCHITECTURE", icon: Terminal },
  { label: "POSTGRESQL & REDIS PERFORMANCE", icon: Database },
  { label: "ENTERPRISE SECURITY & AUDITS", icon: ShieldCheck },
];

export default function MotionMarquee() {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-[#090A0D] py-5 select-none">
      {/* Edge gradient fades for seamless infinite illusion */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-[#090A0D] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-[#090A0D] to-transparent" />

      <div className="animate-jack-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Double array for seamless loop */}
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-3 text-xs sm:text-sm font-kanit font-bold tracking-wider uppercase text-slate-400 hover:text-white transition-colors"
            >
              <Icon size={14} className="text-brand-skyblue shrink-0" />
              <span>{item.label}</span>
              <span className="text-white/20 pl-4 font-mono font-normal">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

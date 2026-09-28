"use client";

import { motion } from "framer-motion";
import { ArrowRight, Send, ShieldCheck, Sparkles, Phone, Mail, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { useBooking } from "@/components/BookingProvider";

export default function MotionCTA() {
  const { open } = useBooking();

  return (
    <section className="relative py-28 sm:py-36 bg-[#08090C] text-white overflow-hidden border-t border-white/10">
      {/* Ambient Radial Spotlight */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[90vw] max-w-[1000px] rounded-full opacity-30 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(1,101,255,0.5) 0%, rgba(56,189,248,0.2) 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-lynk relative z-10 text-center max-w-4xl mx-auto space-y-8">
        {/* Pulsing Pill */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-xs text-slate-300 font-medium tracking-wide uppercase">
            ACCEPTING NEW CLIENT COMMISSIONS • RC: 9270501
          </span>
        </div>

        {/* Big Kanit Display Heading */}
        <h2 className="font-kanit font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] uppercase tracking-tight leading-[0.96]">
          <span className="jack-hero-gradient block">Ready To Engineer</span>
          <span className="jack-hero-accent block">What&apos;s Next?</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
          Partner with Bravelynk Digital Solutions to build bespoke web platforms, native mobile
          applications, and scalable cloud architectures that accelerate your business.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={() => open()}
            className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-skyblue px-9 py-4 text-sm font-semibold tracking-wide text-white shadow-[0_0_35px_rgba(1,101,255,0.5)] transition-all duration-300 hover:shadow-[0_0_55px_rgba(1,101,255,0.7)] hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            <span>Start Your Project</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <a
            href={siteConfig.communityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0088cc]/30 bg-[#0088cc]/10 px-8 py-4 text-sm font-semibold text-[#38bdf8] backdrop-blur-md transition-all duration-300 hover:bg-[#0088cc]/20 hover:border-[#0088cc]/60 hover:text-white active:scale-95 w-full sm:w-auto"
          >
            <Send size={15} />
            <span>Join Telegram Community</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Footnote details */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-brand-skyblue" />
            Registered RC: 9270501
          </span>
          <span className="flex items-center gap-2">
            <Mail size={16} className="text-brand-skyblue" />
            bravelynk@gmail.com
          </span>
          <span className="flex items-center gap-2">
            <Phone size={16} className="text-brand-skyblue" />
            +234 701 494 2919
          </span>
        </div>
      </div>
    </section>
  );
}

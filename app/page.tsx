"use client";

import JackHero3D from "@/components/JackHero3D";
import MotionMarquee from "@/components/MotionMarquee";
import BentoServices from "@/components/BentoServices";
import StickyStackProjects from "@/components/StickyStackProjects";
import MotionProcess from "@/components/MotionProcess";
import MotionCTA from "@/components/MotionCTA";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Send, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Home() {
  return (
    <div className="bg-[#0C0C0C] text-white min-h-screen overflow-x-clip selection:bg-brand-blue selection:text-white">
      {/* ── 1. MOTION SITES: 3D JACK PORTFOLIO HERO ── */}
      <JackHero3D />

      {/* ── 2. INFINITE KINETIC MARQUEE ── */}
      <MotionMarquee />

      {/* ── 3. 3D BENTO SERVICES & CAPABILITIES ── */}
      <BentoServices />

      {/* ── 4. HALLMARK STICKY-STACKING PROJECTS SHOWCASE ── */}
      <StickyStackProjects />

      {/* ── 5. KINETIC DELIVERY PIPELINE ── */}
      <MotionProcess />

      {/* ── 6. DIRECT TECHNICAL INQUIRY & CONTACT SECTION ── */}
      <section id="contact" className="relative py-24 sm:py-32 bg-[#090A0E] text-white border-t border-white/10">
        <div className="container-lynk relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-mono text-slate-300">
                <Sparkles size={12} className="text-brand-skyblue" />
                <span>DIRECT INQUIRY</span>
              </div>

              <h2 className="font-kanit font-black text-3xl sm:text-5xl uppercase tracking-tight leading-tight">
                <span className="jack-hero-gradient">Start Your Project </span>
                <span className="jack-hero-accent">With Bravelynk</span>
              </h2>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Tell us about your product idea, legacy refactor, or engineering roadmap. Our
                architecture team reviews all submissions and replies within 24 hours.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-brand-skyblue shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 uppercase">Direct Email</div>
                    <a href={`mailto:${siteConfig.email}`} className="text-white hover:text-brand-skyblue transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-brand-skyblue shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 uppercase">Call / WhatsApp</div>
                    <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-white hover:text-brand-skyblue transition-colors">
                      +234 701 494 2919
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-brand-skyblue shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 uppercase">HQ Location</div>
                    <span className="text-white">{siteConfig.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={siteConfig.communityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#0088cc]/30 bg-[#0088cc]/10 px-4 py-2 text-xs font-semibold text-[#38bdf8] hover:bg-[#0088cc]/20 transition-colors"
                >
                  <Send size={13} />
                  <span>Join Our Telegram Community</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#14151B] to-[#0A0B0E] p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CINEMATIC MOTION CTA BANNER ── */}
      <MotionCTA />
    </div>
  );
}

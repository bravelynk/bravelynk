"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Users,
  Calendar,
  Sparkles,
  Award,
  Send,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useBooking } from "@/components/BookingProvider";
import HeroBackground from "@/components/HeroBackground";

const communityPillars = [
  {
    icon: Users,
    title: "Engineering Community",
    desc: "A collaborative circle of Nigerian software developers, DevOps practitioners, and systems architects sharing production insights, open-source tooling, and debugging techniques.",
    cta: "Join Discussion",
    href: "https://t.me/bravelynk",
  },
  {
    icon: Award,
    title: "Talent & Project Board",
    desc: "We connect top-tier African engineering talent with vetted software contracts, enterprise installations, and startup MVPs that require seasoned hands.",
    cta: "Explore Talent",
    href: "https://t.me/bravelynk",
  },
  {
    icon: Calendar,
    title: "Webinars & Tech Audits",
    desc: "Regular virtual and physical deep-dives on zero-downtime database cutovers, local infrastructure optimization, AI workflow automation, and cybersecurity compliance.",
    cta: "Join Tech Audits",
    href: "https://t.me/bravelynk",
  },
];

export default function CommunityPage() {
  const { open } = useBooking();

  return (
    <div className="relative pt-36 pb-28 overflow-hidden bg-[#0C0C0C] text-white min-h-screen">
      {/* ── Ambient Radial Lighting & Cyber Grid Background ── */}
      <HeroBackground />

      <div className="relative z-10">
        {/* ── Breadcrumb ── */}
        <div className="container-lynk mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        {/* ── Hero ── */}
        <section className="container-lynk mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-mono text-slate-300 mb-4">
              <Sparkles size={14} className="text-brand-skyblue" />
              <span>ECOSYSTEM &amp; COMMUNITY</span>
            </div>
            <h1 className="font-kanit font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-[1.05] mb-5">
              <span className="jack-hero-gradient block sm:inline">The Bravelynk </span>
              <span className="jack-hero-accent">Community.</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              Empowering builders, tech founders, and engineering teams through open knowledge, practical software discussions, and high-impact collaboration.
            </p>

            <a
              href="https://t.me/bravelynk"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 text-sm font-semibold rounded-full bg-[#0088cc] hover:bg-[#0077b5] text-white transition-all shadow-[0_0_20px_rgba(0,136,204,0.4)] inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send size={16} />
              Join Telegram Community
              <ArrowUpRight size={14} />
            </a>
          </div>
        </section>

        {/* ── Community Pillars ── */}
        <section className="container-lynk mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityPillars.map((cp, idx) => (
              <ScrollReveal key={cp.title} delay={idx * 0.1}>
                <div className="rounded-2xl p-8 flex flex-col justify-between border border-white/10 bg-[#121316]/90 backdrop-blur-xl hover:border-brand-skyblue/40 hover:shadow-[0_0_30px_rgba(1,101,255,0.2)] transition-all h-full">
                  <div>
                    <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-brand-blue/15 text-brand-skyblue border border-brand-blue/20">
                      <cp.icon size={24} />
                    </div>
                    <h3 className="font-kanit text-xl font-bold uppercase tracking-tight text-white mb-3">
                      {cp.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-8">
                      {cp.desc}
                    </p>
                  </div>

                  <a
                    href={cp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 text-xs font-semibold rounded-full border border-white/15 bg-white/[0.04] text-white hover:bg-[#0088cc] hover:text-white hover:border-[#0088cc] transition-all flex items-center justify-center gap-1.5"
                  >
                    <Send size={13} />
                    <span>{cp.cta}</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="container-lynk">
          <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#14151B] to-[#0A0B0E] p-8 sm:p-14 text-white text-center shadow-2xl relative overflow-hidden">
            <h2 className="font-kanit font-black text-3xl sm:text-4xl uppercase tracking-tight mb-4 text-white">
              Build Something Great With Our Community
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
              Whether you&apos;re a founder looking for a dedicated engineering partner or a developer wanting to collaborate, we&apos;re always eager to connect.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://t.me/bravelynk"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-8 text-sm font-bold rounded-full bg-[#0088cc] text-white hover:bg-[#0077b5] transition-all shadow-[0_0_20px_rgba(0,136,204,0.4)] inline-flex items-center gap-2"
              >
                <Send size={16} />
                Join Us On Telegram
              </a>
              <button
                type="button"
                onClick={() => open()}
                className="py-3.5 px-8 text-sm font-semibold rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                Start a Project
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

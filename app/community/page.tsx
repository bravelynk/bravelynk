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
import { siteConfig } from "@/lib/data";

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
    <div className="pt-36 pb-24 overflow-hidden">
      {/* ── Breadcrumb ── */}
      <div className="container-lynk mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-brand-blue transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>

      {/* ── Hero ── */}
      <section className="container-lynk mb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-3.5 py-1.5 text-xs font-semibold text-brand-blue mb-4">
            <Sparkles size={14} />
            Ecosystem &amp; Community
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-ink-900 leading-[1.12] mb-6">
            The Bravelynk <span className="gradient-text">Community.</span>
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed mb-6">
            Empowering builders, tech founders, and engineering teams through open knowledge, practical software discussions, and collaboration.
          </p>

          <a
            href="https://t.me/bravelynk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand bg-[#0088cc] hover:bg-[#0077b5] py-3 px-6 text-sm font-semibold inline-flex items-center gap-2"
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
              <div className="card-surface rounded-2xl p-8 flex flex-col justify-between border border-black/10 hover:border-brand-blue/30 transition-all hover:shadow-card h-full bg-white">
                <div>
                  <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-brand-light text-brand-blue">
                    <cp.icon size={24} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink-900 mb-3">
                    {cp.title}
                  </h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed mb-8">
                    {cp.desc}
                  </p>
                </div>

                <a
                  href={cp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full py-2.5 text-xs font-semibold justify-center hover:bg-[#0088cc] hover:text-white hover:border-[#0088cc] flex items-center gap-1.5"
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
        <div className="rounded-3xl bg-brand-navy p-8 sm:p-14 text-white text-center shadow-xl relative overflow-hidden">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Build something great with our community
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
            Whether you&apos;re a founder looking for a dedicated engineering partner or a developer wanting to collaborate, we&apos;re always eager to connect.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://t.me/bravelynk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand bg-white text-brand-navy hover:bg-brand-light py-3.5 px-8 text-sm font-bold inline-flex items-center gap-2"
            >
              <Send size={16} />
              Join us
            </a>
            <button
              type="button"
              onClick={() => open()}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60"
            >
              Start a Project
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Smartphone,
  Cpu,
  Server,
  Laptop,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { useBooking } from "@/components/BookingProvider";
import { services } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBackground from "@/components/HeroBackground";

const serviceIcons = [Smartphone, Cpu, Server, Laptop];

export default function ServicesClient() {
  const { open } = useBooking();

  return (
    <article className="relative overflow-hidden pb-28 pt-36 bg-[#0C0C0C] text-white min-h-screen">
      {/* ── Ambient Radial Lighting & Cyber Grid Background ── */}
      <HeroBackground />

      <div className="container-lynk relative z-10">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        {/* Header section */}
        <header className="mb-16 border-b border-white/10 pb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-mono text-slate-300">
            <Sparkles size={13} className="text-brand-skyblue" />
            <span>OUR CORE CAPABILITIES</span>
          </div>
          <h1 className="font-kanit font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.05] mb-5 text-white">
            <span className="jack-hero-gradient block sm:inline">Four Core Pillars. </span>
            <span className="jack-hero-accent">One Accountable Team.</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
            Bravelynk Digital Solutions designs and develops modern websites, web &amp; mobile applications, AI-powered workflows, and reliable backend cloud systems for businesses and organizations.
          </p>
        </header>

        {/* Services Grid (4 Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => {
            const Icon = serviceIcons[i] || Smartphone;
            return (
              <ScrollReveal key={s.id} delay={i * 0.08}>
                <div
                  id={s.id}
                  className="group flex h-full flex-col justify-between rounded-3xl p-8 sm:p-10 transition-all duration-300 border border-white/10 bg-[#121316]/90 backdrop-blur-xl hover:border-brand-skyblue/40 hover:shadow-[0_0_35px_rgba(1,101,255,0.2)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-kanit text-3xl sm:text-4xl font-black text-white/15 group-hover:text-brand-skyblue/40 transition-colors">
                        {s.number}
                      </span>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/15 text-brand-skyblue border border-brand-blue/20 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-xs">
                        <Icon size={26} />
                      </div>
                    </div>

                    <h2 className="font-kanit text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-3 group-hover:text-brand-skyblue transition-colors">
                      {s.title}
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {s.desc}
                    </p>

                    <div className="border-t border-white/10 pt-6 mb-6">
                      <p className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-skyblue mb-4">
                        Key Capabilities
                      </p>
                      <ul className="space-y-3">
                        {s.points.map((p) => (
                          <li key={p} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 size={16} className="text-brand-skyblue shrink-0 mt-0.5" />
                            <span className="leading-snug">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    {s.techStack && (
                      <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/10">
                        {s.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg bg-white/[0.05] px-2.5 py-1 text-[11px] font-mono text-slate-300 border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                      <button
                        type="button"
                        onClick={() => open(s.id)}
                        className="py-3 px-5 text-xs font-semibold rounded-full bg-gradient-to-r from-brand-blue to-brand-skyblue text-white shadow-[0_0_20px_rgba(1,101,255,0.4)] hover:shadow-[0_0_30px_rgba(1,101,255,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all flex-1 inline-flex items-center justify-center gap-2"
                      >
                        Start a Project with this Service
                        <ArrowRight size={14} />
                      </button>
                      <Link
                        href="/contact-us"
                        className="py-3 px-5 text-xs font-semibold rounded-full border border-white/15 bg-white/[0.04] text-white hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-1.5"
                      >
                        Enquire
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA Banner */}
        <section className="mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#14151B] to-[#0A0B0E] px-8 py-16 text-center text-white sm:px-16 sm:py-20 shadow-2xl">
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(1,140,255,0.5), transparent 70%)" }}
              aria-hidden="true"
            />
            <h2 className="font-kanit font-black relative mx-auto max-w-2xl text-3xl sm:text-4xl uppercase tracking-tight">
              Not sure which capability fits your current challenge?
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-sm text-slate-400 sm:text-base leading-relaxed">
              Start with an exploratory technical discovery call. We will review your goals, architecture, and timeline.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => open()}
                className="py-3.5 px-8 text-sm font-bold rounded-full bg-white text-ink-900 hover:bg-slate-100 transition-all shadow-md inline-flex items-center gap-2"
              >
                Start a Project
                <ArrowRight size={16} />
              </button>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 hover:border-white/40"
              >
                Contact Lagos Office
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}

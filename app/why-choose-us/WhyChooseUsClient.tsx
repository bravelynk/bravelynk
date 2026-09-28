"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck, Wallet, Gauge, Headset, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { useBooking } from "@/components/BookingProvider";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBackground from "@/components/HeroBackground";

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Security-first engineering",
    desc: "Every build follows secure-by-default practices, so you're not left exposed after launch.",
  },
  {
    icon: Wallet,
    title: "Transparent, fixed pricing",
    desc: "No hidden costs or scope creep. You know exactly what you're paying for, up front.",
  },
  {
    icon: Gauge,
    title: "Built for speed",
    desc: "Lean, performant systems that stay fast — because slow technology costs you customers.",
  },
  {
    icon: Headset,
    title: "Real post-launch support",
    desc: "We don't disappear after delivery. Ongoing maintenance is part of the engagement.",
  },
];

const stats = [
  { value: "14+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years of Experience" },
  { value: "24/7", label: "Support Available" },
];

const promisePoints = [
  "Fixed, transparent pricing",
  "Plain-language communication",
  "Built around local realities",
  "Support that doesn't disappear",
];

export default function WhyChooseUsClient() {
  const { open } = useBooking();

  return (
    <article className="relative overflow-hidden pb-28 pt-36 bg-[#0C0C0C] text-white min-h-screen">
      {/* ── Ambient Radial Lighting & Cyber Grid Background ── */}
      <HeroBackground />

      <div className="container-lynk relative z-10">
        {/* Breadcrumb / Back button */}
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
            <span>ACCOUNTABLE DELIVERY</span>
          </div>
          <h1 className="font-kanit font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[1.05] mb-5">
            <span className="jack-hero-gradient block sm:inline">Built For How Your </span>
            <span className="jack-hero-accent">Business Operates.</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
            Bravebrands is how Bravelynk shows up for you. We bridge the gap between complex digital transformation and local realities for Nigerian growth-minded businesses.
          </p>
        </header>

        {/* Section 1: Who We Are & Our Promise */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-kanit font-black text-3xl uppercase tracking-tight text-white">Who We Are</h2>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Bravelynk Digital Solutions Limited (RC: 9270501) is a registered Nigerian technology company based at 16, Ishola Yusuf Street, Lagos. We design and build the software, infrastructure, and digital strategy that businesses need to compete — with the accountability of a real, local, registered partner.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              We&apos;ve seen too many businesses pay for software that never fit, or infrastructure that broke down the moment it mattered. Bravelynk exists to close that gap — with technology that&apos;s pragmatic, honest, and built to last.
            </p>

            {/* Stats list */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-kanit text-3xl font-black text-brand-skyblue sm:text-4xl">{s.value}</p>
                  <p className="text-slate-400 mt-1 text-xs font-mono uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#14151B] to-[#0A0B0E] p-8 text-white sm:p-10 shadow-2xl">
              <div
                className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full opacity-20 blur-2xl"
                style={{ background: "radial-gradient(circle, rgba(1,140,255,0.5), transparent 70%)" }}
                aria-hidden="true"
              />
              <h3 className="font-kanit font-black text-xl uppercase tracking-tight mb-6 text-white">Our Promise</h3>
              <ul className="space-y-4">
                {promisePoints.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 size={18} className="shrink-0 text-brand-skyblue" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Differentiators */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-brand-skyblue mb-2 block">
              OUR STANDARDS
            </span>
            <h2 className="font-kanit font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">What Sets Us Apart</h2>
            <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed">
              We don&apos;t just write code or install hardware. We deliver systems engineered around security, transparent pricing, speed, and continuous accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl p-7 flex flex-col justify-between border border-white/10 bg-[#121316]/90 backdrop-blur-xl hover:border-brand-skyblue/40 hover:shadow-[0_0_25px_rgba(1,101,255,0.2)] transition-all">
                  <div>
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-skyblue border border-brand-blue/20">
                      <d.icon size={20} />
                    </div>
                    <h3 className="font-kanit text-lg font-bold uppercase tracking-tight text-white mb-2">{d.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 pt-16 text-center">
          <h3 className="font-kanit font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-4">
            Ready to experience technology done right?
          </h3>
          <p className="text-slate-400 max-w-md mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Book a consultation session with our engineers. We offer a direct, jargon-free conversation about your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              onClick={() => open()}
              className="py-3.5 px-8 text-sm font-bold rounded-full bg-gradient-to-r from-brand-blue to-brand-skyblue text-white shadow-[0_0_25px_rgba(1,101,255,0.4)] hover:shadow-[0_0_35px_rgba(1,101,255,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all inline-flex items-center gap-2"
            >
              Book a Free Consultation
              <ArrowRight size={16} />
            </button>
            <Link
              href="/contact-us"
              className="py-3.5 px-8 text-sm font-semibold rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              Contact Our Lagos Office
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}

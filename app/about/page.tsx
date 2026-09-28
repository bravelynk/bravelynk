"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useBooking } from "@/components/BookingProvider";
import { siteConfig } from "@/lib/data";
import HeroBackground from "@/components/HeroBackground";

const pillars = [
  {
    title: "Optimise Existing Software",
    desc: "We analyze legacy bottlenecks, debug latency issues, refactor messy codebases, and modernize databases without interrupting your current revenue operations.",
    points: ["Performance & query tuning", "Legacy code refactoring", "Cloud database migration", "Zero-downtime cutover"],
  },
  {
    title: "Build Custom Software",
    desc: "From zero to production launch, we engineer bespoke web and mobile platforms designed around your specific business logic, customer workflows, and operational requirements.",
    points: ["Full-stack web & mobile apps", "Enterprise automation & ERPs", "Secure financial APIs", "Scalable cloud microservices"],
  },
  {
    title: "Provide Engineering Expertise",
    desc: "Embed senior software architects, DevOps engineers, and IT infrastructure specialists into your team to accelerate sprint delivery and elevate your engineering standard.",
    points: ["Dedicated agile squads", "DevSecOps & SRE deployment", "Hardware & network installation", "Staff upskilling & documentation"],
  },
];

const milestones = [
  { year: "2019", title: "Founded in Lagos", desc: "Started as a specialized consultancy solving enterprise server stability and custom business automation." },
  { year: "2021", title: "Expansion to Full-Lifecycle Engineering", desc: "Scaled to native mobile and SaaS engineering, delivering critical financial and health systems." },
  { year: "2023", title: "Enterprise Cloud & AI Solutions", desc: "Integrated automated business process AI, cloud DevOps, and edge diagnostic setups for Nigerian enterprises." },
  { year: "Today", title: "Global Standard, Local Delivery", desc: "Over 10+ successful deployments delivered with active partners in the UK and North America." },
];

export default function AboutPage() {
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

        {/* ── Header / Hero ── */}
        <section className="container-lynk mb-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-mono text-slate-300 mb-4">
              <Sparkles size={14} className="text-brand-skyblue" />
              <span>ABOUT BRAVELYNK</span>
            </div>
            <h1 className="font-kanit font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-[1.05] mb-6">
              <span className="jack-hero-gradient block sm:inline">Building Transformative Tech With </span>
              <span className="jack-hero-accent">Engineering &amp; Product Minds.</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-xl leading-relaxed max-w-3xl font-normal">
              We bridge the gap between complex digital transformation and real-world business realities for growth-minded enterprises across Nigeria and beyond.
            </p>
          </div>
        </section>

        {/* ── WHO WE ARE ── */}
        <section className="py-20 border-y border-white/10 bg-[#090A0E]/80 backdrop-blur-md">
          <div className="container-lynk">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-brand-skyblue">
                  WHO WE ARE
                </span>
                <h2 className="font-kanit font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
                  Technology built for how your business actually operates.
                </h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {siteConfig.name} ({siteConfig.rc}) is a registered Nigerian technology company headquartered at 16, Ishola Yusuf Street, Lagos. We design and build the software, infrastructure, and digital strategy that companies need to compete in the modern economy.
                </p>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Too many businesses pay for software that never fits, or infrastructure that breaks down when scale demands it most. Bravelynk exists to eliminate that frustration — providing accountable, pragmatic, and secure engineering.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <p className="font-kanit text-3xl font-black text-brand-skyblue">10+</p>
                    <p className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wide">Delivered Solutions</p>
                  </div>
                  <div>
                    <p className="font-kanit text-3xl font-black text-brand-skyblue">99.8%</p>
                    <p className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wide">System Reliability</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#14151B] to-[#0A0B0E] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
                  <div
                    className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full opacity-30 blur-2xl"
                    style={{ background: "radial-gradient(circle, rgba(1,140,255,0.7), transparent 70%)" }}
                  />
                  <h3 className="font-kanit font-black text-2xl uppercase tracking-tight mb-6">Our Core Promise</h3>
                  <ul className="space-y-4 text-sm text-slate-300">
                    {[
                      "Fixed-budget predictability with transparent scopes",
                      "Jargon-free communication and direct engineer access",
                      "Zero-downtime migrations designed for local realities",
                      "Ongoing maintenance and SLA support that never disappears",
                    ].map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-brand-skyblue shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK ── */}
        <section className="py-24 sm:py-32">
          <div className="container-lynk">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-brand-skyblue mb-2 block">
                HOW WE WORK
              </span>
              <h2 className="font-kanit font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
                Three Pillars of Engineering Excellence
              </h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                Whether you need to revive existing systems, build from ground zero, or embed top-tier technical talent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((p, idx) => (
                <ScrollReveal key={p.title} delay={idx * 0.1}>
                  <div className="rounded-2xl p-8 h-full flex flex-col justify-between border border-white/10 bg-[#121316]/90 backdrop-blur-xl hover:border-brand-skyblue/40 hover:shadow-[0_0_30px_rgba(1,101,255,0.2)] transition-all">
                    <div>
                      <span className="font-mono text-xs text-brand-skyblue font-bold tracking-widest block mb-4">
                        0{idx + 1}
                      </span>
                      <h3 className="font-kanit text-xl font-bold uppercase tracking-tight text-white mb-3">
                        {p.title}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                        {p.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 space-y-2.5">
                      {p.points.map((pt) => (
                        <div key={pt} className="flex items-center gap-2 text-xs text-slate-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-skyblue shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR JOURNEY ── */}
        <section className="py-20 border-t border-white/10 bg-[#090A0E]/80 backdrop-blur-md">
          <div className="container-lynk">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-brand-skyblue mb-2 block">
                OUR JOURNEY
              </span>
              <h2 className="font-kanit font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
                A Track Record of Continuous Delivery
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-y-0 before:left-4 before:w-0.5 before:bg-brand-blue/30">
              {milestones.map((m) => (
                <div key={m.year} className="relative pl-12">
                  <div className="absolute left-2.5 top-1.5 -ml-1.5 h-3.5 w-3.5 rounded-full bg-brand-skyblue ring-4 ring-[#090A0E]" />
                  <span className="font-mono text-xs font-bold text-brand-skyblue">{m.year}</span>
                  <h3 className="font-kanit text-lg font-bold uppercase tracking-tight text-white mt-1">{m.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button
                type="button"
                onClick={() => open()}
                className="py-3.5 px-8 text-sm font-semibold rounded-full bg-gradient-to-r from-brand-blue to-brand-skyblue text-white shadow-[0_0_25px_rgba(1,101,255,0.4)] hover:shadow-[0_0_35px_rgba(1,101,255,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all inline-flex items-center gap-2"
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

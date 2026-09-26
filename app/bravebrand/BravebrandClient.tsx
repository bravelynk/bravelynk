"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  Wallet,
  Gauge,
  Headset,
  CheckCircle2,
  ArrowRight,
  Search,
  PenTool,
  Rocket,
  LifeBuoy,
  Check,
} from "lucide-react";
import { useBooking } from "@/components/BookingProvider";
import ScrollReveal from "@/components/ScrollReveal";

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

const processSteps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    desc: "We audit your current systems, understand your goals, and map out where technology is holding you back. This discovery phase is completely transparent.",
    highlights: ["Outage & latency audits", "Security posture assessments", "Process bottlenecks review"],
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    desc: "We design a clear, practical roadmap and architecture built around how your business actually operates on the ground in Nigeria.",
    highlights: ["Custom interface wireframes", "Detailed systems architecture", "Fixed-scope budgeting"],
  },
  {
    icon: Rocket,
    step: "03",
    title: "Build & Launch",
    desc: "Our engineering team builds, rigorously tests, and deploys your solutions, providing regular check-ins and demo builds so there are no surprises.",
    highlights: ["Lean, fast-loading code", "Secure-by-default protocols", "Phased deployment schedules"],
  },
  {
    icon: LifeBuoy,
    step: "04",
    title: "Support & Grow",
    desc: "Post-launch monitoring, routine backups, performance adjustments, and iterative enhancements keep your systems running at peak capability.",
    highlights: ["Committed support SLA", "Regular software/OS updates", "Infrastructure scaling roadmap"],
  },
];

export default function BravebrandClient() {
  const { open } = useBooking();

  return (
    <article className="relative overflow-hidden pb-24 pt-36">
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[400px] w-[400px] rounded-full opacity-35 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(1,140,255,0.2), transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-[-10%] h-[350px] w-[350px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(1,101,255,0.15), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-lynk relative">
        {/* Back button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-brand-blue transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        {/* ── Header ──────────────────────────────────────────── */}
        <header className="mb-16 border-b border-black/5 pb-8 max-w-3xl">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand-blue">
            Bravebrand
          </span>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-4">
            Built for how your <span className="gradient-text">business actually operates.</span>
          </h1>
          <p className="text-muted text-base leading-relaxed sm:text-lg">
            Bravebrands is how Bravelynk shows up for you. We bridge the gap between complex digital transformation and local realities for Nigerian growth-minded businesses — with a clear, structured path from first call to launch.
          </p>
        </header>

        {/* ── Who We Are & Our Promise ─────────────────────── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-3xl font-bold tracking-tight">Who We Are</h2>
            <p className="text-muted leading-relaxed">
              Bravelynk Digital Solutions Limited (RC: 9270501) is a registered Nigerian technology company based at 16, Ishola Yusuf Street, Lagos. We design and build the software, infrastructure, and digital strategy that businesses need to compete — with the accountability of a real, local, registered partner.
            </p>
            <p className="text-muted leading-relaxed">
              We&apos;ve seen too many businesses pay for software that never fit, or infrastructure that broke down the moment it mattered. Bravelynk exists to close that gap — with technology that&apos;s pragmatic, honest, and built to last.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-black/5">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-bold text-brand-blue sm:text-4xl">{s.value}</p>
                  <p className="text-muted mt-1 text-xs font-medium uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl bg-brand-navy p-8 text-white sm:p-10 shadow-soft">
              <div
                className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full opacity-20 blur-2xl"
                style={{ background: "radial-gradient(circle, rgba(1,140,255,0.5), transparent 70%)" }}
                aria-hidden="true"
              />
              <h3 className="font-display text-xl font-bold mb-6">Our Promise</h3>
              <ul className="space-y-4">
                {promisePoints.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={18} className="shrink-0 text-brand-blue" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── What Sets Us Apart ───────────────────────────── */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What sets us apart</h2>
            <p className="text-muted mt-4">
              We don&apos;t just write code or install hardware. We deliver systems engineered around security, transparent pricing, speed, and continuous accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 0.08}>
                <div className="card-surface h-full rounded-2xl p-7 flex flex-col justify-between transition-shadow duration-300 hover:shadow-card">
                  <div>
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand-blue">
                      <d.icon size={20} />
                    </div>
                    <h3 className="font-display text-base font-bold mb-2">{d.title}</h3>
                    <p className="text-muted text-xs leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ── Our Process ──────────────────────────────────── */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">How It Works</p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">A clear path, from first call to launch.</h2>
            <p className="text-muted mt-4 text-sm leading-relaxed">
              We follow a structured, collaborative workflow designed to keep projects on track, within budget, and completely aligned with your strategic business targets.
            </p>
          </div>

          <div className="relative space-y-12 before:absolute before:inset-y-4 before:left-8 before:w-0.5 before:bg-black/5 sm:before:left-1/2">
            {processSteps.map((p, i) => {
              const Icon = p.icon;
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={p.step} delay={i * 0.08}>
                  <div className={`relative flex flex-col sm:flex-row items-stretch sm:justify-between gap-8 ${isEven ? "sm:flex-row-reverse" : ""}`}>
                    {/* Timeline badge */}
                    <div className="absolute left-8 top-1.5 -ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-white shadow-soft border-4 border-white sm:left-1/2 sm:-ml-4 z-10">
                      <span className="text-[10px] font-bold">{p.step}</span>
                    </div>

                    {/* Content block */}
                    <div className="w-full sm:w-[46%] pl-16 sm:pl-0">
                      <div className="card-surface rounded-2xl p-7 sm:p-8 hover:shadow-card transition-shadow duration-300">
                        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-light text-brand-blue">
                          <Icon size={20} />
                        </div>
                        <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                        <p className="text-muted text-sm leading-relaxed mb-6">{p.desc}</p>

                        <div className="space-y-2.5">
                          {p.highlights.map((h) => (
                            <div key={h} className="flex items-center gap-2 text-xs">
                              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-blue">
                                <Check size={11} />
                              </span>
                              <span className="font-medium">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden sm:block w-[46%]" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="border-t border-black/5 pt-16 text-center">
          <h3 className="font-display text-2xl font-bold mb-4">Ready to experience technology done right?</h3>
          <p className="text-muted max-w-md mx-auto mb-8 text-sm">
            Book a consultation session with our engineers. We offer a direct, jargon-free conversation about your business needs — starting with step 01.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              onClick={() => open()}
              className="btn-brand px-8 py-3.5"
            >
              Book a Free Consultation
              <ArrowRight size={16} />
            </button>
            <Link href="/contact" className="btn-outline px-8 py-3.5">
              Contact Our Lagos Office
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}

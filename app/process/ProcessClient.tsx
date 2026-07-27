"use client";

import Link from "next/link";
import { ArrowLeft, Search, PenTool, Rocket, LifeBuoy, ArrowRight, Check } from "lucide-react";
import { useBooking } from "@/components/BookingProvider";
import ScrollReveal from "@/components/ScrollReveal";

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

export default function ProcessClient() {
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
        {/* Breadcrumb / Back button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-brand-blue transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        {/* Header section */}
        <header className="mb-16 border-b border-black/5 pb-8 dark:border-white/10 max-w-3xl">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand-blue dark:bg-white/10">
            Our Process
          </span>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-4">
            A clear path, <span className="gradient-text">from first call to launch.</span>
          </h1>
          <p className="text-muted text-base leading-relaxed sm:text-lg">
            We follow a structured, collaborative workflow designed to keep projects on track, within budget, and completely aligned with your strategic business targets.
          </p>
        </header>

        {/* Process Timeline Section */}
        <div className="relative space-y-12 before:absolute before:inset-y-4 before:left-8 before:w-0.5 before:bg-black/5 dark:before:bg-white/10 sm:before:left-1/2">
          {processSteps.map((p, i) => {
            const Icon = p.icon;
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal key={p.step} delay={i * 0.08}>
                <div className={`relative flex flex-col sm:flex-row items-stretch sm:justify-between gap-8 ${isEven ? "sm:flex-row-reverse" : ""}`}>
                  {/* Timeline Badge center */}
                  <div className="absolute left-8 top-1.5 -ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-white shadow-soft border-4 border-white dark:border-ink-900 sm:left-1/2 sm:-ml-4 z-10">
                    <span className="text-[10px] font-bold">{p.step}</span>
                  </div>

                  {/* Content block */}
                  <div className="w-full sm:w-[46%] pl-16 sm:pl-0">
                    <div className="card-surface rounded-2xl p-7 sm:p-8 hover:shadow-card transition-shadow duration-300">
                      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-light text-brand-blue dark:bg-white/10">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                      <p className="text-muted text-sm leading-relaxed mb-6">{p.desc}</p>
                      
                      <div className="space-y-2.5">
                        {p.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2 text-xs">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-blue dark:bg-white/10">
                              <Check size={11} />
                            </span>
                            <span className="font-medium">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space block for spacing (large screens) */}
                  <div className="hidden sm:block w-[46%]" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA section */}
        <section className="mt-24 border-t border-black/5 pt-16 text-center dark:border-white/10">
          <h3 className="font-display text-2xl font-bold mb-4">Want to map out your digital roadmap?</h3>
          <p className="text-muted max-w-md mx-auto mb-8 text-sm">
            Let&apos;s start with step 01. We&apos;ll schedule a short audit call to look at where your business technology is lagging behind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              onClick={() => open()}
              className="btn-brand px-8 py-3.5"
            >
              Book step 01 Consultation
              <ArrowRight size={16} />
            </button>
            <Link href="/engagement" className="btn-outline px-8 py-3.5">
              Explore Pricing &amp; Engagement
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}

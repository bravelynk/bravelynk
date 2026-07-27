"use client";

import Link from "next/link";
import { ArrowLeft, Code2, Lightbulb, HardDrive, Zap, ArrowRight, ArrowUpRight } from "lucide-react";
import { useBooking } from "@/components/BookingProvider";
import { services } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";

const serviceIcons = [Code2, Lightbulb, HardDrive, Zap];

export default function ServicesClient() {
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
            What We Do
          </span>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-4">
            Four services. <span className="gradient-text">One accountable team.</span>
          </h1>
          <p className="text-muted text-base leading-relaxed sm:text-lg">
            We design, build, and support the technology your business needs to run, scale, and compete in the modern economy. No freelancers, no disappearing support.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <ScrollReveal key={s.id} delay={i * 0.08}>
                <div className="card-surface group flex h-full flex-col justify-between rounded-2xl p-8 transition-shadow duration-300 hover:shadow-card">
                  <div>
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light text-brand-blue dark:bg-white/10">
                      <Icon size={26} />
                    </div>
                    <h2 className="font-display text-2xl font-bold mb-3">{s.title}</h2>
                    <p className="text-muted text-sm leading-relaxed mb-6">{s.desc}</p>
                    
                    <div className="border-t border-black/5 pt-6 dark:border-white/10 mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-4">Key Capabilities</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {s.points.map((p) => (
                          <li key={p} className="flex items-start gap-2.5 text-sm">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue mt-1.5" />
                            <span className="leading-tight">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                    <button
                      type="button"
                      onClick={() => open(s.id)}
                      className="btn-brand text-xs px-6 py-3 flex-1 sm:flex-none justify-center"
                    >
                      Book this service
                      <ArrowRight size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => open(s.id)}
                      className="btn-outline text-xs px-6 py-3 flex-1 sm:flex-none justify-center"
                    >
                      Get a custom quote
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA Banner */}
        <section className="mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-brand-navy px-8 py-16 text-center text-white sm:px-16 sm:py-20">
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(1,140,255,0.5), transparent 70%)" }}
              aria-hidden="true"
            />
            <h2 className="font-display relative mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
              Not sure which service is right for you?
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-sm text-white/75 sm:text-base">
              Start with a free consultation or request a Risk &amp; Readiness Audit to understand your immediate technology vulnerabilities.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => open()}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-brand-navy transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Book a Consultation
                <ArrowRight size={16} />
              </button>
              <Link
                href="/engagement"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white/50"
              >
                View Engagement Models
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}

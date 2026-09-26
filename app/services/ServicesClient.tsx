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

const serviceIcons = [Smartphone, Cpu, Server, Laptop];

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
        {/* Breadcrumb */}
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
        <header className="mb-16 border-b border-black/5 pb-8 max-w-3xl">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand-blue">
            <Sparkles size={13} />
            Our Core Services
          </span>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-4 text-ink-900">
            Four core service pillars. <span className="gradient-text">One accountable team.</span>
          </h1>
          <p className="text-muted text-base leading-relaxed sm:text-lg">
            Bravelynk Digital Solutions designs and develops modern websites, web and mobile applications, AI-powered solutions, and reliable backend systems for businesses and organizations.
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
                  className="card-surface group flex h-full flex-col justify-between rounded-3xl p-8 sm:p-10 transition-all duration-300 hover:shadow-xl border border-black/10 bg-white hover:border-brand-blue/30"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-3xl sm:text-4xl font-bold text-black/15 group-hover:text-brand-blue/30 transition-colors">
                        {s.number}
                      </span>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all shadow-xs">
                        <Icon size={26} />
                      </div>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink-900 mb-3 group-hover:text-brand-blue transition-colors">
                      {s.title}
                    </h2>
                    <p className="text-muted text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {s.desc}
                    </p>

                    <div className="border-t border-black/5 pt-6 mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-4">
                        Key Capabilities
                      </p>
                      <ul className="space-y-3">
                        {s.points.map((p) => (
                          <li key={p} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-900/85">
                            <CheckCircle2 size={16} className="text-brand-blue shrink-0 mt-0.5" />
                            <span className="leading-snug">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    {s.techStack && (
                      <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-black/5">
                        {s.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-subtle px-2.5 py-1 text-[11px] font-medium text-ink-900/70 border border-black/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="pt-4 border-t border-black/5 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                      <button
                        type="button"
                        onClick={() => open(s.id)}
                        className="btn-brand text-xs px-5 py-3 flex-1 justify-center"
                      >
                        Start a Project with this Service
                        <ArrowRight size={14} />
                      </button>
                      <Link
                        href="/contact-us"
                        className="btn-outline text-xs px-5 py-3 justify-center"
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
          <div className="relative overflow-hidden rounded-3xl bg-brand-navy px-8 py-16 text-center text-white sm:px-16 sm:py-20 shadow-xl">
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(1,140,255,0.5), transparent 70%)" }}
              aria-hidden="true"
            />
            <h2 className="font-display relative mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
              Not sure which capability fits your current challenge?
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-sm text-white/75 sm:text-base">
              Start with an exploratory technical discovery call. We will review your goals, architecture, and timeline.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => open()}
                className="btn-brand bg-white text-brand-navy hover:bg-brand-light py-3.5 px-8 text-sm font-bold"
              >
                Start a Project
                <ArrowRight size={16} />
              </button>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50"
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

"use client";

import Link from "next/link";
import { ArrowLeft, Check, Sparkles, HelpCircle, ArrowRight } from "lucide-react";
import { useBooking } from "@/components/BookingProvider";
import ScrollReveal from "@/components/ScrollReveal";

const models = [
  {
    title: "Project-Based",
    desc: "Fixed-scope builds — a website, an app, an installation — quoted up front with a fixed price and timeline.",
    type: "Fixed Price",
    highlight: false,
    cta: "Start a project build",
    points: [
      "Clear deliverables agreed upfront",
      "Fixed pricing with zero scope-creep",
      "One-time project lifecycle contract",
      "Defined post-launch support window",
    ],
  },
  {
    title: "Retainer",
    desc: "Ongoing consultancy, maintenance, and support on a predictable monthly plan — for businesses that want a standing tech partner.",
    type: "Monthly Plan",
    highlight: false,
    cta: "Discuss a monthly retainer",
    points: [
      "Predictable monthly operating budget",
      "Priority SLA response times",
      "Continuous server & security audit updates",
      "On-demand developer hours included",
    ],
  },
  {
    title: "Free Risk & Readiness Audit",
    desc: "Start with a no-obligation review of your current systems, highlighting the two or three issues most likely to cost you first.",
    type: "100% Free",
    highlight: true,
    cta: "Claim my free audit",
    points: [
      "Zero cost, zero sales pressure",
      "Written audit findings delivered in days",
      "Security vulnerability inspection",
      "System reliability & latency check",
    ],
  },
];

export default function EngagementClient() {
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
            Engagement Model
          </span>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-4">
            Simple to start. <span className="gradient-text">Easy to stay with.</span>
          </h1>
          <p className="text-muted text-base leading-relaxed sm:text-lg">
            We provide transparent structures designed for the financial predictability and scalability needs of Nigerian startups, SMEs, and enterprises.
          </p>
        </header>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch mb-20">
          {models.map((m, i) => (
            <ScrollReveal key={m.title} delay={i * 0.08} className="h-full">
              <div
                className={`card-surface flex h-full flex-col justify-between rounded-2xl p-8 transition-all duration-300 relative ${
                  m.highlight
                    ? "border-brand-blue shadow-soft ring-2 ring-brand-blue/10 dark:bg-ink-800"
                    : "hover:shadow-card"
                }`}
              >
                {m.highlight && (
                  <span className="absolute -top-3.5 left-8 inline-flex items-center gap-1 rounded-full bg-brand-blue px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    <Sparkles size={11} />
                    Highly Recommended
                  </span>
                )}

                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h2 className="font-display text-2xl font-bold">{m.title}</h2>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                        m.highlight
                          ? "bg-brand-blue text-white"
                          : "bg-brand-light text-brand-blue dark:bg-white/10"
                      }`}
                    >
                      {m.type}
                    </span>
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-6 h-20 overflow-hidden">{m.desc}</p>

                  <div className="border-t border-black/5 pt-6 dark:border-white/10 mb-8">
                    <ul className="space-y-4">
                      {m.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm">
                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              m.highlight
                                ? "bg-brand-blue text-white"
                                : "bg-brand-light text-brand-blue dark:bg-white/10"
                            }`}
                          >
                            <Check size={12} />
                          </span>
                          <span className="leading-tight text-muted">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => open()}
                  className={`w-full justify-center ${m.highlight ? "btn-brand py-3.5" : "btn-outline py-3.5"}`}
                >
                  {m.cta}
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* FAQs related to Engagement */}
        <section className="bg-subtle rounded-2xl p-8 sm:p-12">
          <h2 className="font-display text-2xl font-bold mb-6 text-center">Frequently asked questions about pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="font-semibold text-sm flex gap-2 items-center text-brand-blue">
                <HelpCircle size={16} /> How is project scope defined?
              </h3>
              <p className="text-muted text-xs leading-relaxed pl-6">
                All projects start with a detailed proposal listing deliverables, timeline milestones, and total cost. Any additions outside this scope are quoted separately in advance.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-sm flex gap-2 items-center text-brand-blue">
                <HelpCircle size={16} /> Are monthly retainers flexible?
              </h3>
              <p className="text-muted text-xs leading-relaxed pl-6">
                Yes. Retainers run on rolling monthly contracts that can be scaled up or down depending on your current operational support requirements.
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}

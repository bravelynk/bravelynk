"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Smartphone,
  Cpu,
  Layers,
  ShieldCheck,
  Search,
  PenTool,
  Rocket,
  LifeBuoy,
  Server,
  Code2,
  Building2,
  Check,
  Send,
  ExternalLink,
  Laptop,
  Terminal,
  Database,
  Workflow,
  Target,
  Wrench,
  Clock,
  Zap,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useBooking } from "@/components/BookingProvider";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import {
  services,
  projects,
  processSteps,
  techCapabilities,
  whyBravelynkPillars,
  siteConfig,
  type ProjectCategory,
} from "@/lib/data";

const serviceIcons = [Smartphone, Cpu, Server, Laptop];

const categoriesList: (ProjectCategory | "All")[] = [
  "All",
  "Web Application",
  "SaaS/Product",
  "Developer Tool",
  "Business Website",
  "Sports Platform",
  "Business Platform",
];

export default function Home() {
  const { open } = useBooking();
  const [activeProcessTab, setActiveProcessTab] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "All">("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="overflow-hidden">
      {/* ── SECTION 2: HERO ────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-brand-light/40 via-white to-white">
        {/* Subtle background ambient glow */}
        <div
          className="pointer-events-none absolute -top-40 right-[-10%] h-[550px] w-[550px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(1,101,255,0.18), transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/2 left-[-15%] h-[450px] w-[450px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(1,140,255,0.15), transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="container-lynk relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Main Copy */}
            <ScrollReveal className="lg:col-span-7 space-y-8">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[62px] font-bold tracking-tight text-ink-900 leading-[1.12]">
                We Build Digital Products That <span className="gradient-text">Move Businesses Forward.</span>
              </h1>

              <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Bravelynk Digital Solutions designs and develops modern websites, web and mobile applications, AI-powered solutions, and reliable backend systems for businesses and organizations.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => open()}
                  className="btn-brand py-3.5 px-8 text-sm font-semibold tracking-wide shadow-md justify-center"
                >
                  Start a Project
                  <ArrowRight size={16} />
                </button>

                <a
                  href="#projects"
                  className="btn-outline py-3.5 px-8 text-sm font-semibold justify-center"
                >
                  View Our Work
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-black/5 flex flex-wrap items-center gap-6 sm:gap-10 text-xs text-muted font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-brand-blue" />
                  <span>Verified RC: 9270501</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-brand-blue" />
                  <span>10+ Deployments Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={18} className="text-brand-blue" />
                  <span>Lagos HQ &amp; Global Partners</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Interactive Live System Architecture Card */}
            <ScrollReveal direction="left" className="lg:col-span-5">
              <div className="relative rounded-3xl border border-black/10 bg-white/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between pb-6 border-b border-black/5">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="text-xs font-mono text-muted pl-2">bravelynk-architecture</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Production Ready
                  </span>
                </div>

                <div className="mt-6 space-y-4 font-mono text-xs">
                  <div className="rounded-xl bg-ink-900 p-5 text-slate-200 space-y-3 shadow-inner">
                    <div className="flex justify-between items-center text-slate-400 border-b border-slate-800 pb-2">
                      <span>Core Capabilities</span>
                      <span className="text-brand-skyblue">Production</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Web &amp; Mobile Apps</span>
                      <span className="text-emerald-400">Scalable &amp; Fast</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">AI-powered Solutions</span>
                      <span className="text-emerald-400">Integrated</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Backend Systems &amp; APIs</span>
                      <span className="text-emerald-400">High Reliability</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Modern High-Speed Websites</span>
                      <span className="text-emerald-400">Optimized</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="rounded-xl border border-black/5 bg-brand-light/60 p-4">
                      <p className="text-[11px] font-sans text-muted">Delivery Approach</p>
                      <p className="font-display text-lg sm:text-xl font-bold text-brand-navy mt-1">Full-Lifecycle</p>
                    </div>
                    <div className="rounded-xl border border-black/5 bg-brand-light/60 p-4">
                      <p className="text-[11px] font-sans text-muted">MVP Timeline</p>
                      <p className="font-display text-lg sm:text-xl font-bold text-brand-navy mt-1">3–6 Weeks</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between">
                  <p className="text-xs text-muted font-sans">Ready to turn your idea into reality?</p>
                  <button
                    type="button"
                    onClick={() => open()}
                    className="text-xs font-bold text-brand-blue hover:underline inline-flex items-center gap-1 font-sans"
                  >
                    Consult an Engineer
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: INTRO / VALUE PROPOSITION ─────────────────────── */}
      <section className="py-20 sm:py-24 bg-subtle border-y border-black/5">
        <div className="container-lynk">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue block">
              OUR PHILOSOPHY
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink-900 leading-tight">
              Technology should solve <span className="gradient-text">real problems.</span>
            </h2>
            <p className="text-muted text-base sm:text-xl leading-relaxed max-w-3xl mx-auto">
              Bravelynk helps businesses turn ideas, operational challenges, and digital opportunities into practical software solutions.
            </p>

            {/* Scope Coverage Pills */}
            <div className="pt-6 flex flex-wrap justify-center items-center gap-3">
              {[
                { label: "Websites", icon: Laptop },
                { label: "Web Applications", icon: Code2 },
                { label: "Mobile Applications", icon: Smartphone },
                { label: "AI Solutions", icon: Cpu },
                { label: "Backend Systems", icon: Server },
              ].map((domain) => (
                <div
                  key={domain.label}
                  className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-ink-900 shadow-2xs"
                >
                  <domain.icon size={15} className="text-brand-blue" />
                  <span>{domain.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: PRIMARY SERVICES ─────────────────────────────── */}
      <section id="services" className="py-24 sm:py-32 bg-white">
        <div className="container-lynk">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue mb-3 block">
                PRIMARY SERVICES
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink-900">
                Engineered for performance, designed for growth.
              </h2>
              <p className="text-muted text-base sm:text-lg mt-4">
                Four core engineering services focused on creating durable, high-impact digital solutions for businesses.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:underline"
            >
              Explore all details
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, idx) => {
              const ServiceIcon = serviceIcons[idx] || Code2;
              return (
                <ScrollReveal key={s.id} delay={idx * 0.08}>
                  <div className="card-surface h-full rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300 border border-black/10 bg-white group">
                    <div>
                      {/* Number and Icon Header */}
                      <div className="flex items-center justify-between mb-8">
                        <span className="font-mono text-3xl sm:text-4xl font-bold text-black/10 group-hover:text-brand-blue/30 transition-colors">
                          {s.number}
                        </span>
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all shadow-xs">
                          <ServiceIcon size={26} />
                        </div>
                      </div>

                      <h3 className="font-display text-2xl font-bold text-ink-900 mb-3 group-hover:text-brand-blue transition-colors">
                        {s.title}
                      </h3>

                      <p className="text-muted text-sm sm:text-base leading-relaxed mb-6 font-normal">
                        {s.desc}
                      </p>

                      {/* Capabilities Bullet Points */}
                      <div className="space-y-2.5 mb-8 border-t border-black/5 pt-6">
                        {s.points.map((pt) => (
                          <div key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-900/80">
                            <CheckCircle2 size={16} className="text-brand-blue shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Tech Stack Pills */}
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

                      <div className="flex items-center justify-between pt-4 border-t border-black/5">
                        <Link
                          href={`/services#${s.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:underline group/link"
                        >
                          Learn More
                          <ArrowRight size={13} className="group-link-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => open(s.id)}
                          className="btn-outline py-2 px-4 text-xs font-semibold"
                        >
                          Start Build
                        </button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SELECTED WORK / PROJECTS WE'VE BUILT ──────────── */}
      <section id="projects" className="py-24 sm:py-32 bg-subtle border-t border-black/5">
        <div className="container-lynk">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue mb-3 block">
                SELECTED WORK
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink-900">
                Projects We&apos;ve Built
              </h2>
              <p className="text-muted text-base sm:text-lg mt-3 max-w-2xl">
                Explore real digital products, web applications, developer utilities, and business platforms designed and developed by Bravelynk.
              </p>
            </div>
            <Link
              href="/client-stories"
              className="btn-outline py-3 px-6 text-xs font-semibold justify-center shrink-0"
            >
              View Full Portfolio
            </Link>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-black/5">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${selectedCategory === cat
                    ? "bg-brand-blue text-white shadow-soft"
                    : "bg-white text-ink-900/80 border border-black/10 hover:border-brand-blue/30"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dynamic Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p, idx) => (
              <ScrollReveal key={p.id} delay={idx * 0.05}>
                <ProjectCard project={p} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: TECHNOLOGY / CAPABILITIES ──────────────────────── */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container-lynk">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue mb-3 block">
              CAPABILITIES &amp; STACK
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink-900">
              Modern Engineering Stack
            </h2>
            <p className="text-muted text-base mt-3">
              We focus on battle-tested frameworks and engineering practices that deliver speed, maintainability, and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <ScrollReveal delay={0.05}>
              <div className="rounded-3xl border border-black/10 bg-white p-8 sm:p-10 shadow-soft h-full flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light text-brand-blue">
                    <Laptop size={26} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink-900 mb-2">
                    {techCapabilities.frontend.title}
                  </h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed mb-6">
                    {techCapabilities.frontend.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-black/5">
                  <div className="flex flex-wrap gap-2">
                    {techCapabilities.frontend.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg bg-subtle px-3 py-1.5 text-xs font-semibold text-ink-900 border border-black/5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Backend */}
            <ScrollReveal delay={0.1}>
              <div className="rounded-3xl border border-black/10 bg-white p-8 sm:p-10 shadow-soft h-full flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light text-brand-blue">
                    <Server size={26} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink-900 mb-2">
                    {techCapabilities.backend.title}
                  </h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed mb-6">
                    {techCapabilities.backend.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-black/5">
                  <div className="flex flex-wrap gap-2">
                    {techCapabilities.backend.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg bg-subtle px-3 py-1.5 text-xs font-semibold text-ink-900 border border-black/5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* AI */}
            <ScrollReveal delay={0.15}>
              <div className="rounded-3xl border border-black/10 bg-white p-8 sm:p-10 shadow-soft h-full flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light text-brand-blue">
                    <Cpu size={26} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink-900 mb-2">
                    {techCapabilities.ai.title}
                  </h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed mb-6">
                    {techCapabilities.ai.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-black/5">
                  <div className="flex flex-wrap gap-2">
                    {techCapabilities.ai.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg bg-subtle px-3 py-1.5 text-xs font-semibold text-ink-900 border border-black/5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: DEVELOPMENT PROCESS ──────────────────────────── */}
      <section id="process" className="py-24 sm:py-32 bg-subtle border-y border-black/5">
        <div className="container-lynk">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue mb-3 block">
              DEVELOPMENT PROCESS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink-900">
              A structured 5-step development lifecycle
            </h2>
            <p className="text-muted mt-4 text-base sm:text-lg leading-relaxed">
              We guide your product vision through a transparent and predictable lifecycle from discovery to continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((p, idx) => {
              const icons = [Search, PenTool, Rocket, Zap, LifeBuoy];
              const StepIcon = icons[idx];
              const isSelected = activeProcessTab === idx;

              return (
                <ScrollReveal key={p.step} delay={idx * 0.08}>
                  <div
                    onClick={() => setActiveProcessTab(idx)}
                    className={`card-surface h-full rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer border ${isSelected
                        ? "border-brand-blue shadow-soft ring-2 ring-brand-blue/15 bg-brand-light/30"
                        : "border-black/5 hover:border-black/15 hover:shadow-card bg-white"
                      }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-3xl font-bold text-black/15">
                          {p.step}
                        </span>
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${isSelected
                              ? "bg-brand-blue text-white"
                              : "bg-brand-light text-brand-blue"
                            }`}
                        >
                          <StepIcon size={20} />
                        </div>
                      </div>

                      <h3 className="font-display text-lg font-bold text-ink-900 mb-2.5">
                        {p.title}
                      </h3>

                      <p className="text-muted text-xs leading-relaxed mb-6 font-normal">
                        {p.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-black/5 space-y-2">
                      {p.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-[11px] text-ink-900/80">
                          <Check size={12} className="text-brand-blue shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={() => open()}
              className="btn-brand py-3.5 px-8 text-sm font-semibold tracking-wide"
            >
              Start Building With Us
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: WHY BRAVELYNK ─────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container-lynk">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">
                THE BRAVELYNK APPROACH
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink-900">
                Why partner with Bravelynk?
              </h2>
              <p className="text-muted text-base leading-relaxed">
                Too many businesses struggle with software that fails to solve the real operational bottleneck, or systems that collapse when scale demands them most.
              </p>
              <p className="text-muted text-base leading-relaxed">
                We engineer digital solutions with clarity, technical rigor, and honest accountability.
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => open()}
                  className="btn-brand py-3.5 px-8 text-sm font-semibold"
                >
                  Start a Project
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyBravelynkPillars.map((pillar, idx) => (
                <ScrollReveal key={pillar.title} delay={idx * 0.08}>
                  <div className="rounded-2xl border border-black/10 bg-subtle/60 p-7 h-full flex flex-col justify-between hover:bg-white hover:border-brand-blue/30 hover:shadow-card transition-all">
                    <div>
                      <div className="h-2 w-8 bg-brand-blue rounded-full mb-4" />
                      <h3 className="font-display text-xl font-bold text-ink-900 mb-2.5">
                        {pillar.title}
                      </h3>
                      <p className="text-muted text-xs sm:text-sm leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: ABOUT BRAVELYNK ───────────────────────────────── */}
      <section id="about" className="py-24 sm:py-32 bg-subtle border-y border-black/5">
        <div className="container-lynk">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">
                ABOUT BRAVELYNK
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink-900">
                A digital solutions company focused on building useful technology.
              </h2>
              <p className="text-muted text-base leading-relaxed">
                Bravelynk works with businesses, organizations, entrepreneurs, and product teams to turn ideas and operational challenges into robust digital products.
              </p>
              <p className="text-muted text-base leading-relaxed">
                From our registered headquarters at {siteConfig.location} ({siteConfig.rc}), we design, architect, deploy, and maintain custom web, mobile, AI, and backend platforms that deliver lasting business value.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-black/10">
                <div>
                  <p className="font-display text-3xl font-bold text-brand-blue">10+</p>
                  <p className="text-xs text-muted mt-1 uppercase tracking-wide">Delivered Solutions</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-brand-blue">99.8%</p>
                  <p className="text-xs text-muted mt-1 uppercase tracking-wide">Production-Tested</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-brand-navy p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
                <div
                  className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full opacity-30 blur-2xl"
                  style={{ background: "radial-gradient(circle, rgba(1,140,255,0.7), transparent 70%)" }}
                />
                <h3 className="font-display text-2xl font-bold mb-6">Our Engineering Standards</h3>
                <ul className="space-y-4 text-sm text-white/90">
                  {[
                    "Plain-language communication with direct lead engineer access",
                    "Modular, clean codebases designed for scale and future evolutions",
                    "Security-first engineering protocols across APIs and databases",
                    "Accountable post-deployment maintenance and SLA uptime guarantees",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-brand-skyblue shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-skyblue hover:underline"
                  >
                    Read full company story
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: TELEGRAM COMMUNITY SECTION ───────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-lynk">
          <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-subtle via-white to-brand-light/30 p-8 sm:p-14 shadow-soft">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0088cc]/10 border border-[#0088cc]/20 px-4 py-1.5 text-xs font-semibold text-[#0088cc]">
                <Send size={14} />
                <span>Bravelynk Community</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink-900">
                Join our Telegram engineering community
              </h2>

              <p className="text-muted text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                Connect directly with Nigerian developers, engineering teams, and tech leaders. We share architectural teardowns, technical contracts, and live tech audit sessions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
                <a
                  href={siteConfig.communityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-black/10 bg-white p-5 hover:border-[#0088cc] hover:shadow-card transition-all group"
                >
                  <p className="font-bold text-sm text-ink-900 group-hover:text-[#0088cc] transition-colors flex items-center justify-between">
                    <span>Engineering Community</span>
                    <ArrowUpRight size={14} />
                  </p>
                  <p className="text-muted text-xs mt-1">Production discussions and open-source tooling</p>
                </a>

                <a
                  href={siteConfig.communityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-black/10 bg-white p-5 hover:border-[#0088cc] hover:shadow-card transition-all group"
                >
                  <p className="font-bold text-sm text-ink-900 group-hover:text-[#0088cc] transition-colors flex items-center justify-between">
                    <span>Talent &amp; Project Board</span>
                    <ArrowUpRight size={14} />
                  </p>
                  <p className="text-muted text-xs mt-1">Vetted engineering contracts and MVP builds</p>
                </a>

                <a
                  href={siteConfig.communityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-black/10 bg-white p-5 hover:border-[#0088cc] hover:shadow-card transition-all group"
                >
                  <p className="font-bold text-sm text-ink-900 group-hover:text-[#0088cc] transition-colors flex items-center justify-between">
                    <span>Webinars &amp; Tech Audits</span>
                    <ArrowUpRight size={14} />
                  </p>
                  <p className="text-muted text-xs mt-1">Virtual deep-dives on systems stability and AI</p>
                </a>
              </div>

              <div className="pt-4">
                <a
                  href={siteConfig.communityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brand bg-[#0088cc] hover:bg-[#0077b5] py-3.5 px-8 text-sm font-semibold inline-flex items-center gap-2"
                >
                  <Send size={16} />
                  Join Our Telegram Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: CLOSING CTA ──────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-subtle border-t border-black/5">
        <div className="container-lynk">
          <div className="relative overflow-hidden rounded-3xl bg-brand-navy px-8 py-16 text-white sm:px-16 sm:py-20 shadow-2xl text-center">
            {/* Ambient gradients */}
            <div
              className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full opacity-35 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(1,140,255,0.6), transparent 70%)" }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full opacity-35 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(1,101,255,0.6), transparent 70%)" }}
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-skyblue block">
                LET&apos;S BUILD TOGETHER
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
                Have an idea worth building?
              </h2>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
                Let&apos;s turn your idea, business challenge, or digital opportunity into a working product.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => open()}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand-navy shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                >
                  Start a Project
                  <ArrowRight size={16} />
                </button>

                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60 w-full sm:w-auto"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: CONTACT SECTION ──────────────────────────────── */}
      <section id="contact" className="py-24 sm:py-32 bg-white">
        <div className="container-lynk">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue mb-3 block">
                  GET IN TOUCH
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-900">
                  Let&apos;s discuss your project
                </h2>
                <p className="text-muted text-sm sm:text-base mt-3 leading-relaxed">
                  Tell us about your project or technical challenge. An engineering lead will review your specifications and reply within one business day.
                </p>
              </div>

              <div className="rounded-3xl border border-black/10 bg-subtle p-8 space-y-6 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand-blue">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-ink-900">Office Address</p>
                    <p className="text-muted leading-relaxed mt-0.5">{siteConfig.location}</p>
                    <p className="text-[11px] text-brand-blue font-semibold mt-1">{siteConfig.rc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand-blue">
                    <Globe size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-ink-900">Email Inquiries</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-brand-blue hover:underline">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand-blue">
                    <Smartphone size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-ink-900">Phone &amp; WhatsApp</p>
                    <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-brand-blue hover:underline">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Booking Card */}
              <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-900 mb-2">Prefer a live video call?</p>
                <p className="text-xs text-muted mb-4 leading-relaxed">
                  Schedule a direct 30-minute virtual consultation with an engineering lead on our calendar.
                </p>
                <button
                  type="button"
                  onClick={() => open()}
                  className="btn-outline w-full py-2.5 text-xs font-semibold justify-center hover:bg-brand-blue hover:text-white hover:border-brand-blue"
                >
                  Schedule Virtual Scoping Call
                </button>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

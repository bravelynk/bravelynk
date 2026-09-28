"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useBooking } from "@/components/BookingProvider";
import ProjectCard from "@/components/ProjectCard";
import HeroBackground from "@/components/HeroBackground";
import { projects, type ProjectCategory } from "@/lib/data";

const categories: (ProjectCategory | "All")[] = [
  "All",
  "Web Application",
  "SaaS/Product",
  "Developer Tool",
  "Business Website",
  "Sports Platform",
  "Business Platform",
];

export default function ClientStoriesPage() {
  const { open } = useBooking();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "All">("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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

        {/* ── Header ── */}
        <section className="container-lynk mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-mono text-slate-300 mb-4">
              <Sparkles size={14} className="text-brand-skyblue" />
              <span>SELECTED WORK &amp; PORTFOLIO</span>
            </div>
            <h1 className="font-kanit font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-[1.05] mb-5">
              <span className="jack-hero-gradient block sm:inline">Digital Products Built For </span>
              <span className="jack-hero-accent">Businesses &amp; Users.</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
              Real systems deployed into production. Explore web applications, digital platforms, developer utilities, and business websites built by Bravelynk Digital Solutions.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2 pt-8 border-t border-white/10 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-brand-blue to-brand-skyblue text-white shadow-[0_0_15px_rgba(1,101,255,0.4)]"
                    : "bg-white/[0.04] text-slate-300 border border-white/10 hover:border-brand-skyblue/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* ── Projects Grid ── */}
        <section className="container-lynk mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p, idx) => (
              <ScrollReveal key={p.id} delay={idx * 0.06}>
                <ProjectCard project={p} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="container-lynk">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#14151B] to-[#0A0B0E] p-8 sm:p-14 text-center text-white shadow-2xl">
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(1,140,255,0.5), transparent 70%)" }}
              aria-hidden="true"
            />
            <h2 className="font-kanit font-black text-3xl sm:text-4xl uppercase tracking-tight mb-4 text-white">
              Have an idea worth building?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
              Let&apos;s turn your idea, business challenge, or digital opportunity into a working, scalable product.
            </p>
            <button
              type="button"
              onClick={() => open()}
              className="py-3.5 px-8 text-sm font-bold rounded-full bg-white text-ink-900 hover:bg-slate-100 transition-all shadow-md inline-flex items-center gap-2"
            >
              Start a Project
              <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

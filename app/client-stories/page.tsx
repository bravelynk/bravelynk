"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useBooking } from "@/components/BookingProvider";
import ProjectCard from "@/components/ProjectCard";
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
    <div className="pt-36 pb-24 overflow-hidden">
      {/* ── Breadcrumb ── */}
      <div className="container-lynk mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-brand-blue transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>

      {/* ── Header ── */}
      <section className="container-lynk mb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-3.5 py-1.5 text-xs font-semibold text-brand-blue mb-4">
            <Sparkles size={14} />
            Selected Work &amp; Portfolio
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-ink-900 leading-[1.12] mb-6">
            Digital products built for <span className="gradient-text">businesses &amp; users.</span>
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            Real systems deployed into production. Explore web applications, digital platforms, developer utilities, and business websites built by Bravelynk Digital Solutions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-8 border-t border-black/5 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-brand-blue text-white shadow-soft"
                  : "bg-subtle text-ink-900/80 border border-black/5 hover:border-brand-blue/30"
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
        <div className="relative overflow-hidden rounded-3xl bg-brand-navy p-8 sm:p-14 text-center text-white shadow-xl">
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(1,140,255,0.5), transparent 70%)" }}
            aria-hidden="true"
          />
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Have an idea worth building?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
            Let&apos;s turn your idea, business challenge, or digital opportunity into a working product.
          </p>
          <button
            type="button"
            onClick={() => open()}
            className="btn-brand bg-white text-brand-navy hover:bg-brand-light py-3.5 px-8 text-sm font-bold inline-flex items-center gap-2"
          >
            Start a Project
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}

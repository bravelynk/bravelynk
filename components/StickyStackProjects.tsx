"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Globe,
  Laptop,
  Terminal,
  Shield,
  Trophy,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { projects, type Project, type ProjectCategory } from "@/lib/data";

const categoryIcons: Record<string, typeof Globe> = {
  "Web Application": Laptop,
  "Business Website": Globe,
  "Developer Tool": Terminal,
  "SaaS/Product": Shield,
  "Sports Platform": Trophy,
  "Business Platform": Globe,
};

const categoriesList: (ProjectCategory | "All")[] = [
  "All",
  "Web Application",
  "SaaS/Product",
  "Developer Tool",
  "Business Website",
  "Sports Platform",
  "Business Platform",
];

interface CardProps {
  project: Project;
  index: number;
  total: number;
}

function StackCard({ project, index, total }: CardProps) {
  const Icon = categoryIcons[project.category] || Globe;
  let domain = "";
  try {
    const urlObj = new URL(project.url);
    domain = urlObj.hostname;
  } catch {
    domain = project.url;
  }

  // Calculate sticky stacking top offset so each subsequent card rests slightly below
  const topOffset = 100 + index * 16;

  return (
    <div
      style={{ top: `${topOffset}px` }}
      className="sticky mb-12 sm:mb-16 rounded-3xl border border-white/15 bg-gradient-to-b from-[#14151B] to-[#0D0E12] p-6 sm:p-8 lg:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(1,101,255,0.08)] backdrop-blur-2xl transition-all duration-300 hover:border-brand-skyblue/40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Project Details */}
        <div className="lg:col-span-6 space-y-6">
          {/* Header Row: Index & Category */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-kanit font-black text-2xl sm:text-3xl text-slate-500 tracking-tight">
                0{index + 1}
              </span>
              <span className="text-white/20">/</span>
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                0{total}
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3.5 py-1 text-xs font-semibold text-brand-skyblue">
              <Icon size={13} />
              {project.category}
            </span>
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="font-kanit font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-snug">
              {project.title}
            </h3>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-2 pt-1 border-t border-white/10">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 size={15} className="text-brand-skyblue shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/[0.05] border border-white/10 px-3 py-1 text-[11px] font-medium text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white text-ink-900 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-brand-skyblue hover:text-white hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] active:scale-95"
            >
              <span>Explore Live Deployment</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* Right Side: High-Tech Browser Frame Preview */}
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#090A0D] shadow-2xl">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-black/40 border border-white/10 px-3 py-0.5 text-[11px] font-mono text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="truncate max-w-[170px] sm:max-w-[240px]">{domain}</span>
              </div>
              <span className="text-slate-500">
                <Icon size={14} />
              </span>
            </div>

            {/* Visual Canvas */}
            <div className="relative min-h-[220px] sm:min-h-[260px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0E1017] via-[#090A0E] to-[#040507]">
              {/* Background ambient mesh */}
              <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-brand-blue/30 blur-3xl" />

              <div className="relative z-10 flex justify-between items-start">
                <span className="font-mono text-xs text-brand-skyblue uppercase tracking-wider">
                  Production Release
                </span>
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[10px] font-mono font-medium text-emerald-400">
                  HTTP 200 OK
                </span>
              </div>

              <div className="relative z-10 my-6">
                <div className="font-kanit font-bold text-3xl sm:text-4xl text-white tracking-tight">
                  {project.title}
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Sparkles size={12} className="text-amber-400" />
                  <span>Production Engineered by Bravelynk</span>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] font-mono text-slate-400">
                <span>SSL Encrypted</span>
                <span className="text-brand-skyblue font-semibold">Latency: ~15ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StickyStackProjects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "All">("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#0C0C0C] text-white">
      <div className="container-lynk relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-mono text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-skyblue" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>

          <h2 className="font-kanit font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-tight">
            <span className="jack-hero-gradient">Production Work &amp; </span>
            <span className="jack-hero-accent">Proven Builds</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Every platform we build is engineered for high concurrency, flawless responsiveness,
            and enterprise security. Browse selected live deployments below.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-4">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-brand-blue text-white shadow-[0_0_20px_rgba(1,101,255,0.4)] scale-105"
                    : "bg-white/[0.05] text-slate-400 border border-white/10 hover:border-white/25 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Sticky Stacking Track ── */}
        <div className="relative">
          {filteredProjects.map((project, idx) => (
            <StackCard
              key={project.id}
              project={project}
              index={idx}
              total={filteredProjects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

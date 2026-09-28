"use client";

import { useState } from "react";
import { ArrowUpRight, ExternalLink, Globe, Laptop, Smartphone, Terminal, Shield, Trophy } from "lucide-react";
import type { Project } from "@/lib/data";

const categoryIcons: Record<string, typeof Globe> = {
  "Web Application": Laptop,
  "Business Website": Globe,
  "Developer Tool": Terminal,
  "SaaS/Product": Shield,
  "Sports Platform": Trophy,
  "Business Platform": Globe,
};

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = categoryIcons[project.category] || Globe;
  const [isHovered, setIsHovered] = useState(false);

  // Extract a clean domain / display text for the browser frame
  let domain = "";
  try {
    const urlObj = new URL(project.url);
    domain = urlObj.hostname;
  } catch {
    domain = project.url;
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#121316]/90 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-skyblue/40 hover:shadow-[0_0_35px_rgba(1,101,255,0.25)] text-white"
    >
      {/* ── Top Browser / App Chrome Frame ── */}
      <div className="relative border-b border-white/10 bg-white/[0.03] p-4">
        {/* Fake window buttons */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600 transition-colors group-hover:bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600 transition-colors group-hover:bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600 transition-colors group-hover:bg-emerald-400/80" />
          </div>

          <div className="flex items-center gap-1.5 rounded-full bg-white/[0.05] px-3 py-0.5 text-[11px] font-mono text-slate-300 border border-white/10 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="truncate max-w-[170px] sm:max-w-[210px]">{domain}</span>
          </div>

          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-skyblue">
            <Icon size={13} />
          </span>
        </div>

        {/* Visual Preview Banner */}
        <div className="relative h-44 w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-[#0C1222] to-[#0A0D14] p-5 flex flex-col justify-between text-white shadow-inner border border-white/10">
          {/* Subtle grid pattern background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-15"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />

          {/* Ambient glow on hover */}
          <div
            className={`pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-brand-blue/30 blur-2xl transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-30"
            }`}
          />

          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-medium backdrop-blur-md">
              <Icon size={12} className="text-brand-skyblue" />
              {project.category}
            </span>

            {project.featured && (
              <span className="rounded-md bg-brand-blue px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                Featured
              </span>
            )}
          </div>

          <div className="relative z-10">
            <h4 className="font-kanit text-xl font-bold tracking-tight text-white group-hover:text-brand-skyblue transition-colors">
              {project.title}
            </h4>
            <p className="mt-1 line-clamp-1 text-xs text-slate-400 font-mono">
              {project.highlights?.[0] || domain}
            </p>
          </div>
        </div>
      </div>

      {/* ── Content Body ── */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-brand-skyblue">
              {project.category}
            </span>
          </div>

          <h3 className="font-kanit text-xl font-bold text-white mb-2 leading-snug group-hover:text-brand-skyblue transition-colors">
            {project.title}
          </h3>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {project.disclaimer && (
            <p className="text-[11px] italic text-slate-400 mb-4 bg-white/[0.03] p-2.5 rounded-lg border border-white/10">
              * {project.disclaimer}
            </p>
          )}

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6 space-y-2">
              {project.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-skyblue shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Technologies & View Button Footer */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-6 border-t border-white/10 pt-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-white/[0.05] px-2.5 py-1 text-[11px] font-mono text-slate-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full justify-center text-xs py-2.5 font-semibold rounded-full border border-white/15 bg-white/[0.04] text-white hover:bg-brand-blue hover:border-brand-blue transition-all inline-flex items-center gap-1.5 group/btn"
            aria-label={`View live project ${project.title}`}
          >
            <span>View Live Project</span>
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

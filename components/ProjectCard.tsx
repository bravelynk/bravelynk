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
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-xl"
    >
      {/* ── Top Browser / App Chrome Frame ── */}
      <div className="relative border-b border-black/5 bg-subtle/80 p-4">
        {/* Fake window buttons */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 transition-colors group-hover:bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 transition-colors group-hover:bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 transition-colors group-hover:bg-emerald-400/80" />
          </div>

          <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-0.5 text-[11px] font-mono text-muted border border-black/5 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="truncate max-w-[170px] sm:max-w-[210px]">{domain}</span>
          </div>

          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-blue">
            <Icon size={13} />
          </span>
        </div>

        {/* Visual Preview Banner */}
        <div className="relative h-44 w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-brand-navy to-ink-900 p-5 flex flex-col justify-between text-white shadow-inner">
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
            <h4 className="font-display text-xl font-bold tracking-tight text-white group-hover:text-brand-skyblue transition-colors">
              {project.title}
            </h4>
            <p className="mt-1 line-clamp-1 text-xs text-white/70 font-mono">
              {project.highlights?.[0] || domain}
            </p>
          </div>
        </div>
      </div>

      {/* ── Content Body ── */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              {project.category}
            </span>
          </div>

          <h3 className="font-display text-xl font-bold text-ink-900 mb-2 leading-snug group-hover:text-brand-blue transition-colors">
            {project.title}
          </h3>

          <p className="text-muted text-xs sm:text-sm leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {project.disclaimer && (
            <p className="text-[11px] italic text-slate-500 mb-4 bg-slate-50 p-2 rounded border border-slate-200">
              * {project.disclaimer}
            </p>
          )}

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6 space-y-1.5">
              {project.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-xs text-ink-900/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Technologies & View Button Footer */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-6 border-t border-black/5 pt-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-subtle px-2.5 py-1 text-[11px] font-medium text-ink-900/75 border border-black/5"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full justify-center text-xs py-2.5 font-semibold group/btn hover:bg-brand-blue hover:text-white hover:border-brand-blue"
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

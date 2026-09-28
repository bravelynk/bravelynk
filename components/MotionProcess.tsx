"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  PenTool,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { processSteps } from "@/lib/data";
import { useBooking } from "@/components/BookingProvider";

const processIcons = [Search, PenTool, Terminal, Rocket, Sparkles];

export default function MotionProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const { open } = useBooking();
  const current = processSteps[activeStep] || processSteps[0];
  const CurrentIcon = processIcons[activeStep % processIcons.length] || Rocket;

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#0C0C0C] text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -bottom-32 left-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.4) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-lynk relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-mono text-slate-300">
            <Terminal size={12} className="text-brand-skyblue" />
            <span>HOW WE ENGINEER</span>
          </div>

          <h2 className="font-kanit font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-tight">
            <span className="jack-hero-gradient">Predictable, Transparent </span>
            <span className="jack-hero-accent">Delivery</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            No endless delays or scope surprises. We engineer products using clear, accountable
            milestones from initial architectural design to live global deployment.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
          {processSteps.map((step, idx) => {
            const Icon = processIcons[idx % processIcons.length] || Rocket;
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`relative rounded-2xl border p-5 text-left transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "border-brand-skyblue/60 bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-[0_0_30px_rgba(56,189,248,0.15)] ring-1 ring-brand-skyblue/30"
                    : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-kanit font-black text-xl sm:text-2xl ${
                      isSelected ? "text-brand-skyblue" : "text-slate-600"
                    }`}
                  >
                    {step.step}
                  </span>
                  <div
                    className={`h-9 w-9 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-brand-blue text-white shadow-[0_0_15px_rgba(1,101,255,0.5)]"
                        : "bg-white/[0.05] text-slate-400"
                    }`}
                  >
                    <Icon size={16} />
                  </div>
                </div>

                <div>
                  <div className="font-kanit font-bold text-lg text-white tracking-tight">
                    {step.title}
                  </div>
                  <p className="text-slate-400 text-xs mt-1 line-clamp-1">
                    {step.highlights[0]}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-[#14151B] to-[#0A0B0E] p-8 sm:p-12 shadow-2xl backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-skyblue/30 bg-brand-skyblue/10 px-3.5 py-1 text-xs font-mono font-semibold text-brand-skyblue">
                <CurrentIcon size={13} />
                <span>PHASE {current.step} — {current.title.toUpperCase()}</span>
              </div>

              <h3 className="font-kanit font-black text-3xl sm:text-4xl text-white tracking-tight">
                {current.title}: {current.desc}
              </h3>

              {/* Highlights checklist */}
              <div className="space-y-3 pt-2">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-brand-skyblue shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => open()}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-[0_0_25px_rgba(1,101,255,0.4)] hover:bg-brand-skyblue transition-colors active:scale-95"
                >
                  <span>Book Scoping Session</span>
                  <ArrowRight size={15} />
                </button>
                <span className="text-xs font-mono text-slate-400">
                  Complimentary Architecture Review
                </span>
              </div>
            </div>

            {/* Right Interactive Architecture Spec */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-[#08090C] p-6 font-mono text-xs text-slate-300 shadow-inner space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-slate-500">
                  <span>pipeline_spec.yaml</span>
                  <span className="text-emerald-400 font-semibold">Stage {current.step}/05</span>
                </div>
                <div className="space-y-1.5 text-[11px] leading-relaxed">
                  <p>
                    <span className="text-brand-skyblue">step:</span> {current.title.toLowerCase()}
                  </p>
                  <p>
                    <span className="text-purple-400">governance:</span> agile-sprint-v4
                  </p>
                  <p>
                    <span className="text-amber-400">deliverables:</span>
                  </p>
                  {current.highlights.map((item, i) => (
                    <p key={i} className="pl-4 text-slate-400">
                      - {item}
                    </p>
                  ))}
                  <p className="pt-2 text-emerald-400">
                    status: <span className="text-white">production_approved</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

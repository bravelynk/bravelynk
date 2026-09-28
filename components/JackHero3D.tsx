"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Globe,
  Terminal,
  Activity,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { useBooking } from "@/components/BookingProvider";
import HeroBackground from "@/components/HeroBackground";

export default function JackHero3D() {
  const { open } = useBooking();
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for 3D tilt physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for buttery motion
  const springConfig = { damping: 24, stiffness: 220, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springConfig);

  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isMobile) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);

    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY, opacity: 0.25 });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-36 bg-[#0C0C0C] text-white overflow-hidden flex flex-col justify-center">
      {/* ── Ambient Radial Lighting & Cyber Grid Background ── */}
      <HeroBackground />

      <div className="container-lynk relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ── Left Column: Signature 3D Jack Typography & Copy ── */}
          <div className="lg:col-span-7 space-y-7">

            {/* Massive Signature Kanit Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="space-y-1 sm:space-y-2"
            >
              <h1 className="font-kanit font-black text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem] tracking-tight uppercase leading-[0.96] text-white">
                <span className="jack-hero-gradient block">We Build</span>
                <span className="jack-hero-gradient-silver block">Digital Products</span>
                <span className="jack-hero-accent block">That Scale.</span>
              </h1>
            </motion.div>

            {/* Clean Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-slate-300/90 text-base sm:text-lg lg:text-xl font-normal max-w-xl leading-relaxed"
            >
              Bravelynk Digital Solutions engineers modern websites, scalable web &amp; mobile
              applications, intelligent AI workflows, and resilient enterprise cloud backends.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                type="button"
                onClick={() => open()}
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-skyblue px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-[0_0_30px_rgba(1,101,255,0.4)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(1,101,255,0.65)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.08] hover:border-white/30 hover:text-white active:scale-[0.98]"
              >
                <span>Explore Works</span>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-9 text-xs font-medium text-slate-400"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-brand-skyblue" />
                <span>Verified RC: 9270501</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-brand-skyblue" />
                <span>10+ Production Deployments</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={17} className="text-brand-skyblue" />
                <span>Lagos HQ • Global Clients</span>
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: Interactive 3D Perspective Card ── */}
          <div className="lg:col-span-5 flex justify-center perspective-1000">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX: isMobile ? 0 : rotateX,
                rotateY: isMobile ? 0 : rotateY,
                transformStyle: "preserve-3d",
              }}
              animate={
                isMobile
                  ? {
                      y: [0, -10, 0],
                      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    }
                  : undefined
              }
              className="relative w-full max-w-[480px] rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.09] via-white/[0.03] to-white/[0.01] p-6 sm:p-7 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_50px_rgba(1,101,255,0.15)] backdrop-blur-2xl transition-shadow duration-300 hover:border-brand-skyblue/40 cursor-grab active:cursor-grabbing select-none"
            >
              {/* Dynamic Specular Glare */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle 380px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.15), transparent 70%)`,
                  opacity: glarePosition.opacity,
                }}
              />

              {/* 3D Window Chrome */}
              <div
                className="flex items-center justify-between pb-4 border-b border-white/10"
                style={{ transform: "translateZ(25px)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-slate-400 pl-2">
                    bravelynk.sys // core-v4
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE 99.98%
                </span>
              </div>

              {/* 3D Floating Architecture Box */}
              <div className="mt-5 space-y-4 font-mono text-xs">
                {/* Active Terminal Diagnostics */}
                <div
                  className="rounded-2xl bg-[#08090C]/90 border border-white/10 p-5 space-y-3 shadow-inner"
                  style={{ transform: "translateZ(35px)" }}
                >
                  <div className="flex justify-between items-center text-slate-400 border-b border-white/5 pb-2 text-[11px]">
                    <span className="flex items-center gap-1.5 text-brand-skyblue">
                      <Terminal size={13} />
                      engine.pipeline.ts
                    </span>
                    <span className="text-emerald-400 font-semibold">Ready</span>
                  </div>

                  <div className="space-y-1.5 text-slate-300 font-mono text-[11px] sm:text-xs">
                    <p className="text-slate-400">
                      <span className="text-brand-blue font-bold">&gt;</span> target: production-cluster
                    </p>
                    <p className="text-slate-300">
                      <span className="text-emerald-400">✓</span> next.js 14 app router initialized
                    </p>
                    <p className="text-slate-300">
                      <span className="text-emerald-400">✓</span> microservices latency:{" "}
                      <span className="text-brand-skyblue font-semibold">14ms</span>
                    </p>
                    <p className="text-slate-300">
                      <span className="text-emerald-400">✓</span> distributed cache: operational
                    </p>
                  </div>
                </div>

                {/* 3D Live Metrics Grid */}
                <div
                  className="grid grid-cols-2 gap-3"
                  style={{ transform: "translateZ(45px)" }}
                >
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-md">
                    <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
                      <span>Cloud Latency</span>
                      <Activity size={13} className="text-brand-skyblue" />
                    </div>
                    <div className="text-lg font-kanit font-bold text-white tracking-tight">
                      14.2ms
                    </div>
                    <p className="text-[10px] text-emerald-400 mt-0.5">Ultra-fast edge CDN</p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-md">
                    <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
                      <span>Architecture</span>
                      <Cpu size={13} className="text-purple-400" />
                    </div>
                    <div className="text-lg font-kanit font-bold text-white tracking-tight">
                      Zero-Loss
                    </div>
                    <p className="text-[10px] text-purple-300 mt-0.5">Failover automated</p>
                  </div>
                </div>

                {/* 3D Floating Tech Badges */}
                <div
                  className="flex flex-wrap gap-2 pt-1"
                  style={{ transform: "translateZ(55px)" }}
                >
                  {["Next.js", "AI Agents", "TypeScript", "Node.js", "PostgreSQL", "Docker"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/[0.06] border border-white/15 px-3 py-1 text-[11px] font-medium text-slate-200 backdrop-blur-md transition-colors hover:border-brand-skyblue/60 hover:text-brand-skyblue"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Bottom Subtle Reflection Line */}
              <div
                className="mt-6 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-3 border-t border-white/10"
                style={{ transform: "translateZ(20px)" }}
              >
                <span className="flex items-center gap-1.5">
                  <Sparkles size={12} className="text-amber-400" />
                  Bravelynk Digital Solutions
                </span>
                <span className="text-slate-500">Lagos • London</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

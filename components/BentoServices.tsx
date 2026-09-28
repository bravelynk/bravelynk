"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  Smartphone,
  Cpu,
  Server,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";
import { services } from "@/lib/data";
import { useBooking } from "@/components/BookingProvider";

const serviceIcons = [Laptop, Smartphone, Cpu, Server];

export default function BentoServices() {
  const { open } = useBooking();

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#090A0E] text-white overflow-hidden">
      {/* Subtle radial ambient background light */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full opacity-20 blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(1,101,255,0.4) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-lynk relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-mono text-slate-300">
            <Sparkles size={12} className="text-brand-skyblue" />
            <span>CORE CAPABILITIES</span>
          </div>

          <h2 className="font-kanit font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-tight">
            <span className="jack-hero-gradient">Bespoke Engineering &amp; </span>
            <span className="jack-hero-accent">Digital Systems</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            From modern responsive web applications to native mobile codebases and automated AI
            pipelines, we engineer software that delivers unmatched speed and reliability.
          </p>
        </div>

        {/* 3D Bento Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, idx) => {
            const Icon = serviceIcons[idx % serviceIcons.length];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#131419] to-[#0A0B0E] p-8 sm:p-10 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-brand-skyblue/40 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Glow backlight on hover */}
                <div className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-brand-blue/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.05] border border-white/10 text-brand-skyblue shadow-inner group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <span className="font-kanit font-extrabold text-2xl text-slate-600 group-hover:text-slate-400 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-kanit font-bold text-2xl sm:text-3xl text-white tracking-tight mb-3 group-hover:text-brand-skyblue transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {service.desc}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2.5 mb-8 border-t border-white/5 pt-5">
                    {service.points.map((pt, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 size={15} className="text-brand-skyblue shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => open()}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-brand-skyblue transition-colors"
                  >
                    <span>Request Technical Scope</span>
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                  <span className="text-[11px] font-mono text-slate-500 uppercase">
                    Agile Sprint
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  ChevronDown,
  Building2,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useBooking } from "@/components/BookingProvider";
import { siteConfig } from "@/lib/data";
import HeroBackground from "@/components/HeroBackground";

const faqs = [
  {
    q: "How do you scope and quote new projects?",
    a: "Every engagement begins with an initial technical discovery session. We audit your business goals, draft an itemized Statement of Work (SOW) with clear deliverables, timeline milestones, and fixed pricing so you never face unexpected budget creep.",
  },
  {
    q: "Can you help optimize or fix an existing software codebase?",
    a: "Yes. In fact, a significant portion of our work involves auditing, refactoring, and stabilizing existing web and mobile apps that were poorly implemented or suffer from frequent server crashes.",
  },
  {
    q: "Do you provide hardware procurement and physical IT installation in Lagos?",
    a: "Yes. Bravelynk Digital Solutions Limited is registered for end-to-end IT hardware and software sales, server rack assembly, structured office cabling, and ongoing on-site maintenance.",
  },
  {
    q: "What happens after our product goes live?",
    a: "We don't disappear after launch. We offer committed Service Level Agreements (SLAs) with 24/7 SRE monitoring, automated database backups, security patches, and ongoing feature sprints.",
  },
  {
    q: "How do we get started?",
    a: "You can fill out the 'Start Your Build' form on this page or book a virtual consultation slot. An engineering lead will review your specifications and reply within one business day.",
  },
];

export default function ContactUsPage() {
  const { open } = useBooking();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
              <span>CONTACT BRAVELYNK</span>
            </div>
            <h1 className="font-kanit font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-[1.05] mb-5">
              <span className="jack-hero-gradient block sm:inline">There&apos;s No Limit To What You Can </span>
              <span className="jack-hero-accent">Build.</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
              Do you have an idea, legacy system refactor, or complex engineering roadmap? Let&apos;s engineer it into durable, scalable technology.
            </p>
          </div>
        </section>

        {/* ── Form & Coordinates Grid ── */}
        <section className="container-lynk mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Coordinates Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="rounded-3xl border border-white/10 bg-[#121316]/90 p-8 shadow-2xl backdrop-blur-xl">
                <h2 className="font-kanit font-black text-xl uppercase tracking-tight text-white mb-6">Lagos Headquarters</h2>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-skyblue border border-brand-blue/20">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-slate-400">Office Address</p>
                      <p className="text-slate-200 leading-relaxed mt-1 font-medium">{siteConfig.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-skyblue border border-brand-blue/20">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-slate-400">Email Inquiries</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-brand-skyblue hover:underline mt-1 block font-medium">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-skyblue border border-brand-blue/20">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-slate-400">Direct Telephone &amp; WhatsApp</p>
                      <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-brand-skyblue hover:underline mt-1 block font-medium">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Booking Card */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-white mb-2">Prefer a live video call?</p>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed font-normal">
                    Book a direct 30-minute virtual consultation with an engineering lead on our calendar.
                  </p>
                  <button
                    type="button"
                    onClick={() => open()}
                    className="w-full py-2.5 text-xs font-semibold rounded-full border border-white/15 bg-white/[0.04] text-white hover:bg-brand-blue hover:border-brand-blue transition-all"
                  >
                    Schedule Virtual Meeting
                  </button>
                </div>
              </div>

              {/* Our Locations card */}
              <div className="rounded-3xl border border-white/10 bg-[#121316]/70 p-8 backdrop-blur-xl">
                <h3 className="font-kanit font-bold text-base text-white mb-4 flex items-center gap-2 uppercase tracking-wide">
                  <Building2 size={18} className="text-brand-skyblue" />
                  Our Operational Footprint
                </h3>
                <div className="space-y-3 text-xs text-slate-400">
                  {siteConfig.locations.map((loc) => (
                    <div key={loc.country} className="pb-3 border-b border-white/10 last:border-b-0 last:pb-0">
                      <p className="font-bold text-white font-mono">{loc.country}</p>
                      <p className="mt-0.5">{loc.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div id="start-build" className="lg:col-span-7">
              <div className="mb-6">
                <h2 className="font-kanit font-black text-2xl uppercase tracking-tight text-white">Start a Project</h2>
                <p className="text-slate-400 text-sm mt-1">
                  Tell us about your project requirements and expected timeline. We review every submission and reply within one business day.
                </p>
              </div>
              <ContactForm dark={true} />
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION ── */}
        <section className="py-20 border-t border-white/10 bg-[#090A0E]/80 backdrop-blur-md">
          <div className="container-lynk max-w-4xl">
            <div className="text-center mb-14">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-brand-skyblue mb-2 block">
                HAVE QUESTIONS?
              </span>
              <h2 className="font-kanit font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="rounded-2xl border border-white/10 bg-[#121316]/90 overflow-hidden transition-all backdrop-blur-xl"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-kanit font-semibold text-base sm:text-lg text-white"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-brand-skyblue" : ""
                          }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 bg-white/[0.02]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

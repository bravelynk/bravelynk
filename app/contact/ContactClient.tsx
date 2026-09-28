"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Mail, Phone, Calendar, Sparkles } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useBooking } from "@/components/BookingProvider";
import { siteConfig } from "@/lib/data";
import HeroBackground from "@/components/HeroBackground";

export default function ContactClient() {
  const { open } = useBooking();

  return (
    <article className="relative overflow-hidden pb-28 pt-36 bg-[#0C0C0C] text-white min-h-screen">
      {/* ── Ambient Radial Lighting & Cyber Grid Background ── */}
      <HeroBackground />

      <div className="container-lynk relative z-10">
        {/* Breadcrumb / Back button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        {/* Header section */}
        <header className="mb-16 border-b border-white/10 pb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-mono text-slate-300">
            <Sparkles size={13} className="text-brand-skyblue" />
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="font-kanit font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[1.05] mb-5">
            <span className="jack-hero-gradient block sm:inline">Let&apos;s Talk About </span>
            <span className="jack-hero-accent">Your Project.</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
            Whether it&apos;s a full application build, a server/network overhaul, or just a strategic technology audit — reach out and we&apos;ll respond within one business day.
          </p>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-5 items-start mb-16">
          {/* Coordinates column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-3xl border border-white/10 bg-[#121316]/90 p-8 shadow-2xl backdrop-blur-xl">
              <h2 className="font-kanit font-black text-xl uppercase tracking-tight text-white mb-6">Our Office</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3.5 text-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-skyblue border border-brand-blue/20">
                    <MapPin size={18} />
                  </span>
                  <div className="leading-relaxed">
                    <p className="font-mono text-xs uppercase tracking-wider text-slate-400">Lagos Headquarters</p>
                    <p className="text-slate-200 mt-1 font-medium">{siteConfig.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-skyblue border border-brand-blue/20">
                    <Mail size={18} />
                  </span>
                  <div className="leading-relaxed">
                    <p className="font-mono text-xs uppercase tracking-wider text-slate-400">Email Inquiries</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-brand-skyblue hover:underline mt-1 block font-medium">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-skyblue border border-brand-blue/20">
                    <Phone size={18} />
                  </span>
                  <div className="leading-relaxed">
                    <p className="font-mono text-xs uppercase tracking-wider text-slate-400">Call or WhatsApp</p>
                    <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-brand-skyblue hover:underline mt-1 block font-medium">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Booking Block */}
            <div className="rounded-3xl border border-white/10 bg-[#121316]/70 p-7 backdrop-blur-xl">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-skyblue border border-brand-blue/20">
                <Calendar size={18} />
              </div>
              <h3 className="font-kanit font-bold text-base text-white mb-2 uppercase tracking-wide">Book a direct consultation</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-5">
                Pick a slot on our calendar, fill out the booking form, and we&apos;ll confirm your virtual consultation by email within 2 hours.
              </p>
              <button
                type="button"
                onClick={() => open()}
                className="w-full py-3 text-xs font-semibold rounded-full bg-gradient-to-r from-brand-blue to-brand-skyblue text-white shadow-[0_0_20px_rgba(1,101,255,0.4)] hover:shadow-[0_0_30px_rgba(1,101,255,0.6)] transition-all"
              >
                Schedule Virtual Meeting
              </button>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <h2 className="font-kanit font-black text-2xl uppercase tracking-tight text-white mb-6">Send Us A Message</h2>
            <ContactForm dark={true} />
          </div>
        </div>
      </div>
    </article>
  );
}

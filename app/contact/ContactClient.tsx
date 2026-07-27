"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Mail, Phone, Calendar } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useBooking } from "@/components/BookingProvider";
import { siteConfig } from "@/lib/data";

export default function ContactClient() {
  const { open } = useBooking();

  return (
    <article className="relative overflow-hidden pb-24 pt-36">
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[400px] w-[400px] rounded-full opacity-35 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(1,140,255,0.2), transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-[-10%] h-[350px] w-[350px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(1,101,255,0.15), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-lynk relative">
        {/* Breadcrumb / Back button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-brand-blue transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        {/* Header section */}
        <header className="mb-16 border-b border-black/5 pb-8 dark:border-white/10 max-w-3xl">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand-blue dark:bg-white/10">
            Get In Touch
          </span>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-4">
            Let&apos;s talk about <span className="gradient-text">your project.</span>
          </h1>
          <p className="text-muted text-base leading-relaxed sm:text-lg">
            Whether it&apos;s a full application build, a server/network overhaul, or just a strategic technology audit — reach out and we&apos;ll respond within one business day.
          </p>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-5 items-start mb-16">
          {/* Coordinates column */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-xl font-bold mb-4">Our Office</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3.5 text-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand-blue dark:bg-white/10">
                    <MapPin size={18} />
                  </span>
                  <div className="leading-relaxed">
                    <p className="font-semibold">Lagos Headquarters</p>
                    <p className="text-muted">{siteConfig.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand-blue dark:bg-white/10">
                    <Mail size={18} />
                  </span>
                  <div className="leading-relaxed">
                    <p className="font-semibold">Email Inquiries</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-brand-blue hover:underline">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand-blue dark:bg-white/10">
                    <Phone size={18} />
                  </span>
                  <div className="leading-relaxed">
                    <p className="font-semibold">Call or WhatsApp</p>
                    <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-brand-blue hover:underline">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Booking Block */}
            <div className="rounded-2xl border border-black/5 bg-subtle p-6 dark:border-white/10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-brand-blue dark:bg-white/10">
                <Calendar size={18} />
              </div>
              <h3 className="font-display font-bold text-base mb-2">Book a direct consultation</h3>
              <p className="text-muted text-xs leading-relaxed mb-5">
                Pick a slot on our calendar, fill out the booking form, and we&apos;ll confirm your virtual consultation by email within 2 hours.
              </p>
              <button
                type="button"
                onClick={() => open()}
                className="btn-brand w-full text-xs py-3"
              >
                Schedule Virtual Meeting
              </button>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-xl font-bold mb-6">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </article>
  );
}

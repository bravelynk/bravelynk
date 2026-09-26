"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  MapPin,
  Phone,
  Calendar,
  Sparkles,
  ChevronDown,
  Building2,
  Clock,
  ShieldCheck,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useBooking } from "@/components/BookingProvider";
import { siteConfig } from "@/lib/data";

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
            Contact Bravelynk
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-ink-900 leading-[1.12] mb-4">
            There&apos;s no limit to what you can <span className="gradient-text">Build.</span>
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            Do you have an idea or business challenge? Let&apos;s work together to engineer it into durable, scalable technology.
          </p>
        </div>
      </section>

      {/* ── Form & Coordinates Grid ── */}
      <section className="container-lynk mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Coordinates Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-soft">
              <h2 className="font-display text-xl font-bold text-ink-900 mb-6">Lagos Headquarters</h2>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand-blue">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-ink-900">Office Address</p>
                    <p className="text-muted leading-relaxed mt-0.5">{siteConfig.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand-blue">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-ink-900">Email Inquiries</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-brand-blue hover:underline">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand-blue">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-ink-900">Direct Telephone &amp; WhatsApp</p>
                    <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-brand-blue hover:underline">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Booking Card */}
              <div className="mt-8 pt-6 border-t border-black/5">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-900 mb-2">Prefer a live video call?</p>
                <p className="text-xs text-muted mb-4 leading-relaxed">
                  Book a direct 30-minute virtual consultation with an engineering lead on our calendar.
                </p>
                <button
                  type="button"
                  onClick={() => open()}
                  className="btn-outline w-full py-2.5 text-xs font-semibold justify-center hover:bg-brand-blue hover:text-white hover:border-brand-blue"
                >
                  Schedule Virtual Meeting
                </button>
              </div>
            </div>

            {/* Our Locations card */}
            <div className="rounded-3xl border border-black/5 bg-subtle p-8">
              <h3 className="font-display font-bold text-base text-ink-900 mb-4 flex items-center gap-2">
                <Building2 size={18} className="text-brand-blue" />
                Our Operational Footprint
              </h3>
              <div className="space-y-3 text-xs text-muted">
                {siteConfig.locations.map((loc) => (
                  <div key={loc.country} className="pb-3 border-b border-black/5 last:border-b-0 last:pb-0">
                    <p className="font-bold text-ink-900">{loc.country}</p>
                    <p className="mt-0.5">{loc.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div id="start-build" className="lg:col-span-7">
            <div className="mb-6">
              <h2 className="font-display text-2xl font-bold text-ink-900">Start a Project</h2>
              <p className="text-muted text-sm mt-1">
                Tell us about your project requirements and expected timeline. We respond within one business day.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-20 bg-subtle border-t border-black/5">
        <div className="container-lynk max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue mb-2 block">
              HAVE QUESTIONS?
            </span>
            <h2 className="font-display text-3xl font-bold text-ink-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-black/5 bg-white overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-display font-semibold text-sm sm:text-base text-ink-900"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-muted transition-transform duration-200 ${isOpen ? "rotate-180 text-brand-blue" : ""
                        }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-muted leading-relaxed border-t border-black/5 bg-brand-light/20">
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
  );
}

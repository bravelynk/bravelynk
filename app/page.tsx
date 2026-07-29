"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Code2,
  Lightbulb,
  HardDrive,
  Zap,
  ShieldCheck,
  Wallet,
  Headset,
  Gauge,
  Building2,
  Sprout,
  GraduationCap,
  Landmark,
  Store,
  Church,
  Search,
  PenTool,
  Rocket,
  LifeBuoy,
  ChevronDown,
  Quote,
  Mail,
  MapPin,
  Phone,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import { useBooking } from "@/components/BookingProvider";
import { services, siteConfig } from "@/lib/data";
import ComingSoon from "@/components/ComingSoon";

const serviceIcons = [Code2, Lightbulb, HardDrive, Zap];

const problemCards = [
  {
    icon: ClockIcon,
    title: "Costly downtime",
    desc: "Outdated infrastructure fails at the worst possible moment — right when customers need you.",
  },
  {
    icon: BugIcon,
    title: "Security exposure",
    desc: "Unpatched systems and weak setups leave the door open to breaches you won't see coming.",
  },
  {
    icon: MoneyIcon,
    title: "Wasted IT spend",
    desc: "Money poured into tools and platforms that don't fit how the business actually runs.",
  },
  {
    icon: WarningIcon,
    title: "No accountable partner",
    desc: "Freelancers who vanish after delivery, leaving you to fix problems alone.",
  },
];

const promisePoints = [
  "Fixed, transparent pricing",
  "Plain-language communication",
  "Built around local realities",
  "Support that doesn't disappear",
];

const stats = [
  { value: "14+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years of Experience" },
  { value: "24/7", label: "Support Available" },
];

const industries = [
  { icon: Building2, label: "SMEs & Startups" },
  { icon: Landmark, label: "Fintech & Finance" },
  { icon: Store, label: "Retail & E-commerce" },
  { icon: Church, label: "Faith-based Organisations" },
  { icon: Sprout, label: "Agriculture" },
  { icon: GraduationCap, label: "Education & Training" },
];

const testimonials = [
  {
    quote:
      "Bravelynk rebuilt our booking system in under six weeks. Our team finally has software that actually matches how we work, and support has been responsive every time we've needed it.",
    name: "Adaeze O.",
    role: "Operations Lead, Retail SME",
  },
  {
    quote:
      "What stood out was the honesty. They told us what we didn't need before they told us what we did. That saved us a significant amount on our IT budget.",
    name: "Tunde A.",
    role: "Founder, Logistics Startup",
  },
  {
    quote:
      "Our infrastructure setup used to be a constant headache. Since Bravelynk took over installation and maintenance, downtime has practically disappeared.",
    name: "Ifeoma K.",
    role: "Admin Director, Training Institute",
  },
];

const faqs = [
  {
    q: "How quickly can you start on a new project?",
    a: "Most engagements begin with a discovery call within 2–3 business days. Depending on scope, active work typically kicks off within one to two weeks of signing.",
  },
  {
    q: "Do you work with businesses outside Lagos?",
    a: "Yes. While we're based in Agege, Lagos, we deliver software development and IT consultancy remotely for clients across Nigeria and the diaspora. Hardware installation is scheduled around your location.",
  },
  {
    q: "What does the free Risk & Readiness Audit include?",
    a: "A structured review of your current systems, infrastructure, and digital exposure — highlighting the two or three issues most likely to cost you money, time, or customers if left unaddressed.",
  },
  {
    q: "Do you offer support after a project is delivered?",
    a: "Always. Every engagement includes a defined post-launch support window, with ongoing maintenance plans available for ongoing peace of mind.",
  },
  {
    q: "How is pricing structured?",
    a: "We quote fixed project pricing wherever possible, based on a clear scope agreed up front. For ongoing consultancy or support, we offer transparent monthly retainers.",
  },
];

// Helper icon wrapper components
function ClockIcon(props: any) {
  return <Gauge {...props} />;
}
function BugIcon(props: any) {
  return <ShieldCheck {...props} />;
}
function MoneyIcon(props: any) {
  return <Wallet {...props} />;
}
function WarningIcon(props: any) {
  return <AlertTriangle {...props} />;
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-surface rounded-xl">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left sm:px-6"
      >
        <span className="text-[15px] font-semibold">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-brand-blue transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id={`faq-panel-${index}`}
        role="region"
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-muted px-5 pb-5 text-sm leading-relaxed sm:px-6">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { open } = useBooking();
  const isComingSoon = process.env.NEXT_PUBLIC_COMING_SOON === "true";

  if (isComingSoon) {
    return <ComingSoon />;
  }


  return (
    <>
      {/* ── Hero: Bravelynks ─────────────────────────────────── */}
      <section className="relative overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48 bg-brand-navy text-white">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        >
          <source src="/assets/here-section-background.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay to make text readable */}
        <div className="absolute inset-0 bg-brand-navy/75 mix-blend-multiply z-0 pointer-events-none" />

        <div
          className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full opacity-35 blur-3xl z-10"
          style={{ background: "radial-gradient(circle, rgba(1,140,255,0.4), transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="container-lynk relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto flex max-w-3xl flex-col items-center text-center"
          >
            <h1 className="font-display text-[2.6rem] font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.2rem]">
              Technology that moves your business{" "}
              <span className="text-brand-skyblue">forward — not sideways.</span>
            </h1>

            <p className="text-white/80 mt-7 max-w-xl text-base leading-relaxed sm:text-lg">
              A partnership proposal for growth-minded businesses. We design and build the custom software, infrastructure, and digital strategies required to compete.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => open()}
                className="btn-brand bg-white text-brand-navy hover:bg-white/90 hover:text-brand-navyDark px-8 py-3.5 text-[15px]"
              >
                Book a Free Consultation
                <ArrowRight size={16} />
              </button>
              <Link href="/services" className="btn-outline border-white/30 text-white hover:border-white hover:text-white px-8 py-3.5 text-[15px]">
                Explore Our Services
              </Link>
            </div>

            <p className="text-white/60 mt-6 text-xs">
              Registered Nigerian Technology Company - RC9270501 · Lagos, Nigeria
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Problem Section ──────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-subtle">
        <div className="container-lynk">
          <ScrollReveal className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">The Problem</p>
            <h2 className="font-display text-3xl font-bold sm:text-5xl">
              Most businesses don&apos;t lose money to competitors.
            </h2>
            <p className="text-muted mt-5 text-base leading-relaxed">
              They lose it to their own technology. Outdated configurations, vendor lockdowns, and fragile systems slow down operations and leak revenue.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {problemCards.map((c, i) => {
              const Icon = c.icon;
              return (
                <ScrollReveal key={c.title} delay={i * 0.08}>
                  <div className="card-surface h-full rounded-2xl p-7 hover:shadow-card transition-shadow duration-300">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand-blue dark:bg-white/10">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-base font-bold mb-2">{c.title}</h3>
                    <p className="text-muted text-xs leading-relaxed">{c.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Who We Are & Promise ──────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="container-lynk">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-center">
            <ScrollReveal className="lg:col-span-7 space-y-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-blue font-sans">Who We Are</p>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                This is how Bravelynk shows up for you.
              </h2>
              <p className="text-muted leading-relaxed">
                Bravelynk Digital Solutions Limited (RC: 9270501) is a registered Nigerian technology company based in Lagos. We design and build the software, infrastructure, and digital strategy that businesses need to compete — with the accountability of a real, local, registered partner.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-black/5 dark:border-white/10">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-3xl font-bold text-brand-blue sm:text-4xl">{s.value}</p>
                    <p className="text-muted mt-1 text-xs font-medium uppercase tracking-wider">{s.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl bg-brand-navy p-8 text-white sm:p-10 shadow-soft">
                <div
                  className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full opacity-20 blur-2xl"
                  style={{ background: "radial-gradient(circle, rgba(1,140,255,0.5), transparent 70%)" }}
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl font-bold mb-6">Our promise</h3>
                <ul className="space-y-4">
                  {promisePoints.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue">
                        <BadgeCheck size={14} className="text-white" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Freelancer vs Company Section ──────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="container-lynk">
          <ScrollReveal className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">A Fair Question</p>
            <h2 className="font-display text-3xl font-bold sm:text-5xl">
              &ldquo;Why not just hire a freelancer?&rdquo;
            </h2>
            <p className="text-muted mt-5 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Fair question. Freelancers can be great for small, one-off tasks. But if your business depends on what&apos;s being built, here&apos;s what usually happens when there&apos;s no team behind the work.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-16 max-w-5xl mx-auto">
            {/* Left Card: The Freelancer Risk */}
            <ScrollReveal delay={0.05} className="h-full">
              <div className="card-surface h-full rounded-2xl p-8 sm:p-10 border border-rose-500/20 dark:border-rose-500/10 hover:border-rose-500/30 transition-all duration-300">
                <p className="text-rose-500 text-xs font-bold uppercase tracking-wider mb-6">The Freelancer Risk</p>
                <ul className="space-y-5">
                  {[
                    "They go quiet mid-project — no manager to escalate to, no team to pick up the slack.",
                    "Delays, missed deadlines, and updates that arrive whenever they get around to it.",
                    "Inconsistent code with no documentation — expensive for anyone else to pick up later.",
                    "No dedicated support after handoff. Once they're paid, you're on your own.",
                    "Every new freelancer means starting over — different standards, different tools, zero continuity.",
                  ].map((risk) => (
                    <li key={risk} className="flex items-start gap-3.5 text-sm text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2" />
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Right Card: The Bravelynk Way */}
            <ScrollReveal delay={0.1} className="h-full">
              <div className="h-full rounded-2xl p-8 sm:p-10 bg-brand-navyDark/65 backdrop-blur-md text-white border border-brand-blue/30 hover:border-brand-blue/50 transition-all duration-300 shadow-[0_20px_40px_rgba(7,51,117,0.1)]">
                <p className="text-brand-skyblue text-xs font-bold uppercase tracking-wider mb-6">The Bravelynk Way</p>
                <ul className="space-y-5">
                  {[
                    "A registered company with a real team — if one person is unavailable, the project doesn't stop.",
                    "Fixed timelines agreed up front, with regular check-ins so you're never left guessing.",
                    "Clean, documented code any future developer can pick up without starting from scratch.",
                    "A defined post-launch support window — we don't disappear the moment we're paid.",
                    "One accountable partner for every engagement, not a new unknown each time.",
                  ].map((way) => (
                    <li key={way} className="flex items-start gap-3 text-sm text-slate-100">
                      <CheckCircle2 size={16} className="text-brand-skyblue shrink-0 mt-0.5" />
                      <span>{way}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Services Section (Preview) ───────────────────────── */}
      <section className="py-24 sm:py-32 bg-subtle">
        <div className="container-lynk">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">What We Do</p>
              <h2 className="font-display text-3xl font-bold sm:text-5xl">Four services. One accountable team.</h2>
            </div>
            <Link href="/services" className="btn-outline flex gap-2 items-center text-sm py-2.5">
              See All Services
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const Icon = serviceIcons[i];
              return (
                <ScrollReveal key={s.id} delay={i * 0.08}>
                  <div className="card-surface h-full rounded-2xl p-7 flex flex-col justify-between hover:shadow-card transition-shadow duration-300">
                    <div>
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand-blue dark:bg-white/10">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-display mb-2 text-base font-bold">{s.title}</h3>
                      <p className="text-muted text-xs leading-relaxed mb-6">{s.short || s.desc.substring(0, 80) + "..."}</p>
                    </div>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:underline"
                    >
                      Read full details
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Our Process Section (Preview) ────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="container-lynk">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">How It Works</p>
              <h2 className="font-display text-3xl font-bold sm:text-5xl">A clear path, from first call to launch.</h2>
            </div>
            <Link href="/process" className="btn-outline flex gap-2 items-center text-sm py-2.5">
              Learn Our Workflow
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Discover", icon: Search, desc: "We audit your current systems and understand your goals." },
              { step: "02", title: "Design", icon: PenTool, desc: "A clear, practical roadmap built around how you operate." },
              { step: "03", title: "Build & Launch", icon: Rocket, desc: "We build, test, and ship with regular check-ins." },
              { step: "04", title: "Support & Grow", icon: LifeBuoy, desc: "Ongoing monitoring and iteration after delivery." },
            ].map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.1}>
                <div className="relative h-full rounded-2xl border border-black/5 p-7 dark:border-white/10">
                  <span className="font-display text-4xl font-bold text-black/5 dark:text-white/10">{p.step}</span>
                  <div className="mt-3 mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-brand-blue dark:bg-white/10">
                    <p.icon size={18} />
                  </div>
                  <h3 className="mb-2 text-sm font-bold">{p.title}</h3>
                  <p className="text-muted text-xs leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ─────────────────────────────────────────── */}
      <section className="bg-subtle py-24 sm:py-32">
        <div className="container-lynk">
          <ScrollReveal className="mx-auto mb-12 max-w-xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">Who We Serve</p>
            <h2 className="font-display text-2xl font-bold sm:text-4xl">Industries that trust Bravelynk</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.label} delay={i * 0.05}>
                <div className="card-surface flex h-full flex-col items-center gap-3 rounded-xl px-4 py-6 text-center">
                  <ind.icon size={22} className="text-brand-blue" />
                  <span className="text-xs font-medium leading-tight">{ind.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement (Preview) ─────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="container-lynk">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">How To Partner</p>
              <h2 className="font-display text-3xl font-bold sm:text-5xl">Engagement models built for flexibility</h2>
            </div>
            <Link href="/engagement" className="btn-outline flex gap-2 items-center text-sm py-2.5">
              Compare Models
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Project-Based", desc: "Fixed-scope builds — a website, an app, an installation — quoted upfront with a fixed price and timeline." },
              { title: "Retainer", desc: "Ongoing consultancy, maintenance, and support on a predictable monthly plan." },
              { title: "Free Risk & Readiness Audit", desc: "Start with a no-obligation review of your current systems, highlighting immediate issues.", highlight: true },
            ].map((m, i) => (
              <ScrollReveal key={m.title} delay={i * 0.08} className="h-full">
                <div className={`card-surface rounded-2xl p-7 flex flex-col justify-between h-full relative ${m.highlight ? "border-brand-blue ring-2 ring-brand-blue/10" : ""}`}>
                  {m.highlight && (
                    <span className="absolute -top-3 left-6 bg-brand-blue text-white text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full">
                      Free Offer
                    </span>
                  )}
                  <div>
                    <h3 className="font-display text-lg font-bold mb-3">{m.title}</h3>
                    <p className="text-muted text-xs leading-relaxed mb-6">{m.desc}</p>
                  </div>
                  <Link href="/engagement" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:underline">
                    Find out more
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="bg-subtle py-24 sm:py-32">
        <div className="container-lynk">
          <ScrollReveal className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">Client Feedback</p>
            <h2 className="font-display text-3xl font-bold sm:text-5xl">What clients say about working with us</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="card-surface h-full rounded-2xl p-7">
                  <Quote size={22} className="mb-4 text-brand-blue" />
                  <p className="mb-6 text-sm leading-relaxed">{t.quote}</p>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-muted text-xs">{t.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────── */}
      <section className="py-4">
        <div className="container-lynk">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-brand-navy px-8 py-16 text-center text-white sm:px-16 sm:py-20">
              <div
                className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(1,140,255,0.5), transparent 70%)" }}
                aria-hidden="true"
              />
              <h2 className="font-display relative mx-auto max-w-3xl text-3xl font-bold sm:text-5xl leading-tight">
                Without a trusted tech partner, your operations are exposed.
              </h2>
              <p className="relative mx-auto mt-5 max-w-xl text-sm text-white/75 sm:text-base leading-relaxed">
                Partner with us to audit your IT facilities, build secure software, and automate up to 70% of your business operations — because that is where real, lasting ROI comes from.
              </p>
              <div className="relative mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => open()}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-brand-navy transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book a Free Consultation
                  <ArrowRight size={16} />
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white/50"
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section id="faq" className="py-24 sm:py-32">
        <div className="container-lynk">
          <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">FAQ</p>
            <h2 className="font-display text-3xl font-bold sm:text-5xl">Common questions</h2>
          </ScrollReveal>

          <div className="mx-auto max-w-2xl space-y-3.5">
            {faqs.map((f, i) => (
              <ScrollReveal key={f.q} delay={i * 0.05}>
                <FAQItem q={f.q} a={f.a} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────── */}
      <section id="contact" className="bg-subtle py-24 sm:py-32">
        <div className="container-lynk grid grid-cols-1 gap-14 lg:grid-cols-5">
          <ScrollReveal direction="right" className="lg:col-span-2">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">Get In Touch</p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Let&apos;s talk about your project</h2>
            <p className="text-muted mt-5 text-base leading-relaxed">
              Whether it&apos;s a full build, a system overhaul, or just a second opinion — reach out and we&apos;ll respond
              within one business day.
            </p>
            <div className="mt-9 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-brand-blue dark:bg-white/10">
                  <MapPin size={17} />
                </span>
                {siteConfig.location}
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-brand-blue dark:bg-white/10">
                  <Mail size={17} />
                </span>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-blue">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-brand-blue dark:bg-white/10">
                  <Phone size={17} />
                </span>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-brand-blue">
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" className="lg:col-span-3">
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

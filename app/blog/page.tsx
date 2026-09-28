import Link from "next/link";
import { getSortedPostsData } from "@/lib/markdown";
import { ArrowLeft, ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBackground from "@/components/HeroBackground";

export const metadata = {
  title: "Blog & Insights | Bravelynk Digital Solutions",
  description:
    "Practical advice on custom software development, IT security, infrastructure, and automation for Nigerian businesses.",
};

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <article className="relative overflow-hidden pt-36 pb-28 bg-[#0C0C0C] text-white min-h-screen">
      {/* ── Ambient Radial Lighting & Cyber Grid Background ── */}
      <HeroBackground />

      <div className="container-lynk relative z-10">
        {/* ── Breadcrumb ── */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        {/* ── Header / Hero ── */}
        <header className="mb-16 border-b border-white/10 pb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-mono text-slate-300">
            <Sparkles size={13} className="text-brand-skyblue" />
            <span>BRAVELYNK INSIGHTS</span>
          </div>
          <h1 className="font-kanit font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[1.05] mb-5">
            <span className="jack-hero-gradient block sm:inline">Technology Strategy, </span>
            <span className="jack-hero-accent">Made Simple.</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Practical advice on custom software development, IT security, cloud infrastructure, and AI automation for forward-thinking businesses.
          </p>
        </header>

        {/* ── Posts Grid ── */}
        {posts.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-[#121316]/90 p-12 text-center text-slate-400 shadow-2xl max-w-2xl mx-auto backdrop-blur-xl">
            <p className="text-base">No articles published yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 0.08} className="h-full">
                <Link href={`/blog/${post.slug}`} className="block group h-full">
                  <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#121316]/90 p-8 sm:p-10 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-brand-skyblue/40 hover:shadow-[0_0_35px_rgba(1,101,255,0.2)]">
                    <div>
                      {/* Meta information */}
                      <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-brand-skyblue" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} className="text-brand-skyblue" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-kanit text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-brand-skyblue transition-colors duration-200 mb-3 leading-snug">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Arrow CTA */}
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-brand-skyblue group-hover:translate-x-1 transition-transform duration-200 pt-4 border-t border-white/10">
                      <span>Read article</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* ── CTA Banner ── */}
        <section className="mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#14151B] to-[#0A0B0E] px-8 py-16 text-center text-white sm:px-16 sm:py-20 shadow-2xl">
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(1,140,255,0.5), transparent 70%)" }}
              aria-hidden="true"
            />
            <h2 className="font-kanit font-black relative mx-auto max-w-2xl text-3xl sm:text-4xl uppercase tracking-tight text-white">
              Have a digital challenge or new project in mind?
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-sm text-slate-400 sm:text-base leading-relaxed">
              Let&apos;s talk through your ideas, timeline, and tech stack in a free exploratory session.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact-us"
                className="py-3.5 px-8 text-sm font-bold rounded-full bg-white text-ink-900 hover:bg-slate-100 transition-all shadow-md inline-flex items-center gap-2"
              >
                Start a Conversation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 hover:border-white/40"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}

import Link from "next/link";
import { getSortedPostsData } from "@/lib/markdown";
import { ArrowLeft, ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Blog & Insights | Bravelynk Digital Solutions",
  description:
    "Practical advice on custom software development, IT security, infrastructure, and automation for Nigerian businesses.",
};

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <article className="relative overflow-hidden pt-36 pb-24">
      {/* Background decorations matching other pages */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[400px] w-[400px] rounded-full opacity-35 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(1,140,255,0.15), transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-[-10%] h-[350px] w-[350px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(1,101,255,0.1), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-lynk relative">
        {/* ── Breadcrumb ── */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-brand-blue transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        {/* ── Header / Hero ── */}
        <header className="mb-16 border-b border-black/5 pb-8 max-w-3xl">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand-light px-3.5 py-1.5 text-xs font-semibold text-brand-blue">
            <Sparkles size={13} />
            Bravelynk Insights
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900 leading-[1.12] mb-4">
            Technology strategy, <span className="gradient-text">made simple.</span>
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
            Practical advice on custom software development, IT security, infrastructure, and automation for forward-thinking businesses.
          </p>
        </header>

        {/* ── Posts Grid ── */}
        {posts.length === 0 ? (
          <div className="rounded-3xl border border-black/5 bg-white p-12 text-center text-muted shadow-soft max-w-2xl mx-auto">
            <p className="text-base">No articles published yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 0.08} className="h-full">
                <Link href={`/blog/${post.slug}`} className="block group h-full">
                  <div className="flex h-full flex-col justify-between rounded-3xl border border-black/5 bg-white p-8 sm:p-10 shadow-soft transition-all duration-300 hover:shadow-card hover:border-brand-blue/30">
                    <div>
                      {/* Meta information */}
                      <div className="flex items-center gap-4 text-xs font-medium text-muted mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-brand-blue" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} className="text-brand-blue" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-ink-900 group-hover:text-brand-blue transition-colors duration-200 mb-3 leading-snug">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Arrow CTA */}
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue group-hover:translate-x-1 transition-transform duration-200 pt-4 border-t border-black/5">
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
          <div className="relative overflow-hidden rounded-3xl bg-brand-navy px-8 py-16 text-center text-white sm:px-16 sm:py-20 shadow-xl">
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(1,140,255,0.5), transparent 70%)" }}
              aria-hidden="true"
            />
            <h2 className="font-display relative mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
              Have a digital challenge or new project in mind?
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-sm text-white/75 sm:text-base">
              Let&apos;s talk through your ideas, timeline, and tech stack in a free exploratory session.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact-us"
                className="btn-brand bg-white text-brand-navy hover:bg-brand-light py-3.5 px-8 text-sm font-bold inline-flex items-center gap-2"
              >
                Start a Conversation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50"
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


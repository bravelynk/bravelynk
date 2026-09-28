import Link from "next/link";
import { getPostData, getSortedPostsData } from "@/lib/markdown";
import { ArrowLeft, ArrowRight, Calendar, Clock, ChevronRight, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBackground from "@/components/HeroBackground";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  try {
    const post = getPostData(params.slug);
    return {
      title: `${post.title} | Bravelynk Blog`,
      description: post.excerpt,
    };
  } catch (e) {
    return {
      title: "Blog Post | Bravelynk Digital Solutions",
    };
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostData(params.slug);

  return (
    <article className="relative overflow-hidden pt-36 pb-28 bg-[#0C0C0C] text-white min-h-screen">
      {/* ── Ambient Radial Lighting & Cyber Grid Background ── */}
      <HeroBackground />

      <div className="container-lynk relative z-10">
        {/* ── Breadcrumb ── */}
        <div className="mb-8 flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight size={13} className="text-white/30" />
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <ChevronRight size={13} className="text-white/30" />
          <span className="text-slate-300 truncate max-w-[180px] sm:max-w-md">
            {post.title}
          </span>
        </div>

        {/* ── Back to Blog button ── */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to all articles
          </Link>
        </div>

        {/* ── Main Article Container ── */}
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <ScrollReveal className="space-y-4 mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-mono text-slate-300">
              <Sparkles size={13} className="text-brand-skyblue" />
              <span>BRAVELYNK INSIGHTS</span>
            </div>

            <h1 className="font-kanit font-black text-3xl sm:text-5xl uppercase tracking-tight text-white leading-[1.12]">
              {post.title}
            </h1>

            <div className="flex items-center gap-5 text-xs sm:text-sm font-mono text-slate-400 pt-2 pb-6 border-b border-white/10">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-brand-skyblue" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-brand-skyblue" />
                {post.readTime}
              </span>
            </div>
          </ScrollReveal>

          {/* Excerpt callout */}
          {post.excerpt && (
            <ScrollReveal delay={0.04}>
              <div className="mb-10 rounded-2xl border border-white/10 bg-[#121316]/90 backdrop-blur-xl p-6 sm:p-7 text-sm sm:text-base text-slate-300 leading-relaxed font-normal shadow-lg">
                {post.excerpt}
              </div>
            </ScrollReveal>
          )}

          {/* Markdown Content */}
          <ScrollReveal delay={0.08} className="space-y-4">
            <div
              className="blog-content leading-relaxed text-slate-300 text-base"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </ScrollReveal>

          {/* Share/Action CTA Card at the bottom */}
          <ScrollReveal delay={0.12} className="mt-16">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#14151B] to-[#0A0B0E] px-8 py-12 sm:px-12 sm:py-16 text-center text-white shadow-2xl">
              <div
                className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(1,140,255,0.5), transparent 70%)" }}
                aria-hidden="true"
              />
              <h3 className="font-kanit font-black relative mx-auto max-w-xl text-2xl sm:text-3xl uppercase tracking-tight text-white mb-3">
                Need advice on your technology setups?
              </h3>
              <p className="relative mx-auto text-sm sm:text-base text-slate-400 leading-relaxed mb-6 max-w-lg">
                We audit IT workflows, secure cloud infrastructure, and engineer custom digital solutions that help your business scale efficiently.
              </p>
              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/contact-us"
                  className="py-3 px-7 text-xs sm:text-sm font-bold rounded-full bg-white text-ink-900 hover:bg-slate-100 transition-all shadow-md inline-flex items-center gap-2"
                >
                  Book a Consultation
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-white/10 hover:border-white/40"
                >
                  More Articles
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </article>
  );
}

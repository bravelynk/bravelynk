import Link from "next/link";
import { getPostData, getSortedPostsData } from "@/lib/markdown";
import { ArrowLeft, ArrowRight, Calendar, Clock, ChevronRight, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
        <div className="mb-8 flex items-center gap-2 text-xs sm:text-sm text-muted">
          <Link href="/" className="hover:text-brand-blue transition-colors font-medium">
            Home
          </Link>
          <ChevronRight size={13} className="text-black/30" />
          <Link href="/blog" className="hover:text-brand-blue transition-colors font-medium">
            Blog
          </Link>
          <ChevronRight size={13} className="text-black/30" />
          <span className="text-ink-900/60 truncate max-w-[180px] sm:max-w-md font-medium">
            {post.title}
          </span>
        </div>

        {/* ── Back to Blog button ── */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-brand-blue transition-colors"
          >
            <ArrowLeft size={16} />
            Back to all articles
          </Link>
        </div>

        {/* ── Main Article Container ── */}
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <ScrollReveal className="space-y-4 mb-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-light px-3.5 py-1.5 text-xs font-semibold text-brand-blue">
              <Sparkles size={13} />
              Bravelynk Insights
            </span>

            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink-900 leading-[1.18]">
              {post.title}
            </h1>

            <div className="flex items-center gap-5 text-xs sm:text-sm text-muted pt-2 pb-6 border-b border-black/5">
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar size={14} className="text-brand-blue" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Clock size={14} className="text-brand-blue" />
                {post.readTime}
              </span>
            </div>
          </ScrollReveal>

          {/* Excerpt callout */}
          {post.excerpt && (
            <ScrollReveal delay={0.04}>
              <div className="mb-10 rounded-2xl border border-brand-blue/15 bg-brand-light/50 p-6 sm:p-7 text-sm sm:text-base text-ink-900/85 leading-relaxed font-medium">
                {post.excerpt}
              </div>
            </ScrollReveal>
          )}

          {/* Markdown Content */}
          <ScrollReveal delay={0.08} className="space-y-4">
            <div
              className="blog-content leading-relaxed text-slate-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </ScrollReveal>

          {/* Share/Action CTA Card at the bottom */}
          <ScrollReveal delay={0.12} className="mt-16">
            <div className="relative overflow-hidden rounded-3xl bg-brand-navy px-8 py-12 sm:px-12 sm:py-16 text-center text-white shadow-xl">
              <div
                className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(1,140,255,0.5), transparent 70%)" }}
                aria-hidden="true"
              />
              <h3 className="font-display relative mx-auto max-w-xl text-2xl sm:text-3xl font-bold text-white mb-3">
                Need advice on your technology setups?
              </h3>
              <p className="relative mx-auto text-sm sm:text-base text-white/75 leading-relaxed mb-6 max-w-lg">
                We audit IT workflows, secure infrastructure, and engineer custom digital solutions that help your business scale efficiently.
              </p>
              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/contact-us"
                  className="btn-brand bg-white text-brand-navy hover:bg-brand-light py-3.5 px-7 text-xs sm:text-sm font-bold inline-flex items-center gap-2"
                >
                  Book a Consultation
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:border-white/50"
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


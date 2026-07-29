import Link from "next/link";
import { getSortedPostsData } from "@/lib/markdown";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Blog | Insights, Tech Strategy & Automation",
  description: "Practical advice on custom software development, IT security, infrastructure, and automation for Nigerian businesses.",
};

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-brand-navy text-white pt-36 pb-24 relative overflow-hidden">
      {/* Background blur highlight */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(1,140,255,0.4), transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(1,140,255,0.4), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-lynk relative z-10">
        <ScrollReveal className="max-w-3xl mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-skyblue">
            Bravelynk Insights
          </p>
          <h1 className="font-display text-4xl font-bold sm:text-6xl tracking-tight leading-[1.15]">
            Technology strategy, <br />
            <span className="text-brand-skyblue">made simple.</span>
          </h1>
          <p className="text-white/80 mt-5 text-base sm:text-lg leading-relaxed max-w-xl">
            Practical advice on custom software development, infrastructure installations, security audits, and automation.
          </p>
        </ScrollReveal>

        {posts.length === 0 ? (
          <div className="card-surface p-10 rounded-2xl text-center text-slate-400">
            No articles published yet. Check back soon!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {posts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 0.08} className="h-full">
                <Link href={`/blog/${post.slug}`} className="block group h-full">
                  <div className="card-surface h-full rounded-2xl p-7 sm:p-8 hover:border-brand-blue/40 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_12px_24px_-10px_rgba(1,101,255,0.15)] bg-slate-900/40 backdrop-blur-md">
                    <div>
                      {/* Meta information */}
                      <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-display text-lg sm:text-xl font-bold mb-3 text-slate-100 group-hover:text-brand-skyblue transition-colors duration-200">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Arrow CTA */}
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-skyblue group-hover:translate-x-1 transition-transform duration-200 mt-4">
                      <span>Read article</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

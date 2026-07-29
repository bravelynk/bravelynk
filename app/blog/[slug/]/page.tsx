import Link from "next/link";
import { getPostData, getSortedPostsData } from "@/lib/markdown";
import { ArrowLeft, Calendar, Clock, ChevronRight, MessageSquare } from "lucide-react";
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
      title: "Blog Post | Bravelynk",
    };
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostData(params.slug);

  return (
    <div className="min-h-screen bg-[#080e1a] text-white pt-36 pb-24 relative overflow-hidden">
      {/* Glow effects */}
      <div
        className="pointer-events-none absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(1,140,255,0.4), transparent 70%)" }}
      />

      <div className="container-lynk relative z-10">
        {/* Breadcrumb / Back button */}
        <div className="mb-10 flex items-center gap-2 text-xs sm:text-sm text-slate-400">
          <Link href="/blog" className="hover:text-brand-skyblue transition-colors flex items-center gap-1">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <ChevronRight size={12} className="text-slate-600" />
          <span className="text-slate-500 truncate max-w-[200px] sm:max-w-sm">{post.title}</span>
        </div>

        {/* Main Article Section */}
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <ScrollReveal className="space-y-6 mb-12 pb-8 border-b border-black/5 dark:border-white/5">
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-[1.2] text-slate-100">
              {post.title}
            </h1>

            <div className="flex items-center gap-5 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
          </ScrollReveal>

          {/* Render markdown content html */}
          <ScrollReveal delay={0.08} className="space-y-4 font-sans text-slate-300">
            <div 
              className="blog-content leading-relaxed" 
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </ScrollReveal>

          {/* Share/Action CTA Card at the bottom of the article */}
          <ScrollReveal delay={0.12} className="mt-16">
            <div className="card-surface p-8 rounded-2xl bg-gradient-to-br from-brand-navyDark/30 to-[#080e1a] border border-brand-blue/20 hover:border-brand-blue/30 transition-all text-center max-w-2xl mx-auto backdrop-blur-md">
              <MessageSquare size={36} className="text-brand-skyblue mx-auto mb-4" />
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 mb-2">
                Need advice on your technology setups?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md mx-auto">
                We can audit your IT facilities, secure your local workflows, and implement the custom software automation your business needs to grow.
              </p>
              <Link
                href="/contact"
                className="btn-brand inline-flex items-center gap-2 py-3 px-6 text-xs sm:text-sm"
              >
                Book a Free Consultation
              </Link>
            </div>
          </ScrollReveal>
        </article>
      </div>
    </div>
  );
}

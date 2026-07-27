import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions | Bravelynk Digital Solutions",
  description: "Terms & Conditions of service for Bravelynk Digital Solutions Limited. Understand your rights and responsibilities.",
};

export default function TermsAndConditions() {
  const lastUpdated = "July 2026";

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

      <div className="container-lynk relative max-w-4xl">
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
        <header className="mb-12 border-b border-black/5 pb-8 dark:border-white/10">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand-blue dark:bg-white/10">
            <FileText size={24} />
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-3">
            Terms &amp; <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-muted text-sm">
            Last updated: {lastUpdated} · Bravelynk Digital Solutions Limited
          </p>
        </header>

        {/* Content body */}
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-sm leading-relaxed text-muted">
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website of Bravelynk Digital Solutions Limited (&ldquo;Bravelynk,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, you must not access or use our website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">2. Scope of Services</h2>
            <p>
              Bravelynk provides professional software development, IT consultancy, hardware and software installation, and digital transformation services.
            </p>
            <p>
              The information, estimates, audits, and advice provided on this website are for preliminary informational purposes. Any binding contract for services will require a separate signed service agreement (SOW or contract) detailing the precise scope, pricing, deliverables, and service levels.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">3. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, our website and all of its content—including source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics—are our proprietary property or licensed to us, and are protected by copyright, trademark, and other intellectual property laws of Nigeria and international treaties.
            </p>
            <p>
              You are granted a limited license to access and use the website for your personal or internal business use. You must not copy, reproduce, republish, distribute, or exploit any portion of this site without our prior written consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">4. User Obligations</h2>
            <p>By using our website, you warrant and agree that:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>All information you submit (via forms, scheduling tools, or emails) is accurate, current, and complete.</li>
              <li>You will maintain the security and confidentiality of any communication details.</li>
              <li>You will not use our website for any illegal or unauthorized purpose, including transmitting malware or phishing links.</li>
              <li>You will not attempt to bypass, disable, or interfere with security-related features of this website.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable Nigerian law, Bravelynk Digital Solutions Limited, its directors, employees, or partners, shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of or inability to use the website, or any actions taken based on the information provided on this website.
            </p>
            <p>
              Our website and its content are provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis without warranties of any kind, either express or implied.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">6. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Bravelynk, including our partners, agents, and employees, from and against any loss, damage, liability, claim, or demand (including reasonable attorneys&apos; fees) made by any third party due to or arising out of your breach of these Terms &amp; Conditions or your unauthorized use of the website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">7. Governing Law and Jurisdiction</h2>
            <p>
              These Terms &amp; Conditions and your use of the website are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the courts located in Lagos State, Nigeria.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-black/5 dark:border-white/10">
            <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">8. Contact Information</h2>
            <p>
              If you have any questions or require clarification regarding these Terms &amp; Conditions, please contact us:
            </p>
            <ul className="list-none pl-0 space-y-1 text-sm">
              <li><strong>Company:</strong> {siteConfig.name} ({siteConfig.rc})</li>
              <li><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`} className="text-brand-blue hover:underline">{siteConfig.email}</a></li>
              <li><strong>Phone:</strong> {siteConfig.phone}</li>
              <li><strong>Location:</strong> {siteConfig.location}</li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}

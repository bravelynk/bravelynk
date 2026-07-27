import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy | Bravelynk Digital Solutions",
  description: "Privacy Policy for Bravelynk Digital Solutions Limited. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
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
            <Shield size={24} />
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-3">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-muted text-sm">
            Last updated: {lastUpdated} · Bravelynk Digital Solutions Limited
          </p>
        </header>

        {/* Content body */}
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-sm leading-relaxed text-muted">
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">1. Introduction</h2>
            <p>
              Bravelynk Digital Solutions Limited (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal data. This Privacy Policy describes how we collect, use, store, and share your personal information when you visit our website, use our services, or interact with us.
            </p>
            <p>
              By using our website or engaging our services, you consent to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">2. Information We Collect</h2>
            <p>We may collect several types of information for various purposes, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Personal Identification Information:</strong> Name, work email address, phone number, company name, and website address when you request a consultation, fill out a contact form, or sign up for a Risk &amp; Readiness Audit.
              </li>
              <li>
                <strong>Usage Data:</strong> Information on how the website is accessed and used, including your IP address, browser type, browser version, the pages you visit, the time and date of your visit, time spent on those pages, and other diagnostic data.
              </li>
              <li>
                <strong>Cookies &amp; Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our website and hold certain information to improve your browsing experience.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">3. How We Use Your Information</h2>
            <p>We use the collected data for various purposes, including to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide, maintain, and monitor our website and services.</li>
              <li>Schedule, manage, and conduct free consultations and Risk &amp; Readiness Audits.</li>
              <li>Respond to your inquiries, support requests, and form submissions.</li>
              <li>Send newsletters, marketing communications, and security insights (which you can opt out of at any time).</li>
              <li>Analyze usage statistics to improve user experience and website functionality.</li>
              <li>Detect, prevent, and address technical or security issues.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">4. Data Storage and Protection</h2>
            <p>
              We implement industry-standard administrative, technical, and physical security measures to safeguard your personal information against unauthorized access, loss, alteration, or disclosure.
            </p>
            <p>
              While we strive to use commercially acceptable means to protect your personal data, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">5. Your Data Rights</h2>
            <p>
              Under the Nigeria Data Protection Regulation (NDPR) and other applicable laws, you have specific rights regarding your personal data, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>The right to access and receive a copy of the personal data we hold about you.</li>
              <li>The right to request correction of any inaccurate or incomplete personal data.</li>
              <li>The right to request erasure of your personal data when it is no longer needed.</li>
              <li>The right to withdraw consent at any time where we relied on your consent to process your information.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">6. Sharing of Data</h2>
            <p>
              We do not sell, trade, or rent your personal identification information to third parties. We may share generic aggregated demographic information not linked to any personal identification information with our business partners and trusted affiliates for the purposes outlined above.
            </p>
            <p>
              We may disclose your personal data in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend the rights or property of Bravelynk, or protect the personal safety of users of the website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date at the top of this Privacy Policy.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-black/5 dark:border-white/10">
            <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">8. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
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

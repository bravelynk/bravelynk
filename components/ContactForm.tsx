"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactForm({ dark = true }: { dark?: boolean }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      company: form.get("company"),
      projectType: form.get("projectType"),
      budget: form.get("budget"),
      message: form.get("message"),
      honeypot: form.get("website"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className={`flex flex-col items-center rounded-2xl p-10 text-center border ${dark ? "border-white/10 bg-[#121316] text-white" : "card-surface border-black/10 bg-white"}`}>
        <CheckCircle2 className="mb-3 text-brand-skyblue" size={44} />
        <h3 className="mb-1.5 font-display text-xl font-bold">Message Received</h3>
        <p className={`text-sm max-w-md ${dark ? "text-slate-400" : "text-muted"}`}>
          Thanks for reaching out to Bravelynk Digital Solutions. An engineering lead will review your project details and reply within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className={`mt-6 text-xs font-semibold py-2.5 px-6 rounded-full transition-all ${
            dark
              ? "border border-white/15 bg-white/5 text-white hover:bg-white/10"
              : "btn-outline"
          }`}
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  const labelClass = dark
    ? "mb-1.5 block text-[11px] font-mono font-medium text-slate-300 uppercase tracking-wider"
    : "mb-1.5 block text-xs font-semibold text-ink-900 uppercase tracking-wider";

  const inputClass = dark
    ? "w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-brand-skyblue focus:ring-1 focus:ring-brand-skyblue"
    : "w-full rounded-lg border border-black/10 bg-transparent px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-muted/60 outline-none transition-colors focus:border-brand-blue focus:ring-1 focus:ring-brand-blue";

  const selectClass = dark
    ? "w-full rounded-xl border border-white/10 bg-[#17181D] px-3.5 py-2.5 text-sm text-white outline-none transition-all focus:border-brand-skyblue focus:ring-1 focus:ring-brand-skyblue"
    : "w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand-blue focus:ring-1 focus:ring-brand-blue";

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-4 rounded-2xl p-7 sm:p-8 border shadow-soft ${
        dark
          ? "border-white/10 bg-[#121316]/90 backdrop-blur-xl text-white"
          : "card-surface border-black/10 bg-white"
      }`}
    >
      {/* Honeypot field */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="e.g. Alex Johnson"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Work Email <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="alex@company.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 2: Company & Project Type */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-company" className={labelClass}>
            Company / Business
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            placeholder="Company or Organization Name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-project-type" className={labelClass}>
            Project Type <span className="text-red-400">*</span>
          </label>
          <select
            id="contact-project-type"
            name="projectType"
            required
            defaultValue="Mobile & Web App Development"
            className={selectClass}
          >
            <option value="Mobile & Web App Development">Mobile &amp; Web App Development</option>
            <option value="AI Solutions">AI Solutions &amp; Automation</option>
            <option value="Backend Solutions">Backend Systems &amp; APIs</option>
            <option value="Website Development">Website Development</option>
            <option value="General Software Inquiry">General Software Inquiry</option>
          </select>
        </div>
      </div>

      {/* Row 3: Budget Range (Optional) */}
      <div>
        <label htmlFor="contact-budget" className={labelClass}>
          Estimated Budget <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <select
          id="contact-budget"
          name="budget"
          defaultValue=""
          className={selectClass}
        >
          <option value="">Select an estimated budget range</option>
          <option value="Under ₦2M / $1.5k">Under ₦2,000,000 (~$1,500)</option>
          <option value="₦2M - ₦5M / $1.5k - $4k">₦2,000,000 – ₦5,000,000 (~$1,500 – $4,000)</option>
          <option value="₦5M - ₦15M / $4k - $10k">₦5,000,000 – ₦15,000,000 (~$4,000 – $10,000)</option>
          <option value="₦15M+ / $10k+">₦15,000,000+ ($10,000+)</option>
          <option value="Undecided / Needs Scoping">Undecided / Need Scoping Session</option>
        </select>
      </div>

      {/* Row 4: Message */}
      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Project Description &amp; Requirements <span className="text-red-400">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="Briefly describe what you want to build, the problem it solves, and your desired launch timeline..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-red-400 bg-red-950/40 p-3 rounded-xl border border-red-800/40">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full py-3.5 px-6 text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-brand-blue to-brand-skyblue shadow-[0_0_25px_rgba(1,101,255,0.4)] hover:shadow-[0_0_35px_rgba(1,101,255,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all disabled:cursor-not-allowed disabled:opacity-70 inline-flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Submitting Your Inquiry...
          </>
        ) : (
          <>
            Start a Project
            <ArrowRight size={16} />
          </>
        )}
      </button>
    </form>
  );
}

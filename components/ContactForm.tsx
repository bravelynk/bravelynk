"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
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
      <div className="card-surface flex flex-col items-center rounded-2xl p-10 text-center">
        <CheckCircle2 className="mb-3 text-brand-blue" size={40} />
        <h3 className="mb-1.5 font-display text-lg font-bold">Message sent</h3>
        <p className="text-muted text-sm">Thanks for reaching out — we&apos;ll reply within one business day.</p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-outline mt-6">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-4 rounded-2xl p-7 sm:p-8">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
            Full name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-black/10 bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue dark:border-white/15"
          />
        </div>
        <div>
          <label htmlFor="contact-company" className="mb-1.5 block text-sm font-medium">
            Company (optional)
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            className="w-full rounded-lg border border-black/10 bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue dark:border-white/15"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-black/10 bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue dark:border-white/15"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
          Tell us about your project
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-lg border border-black/10 bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue dark:border-white/15"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-red-500">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-brand w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}

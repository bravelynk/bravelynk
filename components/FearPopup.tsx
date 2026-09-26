"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, X, Loader2, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

const SERVICE_OPTIONS = [
  "Mobile & Web App Development",
  "AI Solutions",
  "Backend Solutions",
  "Website Development",
];

export default function FearPopup() {
  const [visible, setVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Mobile & Web App Development");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // Check if dismissed in current session
    if (typeof window !== "undefined" && sessionStorage.getItem("bravelynk_scope_popup_dismissed")) {
      return;
    }
    const timer = setTimeout(() => setVisible(true), 7000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setVisible(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("bravelynk_scope_popup_dismissed", "true");
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      company: form.get("company"),
      service: selectedService,
      honeypot: form.get("website"),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      if (typeof window !== "undefined") {
        sessionStorage.setItem("bravelynk_scope_popup_dismissed", "true");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm"
            onClick={dismiss}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={dismiss}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-ink-900 transition-colors hover:bg-black/10"
            >
              <X size={18} />
            </button>

            {status === "success" ? (
              <div className="flex flex-col items-center px-8 py-14 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-light text-brand-blue">
                  <ShieldCheck size={36} />
                </div>
                <h2 className="mb-2 font-display text-2xl font-bold text-ink-900">
                  You&apos;re on the build list
                </h2>
                <p className="text-muted text-sm max-w-sm">
                  Thank you! An engineering lead will review your details and send over your free Architecture &amp; Scoping Roadmap within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={dismiss}
                  className="btn-brand mt-6 text-xs py-2.5 px-6"
                >
                  Continue Browsing
                </button>
              </div>
            ) : (
              <div>
                <div className="bg-gradient-to-br from-brand-light/70 via-white to-white border-b border-black/5 px-7 pb-5 pt-8 text-ink-900 sm:px-8">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue text-white shadow-xs">
                      <Sparkles size={16} />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue">
                      Complimentary Architecture Session
                    </span>
                  </div>
                  <h2 id="popup-title" className="font-display text-2xl font-bold leading-tight sm:text-[25px] text-ink-900">
                    Ready to Build &amp; Scale Your Next Digital Product?
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Turn your vision into scalable technology. From custom web &amp; mobile apps to AI workflow automation and cloud infrastructure, our senior engineers help you plan before building.
                  </p>

                  <div className="mt-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Select your primary focus:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {SERVICE_OPTIONS.map((pill) => {
                        const isSelected = selectedService === pill;
                        return (
                          <button
                            key={pill}
                            type="button"
                            onClick={() => setSelectedService(pill)}
                            className={`inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1 transition-all ${
                              isSelected
                                ? "bg-brand-blue text-white shadow-xs"
                                : "bg-white border border-black/10 text-ink-900 hover:border-brand-blue/50"
                            }`}
                          >
                            <CheckCircle2
                              size={12}
                              className={isSelected ? "text-white" : "text-slate-400"}
                            />
                            {pill}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 px-7 py-5 sm:px-8 bg-white">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div>
                    <label htmlFor="popup-name" className="sr-only">
                      Full name
                    </label>
                    <input
                      id="popup-name"
                      type="text"
                      name="name"
                      required
                      placeholder="Full name"
                      className="w-full rounded-xl border border-black/10 bg-subtle px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue focus:bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="popup-email" className="sr-only">
                      Work email
                    </label>
                    <input
                      id="popup-email"
                      type="email"
                      name="email"
                      required
                      placeholder="Work email"
                      className="w-full rounded-xl border border-black/10 bg-subtle px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue focus:bg-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone (optional)"
                      aria-label="Phone (optional)"
                      className="w-full rounded-xl border border-black/10 bg-subtle px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue focus:bg-white"
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company / Project"
                      aria-label="Company / Project"
                      className="w-full rounded-xl border border-black/10 bg-subtle px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue focus:bg-white"
                    />
                  </div>

                  {status === "error" && (
                    <p role="alert" className="text-xs font-medium text-red-500">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-brand w-full py-3 text-xs font-bold tracking-wide shadow-md disabled:cursor-not-allowed disabled:opacity-70 justify-center mt-1"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Preparing Roadmap...
                      </>
                    ) : (
                      <>
                        Get Free Product Roadmap
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-muted">
                      ✓ 24hr turnaround • Senior leads only
                    </span>
                    <button
                      type="button"
                      onClick={dismiss}
                      className="text-xs text-muted hover:text-ink-900 transition-colors"
                    >
                      No thanks, I&apos;ll explore
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, X, Loader2, ShieldCheck } from "lucide-react";

export default function FearPopup() {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setVisible(false);
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
            className="absolute inset-0 bg-ink-900/70 backdrop-blur-sm dark:bg-black/80"
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
            className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-black/5 bg-white shadow-2xl dark:border-white/10 dark:bg-ink-800"
          >
            <button
              type="button"
              onClick={dismiss}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-ink-900 transition-colors hover:bg-black/10 dark:bg-white/10 dark:text-white"
            >
              <X size={18} />
            </button>

            {status === "success" ? (
              <div className="flex flex-col items-center px-8 py-12 text-center">
                <ShieldCheck className="mb-4 text-brand-blue" size={44} />
                <h2 className="mb-2 font-display text-xl font-bold">You&apos;re on the list</h2>
                <p className="text-muted text-sm">
                  Check your inbox — we&apos;re preparing your free Risk &amp; Readiness Audit now.
                </p>
              </div>
            ) : (
              <div>
                <div className="bg-brand-navy px-7 pb-6 pt-8 text-white sm:px-8">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                    <AlertTriangle size={22} className="text-orange-300" />
                  </div>
                  <h2 id="popup-title" className="font-display text-2xl font-bold leading-tight sm:text-[26px]">
                    Is a cyberattack or system failure about to cost you your business?
                  </h2>
                  <p className="mt-3 text-sm text-white/75">
                    Every year, Nigerian SMEs lose millions of naira to outages, breaches, and outdated systems
                    they didn&apos;t know were vulnerable. Find out where you stand — before an attacker or an
                    outage does it for you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5 px-7 py-6 sm:px-8">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-semibold">Claim your free Risk &amp; Readiness Audit</p>

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
                      className="w-full rounded-lg border border-black/10 bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue dark:border-white/15"
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
                      className="w-full rounded-lg border border-black/10 bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue dark:border-white/15"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone (optional)"
                      aria-label="Phone (optional)"
                      className="w-full rounded-lg border border-black/10 bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue dark:border-white/15"
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company (optional)"
                      aria-label="Company (optional)"
                      className="w-full rounded-lg border border-black/10 bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue dark:border-white/15"
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
                      "Get a free audit"
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={dismiss}
                    className="w-full text-center text-xs text-muted underline-offset-2 hover:underline"
                  >
                    No thanks, I&apos;ll risk it
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

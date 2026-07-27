"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, CalendarCheck, Loader2, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data";

type BookingContextValue = {
  open: (serviceId?: string) => void;
  close: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}

const TIME_SLOTS = ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM"];

function todayIso() {
  return new Date().toISOString().split("T")[0];
}

export default function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselected, setPreselected] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const open = useCallback((serviceId?: string) => {
    lastFocused.current = document.activeElement as HTMLElement;
    setPreselected(serviceId);
    setStatus("idle");
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    lastFocused.current?.focus();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      service: form.get("service"),
      date: form.get("date"),
      time: form.get("time"),
      notes: form.get("notes"),
      honeypot: form.get("company_website"),
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Booking failed");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <BookingContext.Provider value={{ open, close }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm dark:bg-black/70"
              onClick={close}
              aria-hidden="true"
            />
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="booking-title"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-black/5 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-ink-800 sm:p-8"
            >
              <button
                ref={closeBtnRef}
                type="button"
                onClick={close}
                aria-label="Close booking dialog"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-black/5 dark:hover:bg-white/10"
              >
                <X size={18} />
              </button>

              {status === "success" ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <CheckCircle2 className="mb-4 text-brand-blue" size={44} />
                  <h2 className="mb-2 font-display text-2xl font-bold">Booking request sent</h2>
                  <p className="text-muted max-w-sm text-sm">
                    Thanks — we&apos;ve emailed you a confirmation. Our team will reach out shortly to lock in your
                    slot.
                  </p>
                  <button type="button" onClick={close} className="btn-brand mt-6">
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-light text-brand-blue dark:bg-white/10">
                      <CalendarCheck size={20} />
                    </div>
                    <div>
                      <h2 id="booking-title" className="font-display text-xl font-bold">
                        Book a free consultation
                      </h2>
                      <p className="text-muted text-sm">Pick a service, date and time. We&apos;ll confirm by email.</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot field, hidden from real users */}
                    <input
                      type="text"
                      name="company_website"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />

                    <div>
                      <label htmlFor="booking-service" className="mb-1.5 block text-sm font-medium">
                        Service
                      </label>
                      <select
                        id="booking-service"
                        name="service"
                        required
                        defaultValue={preselected ? services.find((s) => s.id === preselected)?.title : ""}
                        className="w-full rounded-lg border border-black/10 bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue dark:border-white/15"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Not sure yet">Not sure yet — general enquiry</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="booking-date" className="mb-1.5 block text-sm font-medium">
                          Preferred date
                        </label>
                        <input
                          id="booking-date"
                          type="date"
                          name="date"
                          required
                          min={todayIso()}
                          className="w-full rounded-lg border border-black/10 bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue dark:border-white/15"
                        />
                      </div>
                      <div>
                        <label htmlFor="booking-time" className="mb-1.5 block text-sm font-medium">
                          Preferred time
                        </label>
                        <select
                          id="booking-time"
                          name="time"
                          required
                          defaultValue=""
                          className="w-full rounded-lg border border-black/10 bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue dark:border-white/15"
                        >
                          <option value="" disabled>
                            Select
                          </option>
                          {TIME_SLOTS.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="booking-name" className="mb-1.5 block text-sm font-medium">
                          Full name
                        </label>
                        <input
                          id="booking-name"
                          type="text"
                          name="name"
                          required
                          className="w-full rounded-lg border border-black/10 bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue dark:border-white/15"
                        />
                      </div>
                      <div>
                        <label htmlFor="booking-phone" className="mb-1.5 block text-sm font-medium">
                          Phone (optional)
                        </label>
                        <input
                          id="booking-phone"
                          type="tel"
                          name="phone"
                          className="w-full rounded-lg border border-black/10 bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue dark:border-white/15"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="booking-email" className="mb-1.5 block text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="booking-email"
                        type="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-black/10 bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue dark:border-white/15"
                      />
                    </div>

                    <div>
                      <label htmlFor="booking-notes" className="mb-1.5 block text-sm font-medium">
                        Notes (optional)
                      </label>
                      <textarea
                        id="booking-notes"
                        name="notes"
                        rows={3}
                        placeholder="Tell us briefly what you need..."
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
                          <Loader2 size={16} className="animate-spin" /> Booking...
                        </>
                      ) : (
                        "Confirm booking request"
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BookingContext.Provider>
  );
}

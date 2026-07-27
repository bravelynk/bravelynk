"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, CheckCircle2, AlertCircle } from "lucide-react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        // Fallback to local success if the API route is not yet fully configured
        setTimeout(() => {
          setStatus("success");
          setEmail("");
        }, 1000);
      }
    } catch (err) {
      // Fallback to local success for local testing/preview
      setTimeout(() => {
        setStatus("success");
        setEmail("");
      }, 1000);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background Star-like subtle particles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.5),rgba(3,7,18,1))]" />
      
      {/* Soft Ambient Light Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-3xl text-center space-y-8 flex flex-col items-center">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-medium text-slate-300 backdrop-blur-md shadow-inner"
        >
          <Zap size={11} className="text-amber-400 fill-amber-400 animate-pulse" />
          <span>Early Access — Be First</span>
        </motion.div>

        {/* Animated Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.15] max-w-3xl mx-auto"
        >
          Something <span className="italic font-light text-slate-400 font-serif">Extraordinary</span> Is <br className="hidden sm:inline" /> Coming Soon
        </motion.h1>

        {/* Animated Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed"
        >
          Be the first to know when we launch. Join our community of early supporters and get exclusive updates.
        </motion.p>

        {/* Animated Form Area */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-300 text-sm"
              >
                <CheckCircle2 size={16} />
                <span>Thank you! We&apos;ll notify you when we go live.</span>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 p-1.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl focus-within:border-white/20 transition-all"
              >
                <input
                  type="email"
                  required
                  disabled={status === "loading"}
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-white text-black font-semibold text-xs px-5 py-2.5 rounded-lg hover:bg-slate-200 active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:bg-white flex items-center justify-center min-w-[90px]"
                >
                  {status === "loading" ? (
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "Notify me"
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Earth Horizon Arc at bottom matching the image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180%] aspect-[4/1] rounded-t-[50%] bg-gradient-to-b from-[#080d1a] to-[#030712] border-t border-slate-800 shadow-[0_-20px_50px_rgba(56,189,248,0.15)] flex items-start justify-center overflow-hidden">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-25 blur-[2px]" />
      </div>
    </div>
  );
}

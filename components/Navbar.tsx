"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useBooking } from "./BookingProvider";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/why-choose-us", label: "Why Us" },
  { href: "/process", label: "Process" },
  { href: "/engagement", label: "Engagement" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useBooking();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-black/5 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-ink-900/80"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="container-lynk flex h-[72px] items-center justify-between"
        >
          <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Bravelynk home">
            <Image
              src="/bravelynk-logo.png"
              alt="Bravelynk Digital Solutions"
              width={36}
              height={36}
              priority
              className="h-9 w-9 rounded-md object-contain"
            />
            <span className="font-display text-[15px] font-bold tracking-tight">
              Bravelynk
            </span>
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13.5px] font-medium text-ink-900/80 transition-colors hover:text-brand-blue dark:text-white/80"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <button type="button" onClick={() => open()} className="btn-brand py-2.5">
              Book a Consultation
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/15"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[72px] z-40 border-b border-black/5 bg-white/80 px-5 pb-8 pt-6 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-ink-900/80 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink-900 transition-colors hover:bg-brand-light dark:text-white dark:hover:bg-white/5"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                open();
              }}
              className="btn-brand mt-5 w-full"
            >
              Book a Consultation
              <ArrowRight size={15} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

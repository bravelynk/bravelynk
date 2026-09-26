"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useBooking } from "./BookingProvider";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/client-stories", label: "Projects" },
  { href: "/about", label: "Our Brand" },
  { href: "/community", label: "Community" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
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
            ? "border-b border-black/5 bg-white/90 backdrop-blur-md shadow-xs"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="container-lynk flex h-[72px] items-center justify-between"
        >
          <Link href="/" className="flex shrink-0 items-center gap-2.5 group" aria-label="Bravelynk Home">
            <Image
              src="/bravelynk-logo.png"
              alt="Bravelynk Digital Solutions"
              width={36}
              height={36}
              priority
              className="h-9 w-9 rounded-md object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-display text-[17px] font-bold tracking-tight text-ink-900">
              Bravelynk
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-[13.5px] font-medium transition-colors hover:text-brand-blue ${
                    isActive ? "text-brand-blue font-semibold" : "text-ink-900/80"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={() => open()}
              className="btn-brand py-2.5 px-5 text-xs font-semibold tracking-wide"
            >
              Start a Project
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white shadow-xs"
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
            className="fixed inset-x-0 top-[72px] z-40 border-b border-black/5 bg-white/98 px-5 pb-8 pt-6 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => {
                const isActive = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-lg px-3.5 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-brand-light text-brand-blue font-semibold"
                        : "text-ink-900 hover:bg-brand-light"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                open();
              }}
              className="btn-brand mt-6 w-full justify-center text-sm py-3"
            >
              Start a Project
              <ArrowRight size={15} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight, Send } from "lucide-react";
import { services, siteConfig } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-subtle">
      <div className="container-lynk py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/bravelynk-logo.png"
                alt="Bravelynk Digital Solutions"
                width={36}
                height={36}
                className="h-9 w-9 rounded-md object-contain"
              />
              <span className="font-display text-lg font-bold text-ink-900">
                Bravelynk Digital Solutions
              </span>
            </Link>

            <p className="text-muted max-w-sm text-xs sm:text-sm leading-relaxed">
              {siteConfig.name} ({siteConfig.rc}). We design and build modern websites, web and mobile applications, AI-powered solutions, and reliable backend systems for businesses and organizations.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
              <a
                href={siteConfig.communityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0088cc]/10 border border-[#0088cc]/20 px-3.5 py-1.5 text-xs font-semibold text-[#0088cc] hover:bg-[#0088cc]/20 transition-colors"
              >
                <Send size={13} />
                <span>Join Telegram Community</span>
                <ArrowUpRight size={12} />
              </a>

            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-ink-900">Navigation</h3>
            <ul className="space-y-3">
              {[
                ["/", "Home"],
                ["/services", "Services"],
                ["/client-stories", "Projects"],
                ["/about", "About Us"],
                ["/community", "Community"],
                ["/blog", "Blog"],
                ["/contact-us", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-muted text-sm transition-colors hover:text-brand-blue inline-flex items-center gap-1 group"
                  >
                    <span>{label}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services (Exactly the 4 Primary Services) */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-ink-900">Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="text-muted text-sm transition-colors hover:text-brand-blue"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-ink-900">Contact</h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-muted">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-blue" />
                <span>{siteConfig.location}</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-muted">
                <Mail size={16} className="mt-0.5 shrink-0 text-brand-blue" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-blue break-all">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-muted">
                <Phone size={16} className="mt-0.5 shrink-0 text-brand-blue" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-brand-blue">
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black/5 py-6">
        <div className="container-lynk flex flex-col items-center justify-between gap-4 text-xs text-muted sm:flex-row">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-brand-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-blue transition-colors">
              Terms of Service
            </Link>
          </div>
          <p className="flex items-center gap-1.5 font-medium">
            <span>Headquartered in Lagos, Nigeria</span>
            <span>🇳🇬</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

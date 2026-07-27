import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { services, siteConfig } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/5 bg-subtle dark:border-white/10">
      <div className="container-lynk grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <Image
              src="/bravelynk-logo.png"
              alt="Bravelynk Digital Solutions"
              width={32}
              height={32}
              className="h-8 w-8 rounded-md object-contain"
            />
            <span className="font-display text-sm font-bold">Bravelynk</span>
          </div>
          <p className="text-muted max-w-xs text-sm leading-relaxed">
            {siteConfig.name}. {siteConfig.rc}. Practical, scalable technology for businesses ready to compete in
            the modern economy.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">Services</h3>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s.id}>
                <Link href="/services" className="text-muted text-sm transition-colors hover:text-brand-blue">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">Company</h3>
          <ul className="space-y-2.5">
            {[
              ["/why-choose-us", "Why Us"],
              ["/process", "Our Process"],
              ["/#faq", "FAQ"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-muted text-sm transition-colors hover:text-brand-blue">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">Get in touch</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-sm text-muted">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-blue" />
              {siteConfig.location}
            </li>
            <li className="flex items-start gap-2.5 text-sm text-muted">
              <Mail size={16} className="mt-0.5 shrink-0 text-brand-blue" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-blue">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-muted">
              <Phone size={16} className="mt-0.5 shrink-0 text-brand-blue" />
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-brand-blue">
                {siteConfig.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/5 py-6 dark:border-white/10">
        <div className="container-lynk flex flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-brand-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-blue transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
          <p>Built in Lagos, Nigeria 🇳🇬</p>
        </div>
      </div>
    </footer>
  );
}

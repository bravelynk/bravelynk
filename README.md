# Bravelynk Digital Solutions — Website

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Resend

## What's included

- **Home page** with hero, stats, services, differentiators, process, industries,
  testimonials, FAQ, and contact sections — built with generous white space and a
  clean, minimalist layout.
- **Fear-based lead pop-up** — appears 10 seconds after page load (once per browser
  session), captures name/email/phone/company, and emails both your team and the
  lead via Resend.
- **Booking system** — a "Book a Consultation" modal available from the navbar, hero,
  every service card, and the CTA banner. Visitors pick a service, date and time;
  submissions email your team and send the visitor a confirmation, via Resend.
- **Contact form** in the footer-adjacent contact section, also wired to Resend.
- **Light/dark mode** via `next-themes`, following the visitor's system preference
  by default, with a manual toggle in the navbar.
- **Accessible mobile menu** — keyboard-trappable, closes on `Escape`, returns
  focus to the toggle button, and is fully screen-reader labelled.
- **Scroll-triggered animations** on every section using Framer Motion's
  `whileInView`, tuned to be subtle rather than distracting.
- Uses your uploaded logo (`public/bravelynk-logo.png`) and a brand palette
  extracted from it: navy `#073375`, blue `#0165FF`, sky blue `#018CFF`.
- System font stack (no external font requests) to keep the site fast on mobile —
  this alone removes a common source of layout shift and loading delay.

## 1. Install dependencies

```bash
npm install
```

## 2. Configure Resend (required for all forms to send email)

1. Create a free account at [resend.com](https://resend.com) and grab an API key
   from **API Keys**.
2. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
3. Fill in:
   ```
   RESEND_API_KEY=re_your_real_key
   LEAD_NOTIFICATION_TO=info@bravelynk.com
   MAIL_FROM="Bravelynk <onboarding@resend.dev>"
   ```
   Until you verify your own sending domain in Resend, you can only send **from**
   `onboarding@resend.dev` — that's fine for testing. Once you verify
   `bravelynk.com` (or another domain you own) in Resend's dashboard, change
   `MAIL_FROM` to something like `Bravelynk <hello@bravelynk.com>`.

## 3. Run locally

```bash
npm run dev
```

Visit `http://localhost:3000`.

## 4. Update placeholder details before launch

- `lib/data.ts` — replace the placeholder phone number with your real one.
- `app/layout.tsx` — update `metadataBase` if your final domain differs from
  `bravelynk.com`.
- The three testimonials in `app/page.tsx` are illustrative placeholders — swap
  them for real client quotes (with permission) before launch.

## 5. Deploy

This is a standard Next.js app — it deploys cleanly to Vercel, Netlify, or any
Node hosting that supports Next.js. Remember to set `RESEND_API_KEY`,
`LEAD_NOTIFICATION_TO`, and `MAIL_FROM` as environment variables on whichever
platform you deploy to (they won't carry over from `.env.local` automatically).

```bash
npm run build
npm start
```

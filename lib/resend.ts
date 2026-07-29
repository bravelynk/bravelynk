import { Resend } from "resend";

// RESEND_API_KEY must be set in your environment (.env.local in dev,
// project environment variables in production). Never hardcode the key.
// A placeholder fallback is used only so the app can build before the key
// is configured — API calls will fail with a clear error until it's set.
export const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder_set_me");

export const LEAD_NOTIFICATION_TO = process.env.LEAD_NOTIFICATION_TO || "bravelynk@gmail.com";

// Use a verified sending domain in Resend before going live.
// Until a custom domain is verified, Resend only allows sending from onboarding@resend.dev.
export const MAIL_FROM = process.env.MAIL_FROM || "Bravelynk <onboarding@resend.dev>";

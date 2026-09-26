import { NextRequest, NextResponse } from "next/server";
import { resend, LEAD_NOTIFICATION_TO, MAIL_FROM } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, honeypot } = body ?? {};

    // Basic spam trap — honeypot field should always be empty for real users.
    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (!email || typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 });
    }

    await resend.emails.send({
      from: MAIL_FROM,
      to: LEAD_NOTIFICATION_TO,
      reply_to: email,
      subject: `New Architecture & Scoping Session Request — ${name || "Website visitor"}${service ? ` [${service}]` : ""}`,
      html: `
        <h2>New lead: Architecture & Scoping Session Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name || "N/A")}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "N/A")}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "N/A")}</p>
        <p><strong>Service Interest:</strong> ${escapeHtml(service || "General Scoping")}</p>
      `,
    });

    // Confirmation email to the lead
    await resend.emails.send({
      from: MAIL_FROM,
      to: email,
      subject: "Your Free Architecture & Scoping Session — Bravelynk",
      html: `
        <p>Hi ${escapeHtml(name || "there")},</p>
        <p>Thanks for requesting a complimentary Architecture &amp; Scoping Session with Bravelynk Digital Solutions Limited. A member of our technical architecture team will review your details and reach out within one business day with initial insights and scheduling options.</p>
        <p>In the meantime, feel free to reply directly to this email with any product briefs, specs, or questions.</p>
        <p>— The Bravelynk Engineering Team</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

import { NextRequest, NextResponse } from "next/server";
import { resend, LEAD_NOTIFICATION_TO, MAIL_FROM } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, date, time, notes, honeypot } = body ?? {};

    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !service || !date || !time) {
      return NextResponse.json(
        { ok: false, error: "Please fill in your name, email, service, date and time." },
        { status: 400 }
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 });
    }

    await resend.emails.send({
      from: MAIL_FROM,
      to: LEAD_NOTIFICATION_TO,
      reply_to: email,
      subject: `New booking request — ${service}`,
      html: `
        <h2>New consultation booking</h2>
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>
        <p><strong>Preferred date:</strong> ${escapeHtml(date)}</p>
        <p><strong>Preferred time:</strong> ${escapeHtml(time)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "N/A")}</p>
        <p><strong>Notes:</strong> ${escapeHtml(notes || "N/A")}</p>
      `,
    });

    await resend.emails.send({
      from: MAIL_FROM,
      to: email,
      subject: "Booking received — Bravelynk Digital Solutions",
      html: `
        <p>Hi ${escapeHtml(name)},</p>
        <p>We've received your booking request for <strong>${escapeHtml(service)}</strong> on <strong>${escapeHtml(
        date
      )}</strong> at <strong>${escapeHtml(time)}</strong>.</p>
        <p>Our team will confirm your slot by email or phone shortly. If anything changes, just reply to this email.</p>
        <p>— The Bravelynk Team</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Booking API error:", error);
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

import { NextRequest, NextResponse } from "next/server";
import { resend, MAIL_FROM } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body ?? {};

    if (!email) {
      return NextResponse.json({ ok: false, error: "Email is required." }, { status: 400 });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 });
    }

    // Send the notification email to bravelynk@gmail.com
    await resend.emails.send({
      from: MAIL_FROM,
      to: "bravelynk@gmail.com",
      reply_to: email,
      subject: "🚀 New Early Access Sign Up!",
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0284c7;">New Early Access Sign Up!</h2>
          <p>A new user has requested early access on your Coming Soon landing page.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">Sent from the Bravelynk Pre-launch Page</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Notify API error:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

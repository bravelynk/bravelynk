import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Bravelynk Digital Solutions",
  description: "Get in touch with Bravelynk Digital Solutions. Contact our Lagos office for custom software development, installations, and IT audits.",
  keywords: [
    "contact Bravelynk",
    "Bravelynk phone number",
    "Bravelynk office Lagos",
    "consultation IT Lagos",
    "software company Agege",
  ],
};

export default function ContactPage() {
  return <ContactClient />;
}

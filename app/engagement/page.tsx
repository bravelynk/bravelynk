import type { Metadata } from "next";
import EngagementClient from "./EngagementClient";

export const metadata: Metadata = {
  title: "Engagement Model & Pricing | Bravelynk Digital Solutions",
  description: "Find a flexible pricing structure that fits your business. We offer fixed project pricing, rolling monthly retainers, and free technology audits.",
  keywords: [
    "IT consultation cost Lagos",
    "software company pricing Nigeria",
    "Bravelynk retainer plan",
    "free business technology audit Nigeria",
    "IT retainer Lagos",
  ],
};

export default function EngagementPage() {
  return <EngagementClient />;
}

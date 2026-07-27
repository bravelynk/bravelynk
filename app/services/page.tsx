import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | Bravelynk Digital Solutions",
  description: "Comprehensive software development, IT consultancy, hardware & software installations, and digital transformation services tailored for Nigerian businesses.",
  keywords: [
    "software development Lagos",
    "IT consultancy Nigeria",
    "hardware installation Lagos",
    "digital transformation Lagos",
    "Bravelynk services",
  ],
};

export default function ServicesPage() {
  return <ServicesClient />;
}

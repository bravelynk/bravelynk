import type { Metadata } from "next";
import BravebrandClient from "./BravebrandClient";

export const metadata: Metadata = {
  title: "Bravebrand | Bravelynk Digital Solutions",
  description: "Discover who we are, what sets us apart, and how we work — from security-first engineering and transparent pricing to our structured 4-step delivery process.",
  keywords: [
    "Bravelynk reviews",
    "Bravebrands Lagos",
    "technology company Lagos",
    "secure software engineering Nigeria",
    "transparent pricing IT Nigeria",
    "software development process Lagos",
    "IT roadmap Nigeria",
  ],
};

export default function BravebrandPage() {
  return <BravebrandClient />;
}

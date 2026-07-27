import type { Metadata } from "next";
import ProcessClient from "./ProcessClient";

export const metadata: Metadata = {
  title: "Our Process | Bravelynk Digital Solutions",
  description: "A step-by-step roadmap from audit to deployment and maintenance. Learn how Bravelynk delivers technology infrastructure.",
  keywords: [
    "software development process",
    "IT roadmap Lagos",
    "Bravelynk delivery",
    "outage audit Lagos",
    "security posturing Nigeria",
  ],
};

export default function ProcessPage() {
  return <ProcessClient />;
}

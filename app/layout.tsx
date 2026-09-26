import type { Metadata, Viewport } from "next";
import "./globals.css";
import BookingProvider from "@/components/BookingProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FearPopup from "@/components/FearPopup";

export const metadata: Metadata = {
  metadataBase: new URL("https://bravelynk.com"),
  title: {
    default: "Bravelynk Digital Solutions | Web, Mobile & AI Solutions",
    template: "%s | Bravelynk Digital Solutions",
  },
  description:
    "Bravelynk Digital Solutions (RC: 9270501) designs and develops modern websites, web and mobile applications, AI-powered solutions, and reliable backend systems for businesses and organizations.",
  keywords: [
    "Bravelynk",
    "Bravelynk Digital Solutions",
    "software development Lagos",
    "web application development Nigeria",
    "mobile app development Lagos",
    "AI solutions Nigeria",
    "backend development Lagos",
    "website development Nigeria",
  ],
  authors: [{ name: "Bravelynk Digital Solutions Limited" }],
  alternates: {
    canonical: "https://bravelynk.com",
  },
  openGraph: {
    title: "Bravelynk Digital Solutions | Web, Mobile & AI Solutions",
    description:
      "We build digital products that move businesses forward. Modern websites, web and mobile applications, AI solutions, and reliable backend systems.",
    url: "https://bravelynk.com",
    siteName: "Bravelynk Digital Solutions",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bravelynk Digital Solutions | Web, Mobile & AI Solutions",
    description: "We build digital products that move businesses forward.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased" id="top">
        <BookingProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <FearPopup />
        </BookingProvider>
      </body>
    </html>
  );
}

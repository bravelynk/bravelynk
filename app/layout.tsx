import type { Metadata, Viewport } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import BookingProvider from "@/components/BookingProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FearPopup from "@/components/FearPopup";

export const metadata: Metadata = {
  metadataBase: new URL("https://bravelynk.com"),
  title: {
    default: "Bravelynk Digital Solutions | Software, IT Consultancy & Digital Transformation",
    template: "%s | Bravelynk Digital Solutions",
  },
  description:
    "Bravelynk Digital Solutions Limited (RC: 9270501) delivers software development, IT consultancy, hardware & software installation, and digital transformation for businesses in Nigeria and beyond.",
  keywords: [
    "Bravelynk",
    "software development Lagos",
    "IT consultancy Nigeria",
    "digital transformation Nigeria",
    "hardware installation Lagos",
  ],
  authors: [{ name: "Bravelynk Digital Solutions Limited" }],
  openGraph: {
    title: "Bravelynk Digital Solutions",
    description:
      "Practical, scalable technology for businesses ready to compete in the modern economy. Software development, IT consultancy, installation & digital transformation.",
    url: "https://bravelynk.com",
    siteName: "Bravelynk Digital Solutions",
    locale: "en_NG",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#080e1a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased" id="top">
        <ThemeProvider>
          <BookingProvider>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
            <FearPopup />
          </BookingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

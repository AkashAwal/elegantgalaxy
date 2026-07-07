import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import BackToTop from "@/components/BackToTop";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CookieConsentBanner from "@/components/CookieConsentBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elegantgalaxy.in"),

  title: {
    default:  "Elegant Galaxy — Home Appliances Since 2012",
    template: "%s — Elegant Galaxy",
  },
  description:
    "Elegant Galaxy makes LED TVs, washing machines, air coolers, and infrared cooktops for Indian households. Sold in 500+ cities, with every repair handled in-house at our own factory.",

  keywords: [
    "home appliances India",
    "LED TV India",
    "washing machine India",
    "air cooler India",
    "infrared cooktop India",
    "Elegant Galaxy",
    "buy home appliances online India",
  ],

  authors:  [{ name: "Elegant Galaxy", url: "https://elegantgalaxy.in" }],
  creator:  "Elegant Galaxy",
  publisher:"Elegant Galaxy",

  openGraph: {
    type:        "website",
    locale:      "en_IN",
    url:         "https://elegantgalaxy.in",
    siteName:    "Elegant Galaxy",
    title:       "Elegant Galaxy — Home Appliances Since 2012",
    description: "LED TVs, washing machines, air coolers, and infrared cooktops built for Indian households.",
    images: [
      {
        url:    "/og-image.png",
        width:  1200,
        height: 630,
        alt:    "Elegant Galaxy — Home Appliances",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "Elegant Galaxy — Home Appliances Since 2012",
    description: "LED TVs, washing machines, air coolers, and infrared cooktops built for Indian households.",
    images:      ["/og-image.png"],
  },

  robots: {
    index:               true,
    follow:              true,
    googleBot: {
      index:             true,
      follow:            true,
      "max-image-preview":  "large",
      "max-snippet":        -1,
      "max-video-preview":  -1,
    },
  },

  verification: {
    // Add Search Console verification token here once confirmed:
    // google: "YOUR_VERIFICATION_TOKEN",
  },

  category: "shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${inter.variable}`}>
      <body className="min-h-full flex flex-col antialiased">
        {/* ── Skip to content (A11Y) ───────────────────────────────────────────
            Visually hidden above the viewport; slides into view on keyboard
            focus so screen-reader and keyboard users can bypass the navbar.  */}
        <a
          href="#main-content"
          className="fixed -top-20 left-4 z-[9999] rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#0071e3] shadow-lg ring-2 ring-[#0071e3] outline-none transition-[top] duration-150 focus:top-4"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <SiteFooter />
        <BackToTop />
        <WhatsAppFloat />
        <CookieConsentBanner />
      </body>
    </html>
  );
}

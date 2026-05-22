import React from "react";
import type { Metadata } from "next";
import {
  Poppins,
  Inter,
  Instrument_Sans,
  Public_Sans,
} from "next/font/google";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { cn } from "@/lib/utils";
import RootProviders from "@/components/providers";
import { ChatBot } from "@/components/chatbot";
import { ChatBotRandom } from "@/components/randomize";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontPoppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fontMono = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const fontInstrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const fontPublicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elegant Galaxy — Premium Home Appliances",
  description:
    "Precision-engineered televisions, cooling systems, and laundry appliances for the modern home.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Elegant Galaxy — Premium Home Appliances",
    description:
      "Precision-engineered televisions, cooling systems, and laundry appliances for the modern home.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Elegant Galaxy — Engineered for Life",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elegant Galaxy — Premium Home Appliances",
    description:
      "Precision-engineered televisions, cooling systems, and laundry appliances for the modern home.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontPoppins.variable,
          fontMono.variable,
          fontInstrumentSans.variable,
          fontPublicSans.variable,
        )}
      >
        <RootProviders>{children}</RootProviders>
        <ChatBotRandom />
        <Analytics />
      </body>
    </html>
  );
}

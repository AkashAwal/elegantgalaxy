import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";

export const metadata: Metadata = {
  title: "Elegant Galaxy Pvt Ltd",
  description:
    "Elegant Galaxy Private Limited — premium home appliances including Smart TVs, Washing Machines, Air Coolers, and Infrared Cooktops.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Font is set via CSS font-family (SF Pro system stack); no Google Font needed.
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <SearchBar />
        {children}
      </body>
    </html>
  );
}

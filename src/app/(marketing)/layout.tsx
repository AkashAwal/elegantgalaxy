import React from "react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main className="w-full flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}

import { Suspense } from "react";
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title:       "Contact — Elegant Galaxy",
  description: "Get in touch with the Elegant Galaxy team. Customer care, sales, and distributor enquiries.",
};

function ContactSkeleton() {
  // Holds layout space while the client component hydrates
  return <div style={{ minHeight: "80vh" }} />;
}

export default function ContactPage() {
  return (
    <main className="bg-[#f5f5f7] min-h-screen">
      <Suspense fallback={<ContactSkeleton />}>
        <ContactClient />
      </Suspense>
    </main>
  );
}

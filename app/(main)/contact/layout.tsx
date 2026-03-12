import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nitnot.com";

export const metadata: Metadata = {
  title: "Book Head Lice Treatment | Contact NitNOT Clinic",
  description:
    "Book professional head lice treatment at our Hampton clinic or arrange a home visit. Call 07835 356251, email or send a booking request. Fast, friendly response.",
  alternates: { canonical: `${baseUrl}/contact` },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

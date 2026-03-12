import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nitnot.com";

export const metadata: Metadata = {
  title: "Head Lice Treatment Services — Clinic & Home Visits | NitNOT Clinic",
  description:
    "Professional head lice treatment at our Hampton clinic or in your home. Head lice checks, clinic treatment and home visits. Transparent pricing, 100% guarantee.",
  alternates: { canonical: `${baseUrl}/services` },
  openGraph: {
    title: "Head Lice Treatment Services — Clinic & Home Visits | NitNOT Clinic",
    description: "Professional head lice treatment at our Hampton clinic or in your home. Head lice checks, clinic and home visits. 100% guarantee.",
    url: `${baseUrl}/services`,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

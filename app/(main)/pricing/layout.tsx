import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nitnot.com";

export const metadata: Metadata = {
  title: "Head Lice Treatment Pricing — Clinic & Home Visits | NitNOT Clinic",
  description:
    "Transparent head lice treatment prices for our Hampton clinic and home visits. Head lice checks, clinic treatment and follow-ups. No minimum for clinic appointments.",
  alternates: { canonical: `${baseUrl}/pricing` },
  openGraph: {
    title: "Head Lice Treatment Pricing — Clinic & Home Visits | NitNOT Clinic",
    description:
      "Transparent pricing for professional head lice treatment in Hampton and London. Clinic and home visit rates.",
    url: `${baseUrl}/pricing`,
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

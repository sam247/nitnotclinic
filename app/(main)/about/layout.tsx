import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nitnot.com";

export const metadata: Metadata = {
  title: "About NitNOT Clinic — Professional Head Lice Treatment",
  description:
    "Meet the team behind NitNOT Clinic. Over 8 years of experience in professional head lice treatment and lice removal. Safe, gentle, child-friendly care in Hampton and London.",
  alternates: { canonical: `${baseUrl}/about` },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

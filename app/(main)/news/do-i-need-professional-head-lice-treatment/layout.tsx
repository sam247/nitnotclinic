import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nitnot.com";

export const metadata: Metadata = {
  title: "Do I Need Professional Head Lice Treatment Or Can I Treat It At Home?",
  description:
    "When to try DIY head lice treatment and when to book a head lice clinic or home visit. Expert advice for worried parents from NitNOT Clinic.",
  alternates: { canonical: `${baseUrl}/news/do-i-need-professional-head-lice-treatment` },
};

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

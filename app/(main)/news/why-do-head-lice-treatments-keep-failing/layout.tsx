import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nitnot.com";

export const metadata: Metadata = {
  title: "Why Do Head Lice Treatments Keep Failing (And What Actually Works)?",
  description:
    "Reasons shop-bought head lice treatments fail — resistance, missed eggs, rushing combing — and when to book professional head lice treatment at a clinic or home visit.",
  alternates: { canonical: `${baseUrl}/news/why-do-head-lice-treatments-keep-failing` },
};

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

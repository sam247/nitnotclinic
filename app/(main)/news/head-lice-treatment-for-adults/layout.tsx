import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Head Lice Treatment for Adults | NitNOT Clinic",
  description:
    "Complete guide to head lice treatment for adults in the UK. Learn how to identify, treat, and prevent head lice with NHS-approved methods. Professional help available.",
  alternates: { canonical: "https://nitnot.com/news/head-lice-treatment-for-adults" },
};

export default function HeadLiceArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

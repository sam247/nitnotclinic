import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nitnot.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Professional Head Lice Treatment | NitNOT Clinic — Hampton & London",
    template: "%s | NitNOT Clinic",
  },
  description:
    "Book professional head lice treatment at our Hampton clinic or at home. Fast, safe, child-friendly lice removal with a 100% guarantee. Head lice clinic and home visits across London.",
  keywords: [
    "head lice treatment",
    "head lice clinic",
    "professional lice removal",
    "head lice treatment near me",
    "lice removal London",
    "head lice treatment Hampton",
    "nit nurse",
  ],
  authors: [{ name: "NitNOT Clinic" }],
  openGraph: {
    title: "Professional Head Lice Treatment | NitNOT Clinic — Hampton & London",
    description:
      "Book professional head lice treatment at our Hampton clinic or at home. Fast, safe, child-friendly lice removal with a 100% guarantee.",
    type: "website",
    url: baseUrl,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: { canonical: baseUrl },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        <GoogleAnalytics />
        <LocalBusinessSchema />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

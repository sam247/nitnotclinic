"use client";

import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const pricing = [
  {
    title: "Head Lice Check",
    clinicPrice: "£15",
    homePrice: "£25",
    note: "Price counts towards further treatment if head lice are found.",
  },
  {
    title: "Short/Thin to Medium Hair",
    clinicPrice: "£45–£65",
    homePrice: "£75–£85",
    note: "Follow-up treatment 7–10 days later from £55 (clinic).",
    popular: true,
  },
  {
    title: "Long/Thick Hair & Severe Cases",
    clinicPrice: "£85–£95",
    homePrice: "£95–£105",
    note: "Follow-up from £75. Extra long/thick hair: +£20 per 30 mins.",
  },
];

export default function PricingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Head Lice Treatment Pricing"
        subtitle="Clear clinic and home-visit prices for head lice checks and full treatment. No minimum charge for clinic appointments at our Hampton clinic."
        showCTA
        ctaText="Book head lice treatment"
        onCTAClick={() => router.push("/contact")}
      />

      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              No minimum for clinic appointments. Free on-street parking at our Hampton head lice clinic. Home visits: minimum £150; travel may apply for longer journeys.
            </p>
            <p className="text-sm text-gray-500">
              For clinic, home visits and head lice checks in full detail, see our{" "}
              <Link href="/services" className="text-orange-600 font-medium hover:underline">
                services page
              </Link>
              .
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pricing.map((row, index) => (
              <Card
                key={index}
                className={`relative ${row.popular ? "border-orange-500 ring-2 ring-orange-500 shadow-xl md:scale-105" : "border-gray-200 shadow-lg"}`}
              >
                {row.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-lg sm:text-xl text-gray-900">
                    {row.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between gap-4 text-sm">
                    <span className="text-gray-600">Clinic:</span>
                    <span className="font-bold text-gray-900">{row.clinicPrice}</span>
                  </div>
                  <div className="flex justify-between gap-4 text-sm">
                    <span className="text-gray-600">Home visit:</span>
                    <span className="font-bold text-gray-900">{row.homePrice}</span>
                  </div>
                  <p className="text-xs text-gray-500 italic">{row.note}</p>
                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() => router.push("/contact")}
                  >
                    Book head lice treatment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="py-12 sm:py-20 bg-orange-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-orange-100 mb-6">
            Questions about which option fits your family? We&apos;re happy to help — book a head lice check or full treatment.
          </p>
          <Button
            size="lg"
            className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full font-semibold"
            onClick={() => router.push("/contact")}
          >
            Book an appointment
          </Button>
        </div>
      </section>
    </div>
  );
}

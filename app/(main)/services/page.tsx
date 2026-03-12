"use client";

import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, Home, Leaf } from "lucide-react";
import { useRouter } from "next/navigation";

const serviceSections = [
  {
    id: "clinic",
    title: "Head Lice Treatment Clinic",
    subtitle: "Professional lice removal at our Hampton clinic",
    icon: Home,
    benefits: [
      "Fast, thorough head lice treatment in a calm, child-friendly environment",
      "Free on-street parking — no minimum charge for clinic appointments",
      "Full discretion and privacy",
      "100% guarantee — we don't stop until you're clear",
    ],
    cta: "Book clinic treatment",
  },
  {
    id: "home",
    title: "Head Lice Home Visits",
    subtitle: "We come to you across London and surrounding areas",
    icon: Clock,
    benefits: [
      "Same safe, professional head lice treatment in your own home",
      "Ideal for busy families or children who prefer familiar surroundings",
      "Perfect for sensory needs or when getting to the clinic is difficult",
      "Minimum charge £150 for home visits; travel may apply for longer journeys",
    ],
    cta: "Book a home visit",
  },
  {
    id: "check",
    title: "Head Lice Checks",
    subtitle: "Quick, affordable confirmation before treatment",
    icon: Users,
    benefits: [
      "Quick scalp and hair inspection by a specialist",
      "Suitable for all ages — peace of mind for worried parents",
      "Price counts towards full treatment if head lice are found",
      "No obligation to book treatment on the day",
    ],
    cta: "Book a head lice check",
  },
];

const pricing = [
  {
    title: "Head Lice Check",
    clinicPrice: "£10",
    homePrice: "£15",
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

export default function ServicesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Head Lice Treatment Services"
        subtitle="Professional head lice treatment at our Hampton clinic or in your home. Fast, safe, child-friendly lice removal with a 100% guarantee."
      />

      {/* Section 1: Head lice treatment clinic */}
      <section className="py-12 sm:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            {(() => {
              const Icon = serviceSections[0].icon;
              return <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-orange-500 flex-shrink-0" />;
            })()}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {serviceSections[0].title}
              </h2>
              <p className="text-gray-600">{serviceSections[0].subtitle}</p>
            </div>
          </div>
          <ul className="space-y-2 mb-6 max-w-2xl">
            {serviceSections[0].benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{b}</span>
              </li>
            ))}
          </ul>
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
            onClick={() => router.push("/contact")}
          >
            {serviceSections[0].cta}
          </Button>
        </div>
      </section>

      {/* Section 2: Head lice home visits */}
      <section className="py-12 sm:py-16 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            {(() => {
              const Icon = serviceSections[1].icon;
              return <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-orange-500 flex-shrink-0" />;
            })()}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {serviceSections[1].title}
              </h2>
              <p className="text-gray-600">{serviceSections[1].subtitle}</p>
            </div>
          </div>
          <ul className="space-y-2 mb-6 max-w-2xl">
            {serviceSections[1].benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{b}</span>
              </li>
            ))}
          </ul>
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
            onClick={() => router.push("/contact")}
          >
            {serviceSections[1].cta}
          </Button>
        </div>
      </section>

      {/* Section 3: Head lice checks */}
      <section className="py-12 sm:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            {(() => {
              const Icon = serviceSections[2].icon;
              return <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-orange-500 flex-shrink-0" />;
            })()}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {serviceSections[2].title}
              </h2>
              <p className="text-gray-600">{serviceSections[2].subtitle}</p>
            </div>
          </div>
          <ul className="space-y-2 mb-6 max-w-2xl">
            {serviceSections[2].benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{b}</span>
              </li>
            ))}
          </ul>
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
            onClick={() => router.push("/contact")}
          >
            {serviceSections[2].cta}
          </Button>
        </div>
      </section>

      {/* Transparent pricing */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Transparent Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              No minimum for clinic appointments. Free on-street parking at our Hampton head lice clinic. Home visits: minimum £150; travel may apply for longer journeys.
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

      {/* Eco-friendly */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf className="mx-auto h-12 w-12 text-orange-500 mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Safe, Non-Toxic Professional Lice Removal
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            We use only NitNOT&apos;s lab-tested, non-toxic treatments — 100% eco-friendly and safe for children of all ages.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["100% non-toxic", "Eco-friendly", "Lab-tested", "Pesticide-free"].map((tag) => (
              <span
                key={tag}
                className="bg-orange-50 text-orange-700 font-semibold px-4 py-2 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance + final CTA */}
      <section className="py-12 sm:py-20 bg-orange-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-orange-100 mb-6">
            Every treatment is carried out with gentle, proven methods and full discretion. With over eight years of experience, we&apos;ve helped hundreds of families — and we guarantee our head lice treatment. You&apos;re in safe hands.
          </p>
          <Button
            size="lg"
            className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full font-semibold"
            onClick={() => router.push("/contact")}
          >
            Book head lice treatment today
          </Button>
        </div>
      </section>
    </div>
  );
}

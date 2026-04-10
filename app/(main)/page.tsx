"use client";

import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import BadgeCarousel from "@/components/BadgeCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Shield,
  Clock,
  Heart,
  Star,
  Phone,
  Leaf,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const features = [
  {
    icon: Shield,
    title: "100% Guaranteed",
    description:
      "We guarantee complete removal of head lice and nits. 100% success rate with every treatment.",
  },
  {
    icon: Clock,
    title: "8+ Years Experience",
    description:
      "Over eight years of specialist experience in professional lice removal. Fast, thorough treatment your family can trust.",
  },
  {
    icon: Leaf,
    title: "Safe & Non-Toxic",
    description:
      "We use only NitNOT's lab-tested, clinic-developed, non-toxic treatments. 100% eco-friendly and gentle on children.",
  },
  {
    icon: Heart,
    title: "Child-Friendly Care",
    description:
      "Expert-led head lice treatment delivered with care and discretion. Suits children of all ages — we put worried parents at ease.",
  },
];

export default function IndexPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Above-the-fold: professional head lice treatment */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50/30 py-12 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Professional Head Lice Treatment & Lice Removal — Hampton & London
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Fast, safe, child-friendly head lice treatment at our Hampton clinic or in your home. Professional lice removal with a 100% guarantee. No more battling nits alone — book head lice treatment and let a specialist clear your family quickly and gently.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => router.push("/contact")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book Head Lice Treatment
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-400 text-orange-600 hover:bg-orange-50 px-6 sm:px-8 py-4 text-base sm:text-lg rounded-full"
                  asChild
                >
                  <a href="tel:07835356251">Call 07835 356251</a>
                </Button>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="flex items-center space-x-0.5">
                  {[1, 2, 3, 4].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-orange-500 text-orange-500"
                    />
                  ))}
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-orange-500 text-orange-500 opacity-70" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600">
                  <span className="font-semibold">4.7</span> from 20+ Google reviews
                </span>
              </div>
            </div>
            <div
              className="relative animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 to-orange-50 p-4 sm:p-8">
                <Image
                  src="/images/hero_image.webp"
                  alt="Professional head lice treatment at NitNOT Clinic, Hampton"
                  width={800}
                  height={500}
                  className="w-full h-64 sm:h-96 object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BadgeCarousel />

      {/* Clinic & home visits */}
      <section className="py-12 sm:py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="animate-fade-in-up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Head Lice Treatment Clinic — Hampton
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4">
                Our head lice clinic in Hampton offers professional lice removal in a calm, child-friendly setting. Safe, non-toxic treatment with a 100% guarantee — ideal for head lice treatment near me in Surrey and South West London.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Free on-street parking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Full discretion</span>
                </li>
              </ul>
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
                onClick={() => router.push("/contact")}
              >
                Book an Appointment
              </Button>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Head Lice Home Visits
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4">
                Can&apos;t get to the clinic? We offer professional head lice treatment at your home across London and surrounding areas. Same safe, gentle methods — perfect for busy families or children who prefer their own space.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Fully mobile service</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Travel costs may apply*</span>
                </li>
              </ul>
              <Button
                variant="outline"
                className="border-orange-400 text-orange-600 hover:bg-orange-50 rounded-full px-6"
                asChild
              >
                <a href="tel:07835356251">Call to Book a Home Visit</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Eco-friendly products */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/safe_non_toxic_section.webp"
                alt="NitNOT eco-friendly head lice treatment products"
                width={800}
                height={500}
                className="w-full h-64 sm:h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Safe, Non-Toxic Professional Lice Removal
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                We use only NitNOT&apos;s lab-tested, non-toxic treatments — 100% eco-friendly and proven effective. Safe for children of all ages and gentle on sensitive scalps.
              </p>
              <ul className="space-y-3 mb-6 sm:mb-8">
                {["100% non-toxic", "Eco-friendly", "Safe for all ages", "No harsh chemicals"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => router.push("/contact")}
              >
                Book Head Lice Treatment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why you're in safe hands */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Head Lice Clinic
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              8+ years of specialist experience in professional lice removal. Gentle methods, proven results, and a 100% guarantee — so you can stop worrying and get your family clear.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-5 sm:p-6 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-orange-50 rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 text-orange-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10 sm:mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-orange-400 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg rounded-full"
              onClick={() => router.push("/pricing")}
            >
              View Pricing & Services
            </Button>
          </div>
        </div>
      </section>

      <ReviewsSection />

      {/* Final CTA + reassurance */}
      <section className="py-12 sm:py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Book Professional Head Lice Treatment?
          </h2>
          <p className="text-lg sm:text-xl text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            We use only safe, gentle methods and have helped hundreds of families. Your child is in experienced hands — book your head lice treatment today and get back to normal.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50 px-6 sm:px-8 py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => router.push("/contact")}
            >
              Book an Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-orange-600 hover:bg-orange-50 border-white px-6 sm:px-8 py-4 text-base sm:text-lg rounded-full"
              asChild
            >
              <a href="tel:07835356251">
                <Phone className="mr-2 h-5 w-5" />
                Call 07835 356251
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

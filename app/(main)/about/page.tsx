import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Award, Users, Leaf, Clock } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "100% Guaranteed",
    description:
      "We guarantee complete removal of head lice and nits with every treatment. Proven results every time.",
  },
  {
    icon: Leaf,
    title: "Non-Toxic & Eco-Friendly",
    description:
      "We use only lab-tested, clinic-developed, non-toxic treatments. 100% eco-friendly and safe for all ages.",
  },
  {
    icon: Heart,
    title: "Gentle Care",
    description:
      "Expert-led treatments delivered with care, discretion, and compassion. We make every child feel comfortable.",
  },
  {
    icon: Clock,
    title: "8+ Years Experience",
    description:
      "Over eight years of specialist experience in researching, studying, and treating head lice and nits.",
  },
];

const stats = [
  { number: "8+", label: "Years Experience" },
  { number: "100%", label: "Success Rate" },
  { number: "4.7★", label: "Google Rating" },
  { number: "20+", label: "Google Reviews" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="About NitNOT Clinic"
        subtitle="With over eight years of professional experience and real-world expertise, we've helped countless families find safe, lasting relief."
      />

      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why You&apos;re in Safe Hands
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600">
                <p>
                  NitNOT Clinic was founded by Anica, a specialist with over eight years of experience in researching, studying, and treating head lice and nits.
                </p>
                <p>
                  We provide professional head lice removal with a 100% guarantee of success in our clinic based in Hampton, UK and a mobile service directly to you, for stress-free treatment your family can trust.
                </p>
                <p>
                  Whether you visit us in our clinic or prefer a home appointment, our expert team offers gentle, professional care for every member of your family.
                </p>
                <p>
                  We use only NitNOT&apos;s lab-tested, clinic-developed, non-toxic treatments — 100% eco-friendly and proven effective in both clinical and laboratory testing.
                </p>
              </div>
            </div>
            <div className="bg-orange-50 p-6 sm:p-8 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Approach
              </h3>
              <blockquote className="text-base sm:text-lg text-gray-600 italic mb-4">
                &quot;Expert-led treatments delivered with care, discretion, and proven results. Supportive guidance on prevention in the future.&quot;
              </blockquote>
              <cite className="text-orange-600 font-semibold text-sm sm:text-base">
                — Anica, Founder of NitNOT Clinic
              </cite>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Values
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Safe and non-toxic products used only. Suits children of all ages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-5 sm:p-6">
                  <value.icon className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-orange-500 mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Trusted by Families
            </h2>
            <p className="text-base sm:text-xl text-orange-100 max-w-2xl mx-auto">
              Our track record speaks for itself.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-orange-100 text-sm sm:text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Meet Anica
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Your specialist nit nurse with over 8 years of experience.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-lg animate-fade-in-up">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-orange-50 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 sm:h-12 sm:w-12 text-orange-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                  Anica
                </h3>
                <p className="text-orange-500 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                  Founder & Lead Specialist
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  With over eight years of professional experience and real-world expertise, Anica has helped countless families find safe, lasting relief from head lice. She is passionate about providing gentle, professional care and using only non-toxic, eco-friendly products that are safe for children of all ages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
            Professional Standards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <Leaf className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-orange-500 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                100% Non-Toxic
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                All treatments are lab-tested, non-toxic, and eco-friendly. Safe for children of all ages.
              </p>
            </div>
            <div>
              <Award className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-orange-500 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Guaranteed Results
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                100% guarantee of success with every treatment. Proven effective in clinical and laboratory testing.
              </p>
            </div>
            <div>
              <Heart className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-orange-500 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Full Discretion
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Complete confidentiality and discretion. Comfortable, child-friendly environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance + final CTA */}
      <section className="py-12 sm:py-20 bg-orange-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-orange-100 mb-6">
            We use only safe, gentle methods and treat every family with care and discretion. With over eight years of experience in professional head lice treatment, we&apos;re here to put worried parents at ease and get your family clear for good.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full font-semibold transition-colors"
          >
            Book head lice treatment
          </a>
        </div>
      </section>
    </div>
  );
}

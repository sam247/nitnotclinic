"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const articles = [
  {
    slug: "why-do-head-lice-treatments-keep-failing",
    title: "Why Do Head Lice Treatments Keep Failing (And What Actually Works)?",
    excerpt:
      "Reasons shop-bought head lice treatments fail — resistance, missed eggs, rushing combing — and when to book professional head lice treatment.",
    date: "2026-03-14",
  },
  {
    slug: "do-i-need-professional-head-lice-treatment",
    title: "Do I Need Professional Head Lice Treatment Or Can I Treat It At Home?",
    excerpt:
      "When to try DIY and when to book a head lice clinic or home visit. Expert advice for worried parents — save time, stress and money with professional lice removal.",
    date: "2026-03-12",
  },
  {
    slug: "head-lice-treatment-for-adults",
    title: "Head Lice Treatment for Adults",
    excerpt:
      "If you thought head lice were only a problem for school children, you're not alone — but you'd be mistaken. Learn everything adults need to know about identifying, treating, and preventing head lice.",
    date: "2026-03-08",
  },
];

export function NewsContent() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <section className="py-12 sm:py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            News & Articles
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Expert advice and tips on head lice treatment and prevention.
          </p>

          <div className="space-y-6">
            {articles.map((article) => (
              <Card
                key={article.slug}
                className="cursor-pointer hover:shadow-lg transition-shadow border-0 shadow-md"
                onClick={() => router.push(`/news/${article.slug}`)}
              >
                <CardContent className="p-6">
                  <p className="text-sm text-orange-500 font-medium mb-2">
                    {new Date(article.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600">{article.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              We use only safe, gentle methods and have helped hundreds of families with professional head lice treatment. If you&apos;re not sure what to do next, we&apos;re here to help.
            </p>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
              onClick={() => router.push("/contact")}
            >
              Book head lice treatment
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
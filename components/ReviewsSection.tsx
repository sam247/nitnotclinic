import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      text: "This has been the most phenomenal and smooth experience to finally eradicate nits once and for all, we have been dealing with them for many many years I have tried absolutely everything and coupled with the professional service and the use of the treatment.",
      author: "Rachel Goddard",
      rating: 5,
      date: "December 2025",
    },
    {
      text: "We had the most amazing experience with Anica. She was absolutely amazing with my 1 year old daughter. She made us all feel so at ease and explained everything to me several times as I asked so many questions!",
      author: "Yasmin Saul",
      rating: 5,
      date: "November 2025",
    },
    {
      text: "Absolutely Amazing treatment by Anica, she was very very friendly very patient and efficient with her work, she took her time to do things thoroughly she made you feel at ease and comfortable and made my daughters feel comfortable.",
      author: "Prashila Chudasama",
      rating: 5,
      date: "October 2025",
    },
    {
      text: "Anica was amazing. She clearly knows her stuff, has done a lot of research, is passionate about helping people and is super thorough and gentle with the treatment. And to top it off just a lovely person to chat to. Thanks so much Anica.",
      author: "Joanna Aked",
      rating: 5,
      date: "October 2025",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={`${i < rating ? "fill-orange-500 text-orange-500" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <Quote className="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-orange-500 mb-3 sm:mb-4" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            What Customers Say About The NitNOT Clinic
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We consistently put in extensive effort to uphold our exceptional level of service, as reflected by the numerous positive reviews we have received on Google.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-1 mb-3 sm:mb-4">
                  {renderStars(review.rating)}
                  <span className="text-xs sm:text-sm text-gray-500 ml-2">{review.date}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-4 italic leading-relaxed">
                  &quot;{review.text}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-gray-900">
                      {review.author}
                    </div>
                    <div className="text-orange-500 text-xs sm:text-sm">Google Review</div>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm sm:text-lg">
                      {review.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-gray-50 rounded-2xl shadow-lg p-6 sm:p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
              <div className="flex space-x-1">{renderStars(5)}</div>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">4.7/5</span>
            </div>
            <p className="text-sm sm:text-lg text-gray-600">
              Stars Rated Across <span className="font-semibold text-orange-600">20 Google Reviews</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

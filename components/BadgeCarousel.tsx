import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const badges = [
  { src: "/images/page-1.webp", alt: "100% Effective" },
  { src: "/images/page-2.webp", alt: "Eco Friendly" },
  { src: "/images/page-3.webp", alt: "Hypo-Allergenic" },
  { src: "/images/page-4.webp", alt: "No Odour" },
  { src: "/images/page-5.webp", alt: "Quick & Easy" },
];

const BadgeCarousel = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 2500, stopOnInteraction: false })]}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {badges.map((badge) => (
              <CarouselItem key={badge.alt} className="pl-2 basis-1/3 md:basis-1/5">
                <div className="flex items-center justify-center p-2">
                  <img
                    src={badge.src}
                    alt={badge.alt}
                    className="w-24 h-24 md:w-28 md:h-28 object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default BadgeCarousel;

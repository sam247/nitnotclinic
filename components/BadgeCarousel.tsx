import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const badges = [
  { src: "/images/badge-100-effective.png", alt: "100% Effective" },
  { src: "/images/badge-eco-friendly.png", alt: "Eco Friendly" },
  { src: "/images/badge-hypo-allergenic.png", alt: "Hypo-Allergenic" },
  { src: "/images/badge-no-odour.png", alt: "No Odour" },
  { src: "/images/badge-quick-easy.png", alt: "Quick & Easy" },
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

import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  showCTA?: boolean;
  ctaText?: string;
  onCTAClick?: () => void;
}

const HeroSection = ({
  title,
  subtitle,
  showCTA = false,
  ctaText = "Get Started",
  onCTAClick,
}: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50/30 py-12 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          {showCTA && onCTAClick && (
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={onCTAClick}
            >
              {ctaText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  className?: string;
  imageUrl?: string;
  buttonText?: string;
  buttonLink?: string;
  isSmall?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  className,
  imageUrl = "/IMG_6828.png",
  buttonText = "Get a Free Estimate",
  buttonLink = "/contact",
  isSmall = false,
}: HeroSectionProps) => {
  return (
    <section
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-brand-dark",
        isSmall ? "py-12 md:py-16" : "py-20 md:py-28",
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container px-4 mx-auto relative z-10 text-center">
        <h1
          className={cn(
            "text-white font-bold",
            isSmall
              ? "text-3xl md:text-4xl mb-4"
              : "text-4xl md:text-5xl lg:text-6xl mb-6"
          )}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className={cn(
              "text-white/90 mx-auto",
              isSmall
                ? "max-w-2xl text-lg mb-6"
                : "max-w-3xl text-xl md:text-2xl mb-8"
            )}
          >
            {subtitle}
          </p>
        )}

        {buttonText && (
          <Button
            asChild
            size={isSmall ? "default" : "lg"}
            className="bg-brand-blue hover:bg-brand-blue/90"
          >
            <Link to={buttonLink}>{buttonText}</Link>
          </Button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;

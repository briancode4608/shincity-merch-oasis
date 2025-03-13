
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  overlayOpacity?: number;
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  buttonText = "Explore Now",
  buttonLink = "/shop",
  overlayOpacity = 40,
}: HeroSectionProps) {
  return (
    <div 
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-shin-black"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-shin-black"
        style={{ opacity: overlayOpacity / 100 }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="font-display font-black text-4xl md:text-5xl lg:text-7xl tracking-tight text-shin-white mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="font-medium text-lg md:text-xl text-shin-white/80 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {buttonText && (
          <Link to={buttonLink}>
            <Button 
              size="lg" 
              className="bg-shin-white text-shin-black hover:bg-shin-accent hover:text-shin-white font-medium rounded-none"
            >
              {buttonText}
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

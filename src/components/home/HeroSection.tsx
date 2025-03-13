
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-oneqana-light to-white flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-oneqana-purple/10 animate-float blur-3xl"></div>
        <div className="absolute bottom-20 right-[10%] w-80 h-80 rounded-full bg-oneqana-pink/10 animate-float blur-3xl" style={{animationDelay: '-2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-oneqana-blue/10 animate-pulse-soft blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
              <Star className="h-4 w-4 text-oneqana-pink mr-2" />
              <span className="text-sm font-medium text-gray-800">Celebrity Web Development Agency</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-oneqana-black">Elevate Your </span>
              <span className="bg-gradient-to-r from-oneqana-purple via-oneqana-pink to-oneqana-blue bg-clip-text text-transparent">Digital Presence</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-xl">
              We create stunning websites for celebrities and artists that authentically 
              represent your brand, boost visibility, and drive monetization opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-oneqana-purple to-oneqana-pink hover:opacity-90 transition-opacity text-white">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Link to="/work">
                <Button size="lg" variant="outline" className="border-gray-300 hover:border-oneqana-purple">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
          
          <div className={`flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-oneqana-purple to-oneqana-pink rounded-xl transform rotate-3 scale-105 blur-sm opacity-70"></div>
              <div className="relative bg-white p-4 rounded-xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2000" 
                  alt="Celebrity Website" 
                  className="w-full h-auto rounded-lg shadow-sm"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-oneqana-purple animate-pulse"></div>
                    <span className="text-sm font-medium">Live Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

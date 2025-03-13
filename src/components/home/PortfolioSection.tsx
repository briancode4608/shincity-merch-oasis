
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  name: string;
  type: string;
  description: string;
  image: string;
}

export function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      name: "Luna Starr",
      type: "Music Artist",
      description: "A vibrant, interactive website for pop sensation Luna Starr, featuring music releases, tour dates, and exclusive merchandise.",
      image: "https://images.unsplash.com/photo-1563543628010-52a0141d0a09?q=80&w=2000",
    },
    {
      name: "Max Reynolds",
      type: "Actor",
      description: "Elegant portfolio website for award-winning actor Max Reynolds, showcasing his work, achievements, and upcoming projects.",
      image: "https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=2000",
    },
    {
      name: "VIBE Collective",
      type: "Dance Group",
      description: "Dynamic website for the internationally acclaimed dance group VIBE Collective, highlighting performances and dance workshops.",
      image: "https://images.unsplash.com/photo-1524854859347-bd2f42367134?q=80&w=2000",
    },
    {
      name: "Elena Vega",
      type: "Fashion Designer",
      description: "Sophisticated e-commerce platform for celebrity fashion designer Elena Vega's exclusive clothing line.",
      image: "https://images.unsplash.com/photo-1618375531935-0a9195186f17?q=80&w=2000",
    },
  ];
  
  const nextProject = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  
  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-oneqana-black via-gray-900 to-oneqana-black text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-oneqana-purple to-oneqana-pink bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-gray-300">
            Explore our work with renowned celebrities and artists, creating digital experiences that elevate their brands.
          </p>
        </div>
        
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-oneqana-purple to-oneqana-pink rounded-xl transform -rotate-2 scale-105 blur-sm opacity-30"></div>
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={projects[activeIndex].image}
                  alt={projects[activeIndex].name}
                  className="w-full h-96 object-cover rounded-xl transform transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="h-px bg-gradient-to-r from-oneqana-purple to-oneqana-pink w-16 mr-4"></div>
                <span className="text-oneqana-pink font-medium">{projects[activeIndex].type}</span>
              </div>
              
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">{projects[activeIndex].name}</h3>
              
              <p className="text-gray-300 mb-8 text-lg">
                {projects[activeIndex].description}
              </p>
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full border-gray-700 hover:border-oneqana-pink hover:bg-transparent"
                    onClick={prevProject}
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full border-gray-700 hover:border-oneqana-pink hover:bg-transparent"
                    onClick={nextProject}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
                
                <Link to="/work">
                  <Button 
                    className="bg-gradient-to-r from-oneqana-purple to-oneqana-pink hover:opacity-90 transition-opacity"
                  >
                    View All Projects
                  </Button>
                </Link>
              </div>
              
              <div className="flex mt-8">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-10 h-1 rounded-full mx-1 transition-all ${activeIndex === index ? 'bg-oneqana-pink' : 'bg-gray-700'}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

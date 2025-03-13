
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Monitor, Globe, Palette, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const services: Service[] = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Custom Web Design",
      description: "Bespoke, responsive websites that capture your unique brand identity and engage your fans.",
      color: "from-oneqana-purple to-oneqana-pink",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Brand Strategy",
      description: "Develop a cohesive digital brand strategy that aligns with your artistic vision and career goals.",
      color: "from-oneqana-pink to-oneqana-blue",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Digital Marketing",
      description: "Strategic campaigns that increase your online visibility and connect you with your audience.",
      color: "from-oneqana-blue to-oneqana-purple",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Monetization Solutions",
      description: "Implement effective strategies to monetize your digital presence through merchandise, content, and more.",
      color: "from-purple-600 to-blue-500",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Fan Engagement",
      description: "Create interactive experiences that foster deeper connections with your fanbase.",
      color: "from-pink-500 to-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-600">
            We offer comprehensive digital solutions tailored specifically for celebrities and artists looking to elevate their online presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="space-y-4">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  service={service}
                  isActive={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            
            <div className="mt-8">
              <Link to="/services">
                <Button variant="outline" className="border-gray-300">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="relative rounded-xl overflow-hidden shadow-2xl h-80 md:h-96 lg:h-full transition-all duration-500">
              <div className={`absolute inset-0 bg-gradient-to-r ${services[activeIndex].color} opacity-90`}></div>
              
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8 w-full max-w-lg text-white animate-grow">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-white/20 mr-4">
                      {services[activeIndex].icon}
                    </div>
                    <h3 className="font-heading text-2xl font-bold">{services[activeIndex].title}</h3>
                  </div>
                  <p className="mb-6 text-white/90 text-lg">{services[activeIndex].description}</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-white/70 mr-2"></div>
                      <span>Tailored to your unique brand</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-white/70 mr-2"></div>
                      <span>Ongoing support and optimization</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-white/70 mr-2"></div>
                      <span>Data-driven approach for maximum impact</span>
                    </li>
                  </ul>
                  <Button className="bg-white text-gray-800 hover:bg-white/90">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
  isActive: boolean;
  onClick: () => void;
}

function ServiceCard({ service, isActive, onClick }: ServiceCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left p-5 rounded-lg transition-all duration-300 flex items-start",
        isActive 
          ? "bg-gradient-to-r from-oneqana-purple to-oneqana-pink text-white shadow-lg" 
          : "bg-gray-50 hover:bg-gray-100 text-gray-800"
      )}
    >
      <div className={cn(
        "p-2 rounded mr-4",
        isActive ? "bg-white/20" : "bg-white"
      )}>
        {service.icon}
      </div>
      <div>
        <h3 className="font-medium text-lg mb-1">{service.title}</h3>
        <p className={cn(
          "text-sm",
          isActive ? "text-white/80" : "text-gray-500"
        )}>
          {service.description}
        </p>
      </div>
    </button>
  );
}

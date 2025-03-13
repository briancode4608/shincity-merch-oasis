
import { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  content: string;
  author: string;
  position: string;
  rating: number;
}

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const testimonials: Testimonial[] = [
    {
      content: "Oneqana transformed my online presence completely. Their team understood my vision and created a website that truly represents my artistic identity while helping me connect with fans in a meaningful way.",
      author: "Aria Martinez",
      position: "Grammy-winning Singer",
      rating: 5,
    },
    {
      content: "Working with Oneqana was a game-changer for my brand. Their strategic approach to web design and digital marketing has significantly increased my visibility and merchandise sales.",
      author: "Jason Chen",
      position: "Actor & Producer",
      rating: 5,
    },
    {
      content: "The team at Oneqana are true professionals. They created a stunning website that captures my essence as an artist and has become a valuable platform for engaging with my audience.",
      author: "Sophia Williams",
      position: "Visual Artist",
      rating: 5,
    },
  ];
  
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
      className="py-20 bg-gradient-to-br from-white via-oneqana-light to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-gray-600">
            Don't just take our word for it. Hear from the celebrities and artists who have transformed their digital presence with Oneqana.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-1000 delay-${index * 200} transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 font-medium italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-oneqana-purple to-oneqana-pink flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

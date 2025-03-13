
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useEffect, useState, useRef } from "react";
import { Star, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20"> {/* Space for navbar */}
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-oneqana-black flex items-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2000" 
              alt="Oneqana Team" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-oneqana-black/90 to-oneqana-black/60"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Star className="h-4 w-4 text-oneqana-pink mr-2" />
                <span className="text-sm font-medium text-white">About Oneqana</span>
              </div>
              
              <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
                We Create Digital Magic for Celebrities
              </h1>
              
              <p className="text-gray-300 text-lg">
                Oneqana is a premier web development agency dedicated to helping celebrities and artists 
                monetize their brand with authentic, visually stunning digital experiences.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section ref={sectionRef} className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-oneqana-purple to-oneqana-pink rounded-xl transform -rotate-3 scale-105 blur-sm opacity-30"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2000" 
                    alt="Our Story" 
                    className="relative rounded-xl w-full shadow-lg"
                  />
                </div>
              </div>
              
              <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="text-gradient">Story</span>
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Founded in 2020, Oneqana was born from a vision to bridge the gap between celebrity personal brands and 
                  digital excellence. We recognized that while many celebrities and artists have powerful personal brands, 
                  their digital presence often failed to capture their authentic identity or effectively monetize their influence.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Our team of designers, developers, and digital strategists combined their expertise to create a unique agency 
                  focused exclusively on helping notable personalities elevate their online presence through custom-designed websites.
                </p>
                
                <p className="text-gray-600">
                  Today, we're proud to have worked with dozens of celebrities and artists across the entertainment industry, 
                  helping them authentically represent their brand, improve visibility, and create new revenue streams through 
                  their digital presence.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats */}
        <section className="py-16 bg-gradient-to-r from-oneqana-purple to-oneqana-pink text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="font-display text-4xl md:text-5xl font-bold mb-2">50+</div>
                <p className="text-white/80">Celebrity Clients</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="font-display text-4xl md:text-5xl font-bold mb-2">100+</div>
                <p className="text-white/80">Projects Completed</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="font-display text-4xl md:text-5xl font-bold mb-2">30M+</div>
                <p className="text-white/80">Website Visitors</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="font-display text-4xl md:text-5xl font-bold mb-2">12M+</div>
                <p className="text-white/80">Revenue Generated</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Meet Our <span className="text-gradient">Team</span>
              </h2>
              <p className="text-gray-600">
                Our diverse team of creative professionals is passionate about helping celebrities and artists shine in the digital world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamMember 
                name="Alexandra Chen"
                position="Founder & Creative Director"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000"
              />
              <TeamMember 
                name="Marcus Johnson"
                position="Lead Developer"
                image="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000"
              />
              <TeamMember 
                name="Sophia Rodriguez"
                position="Brand Strategist"
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000"
              />
              <TeamMember 
                name="David Kim"
                position="UX/UI Designer"
                image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000"
              />
              <TeamMember 
                name="Olivia Taylor"
                position="Digital Marketing Specialist"
                image="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000"
              />
              <TeamMember 
                name="James Wilson"
                position="Client Relations Manager"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000"
              />
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-20 bg-oneqana-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-oneqana-purple to-oneqana-pink bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-gray-300">
                These core principles guide our approach and ensure we deliver exceptional results for every client.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-oneqana-purple to-oneqana-pink mb-6">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">Authenticity</h3>
                <p className="text-gray-300">
                  We believe in creating digital experiences that genuinely reflect our clients' unique brand identity and artistic vision.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-oneqana-purple to-oneqana-pink mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-300">
                  We are committed to delivering the highest quality work in every aspect, from design and development to strategy and support.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-oneqana-purple to-oneqana-pink mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">Collaboration</h3>
                <p className="text-gray-300">
                  We work closely with our clients to ensure their input and vision are central to the creative process.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-oneqana-purple to-oneqana-pink mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We embrace cutting-edge technologies and creative approaches to help our clients stand out in a crowded digital landscape.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 md:col-span-2">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-oneqana-purple to-oneqana-pink">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold ml-4">Our Mission</h3>
                </div>
                <p className="text-gray-300 text-lg">
                  At Oneqana, our mission is to empower celebrities and artists to fully realize the potential of their digital presence. 
                  We're dedicated to creating websites that not only look stunning but also effectively communicate their unique brand identity, 
                  engage their audience, and generate new revenue opportunities. Through our work, we aim to bridge the gap between artistic 
                  expression and digital excellence.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
}

function TeamMember({ name, position, image }: TeamMemberProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <div className="absolute inset-0 bg-gradient-to-r from-oneqana-purple to-oneqana-pink opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
          <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-oneqana-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-oneqana-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <img 
          src={image} 
          alt={name}
          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="font-heading font-bold text-xl">{name}</h3>
      <p className="text-gray-600">{position}</p>
    </div>
  );
}

export default About;

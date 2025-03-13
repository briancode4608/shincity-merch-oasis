
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="min-h-screen bg-shin-white">
      <Navbar />
      
      <div className="pt-16 md:pt-20"> {/* Space for navbar */}
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-shin-black flex items-center overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            <img 
              src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2000" 
              alt="ShinCity Studio" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="font-display font-bold text-5xl md:text-7xl text-shin-white max-w-3xl">
              THE SOUND OF TOMORROW
            </h1>
          </div>
        </div>
        
        {/* About Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="mb-16">
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-8">OUR STORY</h2>
                <p className="text-lg text-shin-gray mb-6">
                  Founded in 2018, ShinCity began as a collective of musicians, designers, and audio engineers with a shared vision: 
                  to create a brand that embodies the fusion of innovative sound and cutting-edge style.
                </p>
                <p className="text-lg text-shin-gray mb-6">
                  What started as limited-run merchandise for underground music events quickly evolved into a global movement. 
                  Today, ShinCity stands at the intersection of music culture and premium design, offering exclusive products 
                  that reflect our commitment to quality and artistic expression.
                </p>
                <p className="text-lg text-shin-gray">
                  Each ShinCity release – whether it's a piece of clothing, an audio device, or a musical production – is created with meticulous 
                  attention to detail and a forward-thinking approach that pushes boundaries and challenges conventions.
                </p>
              </div>
              
              <Separator className="my-16" />
              
              <div className="mb-16">
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-8">OUR MISSION</h2>
                <p className="text-lg text-shin-gray">
                  ShinCity exists to empower creative expression through sound and style. We believe in the transformative power of music 
                  and its ability to connect people across cultures and backgrounds. Our mission is to create products and experiences that 
                  inspire our community to embrace individuality, push creative boundaries, and move confidently into the future.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                <div>
                  <h3 className="font-display font-bold text-xl mb-4">INNOVATION</h3>
                  <p className="text-shin-gray">
                    We continuously explore new technologies, materials, and production techniques to create products that stand at the 
                    forefront of audio and design innovation.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-display font-bold text-xl mb-4">QUALITY</h3>
                  <p className="text-shin-gray">
                    Each ShinCity product undergoes rigorous testing and quality control to ensure it meets our exacting standards. 
                    We never compromise on materials, construction, or performance.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-display font-bold text-xl mb-4">SUSTAINABILITY</h3>
                  <p className="text-shin-gray">
                    We're committed to reducing our environmental impact by using sustainable materials, ethical manufacturing practices, 
                    and minimizing waste in our production processes.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-display font-bold text-xl mb-4">COMMUNITY</h3>
                  <p className="text-shin-gray">
                    ShinCity is built on a foundation of collaboration and community. We actively support emerging artists, musicians, 
                    and designers who share our vision and values.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20 bg-shin-black text-shin-white">
          <div className="container mx-auto px-4">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-16 text-center">THE TEAM</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="aspect-square overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600" 
                    alt="Alex Shin" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display font-bold text-xl mb-1">ALEX SHIN</h3>
                <p className="text-shin-lightgray mb-4">Founder & Creative Director</p>
                <p className="text-shin-lightgray text-sm">
                  Music producer and fashion designer with a passion for merging audio innovation with street style.
                </p>
              </div>
              
              <div className="text-center">
                <div className="aspect-square overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600" 
                    alt="Maya Reed" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display font-bold text-xl mb-1">MAYA REED</h3>
                <p className="text-shin-lightgray mb-4">Head of Audio Engineering</p>
                <p className="text-shin-lightgray text-sm">
                  Award-winning sound engineer with expertise in creating immersive audio experiences.
                </p>
              </div>
              
              <div className="text-center">
                <div className="aspect-square overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600" 
                    alt="James Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display font-bold text-xl mb-1">JAMES CHEN</h3>
                <p className="text-shin-lightgray mb-4">Product Design Lead</p>
                <p className="text-shin-lightgray text-sm">
                  Industrial designer specializing in creating audio products that blend aesthetics with functionality.
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

export default About;

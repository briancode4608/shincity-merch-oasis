
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutContent } from "@/components/about/AboutContent";
import { TeamSection } from "@/components/about/TeamSection";

const About = () => {
  return (
    <div className="min-h-screen bg-shin-white">
      <Navbar />
      
      <div className="pt-16 md:pt-20"> {/* Space for navbar */}
        {/* Hero Section */}
        <AboutHero />
        
        {/* About Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AboutContent />
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20 bg-shin-black text-shin-white">
          <TeamSection />
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;

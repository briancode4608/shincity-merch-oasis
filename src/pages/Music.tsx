
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { MusicReleaseList } from "@/components/music/MusicReleaseList";
import { UpcomingPerformances } from "@/components/music/UpcomingPerformances";

const Music = () => {
  return (
    <div className="min-h-screen bg-shin-white">
      <Navbar />
      
      <div className="pt-16 md:pt-20"> {/* Space for navbar */}
        <HeroSection
          title="MUSIC"
          subtitle="Explore our latest releases and experience the ShinCity sound."
          backgroundImage="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2000"
          buttonText="LATEST RELEASE"
          buttonLink="#latest"
          overlayOpacity={70}
        />
        
        <section className="py-20 px-4" id="latest">
          <div className="container mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-shin-black mb-12">Releases</h2>
            
            <MusicReleaseList />
          </div>
        </section>
        
        <section className="py-20 bg-shin-black text-shin-white">
          <div className="container mx-auto px-4">
            <UpcomingPerformances />
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Music;

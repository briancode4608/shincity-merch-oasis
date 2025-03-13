
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BrandSection } from "@/components/home/BrandSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-shin-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-16 md:pt-20"> {/* Space for navbar */}
        <HeroSection
          title="SHINCITY EXCLUSIVES"
          subtitle="Limited edition merchandise and premium audio releases from the cutting edge of sound."
          backgroundImage="https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1000"
          buttonText="SHOP THE COLLECTION"
          buttonLink="/shop"
          overlayOpacity={60}
        />
      </div>
      
      {/* Latest Releases */}
      <section className="py-20 px-4">
        <FeaturedProducts />
      </section>
      
      {/* About Brand Section */}
      <section className="py-20 bg-shin-black">
        <div className="container mx-auto px-4">
          <BrandSection />
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FeaturesSection />
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 bg-shin-gray">
        <div className="container mx-auto px-4">
          <NewsletterSection />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

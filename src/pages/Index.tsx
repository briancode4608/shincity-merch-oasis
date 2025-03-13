
import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Music, Headphones, Album } from "lucide-react";
import { Link } from "react-router-dom";

const featuredProducts = [
  {
    id: "1",
    name: "Neon Dreams Tee",
    price: 45,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000",
    category: "Apparel",
    isNew: true,
  },
  {
    id: "2",
    name: "ShinCity Cap",
    price: 35,
    image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=1000",
    category: "Accessories",
    isNew: false,
  },
  {
    id: "3",
    name: "Noise Hoodie",
    price: 75,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000",
    category: "Apparel",
    isNew: true,
  },
  {
    id: "4",
    name: "Limited Vinyl",
    price: 30,
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000",
    category: "Music",
    isNew: false,
  },
];

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
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-shin-black">Latest Drops</h2>
            <Link to="/shop">
              <Button variant="link" className="text-shin-black hover:text-shin-accent">
                View All <ArrowRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Brand Section */}
      <section className="py-20 bg-shin-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-shin-white mb-6">THE SHINCITY SOUND</h2>
            <p className="text-shin-lightgray text-lg mb-10">
              More than a brand, we're a movement. ShinCity represents the fusion of audio innovation and street culture, 
              creating limited-edition merchandise and experiences for those who live on the cutting edge of sound.
            </p>
            <Link to="/about">
              <Button 
                variant="outline" 
                className="border-shin-white text-shin-white hover:bg-shin-white hover:text-shin-black rounded-none"
              >
                DISCOVER OUR STORY
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="mx-auto bg-shin-gray/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <Music className="text-shin-accent" size={32} />
              </div>
              <h3 className="font-display font-bold text-xl mb-4">Exclusive Releases</h3>
              <p className="text-shin-lightgray">
                Limited-edition drops that combine audio innovation with striking design. Each piece tells a story.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto bg-shin-gray/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <Headphones className="text-shin-accent" size={32} />
              </div>
              <h3 className="font-display font-bold text-xl mb-4">Premium Sound</h3>
              <p className="text-shin-lightgray">
                Our audio products deliver uncompromising quality for those who demand more from their listening experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto bg-shin-gray/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <Album className="text-shin-accent" size={32} />
              </div>
              <h3 className="font-display font-bold text-xl mb-4">Artist Collaborations</h3>
              <p className="text-shin-lightgray">
                We work with forward-thinking artists to create unique products that push creative boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 bg-shin-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-shin-white mb-6">JOIN THE MOVEMENT</h2>
            <p className="text-shin-lightgray text-lg mb-8">
              Subscribe to get early access to new releases, exclusive offers and event invitations.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 bg-shin-white text-shin-black placeholder:text-shin-lightgray focus:outline-none"
              />
              <Button className="bg-shin-accent hover:bg-shin-accent/90 text-white">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;


import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";

const products = [
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
  {
    id: "5",
    name: "Echo Track Pants",
    price: 65,
    image: "https://images.unsplash.com/photo-1632149877166-f75d49000351?q=80&w=1000",
    category: "Apparel",
    isNew: false,
  },
  {
    id: "6",
    name: "Beat Headphones",
    price: 120,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000",
    category: "Audio",
    isNew: true,
  },
  {
    id: "7",
    name: "ShinCity Beanie",
    price: 28,
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000",
    category: "Accessories",
    isNew: false,
  },
  {
    id: "8",
    name: "Bass Earbuds",
    price: 85,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1000",
    category: "Audio",
    isNew: true,
  },
];

const categories = ["All", "Apparel", "Accessories", "Audio", "Music"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-shin-white">
      <Navbar />
      
      <div className="pt-16 md:pt-20"> {/* Space for navbar */}
        <div className="bg-shin-black text-shin-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">SHOP</h1>
            <p className="text-shin-lightgray max-w-2xl">
              Exclusive merchandise and limited-edition releases from ShinCity.
              Each product is designed with precision and purpose, reflecting our commitment to quality and innovation.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-10">
          {/* Mobile Filters */}
          <div className="md:hidden mb-6">
            <Button 
              variant="outline" 
              className="w-full flex justify-between items-center border-shin-black text-shin-black"
              onClick={() => setShowFilters(!showFilters)}
            >
              <span>Filters</span>
              <ChevronDown size={16} className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </Button>
            
            {showFilters && (
              <div className="mt-4 p-4 border border-shin-gray/30">
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="flex items-center w-full text-left py-1"
                      onClick={() => setSelectedCategory(category)}
                    >
                      <span className={`w-5 h-5 inline-flex items-center justify-center border ${selectedCategory === category ? 'bg-shin-black border-shin-black' : 'border-shin-lightgray'} mr-2`}>
                        {selectedCategory === category && <Check size={14} className="text-shin-white" />}
                      </span>
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap md:flex-nowrap">
            {/* Desktop Filters */}
            <div className="hidden md:block w-64 flex-shrink-0 pr-8">
              <h3 className="font-display font-bold text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="flex items-center w-full text-left py-1"
                    onClick={() => setSelectedCategory(category)}
                  >
                    <span className={`w-5 h-5 inline-flex items-center justify-center border ${selectedCategory === category ? 'bg-shin-black border-shin-black' : 'border-shin-lightgray'} mr-2`}>
                      {selectedCategory === category && <Check size={14} className="text-shin-white" />}
                    </span>
                    {category}
                  </button>
                ))}
              </div>
              
              <Separator className="my-6" />
              
              <h3 className="font-display font-bold text-lg mb-4">Price</h3>
              <div className="space-y-2">
                <button className="flex items-center w-full text-left py-1">
                  <span className="w-5 h-5 border border-shin-lightgray mr-2"></span>
                  Under $50
                </button>
                <button className="flex items-center w-full text-left py-1">
                  <span className="w-5 h-5 border border-shin-lightgray mr-2"></span>
                  $50 - $100
                </button>
                <button className="flex items-center w-full text-left py-1">
                  <span className="w-5 h-5 border border-shin-lightgray mr-2"></span>
                  Over $100
                </button>
              </div>
            </div>
            
            {/* Products */}
            <div className="w-full">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-display font-bold text-2xl">
                  {selectedCategory === "All" ? "All Products" : selectedCategory}
                </h2>
                <div className="text-sm text-shin-gray">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Shop;

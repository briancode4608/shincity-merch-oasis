import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShopFilters } from "@/components/shop/ShopFilters";
import { ProductGrid } from "@/components/shop/ProductGrid";

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
          <div className="flex flex-wrap md:flex-nowrap">
            <ShopFilters 
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            
            <ProductGrid 
              products={products} 
              selectedCategory={selectedCategory} 
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Shop;

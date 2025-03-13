
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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

export function FeaturedProducts() {
  return (
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
  );
}

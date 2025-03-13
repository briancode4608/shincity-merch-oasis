
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}

export function ProductCard({ id, name, price, image, category, isNew }: ProductCardProps) {
  return (
    <div className="group">
      <Link to={`/shop/${id}`} className="block overflow-hidden bg-shin-gray/30 relative aspect-[3/4]">
        {isNew && (
          <div className="absolute top-2 left-2 z-10 bg-shin-accent px-2 py-1">
            <span className="text-xs font-bold text-white">NEW</span>
          </div>
        )}
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-shin-black/0 group-hover:bg-shin-black/20 transition-colors duration-300" />
      </Link>
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="font-display font-bold text-lg tracking-tight text-shin-black">{name}</h3>
          <p className="text-xs uppercase text-shin-lightgray">{category}</p>
        </div>
        <span className="font-medium text-shin-black">${price.toFixed(2)}</span>
      </div>
      <div className="mt-3">
        <Button 
          variant="outline" 
          className="w-full rounded-none border-shin-black text-shin-black hover:bg-shin-black hover:text-shin-white transition-colors"
        >
          <ShoppingCart size={16} className="mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

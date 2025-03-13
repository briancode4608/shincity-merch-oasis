
import { ProductCard } from "@/components/ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew: boolean;
}

interface ProductGridProps {
  products: Product[];
  selectedCategory: string;
}

export function ProductGrid({ products, selectedCategory }: ProductGridProps) {
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);
    
  return (
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
  );
}

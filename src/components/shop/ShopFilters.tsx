
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, ChevronDown } from "lucide-react";

interface ShopFiltersProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export function ShopFilters({ 
  categories, 
  selectedCategory, 
  setSelectedCategory 
}: ShopFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);
  
  return (
    <>
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
    </>
  );
}

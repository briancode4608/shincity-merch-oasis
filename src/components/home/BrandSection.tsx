
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function BrandSection() {
  return (
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
  );
}

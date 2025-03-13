
import { Music, Headphones, Album } from "lucide-react";

export function FeaturesSection() {
  return (
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
  );
}


export function TeamSection() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="font-display font-bold text-3xl md:text-4xl mb-16 text-center">THE TEAM</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="text-center">
          <div className="aspect-square overflow-hidden mb-6">
            <img 
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600" 
              alt="Alex Shin" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-display font-bold text-xl mb-1">ALEX SHIN</h3>
          <p className="text-shin-lightgray mb-4">Founder & Creative Director</p>
          <p className="text-shin-lightgray text-sm">
            Music producer and fashion designer with a passion for merging audio innovation with street style.
          </p>
        </div>
        
        <div className="text-center">
          <div className="aspect-square overflow-hidden mb-6">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600" 
              alt="Maya Reed" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-display font-bold text-xl mb-1">MAYA REED</h3>
          <p className="text-shin-lightgray mb-4">Head of Audio Engineering</p>
          <p className="text-shin-lightgray text-sm">
            Award-winning sound engineer with expertise in creating immersive audio experiences.
          </p>
        </div>
        
        <div className="text-center">
          <div className="aspect-square overflow-hidden mb-6">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600" 
              alt="James Chen" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-display font-bold text-xl mb-1">JAMES CHEN</h3>
          <p className="text-shin-lightgray mb-4">Product Design Lead</p>
          <p className="text-shin-lightgray text-sm">
            Industrial designer specializing in creating audio products that blend aesthetics with functionality.
          </p>
        </div>
      </div>
    </div>
  );
}

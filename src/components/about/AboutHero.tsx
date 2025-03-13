
export function AboutHero() {
  return (
    <div className="relative h-[60vh] bg-shin-black flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <img 
          src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2000" 
          alt="ShinCity Studio" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="font-display font-bold text-5xl md:text-7xl text-shin-white max-w-3xl">
          THE SOUND OF TOMORROW
        </h1>
      </div>
    </div>
  );
}

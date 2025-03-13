
import { Button } from "@/components/ui/button";

export function UpcomingPerformances() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">UPCOMING PERFORMANCES</h2>
      <p className="text-shin-lightgray text-lg mb-10">
        Experience ShinCity live and immerse yourself in our unique sonic landscape.
      </p>
      
      <div className="space-y-4 mb-10">
        <div className="bg-shin-gray/20 p-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-2xl font-display font-bold mb-1">JUNE 15, 2024</div>
            <div className="text-shin-lightgray">Echo Arena, Los Angeles</div>
          </div>
          <Button className="bg-shin-accent hover:bg-shin-accent/90 text-white rounded-none">
            GET TICKETS
          </Button>
        </div>
        
        <div className="bg-shin-gray/20 p-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-2xl font-display font-bold mb-1">JULY 22, 2024</div>
            <div className="text-shin-lightgray">Pulse Club, New York</div>
          </div>
          <Button className="bg-shin-accent hover:bg-shin-accent/90 text-white rounded-none">
            GET TICKETS
          </Button>
        </div>
        
        <div className="bg-shin-gray/20 p-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-2xl font-display font-bold mb-1">AUGUST 8, 2024</div>
            <div className="text-shin-lightgray">Neon Festival, Miami</div>
          </div>
          <Button className="bg-shin-accent hover:bg-shin-accent/90 text-white rounded-none">
            GET TICKETS
          </Button>
        </div>
      </div>
    </div>
  );
}


import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="font-display font-bold text-3xl md:text-4xl text-shin-white mb-6">JOIN THE MOVEMENT</h2>
      <p className="text-shin-lightgray text-lg mb-8">
        Subscribe to get early access to new releases, exclusive offers and event invitations.
      </p>
      <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
        <input 
          type="email" 
          placeholder="Your email address" 
          className="flex-1 px-4 py-3 bg-shin-white text-shin-black placeholder:text-shin-lightgray focus:outline-none"
        />
        <Button className="bg-shin-accent hover:bg-shin-accent/90 text-white">
          SUBSCRIBE
        </Button>
      </div>
    </div>
  );
}

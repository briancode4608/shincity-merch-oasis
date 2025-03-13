
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-oneqana-purple to-oneqana-pink p-1">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          
          <div className="bg-oneqana-black/80 backdrop-blur-sm rounded-xl text-white p-10 md:p-16 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Elevate Your Digital Presence?
              </h2>
              
              <p className="text-gray-300 text-lg mb-8">
                Let's create a stunning website that authentically represents your brand and connects you with your audience in meaningful ways.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-oneqana-purple to-oneqana-pink hover:opacity-90 transition-opacity">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <Button size="lg" variant="outline" className="border-gray-500 hover:border-oneqana-pink hover:bg-transparent text-white">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

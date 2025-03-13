
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Star } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-oneqana-purple to-oneqana-pink mb-6">
              <Star className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">404</span>
            </h1>
            
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Page Not Found
            </h2>
            
            <p className="text-gray-600 text-lg mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            
            <Link to="/">
              <Button size="lg" className="bg-gradient-to-r from-oneqana-purple to-oneqana-pink hover:opacity-90 transition-opacity">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;


import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-shin-black text-shin-white pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="text-shin-white font-display font-bold text-xl md:text-2xl tracking-wider">
              SHINCITY
            </Link>
            <p className="mt-4 text-shin-lightgray text-sm">
              Premium music brand with exclusive merchandise and releases.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-4 text-sm tracking-wider">NAVIGATE</h4>
            <ul className="space-y-2">
              <li><FooterLink to="/">Home</FooterLink></li>
              <li><FooterLink to="/music">Music</FooterLink></li>
              <li><FooterLink to="/shop">Shop</FooterLink></li>
              <li><FooterLink to="/about">About</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-4 text-sm tracking-wider">HELP</h4>
            <ul className="space-y-2">
              <li><FooterLink to="/faq">FAQ</FooterLink></li>
              <li><FooterLink to="/shipping">Shipping</FooterLink></li>
              <li><FooterLink to="/returns">Returns</FooterLink></li>
              <li><FooterLink to="/contact">Contact</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-4 text-sm tracking-wider">SUBSCRIBE</h4>
            <p className="text-shin-lightgray text-sm mb-4">Stay updated with the latest drops and releases.</p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-shin-gray text-shin-white border-shin-gray focus:border-shin-accent rounded-r-none"
              />
              <Button className="bg-shin-accent hover:bg-shin-accent/90 text-white rounded-l-none">
                JOIN
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-shin-gray text-center text-shin-lightgray text-xs">
          <p>© {new Date().getFullYear()} ShinCity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

function FooterLink({ to, children }: FooterLinkProps) {
  return (
    <Link 
      to={to} 
      className="text-shin-lightgray hover:text-shin-white transition-colors text-sm"
    >
      {children}
    </Link>
  );
}

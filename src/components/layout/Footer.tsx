
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Star, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-oneqana-black text-white pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-white font-display text-2xl tracking-wider mb-4">
              <Star className="text-oneqana-pink h-6 w-6" />
              <span className="bg-gradient-to-r from-oneqana-purple to-oneqana-pink bg-clip-text text-transparent">
                ONEQANA
              </span>
            </Link>
            <p className="mt-4 text-gray-300 text-sm">
              Empowering celebrities and artists to monetize their brand with custom-designed websites that showcase their authentic brand identity.
            </p>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-oneqana-pink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-oneqana-pink transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-oneqana-pink transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-oneqana-pink transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              <li><FooterLink to="/">Home</FooterLink></li>
              <li><FooterLink to="/services">Services</FooterLink></li>
              <li><FooterLink to="/work">Our Work</FooterLink></li>
              <li><FooterLink to="/about">About</FooterLink></li>
              <li><FooterLink to="/contact">Contact</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              <li><FooterLink to="/services/web-design">Web Design</FooterLink></li>
              <li><FooterLink to="/services/brand-strategy">Brand Strategy</FooterLink></li>
              <li><FooterLink to="/services/marketing">Digital Marketing</FooterLink></li>
              <li><FooterLink to="/services/development">Development</FooterLink></li>
              <li><FooterLink to="/services/seo">SEO Optimization</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">Stay updated with our latest news and projects.</p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white border-gray-700 focus:border-oneqana-purple rounded-r-none"
              />
              <Button className="bg-gradient-to-r from-oneqana-purple to-oneqana-pink hover:opacity-90 transition-opacity rounded-l-none">
                Join
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-xs">
          <p>© {new Date().getFullYear()} Oneqana. All rights reserved.</p>
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
      className="text-gray-300 hover:text-oneqana-pink transition-colors text-sm"
    >
      {children}
    </Link>
  );
}


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-primary font-display font-bold text-2xl tracking-wider relative">
            <Star className="text-oneqana-pink h-7 w-7" />
            <span className="bg-gradient-to-r from-oneqana-purple to-oneqana-pink bg-clip-text text-transparent">
              ONEQANA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/work">Our Work</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-gradient-to-r from-oneqana-purple to-oneqana-pink hover:opacity-90 transition-opacity"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary hover:text-primary/80"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 flex flex-col pt-20 px-6 transition-transform duration-500 ease-in-out transform md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col space-y-6 items-center text-center pt-10">
          <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
          <MobileNavLink to="/services" onClick={() => setIsMenuOpen(false)}>Services</MobileNavLink>
          <MobileNavLink to="/work" onClick={() => setIsMenuOpen(false)}>Our Work</MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
          <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
          
          <Button 
            className="mt-6 bg-gradient-to-r from-oneqana-purple to-oneqana-pink hover:opacity-90 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
}

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function NavLink({ to, children, className }: NavLinkProps) {
  return (
    <Link 
      to={to} 
      className={cn(
        "relative text-gray-800 font-medium hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-oneqana-purple after:to-oneqana-pink after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left",
        className
      )}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }: NavLinkProps) {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className="text-xl font-heading font-medium text-gray-800 hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );
}

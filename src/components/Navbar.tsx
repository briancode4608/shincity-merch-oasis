
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-shin-black">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="text-shin-white font-display font-bold text-xl md:text-2xl tracking-wider">
            SHINCITY
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/music">MUSIC</NavLink>
            <NavLink to="/shop">SHOP</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-shin-white hover:text-shin-accent">
              <User size={20} />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="text-shin-white hover:text-shin-accent">
                <ShoppingCart size={20} />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="text-shin-white hover:text-shin-accent">
                <ShoppingCart size={20} />
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-shin-white hover:text-shin-accent"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 bg-shin-black z-40 flex flex-col pt-20 px-6 transition-transform duration-300 ease-in-out transform md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col space-y-6 items-center text-center pt-10">
          <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>HOME</MobileNavLink>
          <MobileNavLink to="/music" onClick={() => setIsMenuOpen(false)}>MUSIC</MobileNavLink>
          <MobileNavLink to="/shop" onClick={() => setIsMenuOpen(false)}>SHOP</MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</MobileNavLink>
          <MobileNavLink to="/account" onClick={() => setIsMenuOpen(false)}>ACCOUNT</MobileNavLink>
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
        "text-sm font-medium tracking-wider text-shin-white hover:text-shin-accent transition-colors",
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
      className="text-2xl font-display font-bold tracking-wide text-shin-white hover:text-shin-accent transition-colors"
    >
      {children}
    </Link>
  );
}

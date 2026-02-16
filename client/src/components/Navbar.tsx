import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Xizmatlar", href: "#services" }, // Services
    { name: "Galereya", href: "#gallery" },   // Gallery
    { name: "Sharhlar", href: "#reviews" },   // Reviews
    { name: "Kontakt", href: "#contact" },    // Contact
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-white/10 py-3 shadow-lg" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform">
            <span className="font-display font-bold text-xl">L</span>
          </div>
          <span className="font-display font-bold text-xl md:text-2xl text-white tracking-tight">
            Luxury<span className="text-primary">Wash</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          
          <Button 
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-0.5"
            onClick={() => window.open('https://wa.me/998901234567', '_blank')}
          >
            <Phone className="w-4 h-4 mr-2" />
            +998 90 123 45 67
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-secondary/95 backdrop-blur-xl border-b border-white/10 shadow-2xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="p-3 text-lg font-medium text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg rounded-xl shadow-lg mt-2"
            onClick={() => window.open('https://wa.me/998901234567', '_blank')}
          >
            <Phone className="w-5 h-5 mr-2" />
            Bog'lanish
          </Button>
        </div>
      )}
    </nav>
  );
}

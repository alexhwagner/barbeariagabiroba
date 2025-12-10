import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Scissors, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Galeria", href: "#gallery" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <Scissors className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-45" />
              <div className="absolute inset-0 bg-primary/20 blur-md rounded-full" />
            </div>
            <span className="text-2xl font-heading tracking-wider text-white group-hover:text-primary transition-colors">
              BARBEARIA <span className="text-primary">GABIROBA</span>
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors relative group uppercase tracking-widest"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full box-neon" />
            </a>
          ))}
          <Button 
            className="bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wider box-neon hover:box-neon-hover transition-all flex items-center gap-2"
            onClick={() => window.open("https://wa.me/5547988799599", "_blank")}
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10 md:hidden flex flex-col p-6 gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-heading text-white hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="bg-primary text-black hover:bg-primary/90 font-bold w-full uppercase flex items-center justify-center gap-2"
              onClick={() => {
                window.open("https://wa.me/5547988799599", "_blank");
                setIsMobileMenuOpen(false);
              }}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Location from "@/components/sections/Location";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Location />
        <Contact />
      </main>
      
      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5547988799599"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
        animate={{ 
          boxShadow: ["0 0 0 0 rgba(37, 211, 102, 0.7)", "0 0 0 20px rgba(37, 211, 102, 0)"],
        }}
        transition={{ 
          boxShadow: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }
        }}
      >
        <MessageCircle className="h-8 w-8" fill="white" strokeWidth={0} />
      </motion.a>
    </div>
  );
}

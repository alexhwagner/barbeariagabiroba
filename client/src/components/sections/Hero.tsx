import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/dark_modern_barber_shop_interior_hero_background.png";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-20" />
        <img
          src={heroBg}
          alt="Barbearia Gabiroba Interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Particles/Glow */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="container relative z-30 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-primary font-medium tracking-[0.2em] mb-4 uppercase">Bem-vindo à excelência</h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading text-white mb-6 leading-none text-neon">
            BARBEARIA <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">GABIROBA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
            Estilo, precisão e o corte que combina com a sua personalidade.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button 
              size="lg"
              className="w-full sm:w-auto min-w-[200px] h-14 text-lg bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wider box-neon hover:box-neon-hover transition-all duration-300"
              onClick={() => window.location.href = "#services"}
            >
              Ver Serviços
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto min-w-[200px] h-14 text-lg border-primary text-primary hover:bg-primary/10 font-bold uppercase tracking-wider backdrop-blur-sm box-neon hover:box-neon-hover transition-all duration-300 gap-2"
              onClick={() => window.open("https://wa.me/5547988799599", "_blank")}
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-white flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest uppercase text-gray-400">Role para baixo</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}

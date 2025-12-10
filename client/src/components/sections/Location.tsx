import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Location() {
  return (
    <section className="py-24 bg-secondary/10 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 h-[600px] lg:h-[500px]">
          {/* Map Container - 60% approx */}
          <motion.div 
            className="lg:col-span-3 h-full rounded-2xl overflow-hidden border border-white/10 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.0683457591636!2d-49.60444!3d-27.42944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20Prefeito%20Virgilio%20Scheller%2C%201052%20-%20Ituporanga!5e0!3m2!1sen!2sbr!4v1647890283472!5m2!1sen!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
            
            {/* Custom Overlay for Map if needed */}
            <div className="absolute bottom-4 left-4 bg-black/90 p-4 rounded-lg border border-primary/30 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-primary mb-1">
                <MapPin className="h-5 w-5" />
                <span className="font-heading tracking-wide">Localização</span>
              </div>
              <p className="text-white text-sm">Ituporanga - SC</p>
            </div>
          </motion.div>

          {/* Info Container - 40% approx */}
          <motion.div 
            className="lg:col-span-2 flex flex-col justify-center p-8 lg:p-12 bg-card border border-white/5 rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-heading text-white mb-6">Onde Estamos</h3>
            
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-primary text-sm uppercase tracking-widest mb-2 font-bold">Endereço</h4>
                <p className="text-gray-300">Rua Prefeito Virgilio Scheller, 1052</p>
                <p className="text-gray-300">Ituporanga - SC, 88400-000</p>
              </div>
              
              <div>
                <h4 className="text-primary text-sm uppercase tracking-widest mb-2 font-bold">Horário de Funcionamento</h4>
                <p className="text-gray-300 flex justify-between max-w-xs">
                  <span>Segunda - Sexta:</span>
                  <span>08:00 - 19:00</span>
                </p>
                <p className="text-gray-300 flex justify-between max-w-xs">
                  <span>Sábado:</span>
                  <span>08:00 - 17:00</span>
                </p>
                <p className="text-gray-500 flex justify-between max-w-xs">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </p>
              </div>
            </div>

            <Button 
              className="w-full bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wider box-neon hover:box-neon-hover gap-2"
              onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Rua+Prefeito+Virgilio+Scheller+1052+Ituporanga", "_blank")}
            >
              <Navigation className="h-4 w-4" />
              Abrir Mapa
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

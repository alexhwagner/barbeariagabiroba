import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase mb-2 text-sm">Fale Conosco</h2>
            <h3 className="text-4xl md:text-5xl font-heading text-white mb-6">Pronto para renovar o visual?</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Não utilizamos sistema de agendamento online. Para marcar seu horário, 
              basta entrar em contato diretamente pelo nosso WhatsApp ou telefone. 
              Nossa equipe está pronta para te atender.
            </p>
            
            <Button 
              className="w-full sm:w-auto px-8 h-14 bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wider text-lg box-neon hover:box-neon-hover flex items-center gap-2"
              onClick={() => window.open("https://wa.me/5547988799599", "_blank")}
            >
              <MessageCircle className="h-5 w-5" />
              Chamar no WhatsApp
            </Button>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-12 bg-card/30 p-8 rounded-2xl border border-white/5"
          >
            <div>
              <h3 className="text-2xl font-heading text-white mb-6 border-b border-white/10 pb-4 inline-block">Contatos Rápidos</h3>
              <div className="space-y-6">
                <a href="tel:+5547988799599" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-lg">(47) 98879-9599</span>
                </a>
                
                <a href="mailto:contato@gabiroba.com" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-lg">contato@gabiroba.com</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-heading text-white mb-6 border-b border-white/10 pb-4 inline-block">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="#" className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-primary hover:text-primary hover:box-neon transition-all">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-primary hover:text-primary hover:box-neon transition-all">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

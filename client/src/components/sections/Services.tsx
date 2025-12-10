import { motion } from "framer-motion";
import { Scissors, User, Sparkles } from "lucide-react";

const services = [
  {
    title: "Corte Masculino",
    description: "Corte moderno, clássico ou degradê, feito com precisão.",
    icon: Scissors
  },
  {
    title: "Barba Completa",
    description: "Modelagem, hidratação e toalha quente para relaxamento.",
    icon: User
  },
  {
    title: "Navalhado Premium",
    description: "Acabamento perfeito na navalha para um visual sharp.",
    icon: Sparkles
  },
  {
    title: "Corte + Barba",
    description: "O combo completo para renovar seu visual.",
    icon: Scissors
  },
  {
    title: "Sobrancelha",
    description: "Alinhamento e limpeza para realçar o olhar.",
    icon: User
  },
  {
    title: "Pigmentação",
    description: "Correção de falhas e realce dos contornos.",
    icon: Sparkles
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-primary font-bold tracking-widest uppercase mb-2 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nossos Serviços
          </motion.h2>
          <motion.h3 
            className="text-4xl md:text-5xl font-heading text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Qualidade em cada detalhe
          </motion.h3>
          <motion.div 
            className="w-24 h-1 bg-primary mx-auto rounded-full box-neon"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card border border-white/5 p-8 rounded-xl relative overflow-hidden transition-all duration-300 hover:border-primary/50 hover:-translate-y-2">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="h-12 w-12 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center text-primary group-hover:box-neon transition-all duration-300">
                      <service.icon className="h-6 w-6" />
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-heading text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

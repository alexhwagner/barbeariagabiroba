import { motion } from "framer-motion";
import { Scissors, Zap, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Scissors,
    title: "Experiência",
    description: "Profissionais com anos de estrada e técnica apurada para o corte perfeito."
  },
  {
    icon: Zap,
    title: "Estilo",
    description: "Tendências modernas ou clássicos atemporais, definimos o seu visual."
  },
  {
    icon: Star,
    title: "Qualidade",
    description: "Produtos premium e ambiente climatizado para o seu conforto total."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase mb-2 text-sm">Nossa História</h2>
            <h3 className="text-4xl md:text-5xl font-heading text-white mb-6">
              Mais que um corte, <br />
              <span className="text-primary">uma experiência.</span>
            </h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              A Barbearia Gabiroba nasceu com o propósito de resgatar a cultura das barbearias clássicas, 
              aliando tradição às técnicas mais modernas de visagismo masculino. 
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Aqui, cada detalhe importa. Do ambiente pensado para o seu relaxamento até a escolha 
              minuciosa dos produtos, nosso objetivo é elevar sua autoestima e garantir que você saia 
              sempre com a sua melhor versão.
            </p>
            
            <div className="flex gap-8">
              <div>
                <span className="block text-4xl font-heading text-primary text-neon">10+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Anos de Mercado</span>
              </div>
              <div>
                <span className="block text-4xl font-heading text-primary text-neon">10k+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Clientes Satisfeitos</span>
              </div>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="flex flex-col gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/50 border-white/5 hover:border-primary/50 transition-colors duration-300 group">
                  <CardContent className="flex items-center gap-6 p-6">
                    <div className="h-14 w-14 rounded-full bg-black flex items-center justify-center border border-white/10 group-hover:border-primary group-hover:text-primary transition-colors text-white box-neon">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-heading text-white mb-1 group-hover:text-primary transition-colors">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

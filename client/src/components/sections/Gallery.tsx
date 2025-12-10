import { motion } from "framer-motion";
import gallery1 from "@assets/generated_images/man_with_fresh_fade_haircut_side_profile.png";
import gallery2 from "@assets/generated_images/man_with_well-groomed_beard_and_styled_hair.png";
import gallery3 from "@assets/generated_images/barber_using_straight_razor_close_up.png";
import gallery4 from "@assets/generated_images/modern_pompadour_hairstyle_side_view.png";

// Reusing images to simulate a larger gallery as requested in design (8-12 images)
const images = [
  { src: gallery1, alt: "Corte Fade Lateral", span: "row-span-2" },
  { src: gallery2, alt: "Barba Modelada", span: "row-span-1" },
  { src: gallery3, alt: "Navalha Clássica", span: "row-span-1" },
  { src: gallery4, alt: "Pompadour Moderno", span: "row-span-2" },
  { src: gallery3, alt: "Atendimento Premium", span: "row-span-1" },
  { src: gallery1, alt: "Acabamento Perfeito", span: "row-span-1" },
  { src: gallery2, alt: "Estilo Masculino", span: "row-span-2" },
  { src: gallery4, alt: "Tendência 2024", span: "row-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-primary font-bold tracking-widest uppercase mb-2 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Portfólio
          </motion.h2>
          <motion.h3 
            className="text-4xl md:text-5xl font-heading text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Nosso Trabalho
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`relative group overflow-hidden rounded-lg ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center border-2 border-primary/0 group-hover:border-primary m-2 rounded-lg">
                <p className="text-white font-heading text-xl tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

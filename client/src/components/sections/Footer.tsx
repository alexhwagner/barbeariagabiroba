import { Scissors } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-16 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Scissors className="h-6 w-6 text-primary" />
              <span className="text-xl font-heading tracking-wider text-white">
                BARBEARIA <span className="text-primary">GABIROBA</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Resgatando a tradição da barbearia clássica com a modernidade que você merece. Estilo, precisão e excelência.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-heading tracking-widest uppercase mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-gray-500 hover:text-primary transition-colors text-sm">Início</a></li>
              <li><a href="#about" className="text-gray-500 hover:text-primary transition-colors text-sm">Sobre</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-primary transition-colors text-sm">Serviços</a></li>
              <li><a href="#gallery" className="text-gray-500 hover:text-primary transition-colors text-sm">Galeria</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-heading tracking-widest uppercase mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {currentYear} Barbearia Gabiroba. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
             <span className="text-gray-700 text-xs">Design by Replit Agent</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

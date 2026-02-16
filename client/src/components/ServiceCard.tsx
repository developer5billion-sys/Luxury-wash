import { motion } from "framer-motion";
import { Check, Sparkles, Clock } from "lucide-react";
import type { Service } from "@shared/schema";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  // Format price to currency string
  const formattedPrice = new Intl.NumberFormat('uz-UZ').format(service.price);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-2xl opacity-20 group-hover:opacity-100 transition duration-500 blur-sm group-hover:blur"></div>
      <div className="relative h-full bg-secondary border border-white/5 p-6 md:p-8 rounded-2xl shadow-xl flex flex-col hover:translate-y-[-2px] transition-all duration-300">
        
        <div className="mb-4 flex items-start justify-between">
          <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="flex items-center text-xs font-medium text-muted-foreground bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
            <Clock className="w-3 h-3 mr-1.5" />
            {service.duration}
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {service.name}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3">
          {service.description}
        </p>

        <div className="mt-auto pt-6 border-t border-white/5">
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-2xl md:text-3xl font-bold text-white">{formattedPrice}</span>
            <span className="text-sm text-muted-foreground font-medium">so'm</span>
          </div>
          
          <button 
            onClick={() => window.open(`https://wa.me/998901234567?text=Salom, men ${service.name} xizmatiga yozilmoqchiman`, '_blank')}
            className="w-full py-3 px-4 bg-white/5 hover:bg-primary hover:text-white text-white font-medium rounded-xl border border-white/10 hover:border-primary transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-primary/25"
          >
            Tanlash
            <Check className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

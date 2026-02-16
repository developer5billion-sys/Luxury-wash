import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/998901234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-20"></div>
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 fill-current" />
      <span className="sr-only">WhatsApp</span>
    </motion.a>
  );
}

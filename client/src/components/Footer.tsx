import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="font-display font-bold text-lg">L</span>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Luxury<span className="text-primary">Wash</span>
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              Toshkentdagi eng sifatli va zamonaviy avtomobil yuvish majmuasi. Sizning avtomobilingiz eng yaxshisiga loyiq.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Bog'lanish</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground group hover:text-white transition-colors">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Toshkent sh., Amir Temur ko'chasi, 15-uy</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground group hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+998901234567">+998 90 123 45 67</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground group hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@luxurywash.uz">info@luxurywash.uz</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Ish vaqti</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-muted-foreground border-b border-white/5 pb-2">
                <span>Dushanba - Juma</span>
                <span className="text-white font-medium">08:00 - 22:00</span>
              </li>
              <li className="flex justify-between text-muted-foreground border-b border-white/5 pb-2">
                <span>Shanba</span>
                <span className="text-white font-medium">09:00 - 23:00</span>
              </li>
              <li className="flex justify-between text-muted-foreground pb-2">
                <span>Yakshanba</span>
                <span className="text-white font-medium">09:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 LuxuryWash. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Maxfiylik siyosati</a>
            <a href="#" className="hover:text-white transition-colors">Foydalanish shartlari</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

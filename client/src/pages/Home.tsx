import { motion } from "framer-motion";
import { ArrowRight, Star, Quote, CheckCircle2, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ServiceCard } from "@/components/ServiceCard";
import { useServices } from "@/hooks/use-services";
import { useReviews } from "@/hooks/use-reviews";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const { data: services, isLoading: servicesLoading } = useServices();
  const { data: reviews, isLoading: reviewsLoading } = useReviews();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      <FloatingWhatsApp />

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay - Dark Car Wash Aesthetic */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash Image: Luxury dark car detailing */}
          <img 
            src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Car Wash Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 mx-auto pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Toshkentdagi eng yaxshi avtomoyka
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Avtomobilingiz uchun <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 text-glow">
                Premium Parvarish
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Tez, sifatli va qulay xizmat. Bizning professional jamoamiz avtomobilingizni yangidek porlashi uchun barcha imkoniyatlarni ishga soladi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg h-14 px-8 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Xizmatlar
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-white font-semibold text-lg h-14 px-8 rounded-full backdrop-blur-sm transition-all"
                onClick={() => window.open('https://wa.me/998901234567', '_blank')}
              >
                <span className="mr-2">📞</span>
                Bog'lanish
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-widest">Pastga</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 md:py-32 bg-background relative">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Bizning <span className="text-primary">Xizmatlar</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Har bir avtomobil uchun individual yondashuv va yuqori sifat kafolati
            </p>
          </div>

          {servicesLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-96 rounded-2xl bg-secondary/50 border border-white/5 p-6 flex flex-col gap-4">
                  <Skeleton className="h-12 w-12 rounded-xl bg-white/10" />
                  <Skeleton className="h-8 w-3/4 bg-white/10" />
                  <Skeleton className="h-20 w-full bg-white/5" />
                  <Skeleton className="h-12 w-full mt-auto bg-white/10 rounded-xl" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {services?.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* WHY CHOOSE US - Feature Strip */}
      <section className="py-20 bg-secondary/30 border-y border-white/5">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Professional Jamoa",
                desc: "5 yillik tajribaga ega mutaxassislar xizmatingizda.",
                icon: "👨‍🔧"
              },
              {
                title: "Premium Vositalar",
                desc: "Germaniya va AQSh texnologiyalari asosida tozalash.",
                icon: "✨"
              },
              {
                title: "Tezkor Xizmat",
                desc: "Navbatsiz va o'z vaqtida xizmat ko'rsatish tizimi.",
                icon: "⚡"
              }
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                So'nggi <span className="text-primary">Ishlarimiz</span>
              </h2>
              <p className="text-muted-foreground max-w-lg">
                Bizning natijalarimiz gapiradi. Har bir detalga e'tibor qaratamiz.
              </p>
            </div>
            <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white gap-2">
              Ko'proq ko'rish <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              // Unsplash: Clean black car hood
              "https://images.unsplash.com/photo-1605515298946-d061f2e9ae53?q=80&w=1000&auto=format&fit=crop",
              // Unsplash: Car interior leather
              "https://images.unsplash.com/photo-1552554247-49e0c50549c6?q=80&w=1000&auto=format&fit=crop",
              // Unsplash: Foam washing
              "https://images.unsplash.com/photo-1520340356584-7eb93198889c?q=80&w=1000&auto=format&fit=crop",
              // Unsplash: Polished wheel
              "https://images.unsplash.com/photo-1549421263-d0213d289452?q=80&w=1000&auto=format&fit=crop",
              // Unsplash: Ceramic coating application
              "https://images.unsplash.com/photo-1626077383794-d2e74284c4e9?q=80&w=1000&auto=format&fit=crop",
              // Unsplash: Shiny blue sports car
              "https://images.unsplash.com/photo-1562920616-01582e05786a?q=80&w=1000&auto=format&fit=crop"
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary"
              >
                <img 
                  src={src} 
                  alt={`Gallery Image ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Premium Natija
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="py-20 md:py-32 bg-secondary/20 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl -z-10" />

        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Mijozlar <span className="text-primary">Fikri</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewsLoading ? (
              [1, 2, 3].map(i => (
                <div key={i} className="bg-secondary/50 p-8 rounded-2xl border border-white/5 h-64">
                   <Skeleton className="h-4 w-1/3 mb-4 bg-white/10" />
                   <Skeleton className="h-20 w-full mb-6 bg-white/5" />
                   <Skeleton className="h-10 w-10 rounded-full bg-white/10" />
                </div>
              ))
            ) : (
              reviews?.map((review, i) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-secondary p-8 rounded-2xl border border-white/5 shadow-lg relative group hover:-translate-y-1 transition-transform duration-300"
                >
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < review.rating ? "fill-yellow-500 text-yellow-500" : "fill-gray-700 text-gray-700"}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{review.comment}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{review.name}</h4>
                      <p className="text-xs text-primary/80 font-medium">Doimiy mijoz</p>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-secondary rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            {/* Contact Info */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Biz bilan <span className="text-primary">Bog'laning</span>
              </h2>
              <p className="text-muted-foreground mb-10 text-lg">
                Savollaringiz bormi yoki navbatga yozilmoqchimisiz? Bizga qo'ng'iroq qiling yoki yozing.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Manzil</h4>
                    <p className="text-muted-foreground">Toshkent sh., Amir Temur ko'chasi, 15-uy</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Telefon</h4>
                    <a href="tel:+998901234567" className="text-muted-foreground hover:text-white transition-colors block">
                      +998 90 123 45 67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Ish vaqti</h4>
                    <p className="text-muted-foreground">Har kuni: 08:00 - 22:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <Button 
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white h-14 text-lg font-semibold rounded-xl shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02]"
                  onClick={() => window.open('https://wa.me/998901234567', '_blank')}
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp orqali yozish
                </Button>
              </div>
            </div>

            {/* Map */}
            <div className="h-[400px] lg:h-auto bg-slate-800 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47934.06179336113!2d69.21634566774653!3d41.299495799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1715421234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              {/* Custom Map Overlay/Gradient to blend with theme */}
              <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-blue-900/20"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Icon helper
function MessageCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  );
}

"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, ShieldCheck, ArrowRight, CalendarDays } from "lucide-react";

export default function Hero() {
  return (
    // On garde pt-48 pour laisser respirer la Navbar fixe
    <section id="accueil" className="relative min-h-screen flex items-center pt-48 pb-24 overflow-hidden bg-[#E5EEF5]">
      
      {/* EFFETS DE FOND (Aura de propreté) */}
      <div className="absolute top-20 right-[5%] w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          
          {/* 1. BADGE SUPÉRIEUR - Style "Tag" Premium */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 inline-flex items-center gap-2.5 px-6 py-2.5 bg-white/60 backdrop-blur-md rounded-full border border-white shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-brand-yellow fill-brand-yellow" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-blue">Martine Adewale • Calavi</span>
          </motion.div>

          {/* 2. LE TITRE & LA PHOTO (Structure superposée) */}
          <div className="relative w-full flex justify-center mb-20 md:mb-32">
            {/* Titre Fantôme en fond */}
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[16vw] md:text-[14rem] font-black leading-none tracking-tighter text-brand-blue/5 select-none pointer-events-none"
            >
              PROPRETÉ
            </motion.h1>

            {/* 3. L'IMAGE DE MARTINE - Position optimisée */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[380px] sm:w-[400px] sm:h-[500px] md:w-[520px] md:h-[600px] z-10"
            >
              <div className="relative w-full h-full rounded-[3.5rem] md:rounded-[5rem] overflow-hidden border-[10px] md:border-[20px] border-white shadow-[0_30px_60px_-15px_rgba(0,48,96,0.25)]">
                <Image 
                  src="/martine-hero.webp" 
                  alt="Martine Adewale"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  
                  priority
                />
              </div>

              {/* BADGES FLOTTANTS (Uniquement sur écran large pour ne pas charger) */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden lg:flex absolute -left-20 top-1/4 bg-white/90 backdrop-blur-xl p-6 rounded-[2.5rem] shadow-xl border border-white items-center gap-4"
              >
                <div className="bg-brand-blue p-3.5 rounded-2xl text-white shadow-lg shadow-brand-blue/30"><ShieldCheck size={24}/></div>
                <div className="text-[11px] font-black uppercase tracking-widest text-brand-blue leading-tight text-left">Soin<br/>Ultra-Premium</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="hidden lg:flex absolute -right-20 bottom-1/4 bg-white/90 backdrop-blur-xl p-6 rounded-[2.5rem] shadow-xl border border-white items-center gap-4"
              >
                <div className="flex items-center gap-2 p-3.5 bg-brand-yellow rounded-2xl shadow-lg">
                   <Star className="text-brand-dark fill-brand-dark" size={20}/>
                   <span className="font-black text-brand-dark text-lg">4.9</span>
                </div>
                <div className="text-[11px] font-black uppercase tracking-widest text-brand-blue leading-tight text-left">Avis<br/>Vérifiés</div>
              </motion.div>
            </motion.div>
          </div>

          {/* 4. BLOC TEXTE - Descendu sous les pieds de la photo */}
          <div className="relative mt-20 sm:mt-32 md:mt-24 text-center z-20 space-y-10 max-w-2xl px-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-7xl font-black text-brand-dark uppercase tracking-tighter leading-[0.95]">
                Votre intérieur mérite <br />
                <span className="text-brand-blue italic">l'excellence</span>.
              </h2>
              <p className="text-slate-500 text-xl md:text-3xl font-medium max-w-lg mx-auto leading-relaxed">
                Confiez votre linge à l'experte d' <span className="text-brand-yellow font-black">Abomey-Calavi</span>.
              </p>
            </div>
            
            {/* 5. BOUTONS AMÉLIORÉS */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-dark text-white font-black rounded-2xl h-18 md:h-22 px-12 text-xl shadow-[0_20px_40px_-10px_rgba(0,48,96,0.3)] transition-all w-full group">
                  <Link href="#contact" className="flex items-center gap-4">
                    <CalendarDays className="w-6 h-6" />
                    Réserver
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="w-full sm:w-auto">
                <Button asChild variant="outline" size="lg" className="border-2 border-brand-dark/10 bg-white/40 backdrop-blur-md text-brand-dark font-black rounded-2xl h-18 md:h-22 px-12 text-xl hover:bg-white transition-all w-full shadow-lg">
                  <Link href="#services">Mes Services</Link>
                </Button>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
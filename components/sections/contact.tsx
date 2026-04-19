"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const phoneNumber = "+2290153315138";
  const whatsappMessage = encodeURIComponent("Bonjour Martine, je souhaiterais obtenir un devis pour vos services.");

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F8FAFC] scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* EN-TÊTE PREMIUM */}
        <div className="text-center mb-16 md:mb-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-brand-blue/10 text-brand-blue rounded-full text-[11px] font-black uppercase tracking-[0.3em] border border-brand-blue/20"
          >
            <Sparkles size={14} className="text-brand-yellow fill-brand-yellow" />
            Disponible pour vous
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-brand-dark uppercase tracking-tighter leading-[0.9]">
            Parlons de votre <br /> 
            <span className="text-brand-blue italic underline decoration-brand-yellow decoration-8">Projet</span>
          </h2>
          <p className="text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto font-medium">
            Une question ? Un devis ? Contactez Martine directement.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* INFOS & ACTIONS (7 Colonnes) */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-center">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Bouton WhatsApp - Style Lumina */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="bg-[#25D366] hover:bg-[#128C7E] text-white h-24 rounded-[2.5rem] shadow-[0_20px_40px_-10px_rgba(37,211,102,0.3)] text-xl font-black w-full flex items-center justify-center gap-4 transition-all duration-300">
                  <Link href={`https://wa.me/${phoneNumber.replace('+', '')}?text=${whatsappMessage}`} target="_blank">
                    <MessageCircle className="h-8 w-8 fill-current" />
                    WhatsApp
                  </Link>
                </Button>
              </motion.div>

              {/* Bouton Appel Direct */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild variant="outline" className="border-4 border-brand-blue bg-white text-brand-blue hover:bg-brand-blue hover:text-white h-24 rounded-[2.5rem] text-xl font-black w-full shadow-xl transition-all duration-300">
                  <Link href={`tel:${phoneNumber}`}>
                    <Phone className="h-7 w-7" />
                    M'appeler
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Cartes de détails harmonisées */}
            <div className="grid gap-6">
              <InfoCard 
                icon={<MapPin size={28} />} 
                title="Zones d'intervention" 
                desc="Abomey-Calavi (Cité, Zoca, IITA), Cotonou et Porto-Novo." 
              />
              <InfoCard 
                icon={<Clock size={28} />} 
                title="Horaires de service" 
                desc="Du Lundi au Samedi : 08h00 — 19h00" 
              />
            </div>
          </div>

          {/* CARTE GOOGLE (5 Colonnes) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 h-[400px] lg:h-auto min-h-[500px] relative rounded-[4rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,48,96,0.2)] group border-[12px] border-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126841.6666!2d2.3!3d6.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102355!2sAbomey-Calavi!5e0!3m2!1sfr!2sbj!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="grayscale-[0.1] contrast-[1.1] brightness-[0.9] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
            
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-6 rounded-[2rem] shadow-2xl border border-white/50">
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue mb-1">Localisation</p>
               <p className="text-brand-dark font-black text-lg">Basée à Abomey-Calavi</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <Card className="border-none shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] bg-white rounded-[2.5rem] transition-all hover:shadow-[0_20px_40px_-15px_rgba(0,48,96,0.1)] hover:-translate-x-2">
      <CardContent className="p-8 md:p-10 flex items-center gap-8">
        <div className="flex-shrink-0 p-5 bg-brand-blue/5 rounded-2xl text-brand-blue shadow-inner">
          {icon}
        </div>
        <div className="space-y-2">
          <h4 className="font-black text-2xl text-brand-dark uppercase tracking-tighter leading-none">{title}</h4>
          <p className="text-slate-500 font-medium text-lg leading-snug">{desc}</p>
        </div>
      </CardContent>
    </Card>
  );
}
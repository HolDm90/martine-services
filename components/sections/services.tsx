"use client"

import { motion } from "framer-motion";
import { 
  WashingMachine, 
  Home as HomeIcon, 
  LayoutGrid, 
  Brush, 
  Shirt, 
  Sparkles,
  CheckCircle2
} from "lucide-react";

const SERVICES = [
  { title: "Nettoyage & Lessive", description: "Soin particulier pour vos tissus délicats.", icon: WashingMachine, color: "bg-blue-50 text-blue-600" },
  { title: "Ménage Complet", description: "Nettoyage en profondeur de vos pièces.", icon: HomeIcon, color: "bg-emerald-50 text-emerald-600" },
  { title: "Rangement Cuisine", description: "Organisation optimale de vos placards.", icon: LayoutGrid, color: "bg-amber-50 text-amber-600" },
  { title: "Entretien Surfaces", description: "Dépoussiérage et brillance des meubles.", icon: Brush, color: "bg-purple-50 text-purple-600" },
  { title: "Lavage & Séchage", description: "Cycle complet pour un linge prêt.", icon: Sparkles, color: "bg-cyan-50 text-cyan-600" },
  { title: "Repassage Pro", description: "Vêtements sans plis et prêts à porter.", icon: Shirt, color: "bg-orange-50 text-orange-600" },
];

// Triple pour assurer un défilement infini sans trou visuel
const TRIPLE_SERVICES = [...SERVICES, ...SERVICES, ...SERVICES];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F8FAFC] overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <span className="text-brand-blue font-black uppercase tracking-[0.4em] text-xs block">
            — Mes Prestations
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark uppercase tracking-tighter">
            Ce que je fais pour <span className="text-brand-blue underline decoration-brand-yellow decoration-8">vous</span>
          </h2>
        </motion.div>
      </div>

      {/* CONTENEUR DU CAROUSEL */}
      <div className="relative flex items-center">
        <motion.div
          className="flex gap-6 md:gap-10 px-4"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 35, // Plus lent pour que ce soit plus élégant/luxe
            repeat: Infinity,
          }}
          whileHover={{ transition: { duration: 60 } }} // Ralentit au survol pour la lecture
        >
          {TRIPLE_SERVICES.map((service, index) => (
            <div
              key={index}
              className="w-[85vw] md:w-[400px] flex-shrink-0 group p-8 md:p-10 rounded-[3rem] border border-white bg-white shadow-[0_15px_35px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_60px_-15px_rgba(0,48,96,0.15)] hover:-translate-y-4 transition-all duration-500 cursor-pointer"
            >
              {/* Icône avec fond coloré propre */}
              <div className={`w-16 h-16 ${service.color} rounded-[1.5rem] flex items-center justify-center mb-8 shadow-inner group-hover:rotate-6 transition-transform`}>
                <service.icon className="h-8 w-8" strokeWidth={2.5} />
              </div>

              <h4 className="text-2xl md:text-3xl font-black text-brand-dark mb-4 tracking-tighter uppercase leading-none">
                {service.title}
              </h4>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 font-medium">
                {service.description}
              </p>

              <div className="flex items-center gap-3 py-3 px-4 bg-slate-50 rounded-2xl w-fit">
                <CheckCircle2 className="h-5 w-5 text-brand-yellow fill-brand-yellow/20" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-blue">
                  Qualité Martine
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* DÉGRADÉS DE FOCALISATION (Plus prononcés) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10" />
      </div>

      {/* Bouton d'appel à l'action sous le carrousel */}
      <div className="mt-16 text-center">
        <p className="text-slate-400 font-medium mb-4 italic">Défilement automatique • Survolez pour ralentir</p>
      </div>
    </section>
  );
}
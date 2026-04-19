"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Camera, CheckCircle2, Sparkles } from "lucide-react";

const PROJECTS = [
  { id: 1, src: "/lavage-action-1.webp", category: "Lavage Main", title: "Traitement des taches difficiles" },
  { id: 2, src: "/lavage-detail-action.webp", category: "Action", title: "Soin particulier à chaque pièce" },
  { id: 3, src: "/soin-linge.webp", category: "Soin Textiles", title: "Rinçage et éclat des couleurs" },
  { id: 4, src: "/lavage-action-2.webp", category: "Blanchisserie", title: "Gestion de gros volumes" },
  { id: 5, src: "/resultat-pose-dynamique.webp", category: "Finition", title: "Linge propre et éclatant" },
  { id: 6, src: "/martine-joie.webp", category: "Satisfaction", title: "Le service avec le sourire" },
];

export default function Realisations() {
  return (
    <section id="realisations" className="py-24 bg-white scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 flex-1"
          >
            <div className="flex items-center gap-3 text-brand-blue font-black uppercase tracking-[0.4em] text-xs">
              <Camera size={18} className="text-brand-yellow fill-brand-yellow/20" />
              <span>Galerie Authentique</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-brand-dark uppercase tracking-tighter leading-none">
              L'art de la <span className="text-brand-blue italic">propreté</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex-1 max-w-sm"
          >
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed md:text-right border-l-4 md:border-l-0 md:border-r-4 border-brand-yellow px-6 py-2 italic">
              "Chaque vêtement confié est traité comme une pièce unique."
            </p>
          </motion.div>
        </div>

        {/* GRILLE DYNAMIQUE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // L'astuce du "Masonry" : On descend les cartes de la colonne de droite sur desktop
              className={`group relative h-[450px] md:h-[600px] rounded-[3.5rem] overflow-hidden shadow-2xl ${
                index % 2 !== 0 ? "md:mt-24" : ""
              }`}
            >
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay Premium progressif */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Contenu de la carte */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <Badge className="w-fit mb-6 bg-white/20 backdrop-blur-md text-white border border-white/30 font-black uppercase text-[10px] tracking-[0.2em] px-4 py-2 rounded-full">
                  {project.category}
                </Badge>
                
                <h3 className="text-white text-3xl md:text-4xl font-black mb-6 tracking-tighter leading-[0.9] group-hover:text-brand-yellow transition-colors duration-300">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-3 text-slate-300 text-[10px] font-black uppercase tracking-[0.2em] pt-6 border-t border-white/10">
                  <div className="p-1.5 bg-brand-blue rounded-lg">
                    <Sparkles size={12} className="text-brand-yellow fill-brand-yellow" />
                  </div>
                  <span>Martine Services • Calavi</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* FOOTER DE SECTION (Réassurance) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 md:mt-56 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-10 md:p-16 bg-slate-50 rounded-[4rem] border-2 border-dashed border-slate-200 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-full shadow-xl -mt-24">
               <CheckCircle2 size={40} className="text-brand-blue" />
            </div>
            <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed italic px-4">
              "Toutes ces images sont des instantanés de mes interventions à <strong>Abomey-Calavi</strong> et environs. 
              Pas de photos de catalogue, seulement mon vrai travail pour vous."
            </p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="w-2 h-2 rounded-full bg-brand-yellow" />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
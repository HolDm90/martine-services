"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Heart, Award, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="a-propos" className="py-24 md:py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* COMPOSITION IMAGE */}
          <div className="relative w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[3rem] md:rounded-[4rem] overflow-hidden border-[10px] border-white shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)]"
            >
              <Image 
                src="/lavage-action-2.webp" 
                alt="Martine Adewale"
                width={600}
                height={750}
                priority
                style={{ width: '100%', height: 'auto' }} 
                className="object-cover"
              />
            </motion.div>

            {/* BADGE EXPERTISE : Fond Jaune Flash pour trancher */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-brand-yellow p-6 md:p-10 rounded-[2.5rem] shadow-2xl z-20 text-brand-dark"
            >
              <p className="text-5xl md:text-7xl font-black leading-none">3+</p>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Années de<br/>Savoir-faire</p>
            </motion.div>
          </div>

          {/* TEXTE & VALEURS */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="space-y-6">
              <span className="text-brand-blue font-black uppercase tracking-[0.4em] text-sm">
                — Mon Engagement
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-brand-dark leading-[0.95] tracking-tighter">
                L'excellence <br />
                <span className="text-brand-blue">au quotidien.</span>
              </h2>
              <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium">
                Je ne me contente pas de nettoyer. Je prends soin de votre patrimoine textile avec une rigueur absolue.
              </p>
            </div>

            {/* LES CARTES (CORRIGÉES POUR LE CONTRASTE) */}
            <div className="grid gap-6">
              {[
                { icon: ShieldCheck, title: "Confiance & Sécurité", desc: "Discrétion totale garantie.", color: "text-blue-600", bg: "bg-blue-100" },
                { icon: Heart, title: "Amour du Textile", desc: "Produits doux et sains.", color: "text-red-600", bg: "bg-red-100" },
                { icon: Award, title: "Standard de Luxe", desc: "Finition impeccable.", color: "text-amber-600", bg: "bg-amber-100" }
              ].map((val, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-6 bg-white rounded-[2rem] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-slate-100"
                >
                  {/* Le conteneur d'icône a son propre fond coloré pour ressortir */}
                  <div className={`${val.bg} ${val.color} p-5 rounded-2xl shadow-inner`}>
                    <val.icon size={35} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-black text-brand-dark uppercase tracking-tighter leading-none mb-1">
                      {val.title}
                    </h4>
                    <p className="text-slate-500 font-medium text-lg">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
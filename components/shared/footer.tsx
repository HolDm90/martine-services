"use client"

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon } from "@/components/shared/icons";
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* GRILLE PRINCIPALE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Colonne 1 : Brand & Identité */}
          <div className="space-y-8">
            <Link href="#accueil" className="flex items-center gap-3 group">
              <div className="bg-brand-yellow p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-brand-yellow/20">
                <Sparkles className="text-brand-dark h-6 w-6 fill-brand-dark" />
              </div>
              <span className="font-black text-2xl uppercase tracking-tighter flex flex-col leading-none">
                Martine <span className="text-brand-yellow text-sm tracking-[0.3em]">Services</span>
              </span>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              L'excellence du lavage premium et du ménage à domicile à <span className="text-white">Abomey-Calavi</span>.
            </p>
            <div className="flex gap-4">
              <SocialButton icon={<FacebookIcon size={22} />} href="https://www.facebook.com/share/1Dkx7ZrqAi/?mibextid=wwXIfr" label="Facebook" />
              <SocialButton icon={<InstagramIcon size={22} />} href="#" label="Instagram" />
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div className="space-y-8">
            <h4 className="font-black text-xs uppercase tracking-[0.4em] text-brand-yellow">Navigation</h4>
            <nav className="flex flex-col gap-4">
              {["Accueil", "À Propos", "Services", "Réalisations", "Contact"].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 font-bold text-lg flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-brand-yellow group-hover:w-4 transition-all"></span>
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Colonne 3 : Contact Direct */}
          <div className="space-y-8">
            <h4 className="font-black text-xs uppercase tracking-[0.4em] text-brand-yellow">Contact</h4>
            <div className="space-y-6 text-lg font-medium text-slate-300">
              <a href="tel:+2290153315138" className="flex items-center gap-4 hover:text-white transition-colors group">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-brand-blue transition-colors">
                  <Phone size={20} className="text-brand-yellow" />
                </div>
                <span>+229 01 53 31 51 38</span>
              </a>
              <a href="mailto:martineadewale@gmail.com" className="flex items-center gap-4 hover:text-white transition-colors group">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-brand-blue transition-colors">
                  <Mail size={20} className="text-brand-yellow" />
                </div>
                <span className="text-base truncate">martineadewale@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl">
                  <MapPin size={20} className="text-brand-yellow" />
                </div>
                <span>Abomey-Calavi, Bénin</span>
              </div>
            </div>
          </div>

          {/* Colonne 4 : Action */}
          <div className="space-y-8">
            <h4 className="font-black text-xs uppercase tracking-[0.4em] text-brand-yellow">Réservation</h4>
            <p className="text-slate-400 font-medium">
              Prêt à redonner de l'éclat à votre intérieur ?
            </p>
            <Button asChild className="w-full bg-brand-blue hover:bg-white hover:text-brand-dark h-16 rounded-2xl text-lg font-black shadow-2xl transition-all duration-300">
              <Link href="#contact">Prendre RDV</Link>
            </Button>
          </div>
        </div>

        <Separator className="bg-white/5 mb-10" />

        {/* SECTION BASSE */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} <span className="text-slate-300">Martine Services</span>. Tous droits réservés.
          </div>
          
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-brand-yellow"
          >
            Retour en haut
            <ArrowUpCircle size={24} className="group-hover:fill-brand-yellow/10 transition-all" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

function SocialButton({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) {
  return (
    <Link 
      href={href} 
      aria-label={label}
      target="_blank"
      className="p-4 bg-white/5 hover:bg-brand-blue text-white rounded-2xl transition-all duration-300 shadow-xl border border-white/5"
    >
      {icon}
    </Link>
  );
}
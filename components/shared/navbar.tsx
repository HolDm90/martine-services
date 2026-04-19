"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles, ArrowRight } from "lucide-react"

const navLinks = [
  { name: "Accueil", href: "#accueil" },
  { name: "À Propos", href: "#a-propos" },
  { name: "Services", href: "#services" },
  { name: "Réalisations", href: "#realisations" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { scrollY } = useScroll()
  
  // Animation de fond : plus opaque au scroll pour détacher la navbar du contenu
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(229, 238, 245, 0)", "rgba(255, 255, 255, 0.98)"]
  )
  
  const borderBottom = useTransform(
    scrollY,
    [0, 80],
    ["1px solid rgba(255, 255, 255, 0)", "1px solid rgba(0, 48, 96, 0.1)"]
  )

  const shadow = useTransform(
    scrollY,
    [0, 80],
    ["none", "0 10px 30px -10px rgba(0, 0, 0, 0.1)"]
  )

  return (
    <motion.header
      style={{ 
        backgroundColor, 
        borderBottom,
        boxShadow: shadow 
      }}
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
        
        {/* LOGO - Cohérent avec le badge du Hero */}
        <Link href="#accueil" className="flex items-center gap-3 group">
          <div className="bg-brand-blue p-2.5 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-brand-blue/20">
            <Sparkles className="text-brand-yellow h-5 w-5 fill-brand-yellow" />
          </div>
          <span className="font-black text-xl md:text-2xl uppercase tracking-tighter text-brand-dark flex flex-col leading-none">
            Martine <span className="text-brand-blue text-[10px] tracking-[0.3em]">SERVICES</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-xs font-black uppercase tracking-[0.2em] text-brand-dark/70 hover:text-brand-blue transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all group-hover:w-full" />
            </Link>
          ))}
          
          <Button asChild className="bg-brand-blue hover:bg-brand-dark text-white rounded-xl px-8 h-12 font-bold shadow-lg shadow-brand-blue/20 transition-all hover:-translate-y-1">
            <Link href="#contact">Réserver</Link>
          </Button>
        </nav>

        {/* BOUTON MENU MOBILE */}
        <button 
          className="md:hidden p-2 bg-white rounded-xl shadow-sm border border-slate-100 text-brand-dark" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENU MOBILE - STYLE LUMINA PREMIUM */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-100 overflow-hidden"
      >
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.name}
              initial={{ x: -20, opacity: 0 }}
              animate={isOpen ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-black text-brand-dark hover:text-brand-blue transition-colors flex items-center justify-between group uppercase tracking-tighter"
              >
                {link.name}
                <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-brand-yellow" />
              </Link>
            </motion.div>
          ))}
          
          <div className="pt-4">
            <Button asChild className="bg-brand-blue w-full h-16 rounded-2xl text-lg font-black shadow-xl shadow-brand-blue/20">
              <Link href="#contact" onClick={() => setIsOpen(false)}>Prendre rendez-vous</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  )
}
"use client"

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function WhatsAppFloating() {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        animate={{ 
          y: [0, -10, 0], // Mouvement de haut en bas
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <Link 
          href="https://wa.me/22953315138" 
          target="_blank"
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-2 border-white"
        >
          <MessageCircle className="h-8 w-8" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
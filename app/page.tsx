import Navbar from "@/components/shared/navbar";
import WhatsAppFloating from "@/components/shared/whatsapp-button";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import About from "@/components/sections/about";
import Realisations from "@/components/sections/realisations";
import Contact from "@/components/sections/contact";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <WhatsAppFloating />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Realisations />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
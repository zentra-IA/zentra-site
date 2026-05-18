import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Segments from "@/components/Segments";
import CTA from "@/components/CTA";
import AIChat from "@/components/AIChat";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <Navbar />

      <Hero />

      <Services />

      <Segments />

      <CTA />

      <AIChat />
    </main>
  );
}
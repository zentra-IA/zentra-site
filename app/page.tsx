import ForWho from "@/components/ForWho";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import LeadForm from "@/components/LeadForm";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Problemas */}
      <section>
        <Problem />
      </section>

      {/* Serviços */}
      <section>
        <Services />
      </section>

      {/* Benefícios */}
      <section>
        <Benefits />
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-fuchsia-600">
        <CTA />
      </section>

      {/* Footer */}
      <Footer />

    </main>
  );
}
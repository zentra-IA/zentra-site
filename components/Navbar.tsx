import Image from "next/image";
import LeadCaptureButton from "@/components/LeadCaptureButton";

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-10 md:py-4">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/logo-zentra.png"
              alt="Zentra"
              width={128}
              height={42}
              priority
              className="h-auto w-[112px] md:w-[150px]"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#problema" className="text-sm font-medium text-zinc-600 hover:text-zinc-950">
              Problemas
            </a>
            <a href="#solucoes" className="text-sm font-medium text-zinc-600 hover:text-zinc-950">
              Soluções
            </a>
            <a href="#segmentos" className="text-sm font-medium text-zinc-600 hover:text-zinc-950">
              Segmentos
            </a>
            <a href="#contato" className="text-sm font-medium text-zinc-600 hover:text-zinc-950">
              Contato
            </a>
          </nav>

          <div className="hidden md:block">
            <LeadCaptureButton
              label="Agendar diagnóstico"
              destination="calendly"
              source="navbar"
              className="rounded-xl bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-700"
            />
          </div>

          <div className="md:hidden">
            <LeadCaptureButton
              label="Contato"
              destination="whatsapp"
              source="navbar"
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white"
            />
          </div>
        </div>
      </header>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 bg-white/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <LeadCaptureButton
            label="WhatsApp"
            destination="whatsapp"
            source="cta"
            className="rounded-xl bg-green-600 px-4 py-3 text-center text-sm font-bold text-white"
          />
          <LeadCaptureButton
            label="Agendar"
            destination="calendly"
            source="cta"
            className="rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white"
          />
        </div>
      </div>
    </>
  );
}
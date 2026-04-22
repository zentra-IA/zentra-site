import LeadCaptureButton from "@/components/LeadCaptureButton";

export default function CTA() {
  return (
    <section id="cta" className="py-20 md:py-24 text-center text-white">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <h2 className="text-3xl font-bold md:text-5xl">
          Pronto para transformar seu negócio?
        </h2>

        <p className="mt-6 text-lg text-white/90">
          Automatize seu atendimento, capture mais clientes e organize sua operação com a Zentra.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <LeadCaptureButton
            label="Falar no WhatsApp"
            destination="whatsapp"
            source="cta"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-black shadow hover:bg-zinc-100"
          />

          <LeadCaptureButton
            label="Agendar apresentação"
            destination="calendly"
            source="cta"
            className="rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
          />
        </div>
      </div>
    </section>
  );
}
import LeadCaptureButton from "@/components/LeadCaptureButton";

export default function CTA() {
  return (
    <section id="contato" className="bg-blue-600 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
          Próximo passo
        </span>

        <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
          Quer entender como isso funcionaria na sua empresa?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-50">
          Fale com a Zentra. Vamos entender sua rotina e mostrar uma solução simples,
          prática e personalizada.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <LeadCaptureButton
            label="Agendar conversa"
            destination="calendly"
            source="cta"
            className="w-full rounded-xl bg-white px-7 py-4 font-bold text-blue-700 shadow-xl transition hover:bg-zinc-100 sm:w-auto"
          />

          <LeadCaptureButton
            label="Chamar no WhatsApp"
            destination="whatsapp"
            source="cta"
            className="w-full rounded-xl bg-green-500 px-7 py-4 font-bold text-white shadow-xl transition hover:bg-green-600 sm:w-auto"
          />
        </div>

        <p className="mt-6 text-sm text-blue-100">
          Sem compromisso • Diagnóstico rápido • Atendimento humano
        </p>
      </div>
    </section>
  );
}
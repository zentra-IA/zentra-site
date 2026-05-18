import LeadCaptureButton from "@/components/LeadCaptureButton";

export default function Segments() {
  const segments = [
    {
      icon: "🍔",
      title: "Restaurantes e delivery",
      text: "Pedidos, cardápio online, WhatsApp, entregas e atendimento.",
    },
    {
      icon: "🛒",
      title: "Lojas e e-commerce",
      text: "Vendas, suporte, clientes, estoque e respostas automáticas.",
    },
    {
      icon: "🧰",
      title: "Prestadores de serviço",
      text: "Orçamentos, agenda, clientes, follow-up e organização.",
    },
    {
      icon: "🏋️",
      title: "Academias",
      text: "Matrículas, cobranças, lembretes e atendimento aos alunos.",
    },
    {
      icon: "🎓",
      title: "Infoprodutores",
      text: "Leads, funil, suporte, recuperação e vendas automáticas.",
    },
    {
      icon: "🏢",
      title: "Empresas em geral",
      text: "Soluções sob medida para qualquer operação com tarefas manuais.",
    },
  ];

  return (
    <section id="segmentos" className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Para quem serve
          </span>

          <h2 className="mt-5 text-3xl font-bold md:text-5xl">
            A Zentra se adapta ao seu negócio
          </h2>

          <p className="mt-6 text-lg text-zinc-300">
            Cada empresa tem uma rotina diferente. Nós criamos a tecnologia certa para ela.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {segments.map((segment) => (
            <div
              key={segment.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-fuchsia-500 text-3xl shadow-lg">
                {segment.icon}
              </div>

              <h3 className="text-xl font-bold">{segment.title}</h3>

              <p className="mt-4 leading-7 text-zinc-300">{segment.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-gradient-to-r from-blue-600 to-fuchsia-600 p-8 text-center">
          <h3 className="text-3xl font-bold">
            Não sabe o que automatizar primeiro?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-blue-50">
            Em uma conversa rápida, mostramos onde sua empresa pode economizar tempo e vender melhor.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <LeadCaptureButton
              label="Agendar conversa"
              destination="calendly"
              source="segment"
              className="rounded-xl bg-white px-7 py-4 font-bold text-blue-700"
            />

            <LeadCaptureButton
              label="Chamar no WhatsApp"
              destination="whatsapp"
              source="segment"
              className="rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-bold text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
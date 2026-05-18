export default function Services() {
  const services = [
    {
      icon: "💬",
      title: "WhatsApp automático",
      description:
        "Sua empresa responde clientes, tira dúvidas e capta interessados mesmo fora do horário.",
    },
    {
      icon: "🤖",
      title: "Chatbot com IA",
      description:
        "Um atendente inteligente para conversar, orientar e encaminhar clientes.",
    },
    {
      icon: "📊",
      title: "CRM simples",
      description:
        "Organize clientes, oportunidades, retornos e vendas em um só lugar.",
    },
    {
      icon: "🌐",
      title: "Sites que vendem",
      description:
        "Páginas modernas para apresentar sua empresa e gerar contatos pelo WhatsApp.",
    },
    {
      icon: "⚡",
      title: "Automação de tarefas",
      description:
        "Tarefas repetitivas viram processos automáticos para economizar tempo.",
    },
    {
      icon: "🧩",
      title: "Sistema personalizado",
      description:
        "Criamos sistemas sob medida para controlar pedidos, equipe, vendas ou financeiro.",
    },
  ];

  return (
    <section id="solucoes" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            O que fazemos
          </span>

          <h2 className="mt-5 text-3xl font-bold md:text-5xl">
            Tecnologia fácil de entender e usar
          </h2>

          <p className="mt-5 text-lg text-zinc-600">
            Você mostra o problema. A Zentra cria a solução.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-7 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-fuchsia-600 text-3xl shadow-lg">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold">{service.title}</h3>

              <p className="mt-4 leading-7 text-zinc-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
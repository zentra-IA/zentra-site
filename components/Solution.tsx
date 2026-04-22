export default function Solution() {
  const items = [
    {
      title: "Cardápio digital",
      desc: "Organize produtos e facilite o atendimento com uma apresentação moderna.",
      icon: "📋",
    },
    {
      title: "Pedidos automáticos",
      desc: "Receba e direcione solicitações com muito mais velocidade.",
      icon: "⚡",
    },
    {
      title: "Controle completo",
      desc: "Centralize atendimento, métricas e operação em um só lugar.",
      icon: "📊",
    },
    {
      title: "IA no suporte",
      desc: "Atenda melhor com automações e inteligência no primeiro contato.",
      icon: "🤖",
    },
  ];

  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Tudo automatizado para você
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Reduza tarefas manuais e ganhe escala com uma operação mais inteligente.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="min-h-[190px] rounded-2xl bg-slate-900 p-6 text-white shadow-sm"
            >
              <div className="text-2xl">{item.icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
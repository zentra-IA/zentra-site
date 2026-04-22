import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

const stageLabels: Record<string, string> = {
  NEW: "Entrou em contato",
  MEETING_SCHEDULED: "Marcou reunião",
  PROPOSAL_SENT: "Pediu proposta",
  WON: "Fechamos negócio",
  LOST: "Não quis fechar",
};

const stageColors: Record<string, string> = {
  NEW: "bg-blue-100 text-blue-700",
  MEETING_SCHEDULED: "bg-amber-100 text-amber-700",
  PROPOSAL_SENT: "bg-violet-100 text-violet-700",
  WON: "bg-green-100 text-green-700",
  LOST: "bg-red-100 text-red-700",
};

async function updateLeadStage(formData: FormData) {
  "use server";

  const id = String(formData.get("id") || "");
  const stage = String(formData.get("stage") || "");

  if (!id || !stage) return;

  await prisma.lead.update({
    where: { id },
    data: { stage },
  });
}

async function updateLeadNotes(formData: FormData) {
  "use server";

  const id = String(formData.get("id") || "");
  const notes = String(formData.get("notes") || "");

  if (!id) return;

  await prisma.lead.update({
    where: { id },
    data: { notes },
  });
}

export default async function LeadsPage({
  searchParams,
}: {
  searchParams?: {
    stage?: string;
    q?: string;
  };
}) {
  const stageFilter = searchParams?.stage || "";
  const q = searchParams?.q || "";

  const leads = await prisma.lead.findMany({
    where: {
      ...(stageFilter ? { stage: stageFilter } : {}),
      ...(q
        ? {
            OR: [
              { name: { contains: q } },
              { company: { contains: q } },
              { problem: { contains: q } },
              { whatsapp: { contains: q } },
            ],
          }
        : {}),
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const funnelCounts = await prisma.lead.groupBy({
    by: ["stage"],
    _count: {
      stage: true,
    },
  });

  const countsMap = Object.fromEntries(
    funnelCounts.map((item) => [item.stage, item._count.stage])
  );

  const stages = [
    "NEW",
    "MEETING_SCHEDULED",
    "PROPOSAL_SENT",
    "WON",
    "LOST",
  ];

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
            CRM Zentra
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Leads e funil comercial
          </h1>

          <p className="mt-3 text-lg text-zinc-600">
            Acompanhe os leads recebidos, filtre por etapa e avance o pipeline comercial.
          </p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-5">
          {stages.map((stage) => (
            <div
              key={stage}
              className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm text-zinc-500">{stageLabels[stage]}</p>
              <p className="mt-2 text-3xl font-bold text-zinc-900">
                {countsMap[stage] || 0}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-6 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
          <form className="grid gap-4 md:grid-cols-[1fr_220px_160px]">
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="Buscar por nome, empresa, WhatsApp ou problema"
              className="rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-blue-500"
            />

            <select
              name="stage"
              defaultValue={stageFilter}
              className="rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="">Todas as etapas</option>
              <option value="NEW">Entrou em contato</option>
              <option value="MEETING_SCHEDULED">Marcou reunião</option>
              <option value="PROPOSAL_SENT">Pediu proposta</option>
              <option value="WON">Fechamos negócio</option>
              <option value="LOST">Não quis fechar</option>
            </select>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Filtrar
            </button>
          </form>
        </div>

        <div className="space-y-6">
          {leads.length === 0 ? (
            <div className="rounded-3xl border border-zinc-200 bg-white p-10 text-center text-zinc-500 shadow-sm">
              Nenhum lead encontrado.
            </div>
          ) : (
            leads.map((lead) => (
              <div
                key={lead.id}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                        {lead.name}
                      </h2>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          stageColors[lead.stage] || "bg-zinc-100 text-zinc-700"
                        }`}
                      >
                        {stageLabels[lead.stage] || lead.stage}
                      </span>
                    </div>

                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl bg-zinc-50 p-4">
                        <p className="text-xs uppercase tracking-wide text-zinc-500">
                          WhatsApp
                        </p>
                        <a
                          href={`https://wa.me/55${lead.whatsapp.replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 block font-medium text-blue-600 hover:underline"
                        >
                          {lead.whatsapp}
                        </a>
                      </div>

                      <div className="rounded-2xl bg-zinc-50 p-4">
                        <p className="text-xs uppercase tracking-wide text-zinc-500">
                          Empresa
                        </p>
                        <p className="mt-2 font-medium text-zinc-900">
                          {lead.company}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-zinc-50 p-4">
                        <p className="text-xs uppercase tracking-wide text-zinc-500">
                          Origem
                        </p>
                        <p className="mt-2 font-medium text-zinc-900">
                          {lead.source || "—"}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-zinc-50 p-4">
                        <p className="text-xs uppercase tracking-wide text-zinc-500">
                          Destino
                        </p>
                        <p className="mt-2 font-medium text-zinc-900">
                          {lead.destination || "—"}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 rounded-2xl bg-zinc-50 p-4">
                      <p className="text-xs uppercase tracking-wide text-zinc-500">
                        Problema informado
                      </p>
                      <p className="mt-2 whitespace-pre-wrap text-zinc-800">
                        {lead.problem}
                      </p>
                    </div>

                    <div className="mt-4 text-sm text-zinc-500">
                      Recebido em {new Date(lead.createdAt).toLocaleString("pt-BR")}
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="rounded-2xl border border-zinc-200 p-4">
                      <p className="mb-3 text-sm font-semibold text-zinc-800">
                        Atualizar etapa do funil
                      </p>

                      <form action={updateLeadStage} className="space-y-3">
                        <input type="hidden" name="id" value={lead.id} />

                        <select
                          name="stage"
                          defaultValue={lead.stage}
                          className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-blue-500"
                        >
                          <option value="NEW">Entrou em contato</option>
                          <option value="MEETING_SCHEDULED">Marcou reunião</option>
                          <option value="PROPOSAL_SENT">Pediu proposta</option>
                          <option value="WON">Fechamos negócio</option>
                          <option value="LOST">Não quis fechar</option>
                        </select>

                        <button
                          type="submit"
                          className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
                        >
                          Salvar etapa
                        </button>
                      </form>
                    </div>

                    <div className="rounded-2xl border border-zinc-200 p-4">
                      <p className="mb-3 text-sm font-semibold text-zinc-800">
                        Observações internas
                      </p>

                      <form action={updateLeadNotes} className="space-y-3">
                        <input type="hidden" name="id" value={lead.id} />

                        <textarea
                          name="notes"
                          defaultValue={lead.notes || ""}
                          rows={6}
                          placeholder="Ex.: pediu retorno amanhã, quer proposta, reunião marcada..."
                          className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-blue-500"
                        />

                        <button
                          type="submit"
                          className="w-full rounded-xl border border-zinc-300 px-4 py-3 font-semibold text-zinc-900 hover:bg-zinc-50"
                        >
                          Salvar observação
                        </button>
                      </form>
                    </div>

                    <a
                      href={`https://wa.me/55${lead.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full rounded-xl bg-green-600 px-4 py-3 text-center font-semibold text-white hover:bg-green-700"
                    >
                      Abrir WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            ← Voltar para o site
          </Link>
        </div>
      </div>
    </main>
  );
}
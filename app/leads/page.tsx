"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "@hello-pangea/dnd";

type Lead = {
  id: string;
  name: string;
  whatsapp: string;
  company: string;
  problem: string;
  stage: string;
  meetingDate?: string;
  notes?: string;
};

const stages = [
  { id: "NEW", title: "Novo" },
  { id: "MEETING_SCHEDULED", title: "Reunião" },
  { id: "PROPOSAL_SENT", title: "Proposta" },
  { id: "WON", title: "Fechado" },
];

export default function CRM() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [meetingDate, setMeetingDate] = useState("");
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    fetchLeads();
  }, []);

  async function fetchLeads() {
    try {
      const res = await fetch("/api/lead/list", {cache:"no-store"});
      if(res.status===401){setAuthorized(false);setLeads([]);return;}
      if(!res.ok) throw new Error("Falha ao carregar os leads.");
      const data = await res.json();
      setLeads(data.leads || []);
      setAuthorized(true);
    } catch {setLoginError("Não foi possível carregar o CRM. Verifique a conexão.");setAuthorized(false);}
  }

  function getLeads(stage: string) {
    return leads.filter((l) => l.stage === stage);
  }

  async function updateLead(id: string, data: Record<string,string>) {
    await fetch(`/api/lead/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    fetchLeads();
  }

  async function deleteLead(id: string) {
    if (!confirm("Excluir lead?")) return;

    await fetch(`/api/lead/${id}`, {
      method: "DELETE",
    });

    fetchLeads();
  }

  async function handleDragEnd(result: DropResult) {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId !== source.droppableId) {
      updateLead(draggableId, {
        stage: destination.droppableId,
      });
    }
  }

  function openSchedule(lead: Lead) {
    setSelectedLead(lead);
  }

  async function saveMeeting() {
    if (!selectedLead) return;

    await updateLead(selectedLead.id, {
      meetingDate,
      stage: "MEETING_SCHEDULED",
    });

    setSelectedLead(null);
    setMeetingDate("");
  }

  async function login(e: React.FormEvent) {
    e.preventDefault(); setLoginError("");
    try {
      const res=await fetch("/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password})});
      if(!res.ok) {setLoginError("Senha inválida ou acesso administrativo ainda não configurado.");return;}
      setPassword("");await fetchLeads();
    }catch{setLoginError("Falha na conexão. Tente novamente.");}
  }
  async function logout(){await fetch("/api/admin/logout",{method:"POST"});setLeads([]);setAuthorized(false);}

  if(authorized!==true) return <main className="grid min-h-screen place-items-center bg-slate-100 px-4 py-12">
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"><div className="mb-6 text-2xl font-black text-violet-700">Zentra • CRM</div>
      {authorized===null ? <p className="text-slate-600">Verificando acesso...</p> : <form onSubmit={login} className="space-y-5"><h1 className="text-xl font-bold">Acesso administrativo</h1><p className="text-sm text-slate-600">Informe a senha configurada para o CRM.</p><label className="block text-sm font-semibold">Senha<input type="password" required autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)} className="mt-2 w-full rounded-lg border border-slate-300 p-3"/></label><button type="submit" className="w-full rounded-lg bg-violet-700 px-4 py-3 font-bold text-white hover:bg-violet-800">Entrar</button>{loginError&&<p role="alert" className="text-sm text-red-700">{loginError}</p>}</form>}
      <Link href="/" className="mt-7 block text-sm font-semibold text-violet-700">← Voltar ao site</Link>
    </div>
  </main>;

  return (
    <div className="p-6 bg-zinc-100 min-h-screen">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3"><h1 className="text-3xl font-bold">CRM • Leads</h1><div className="flex items-center gap-4"><Link href="/" className="text-sm font-semibold text-violet-700">Ir para o site</Link><button onClick={logout} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-white">Sair</button></div></div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible">

          {stages.map((stage) => (
            <Droppable key={stage.id} droppableId={stage.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="min-w-[300px] rounded-xl bg-white p-3 md:min-w-0 min-h-[500px]"
                >
                  <h2 className="font-semibold mb-4">
                    {stage.title} ({getLeads(stage.id).length})
                  </h2>

                  {getLeads(stage.id).map((lead, index) => (
                    <Draggable
                      key={lead.id}
                      draggableId={lead.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-zinc-50 p-4 mb-4 rounded-xl border shadow-sm"
                        >
                          <h3 className="font-semibold">
                            {lead.name}
                          </h3>

                          <p className="text-sm text-zinc-500">
                            {lead.company}
                          </p>

                          <p className="text-sm mt-2">
                            {lead.problem}
                          </p>

                          {lead.meetingDate && (
                            <p className="text-xs text-blue-600 mt-2">
                              📅{" "}
                              {new Date(
                                lead.meetingDate
                              ).toLocaleString()}
                            </p>
                          )}

                          <textarea
                            defaultValue={lead.notes || ""}
                            onBlur={(e) =>
                              updateLead(lead.id, {
                                notes: e.target.value,
                              })
                            }
                            placeholder="Observações..."
                            className="w-full border mt-2 p-2 rounded text-sm"
                          />

                          <div className="mt-3 space-y-2">

                            <a
                              href={`https://wa.me/55${lead.whatsapp.replace(
                                /\D/g,
                                ""
                              )}`}
                              target="_blank"
                              className="block bg-green-600 text-white text-center py-1 rounded text-sm"
                            >
                              WhatsApp
                            </a>

                            <button
                              onClick={() => openSchedule(lead)}
                              className="w-full bg-blue-600 text-white py-1 rounded text-sm"
                            >
                              Marcar reunião
                            </button>

                            <button
                              onClick={() =>
                                updateLead(lead.id, {
                                  stage: "WON",
                                })
                              }
                              className="w-full bg-purple-600 text-white py-1 rounded text-sm"
                            >
                              Fechar
                            </button>

                            <button
                              onClick={() => deleteLead(lead.id)}
                              className="w-full bg-red-600 text-white py-1 rounded text-sm"
                            >
                              Excluir
                            </button>

                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}

        </div>
      </DragDropContext>

      {/* MODAL */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-[300px]">

            <h2 className="mb-4 font-semibold">
              Marcar reunião
            </h2>

            <input
              type="datetime-local"
              value={meetingDate}
              onChange={(e) =>
                setMeetingDate(e.target.value)
              }
              className="border w-full p-2 rounded mb-4"
            />

            <button
              onClick={saveMeeting}
              className="bg-blue-600 text-white w-full py-2 rounded"
            >
              Salvar
            </button>

          </div>
        </div>
      )}
    </div>
  );
}
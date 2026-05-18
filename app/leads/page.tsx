"use client";

import { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
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

  useEffect(() => {
    fetchLeads();
  }, []);

  async function fetchLeads() {
    const res = await fetch("/api/lead/list");
    const data = await res.json();
    setLeads(data.leads || []);
  }

  function getLeads(stage: string) {
    return leads.filter((l) => l.stage === stage);
  }

  async function updateLead(id: string, data: any) {
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

  async function handleDragEnd(result: any) {
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

  return (
    <div className="p-6 bg-zinc-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        CRM
      </h1>

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
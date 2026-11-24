"use client";
import {useState} from "react";
import type {ProjectCase} from "@/lib/cases";
import SiteIcon from "@/components/SiteIcon";
export default function CaseJourney({item}:{item:ProjectCase}){
 const [selected,setSelected]=useState(0);
 const stage=item.steps[selected];
 return <div className="rounded-[24px] border border-[#dce3f6] bg-white p-5 shadow-[0_20px_58px_#1e315412] sm:p-7">
  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#edf0f8] pb-5"><div><p className="text-xs font-bold uppercase tracking-widest text-violet-700">Mapa interativo do processo</p><h3 className="mt-2 text-xl font-extrabold text-[#15213c]">Etapas da jornada</h3></div><span className="rounded-full bg-[#eff3fb] px-3 py-2 text-[11px] font-semibold text-[#667393]">SIMULAÇÃO DIDÁTICA</span></div>
  <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-5" role="tablist" aria-label="Etapas do processo">{item.steps.map((s,i)=><button type="button" key={s.title} role="tab" aria-selected={selected===i} onClick={()=>setSelected(i)} className={`min-h-[84px] rounded-xl border p-3 text-left transition ${selected===i?"border-[#8974ef] bg-[#edeaff] shadow-[0_5px_18px_#7a5be91a]":"border-[#e5eaf4] bg-[#f8fafe] hover:border-[#aaa0e7]"}`}><span className="block text-xs font-extrabold text-[#6c5cc9]">{String(i+1).padStart(2,"0")}</span><span className="mt-2 block text-[12px] font-bold leading-4 text-[#202d48]">{s.title}</span></button>)}</div>
  <div className="mt-5 flex min-h-[162px] items-start gap-4 rounded-[18px] bg-[#111b35] p-6 text-white sm:items-center"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#7561d2] text-white"><SiteIcon name="workflow" size={24}/></div><div><p className="text-xs font-bold uppercase tracking-wider text-[#aea4fc]">Etapa {selected+1} de {item.steps.length}</p><h4 className="mt-2 text-xl font-extrabold">{stage.title}</h4><p className="mt-2 text-sm leading-7 text-[#c4cde6]">{stage.description}</p></div></div>
  <p className="mt-4 text-xs leading-6 text-[#6d7a94]">Este fluxo ilustra os módulos do projeto. Não utiliza dados de clientes nem demonstra resultados medidos.</p>
 </div>
}

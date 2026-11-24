"use client";
import Link from "next/link";
import {useState} from "react";
import Brand from "@/components/Brand";
import SiteIcon from "@/components/SiteIcon";
const links = [{href:"/#ferramentas",label:"Ferramentas"},{href:"/#simuladores",label:"Simuladores"},{href:"/tecnologias/wepush",label:"WePush"},{href:"/#projetos",label:"Projetos"},{href:"/#diagnostico",label:"Diagnóstico"}];
export default function Navbar(){
 const [open,setOpen]=useState(false);
 return <header className="sticky top-0 z-50 border-b border-[#ffffff16] bg-[#080c1a]/90 backdrop-blur-2xl">
  <div className="z-container mx-auto w-[calc(100%-32px)] max-w-[1160px] sm:w-[calc(100%-48px)] flex h-[72px] items-center justify-between gap-6">
   <Link href="/" aria-label="Zentra — voltar ao início"><Brand inverse/></Link>
   <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">{links.map(l=><Link key={l.href} href={l.href} className="text-[13px] font-semibold text-[#a4abc7] transition hover:text-white">{l.label}</Link>)}</nav>
   <div className="hidden shrink-0 items-center gap-4 lg:flex"><span className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#9da9c3]"><span className="z-dot h-1.5 w-1.5 rounded-full bg-emerald-400"/> Projetos sob medida</span><Link href="/#diagnostico" data-zentra-cta="nav-diagnostico" className="z-button z-button-primary shrink-0 whitespace-nowrap">Solicitar diagnóstico <SiteIcon name="arrow" size={16}/></Link></div>
   <button type="button" aria-label={open?"Fechar menu":"Abrir menu"} aria-expanded={open} onClick={()=>setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-xl border border-white/20 text-white lg:hidden"><SiteIcon name={open?"close":"menu"}/></button>
  </div>
  {open&&<nav aria-label="Menu móvel" className="border-t border-white/10 bg-[#0e1326] px-5 py-4 lg:hidden">{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)} className="block border-b border-white/10 py-3 text-sm font-semibold text-white/85">{l.label}</Link>)}<Link href="/#diagnostico" onClick={()=>setOpen(false)} className="z-button z-button-primary mt-4 w-full">Solicitar diagnóstico</Link></nav>}
 </header>;
}

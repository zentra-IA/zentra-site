"use client";
import {useState} from "react";
import SiteIcon from "@/components/SiteIcon";

const scenarios=[
 {label:"Comercial",icon:"chart" as const,client:"Novo interessado",source:"Landing page",steps:["Contato captado","IA identifica a necessidade","Oportunidade no CRM","Próximo passo definido"],outcome:"Jornada comercial organizada"},
 {label:"Administrativo",icon:"workflow" as const,client:"Nova solicitação",source:"Portal próprio",steps:["Dados enviados","Documentos centralizados","Análise encaminhada","Responsável notificado"],outcome:"Processos integrados por equipe"},
 {label:"Atendimento",icon:"bot" as const,client:"Novo atendimento",source:"Canal autorizado",steps:["Solicitação recebida","Triagem orientada","Histórico registrado","Equipe acompanha"],outcome:"Atendimento com continuidade"}
];
export default function Hero(){
 const [active,setActive]=useState(0); const s=scenarios[active];
 return <section id="inicio" className="z-hero relative isolate overflow-hidden bg-[#090e1e] pb-16 pt-16 text-white md:pb-24 md:pt-24">
  <div aria-hidden className="absolute inset-0 z-grid opacity-60"/><div aria-hidden className="z-hero-glow pointer-events-none absolute inset-0"/>
  <div className="z-container relative z-10 grid items-center gap-14 lg:grid-cols-[1fr_1.02fr] lg:gap-14">
   <div className="z-animate-intro min-w-0">
    <p className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-xs font-bold tracking-[.07em] text-violet-100"><span className="h-2 w-2 rounded-full bg-[#70e5cb]"/> TECNOLOGIA SOB MEDIDA · ZENTRA</p>
    <h1 className="z-hero-title mt-7 max-w-[720px] text-[clamp(2.65rem,5.3vw,5.1rem)] font-extrabold leading-[1.06] tracking-[-.065em]">Sua empresa ainda faz muito trabalho manual? <span className="z-gradient-text">A tecnologia pode assumir essas tarefas.</span></h1>
    <p className="mt-7 max-w-[580px] text-[17px] leading-[1.8] text-[#c2c9df]">A IA pode <strong className="text-white">ligar, atender, qualificar, enviar notificações e organizar processos</strong>. A Zentra conecta essas capacidades ao jeito que sua empresa realmente trabalha.</p>
    <a href="/tecnologias/wepush" data-zentra-cta="hero-wepush" className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[#8f8af34d] bg-[#7b65ed17] px-4 py-3 text-[13px] font-bold text-[#d9d2ff] transition hover:bg-[#7b65ed2a]"><SiteIcon name="bell" size={17}/> Destaque: WePush — seu canal próprio de notificações <SiteIcon name="arrow" size={14}/></a>
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a data-zentra-cta="hero-diagnostico" href="#diagnostico" className="z-button z-button-primary">Descobrir o que posso automatizar <SiteIcon name="arrow" size={18}/></a><a data-zentra-cta="hero-projetos" href="#ferramentas" className="z-button z-button-outline">Explorar ferramentas <SiteIcon name="external" size={17}/></a></div>
    <div className="mt-5"><a href="https://calendly.com/gregorysanches48/30min" data-zentra-cta="hero-agendar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#bdb3ff] underline-offset-4 hover:underline">Prefere conversar diretamente? Agende uma reunião <SiteIcon name="arrow" size={16}/></a></div>
    <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-[13px] font-semibold text-[#c4cde9]"><span className="flex items-center gap-2"><SiteIcon name="checkcircle" className="text-[#73ddc1]" size={16}/> Projetos sob medida</span><span className="flex items-center gap-2"><SiteIcon name="checkcircle" className="text-[#73ddc1]" size={16}/> Equipe focada em decisões</span><span className="flex items-center gap-2"><SiteIcon name="checkcircle" className="text-[#73ddc1]" size={16}/> Tecnologia para várias áreas</span></div>
   </div>
   <div className="relative z-animate-intro-late min-w-0" aria-label="Simulação de jornada automatizada da Zentra">
    <div aria-hidden className="absolute -inset-10 rounded-[60px] bg-[radial-gradient(ellipse,#745dff35,transparent_70%)] blur-2xl"/>
    <div className="z-console relative overflow-hidden rounded-[25px] border border-[#a7a5f944] bg-[#10192e] shadow-[0_32px_100px_#020411b3]">
     <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-[#151f37] px-5 py-4"><div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#fe768d]"/><span className="h-2.5 w-2.5 rounded-full bg-[#ffc873]"/><span className="h-2.5 w-2.5 rounded-full bg-[#5cddba]"/></div><span className="text-[11px] font-bold tracking-[.13em] text-[#c3caff]">ZENTRA / PROCESS LAB</span><span className="inline-flex items-center gap-1 text-[10px] text-[#82e4c8]"><span className="h-1.5 w-1.5 rounded-full bg-current z-pulse"/> ATIVO</span></div>
     <div className="flex gap-2 overflow-x-auto border-b border-white/10 bg-[#111b31] px-4 py-3 sm:px-6" role="tablist" aria-label="Selecionar exemplo de automação">{scenarios.map((t,i)=><button role="tab" aria-selected={i===active} key={t.label} onClick={()=>setActive(i)} className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition ${i===active?"bg-[#7960f3] text-white":"bg-white/5 text-[#b0bddc] hover:bg-white/10"}`}><SiteIcon name={t.icon} size={15}/>{t.label}</button>)}</div>
     <div className="p-4 sm:p-6">
      <div className="flex items-center justify-between gap-3"><div><p className="text-[11px] uppercase tracking-[.14em] text-[#919fc1]">Jornada inteligente</p><h2 className="mt-1 text-xl font-extrabold text-white">Um processo. Tudo conectado.</h2></div><span className="rounded-full border border-[#64dabb45] bg-[#64dabb13] px-2.5 py-1 text-[10px] font-bold text-[#8ce9d0]">SIMULAÇÃO</span></div>
      <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[#a5aeed2a] bg-[#202a45] p-3.5"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#8069f43d] text-[#c0b7ff]"><SiteIcon name="target" size={22}/></span><div className="min-w-0 flex-1"><p className="text-[11px] text-[#aab6d3]">{s.source}</p><p className="truncate text-sm font-bold text-white">{s.client}</p></div><SiteIcon name="arrow" size={18} className="text-[#99a6d1]"/></div>
      <div className="relative ml-5 border-l border-dashed border-[#7867cf80] py-3 pl-7">{s.steps.map((step,i)=><div key={step} className="relative my-2 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#18223a] px-4 py-3"><span className="absolute -left-[40px] grid h-6 w-6 place-items-center rounded-full border border-[#8170d0] bg-[#20274b] text-[10px] font-black text-[#ccbfff]">{i+1}</span><span className="text-[12px] font-semibold text-[#e7eafa] sm:text-[13px]">{step}</span><SiteIcon name="checkcircle" size={16} className="shrink-0 text-[#6fdec0]"/></div>)}</div>
      <div className="flex items-center gap-3 rounded-xl border border-[#66dabe3b] bg-[#32d0b113] p-3.5"><SiteIcon name="checkcircle" className="text-[#7de0c8]" size={21}/><p className="text-[12px] font-bold text-[#ceffef] sm:text-[13px]">{s.outcome}</p></div>
      <p className="mt-4 text-center text-[11px] leading-5 text-[#9ca9c9]">Demonstração conceitual. Não representa dados reais de clientes.</p>
     </div>
    </div>
    <span className="z-orbit-badge pointer-events-none absolute -right-3 -top-5 hidden items-center gap-2 rounded-2xl border border-violet-200/20 bg-[#243052] px-4 py-3 text-xs font-bold text-white shadow-xl sm:flex"><SiteIcon name="sparkles" size={16} className="text-[#bfb3ff]"/> IA + Automação</span>
   </div>
  </div>
 </section>;
}

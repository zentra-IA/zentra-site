"use client";
import Link from "next/link";
import { useState } from "react";
import SiteIcon from "@/components/SiteIcon";

type Msg={role:"user"|"ai";text:string};
export default function AIChat(){
 const [open,setOpen]=useState(false),[message,setMessage]=useState(""),[loading,setLoading]=useState(false);
 const [messages,setMessages]=useState<Msg[]>([{role:"ai",text:"Olá! Sou a assistente da Zentra. Qual processo da sua empresa você gostaria de melhorar?"}]);
 async function send(){const msg=message.trim();if(!msg||loading)return;setMessages(p=>[...p,{role:"user",text:msg}]);setMessage("");setLoading(true);
  try{const res=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:msg,history:messages.slice(-8)})});const data=await res.json();setMessages(p=>[...p,{role:"ai",text:data.reply||"Não consegui responder agora. Use o formulário de diagnóstico para falar com nossa equipe."}]);}
  catch{setMessages(p=>[...p,{role:"ai",text:"Não consegui responder agora. Você pode nos contar seu desafio no formulário da página."}]);}finally{setLoading(false);}
 }
 if(!open)return <button type="button" aria-label="Abrir assistente virtual da Zentra" onClick={()=>setOpen(true)} className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full border border-white/15 bg-[#26214e] px-4 py-3 text-xs font-bold text-white shadow-[0_12px_30px_#060b2a5e] transition hover:bg-[#423481] sm:bottom-6 sm:right-6"><SiteIcon name="bot" size={19}/> <span className="hidden sm:inline">Assistente IA</span></button>;
 return <aside aria-label="Assistente virtual da Zentra" className="fixed bottom-3 right-3 z-40 flex h-[min(610px,calc(100dvh-24px))] w-[min(380px,calc(100vw-24px))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:bottom-5 sm:right-5">
  <div className="flex items-center justify-between bg-[#121629] px-5 py-4 text-white"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-600"><SiteIcon name="bot"/></span><div><h2 className="text-sm font-bold">Assistente Zentra</h2><p className="text-xs text-slate-300">Dúvidas sobre nossos serviços</p></div></div><button type="button" onClick={()=>setOpen(false)} aria-label="Fechar conversa" className="rounded-lg p-2 hover:bg-white/10"><SiteIcon name="close" size={20}/></button></div>
  <div role="log" aria-live="polite" aria-label="Mensagens da conversa" className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4">{messages.map((m,i)=><p key={i} className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-6 ${m.role==="user"?"ml-auto bg-violet-600 text-white":"border border-slate-200 bg-white text-slate-700"}`}>{m.text}</p>)}{loading&&<p className="text-sm text-slate-400">Preparando resposta...</p>}</div>
  <form onSubmit={e=>{e.preventDefault();void send();}} className="flex gap-2 border-t border-slate-200 bg-white p-3"><input aria-label="Sua mensagem" maxLength={500} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Como podemos ajudar?" className="min-w-0 flex-1 rounded-xl border border-slate-200 px-3 py-3 text-sm outline-none focus:border-violet-600"/><button type="submit" disabled={loading||!message.trim()} aria-label="Enviar mensagem" className="grid h-11 w-11 place-items-center rounded-xl bg-violet-700 text-white disabled:opacity-40"><SiteIcon name="arrow" size={20}/></button></form>
  <Link href="/#diagnostico" onClick={()=>setOpen(false)} className="bg-white pb-3 text-center text-xs font-bold text-violet-700 underline underline-offset-4">Solicitar diagnóstico com a Zentra</Link>
 </aside>;
}

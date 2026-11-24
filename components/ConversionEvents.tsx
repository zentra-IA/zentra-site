"use client";
import {useEffect} from "react";

/** Eventos de intenção comercial enviados somente se GA4 estiver ativo após consentimento. */
export default function ConversionEvents(){
 useEffect(()=>{
  const onClick=(event:MouseEvent)=>{
   if(!(event.target instanceof Element))return;
   const link=event.target.closest<HTMLAnchorElement>("a[data-zentra-cta]");
   if(!link)return;
   const gtag=(window as Window & {gtag?:(...args:unknown[])=>void}).gtag;
   gtag?.("event","select_content",{content_type:"zentra_cta",item_id:link.dataset.zentraCta||"cta"});
  };
  document.addEventListener("click",onClick);
  return ()=>document.removeEventListener("click",onClick);
 },[]);
 return null;
}

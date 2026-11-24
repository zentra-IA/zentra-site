"use client";
import {useSyncExternalStore} from "react";
import Script from "next/script";
const gaId=process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const subscribe=(cb:()=>void)=>{window.addEventListener("storage",cb);window.addEventListener("zentra-consent-changed",cb);return ()=>{window.removeEventListener("storage",cb);window.removeEventListener("zentra-consent-changed",cb);};};
const getSnapshot=()=>{try{const v=localStorage.getItem("zentra_analytics_consent");return v==="accepted"||v==="declined"?v:null;}catch{return null;}};
const getServerSnapshot=()=>null;
const subscribeClient=()=>()=>{};
export default function AnalyticsConsent(){
 const choice=useSyncExternalStore(subscribe,getSnapshot,getServerSnapshot);
 const clientLoaded=useSyncExternalStore(subscribeClient,()=>true,()=>false);
 if(!gaId||!/^G-[A-Z0-9]+$/.test(gaId))return null;
 function save(v:"accepted"|"declined"){try{localStorage.setItem("zentra_analytics_consent",v);}catch{}window.dispatchEvent(new Event("zentra-consent-changed"));}
 return <>{choice==="accepted"&&<><Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive"/><Script id="zentra-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} window.gtag = gtag; gtag('js', new Date()); gtag('config', '${gaId}', {anonymize_ip:true});`}</Script></>}
 {clientLoaded&&choice===null&&<aside className="fixed bottom-4 left-4 right-4 z-[70] mx-auto max-w-[600px] rounded-2xl border border-[#cbd3ec] bg-white p-5 text-[#17233e] shadow-[0_24px_80px_#080e2960]" aria-label="Preferências de cookies"><p className="text-sm font-bold">Podemos medir o desempenho do site?</p><p className="mt-2 text-xs leading-6 text-[#61708b]">Usamos análises opcionais para entender visitas e melhorar o site. Você pode recusar sem afetar o atendimento. <a href="/privacidade" className="font-semibold text-violet-700 underline">Saiba mais</a>.</p><div className="mt-4 flex flex-wrap gap-2"><button onClick={()=>save("declined")} className="rounded-xl border border-[#d7ddec] px-4 py-2.5 text-xs font-bold text-[#3d4c67]">Recusar análises</button><button onClick={()=>save("accepted")} className="rounded-xl bg-[#7257db] px-4 py-2.5 text-xs font-bold text-white">Permitir análises</button></div></aside>}</>;
}

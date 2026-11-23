import { NextResponse } from "next/server";
export const runtime="nodejs";

const SYSTEM=`Você é a assistente virtual de pré-atendimento da Zentra, empresa brasileira de tecnologia.
A Zentra entende processos e desenvolve sistemas personalizados, automações e soluções com inteligência artificial para empresas de qualquer segmento: área comercial, RH, administrativo, financeiro, operações, atendimento e outros setores.
A Zentra tem experiências em CRM imobiliário, clínica de estética, recrutamento, atacadista de alimentos e sistemas para restaurantes e pizzarias.
Soluções possíveis: CRM, integrações, portais, notificações push autorizadas, agentes de IA, gestão de processos, captação e marketing integrado. A solução específica depende de diagnóstico, viabilidade e proposta.
Seja consultiva e objetiva. Pergunte o setor e a principal dificuldade. Explique que a equipe pode estudar o processo e sugerir um caminho personalizado.
Nunca invente preços, prazos, resultados ou funcionalidades que não estejam confirmadas. Não prometa garantia de vendas, eliminação de bloqueios de terceiros ou disparos indiscriminados. Para enviar uma solicitação, peça ao cliente que acesse a seção "Solicitar diagnóstico" do site. Também é possível agendar reunião na página.
Responda em português do Brasil, de forma clara, profissional, curta e cordial.`;

export async function POST(req:Request){
 try {
  const body=await req.json(); const message=typeof body?.message==="string"?body.message.trim():"";
  if(!message||message.length>500)return NextResponse.json({reply:"Escreva uma pergunta de até 500 caracteres."},{status:400});
  if(!process.env.OPENAI_API_KEY)return NextResponse.json({reply:"No momento o assistente está indisponível. Use o formulário de diagnóstico para entrar em contato."},{status:503});
  const response=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${process.env.OPENAI_API_KEY}`},body:JSON.stringify({model:"gpt-4o-mini",messages:[{role:"system",content:SYSTEM},{role:"user",content:message}],temperature:0.4,max_tokens:280})});
  if(!response.ok){console.error("Assistente de IA indisponível",response.status);return NextResponse.json({reply:"Não consegui responder agora. Envie sua solicitação pelo formulário de diagnóstico."},{status:503});}
  const data=await response.json();return NextResponse.json({reply:data?.choices?.[0]?.message?.content||"Envie sua solicitação pelo formulário de diagnóstico."});
 }catch(e){console.error("Erro no chat:",e);return NextResponse.json({reply:"O assistente está temporariamente indisponível. Use o formulário de diagnóstico."},{status:500});}
}

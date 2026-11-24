# Zentra V8 — roteiro de teste antes de publicar

- [ ] A build final termina sem erros em Windows: `npm run build`
- [ ] Página inicial: topo, abas, WePush em destaque, ferramentas e simuladores legíveis
- [ ] Menu desktop e móvel levam às âncoras e páginas corretas
- [ ] `/tecnologias`: as oito ferramentas alternam exemplos; botões funcionam
- [ ] `/tecnologias/wepush`: celular ilustrativo, calculadora, avisos técnicos, CTA para formulário
- [ ] `/tecnologias/voice-ia`: relatório ilustrativo, calculadora, avisos técnicos, CTA para formulário
- [ ] Simulador Push: mudar volume, dias e mensalidade atualiza o valor corretamente
- [ ] Simulador Voice: mudar conversas, preço, fixo e salário atualiza sem considerar leads como vendas
- [ ] Simulador RH: horas e valor do tempo são calculados corretamente
- [ ] Formulário: três etapas, status de erro e confirmação; recebe `interesse=wepush` e `interesse=voice-ia`
- [ ] CRM: lead entra e acesso `/leads` exige autenticação administrativa
- [ ] Chatbot: envio funciona, consumo/limite de API e restrições foram revisados
- [ ] Ajustar configurações da Vercel antes de publicar, principalmente segredos
- [ ] Política de privacidade revisada com identificação correta do controlador dos dados
- [ ] Verificado em 1440px, 1280px, 768px e 390px (zoom 100% e 125%)
- [ ] Links de calendários, WhatsApp, Google/Meta e analytics verificados
- [ ] Remover simulações ou rotular claramente antes de publicar depoimentos e dados reais

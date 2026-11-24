# Zentra Premium V8 — Portfólio comercial inteligente

Atualização sobre o código da V7. Mantém os componentes de CRM, chatbot, histórico e formulário de leads.

## O que esta versão entrega

- Hero com linguagem comercial concreta: IA para ligar, atender, notificar e organizar tarefas.
- Vitrine interativa com 8 capacidades (WePush, Voice IA, chatbot, CRM, discador, entrevistas IA, documentos e portais).
- 3 simuladores editáveis: mensagens promocionais WhatsApp API x Push; voz IA x referência operacional CLT; tempo de triagem no RH.
- 5 exemplos interativos de processos (vendas, atendimento, RH, administrativo, comunicação).
- Landing pages específicas para anúncios: `/tecnologias/wepush` e `/tecnologias/voice-ia`.
- Catálogo geral `/tecnologias`.
- Portfólio V7, CRM, chat e captura de leads preservados.
- SEO e sitemap atualizados.
- Ajuste no formulário da V7 que causava um erro de TypeScript ao compilar.
- `GUIA_MARCA_CAMPANHAS_V8.md` para padronizar site, Instagram, Facebook e vídeos.

## Atenção aos simuladores

- **WhatsApp API**: referência de lista de R$ 0,3217 por mensagem promocional entregue a destinatários brasileiros (out/2026), sujeita às regras e tarifário atualizados da Meta, descontos e custos do provedor. Não é tarifa de qualquer conversa ou mensagem WhatsApp.
- **WePush**: FCM tem taxa de entrega R$ 0; portal, hospedagem, manutenção, banco, chat e outros recursos têm custo. Mensalidade na calculadora é hipótese ajustável e não é oferta oficial. Necessita assinatura/consentimento de notificações, compatibilidade do dispositivo, e a entrega não é garantida.
- **Voice IA**: R$ 0,60–0,70 para conversas completas de 2 minutos é uma referência relatada pelo responsável pela Zentra, **não auditada**. Tentativas, telefonia, consumo de APIs e custo fixo precisam ser apurados. O simulador não garante leads qualificados ou economia líquida.
- **RH**: horas liberadas não são automaticamente economia em folha. A análise e decisão devem ser humanas, com privacidade.
- Evite qualquer afirmação comercial de “95% de economia”, “push ilimitado” ou “nunca mais será banido”.

## Pastas e rotas

- Página inicial: `app/page.tsx` + `components/TechnologyShowcase.tsx`, `CostStudio.tsx`, `BusinessJourneys.tsx`, `ProofAndCTA.tsx`
- Tecnologias: `app/tecnologias/page.tsx`
- WePush: `app/tecnologias/wepush/page.tsx`
- Voz IA: `app/tecnologias/voice-ia/page.tsx`
- Lead form: `components/LeadForm.tsx` (continua em `/api/lead`)

## Verificação antes de publicar

1. Confirme `CRM_ADMIN_PASSWORD`, `CRM_SESSION_SECRET`, `DATABASE_URL` e demais secrets no ambiente da Vercel, sem enviar credenciais ao Git.
2. Execute `npm run build` no Windows. A versão V8 foi verificada com TypeScript e ESLint, mas não foi possível compilar o Next.js em Linux por indisponibilidade de download de engine Prisma desse sistema.
3. Abra `http://localhost:3100` após o instalador; teste no computador e no celular.
4. Teste navegação `/`, `/tecnologias`, `/tecnologias/wepush` e `/tecnologias/voice-ia`.
5. Ajuste os simuladores e confira cálculos; confira termos e o preço atualizado da Meta antes de anúncios.
6. Use um lead de teste com consentimento para verificar salvamento em `/leads` e fluxo de resposta; não publique números ou nomes fictícios como prova real.
7. Confirme se os links de WhatsApp e calendário estão corretos, e revise política de privacidade e cookies.
8. Somente depois faça commit/push (o instalador local não publica).

## Fontes de referência

- Meta: https://developers.facebook.com/docs/whatsapp/pricing/
- Firebase Cloud Messaging: https://firebase.google.com/products/cloud-messaging
- Limites FCM: https://firebase.google.com/docs/cloud-messaging/throttling-and-quotas
- Apple (Web Push): https://developer.apple.com/documentation/usernotifications/sending-web-push-notifications-in-web-apps-and-browsers

## Observação de propriedade intelectual

Os painéis e relatórios ilustrados não são capturas de clientes. Cada implantação deve ser contratada e configurada de acordo com as regras de dados, telefonia e acessos aplicáveis.

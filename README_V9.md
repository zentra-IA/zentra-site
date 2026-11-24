# Zentra Premium V9 · refinamento comercial

## Atualizado sobre a V8
- Página inicial ganhou uma demonstração interativa exclusiva do WePush, antes das ferramentas.
- Página WePush reutiliza a demonstração navegável: notificação ilustrativa → portal → chat.
- Página Voice IA tem passo a passo interativo de ligação → qualificação → relatório.
- Simulador Push: tarifa editável da Meta; volume/dias, taxa de mensagens WhatsApp efetivamente entregues, mensalidade e implantação hipotéticas do portal (amortizada em 12 meses). **Nunca exibir R$ 0 como custo total do WePush.**
- Simulador Voice IA: total de tentativas, taxa de conversas concluídas, taxa de qualificação, custos de tentativas não concluídas, custo total, custo por lead qualificado. CLT exibido apenas como referência, não como economia garantida.
- Simulador de RH preservado com alerta claro sobre horas e não economia de folha.
- CTA do diagnóstico vincula interesse pelo parâmetro `interesse` no formulário já existente.
- Mantido: CRM, APIs de lead, chatbot, autenticação administrativa, portfólio e suas páginas.

## Instalação
1. Extraia `zentra-atualizador-premium-v9.zip` por completo.
2. Abra a pasta `zentra-instalador` e execute `INSTALAR-ZENTRA.cmd`.
3. Confirme com `S`. O instalador cria backup de `C:\zentra-app`, copia código, preserva `.env*` e Git, gera Prisma e executa build.
4. Se compilar, abre a versão de produção local em `localhost:3100` (ou outra porta livre).
5. Teste abas, simuladores, formulários, chatbot e celular antes de fazer push.

## Não incluir no Git
`.env`, `.env.local`, backups, segredos, banco, `.next`, `node_modules`.

## Observações comerciais
- Não foi verificado se a implantação atual WePush usa FCM; a página trata FCM como referência de tarifa de entrega, não confirma integração.
- R$ 0,3217 é tarifa de referência por mensagem de marketing WhatsApp entregue ao Brasil (tabela de outubro/2026), com atualização manual se a Meta mudar.
- R$ 599,00 de portal, R$ 1.200,00 de implantação, R$ 499,00 de voz e taxas de conversão são **exemplos editáveis**, não tabela Zentra.
- A demonstração da página WePush não envia push real; o relatório da Voice IA é exemplo fictício.
- Sem publicação automática; só autorize Git Push após aprovação.

# Zentra Premium V7 — Checklist de validação

## O que foi alterado
- Mensagem principal mais direta, com CTA de diagnóstico e link de reunião.
- Nova seção “Experiência aplicada” com exemplos concretos dos projetos Imobiliária, RH e Atacado e links para as páginas específicas.
- Seção institucional/comercial reescrita: diagnóstico, escopo, privacidade e implantação, sem alegar estrutura ou resultados não comprovados.
- Perguntas comerciais antes da conversão: escopo, preços, prazos, integrações, suporte e demonstração.
- CTA duplo: formulário ou agendamento no Calendly já utilizado no site.
- Formulário: confirmação após sucesso, botão de agendamento opcional e pré-preenchimento contextual quando o visitante chega de um estudo de caso.
- Eventos básicos de clique em CTAs enviados ao GA4 apenas quando o script de analytics estiver habilitado após consentimento.
- Correção de `"use client"` antes dos imports em Navbar e AIChat.

## Atenção antes de publicar
1. Conferir o layout em desktop e celular, principalmente Hero e FAQ.
2. Enviar um lead de teste com dados de TESTE e verificar o recebimento no CRM; apagar o cadastro de teste depois.
3. Verificar o link do Calendly e as notificações de reunião.
4. Revisar Política de Privacidade, os dados legais da empresa e variáveis da Vercel (`CRM_ADMIN_PASSWORD`, `CRM_SESSION_SECRET`, `DATABASE_URL`, chaves de IA).
5. Adicionar capturas ou vídeos reais dos sistemas, com dados fictícios e autorização para divulgação. Não divulgar métricas sem documentação.
6. Configurar GA4 e tags após aceitar consentimento de analytics; checar conversões em ambiente de teste.
7. Executar `npm run build` no Windows antes de `git push origin main`.
8. Se GitHub/Vercel usar deploy automático em `main`, o push publicará a V7; faça somente depois de aprovar a revisão local.

## Limites de validação
No ambiente de preparação, a instalação de dependências não foi concluída. O código TS/TSX passou em uma análise de sintaxe, mas **a build completa, os testes de navegação e as integrações precisam rodar no Windows**.

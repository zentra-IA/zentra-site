# Zentra Premium V5 - Correção de layout e preview

Esta versão corrige o problema visual observado em 18/11/2026: largura e títulos desalinhados, muito fundo escuro, tipografia sem hierarquia e botão da IA sobreposto ao conteúdo. Mantém a estrutura comercial/portfólio da V4 e as APIs já existentes.

## Mudanças
- Cor e contraste: topo, portfólio e formulário com azul profundo; serviços, comunicação e metodologia em fundos claros.
- Conteúdo limitado a 1160px e centralizado; margens e breakpoints reforçados também com utilitários Tailwind.
- Títulos e parágrafos com tamanhos e contrastes legíveis; cartão da IA menor.
- Removeu dependência de scroll reveal que ocultava conteúdos no momento do carregamento.
- Layout e textos do portfólio permanecem com nomes Zentra Imobiliária, Zentra Estética, Zentra RH, Zentra Atacado de Alimentos e Zentra Food.
- O instalador encerra processos locais do Next.js identificados como sendo desta pasta antes da build e limpa `.next`. Após build, abre `next start` (produção local) em porta 3100+ para evitar disputar o cache do `next dev`.

## Instalação Windows
1. Extrair o ZIP do instalador V5 em qualquer pasta.
2. Executar `INSTALAR-ZENTRA.cmd` dentro de `zentra-instalador`.
3. Digitar S na confirmação. O site do GitHub/Vercel NÃO será alterado.
4. O script cria backup em `%USERPROFILE%\ZENTRA_BACKUPS`, preserva `.env*`, `.git`, `node_modules` e dados em banco externo, realiza `npm install` e `npm run build`.
5. Abre a versão local no navegador, normalmente em `http://localhost:3100`.

**Importante:** não executar `npm run dev` simultaneamente ao `npm run build` no mesmo diretório. Se for trabalhar em modo desenvolvimento após visualizar o preview, feche o terminal `next start` com Ctrl+C antes de rodar `npm run dev`.

O código foi verificado por ESLint; a build completa de produção deve ser executada no Windows, pois o ambiente Linux desta sessão não dispõe do binário SWC do Next.js para Linux nem acesso à internet para baixá-lo.

Ainda faltam capturas reais e validação de funcionalidades/dados dos cases, política de privacidade e configurações seguras do CRM em produção.

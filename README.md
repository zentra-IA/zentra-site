# Zentra Premium V8

**Versão comercial atual: V8.** Veja [`README_V8.md`](README_V8.md), [`QA_V8.md`](QA_V8.md) e [`GUIA_MARCA_CAMPANHAS_V8.md`](GUIA_MARCA_CAMPANHAS_V8.md).

---

# Zentra Premium V7 — Site comercial e portfólio

**Base:** versão V5 do site Zentra (Next.js 16.2.4, React 19, Prisma 5, Tailwind 4, PostgreSQL). Mantém componentes de CRM (`/leads`), APIs, chatbot e formulário integrado ao banco já existente.

## O que mudou

- **Hero premium e legível**, com painel demonstrativo interativo (comercial, administrativo, atendimento). O painel é **simulação ilustrativa**, não tela real de um sistema.
- **Portfólio** com cinco soluções da marca Zentra e páginas de estudo de aplicação em `/projetos/imobiliaria`, `/projetos/estetica`, `/projetos/rh`, `/projetos/atacado`, `/projetos/food`. Não expõe nomes de clientes.
- **Demonstração de fluxos** interativa em cada case; ainda não são vídeos reais. Para publicar capturas/vídeos de sistemas verdadeiros, coletar materiais e autorização quando necessário.
- **Diagnóstico em três etapas** (segmento → problema → contato), salvando **na mesma API `/api/lead` e banco Prisma**. Armazena parâmetros de campanha em `notes`.
- **Landing pages** para campanhas: `/solucoes/automacao-empresarial`, `/solucoes/sistemas-personalizados` e `/solucoes/atendimento-inteligente`.
- **Sobre a Zentra** com apresentação consultiva e transparência sobre escopo e entregas, sem prometer resultados inexistentes.
- **Privacidade** (`/privacidade`) com texto inicial a ser revisado/complementado com dados legais da empresa e infraestrutura real antes de anunciar.
- **Compartilhamento e SEO**: `og-zentra.png`, Open Graph, metadata e sitemap para páginas novas.
- **Google Analytics 4 opcional**, com banner de opt-in antes de carregar o script. Basta configurar `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...`. Sem variável, não carrega nem mostra banner. Meta Pixel, CAPI e Google Ads precisam de implementação/configuração adicional conforme o plano de mídia.
- **API de chat e login** com limite básico de requisições **por instância** (não é uma proteção distribuída). Histórico resumido da conversa na IA para respostas coerentes. Para campanhas com tráfego, adotar rate limit distribuído e WAF na Vercel.

## Instalar no Windows (sem mudar a Vercel)

1. Faça download e extraia o pacote `zentra-atualizador-premium-v6.zip`.
2. Dentro de `zentra-instalador`, execute `INSTALAR-ZENTRA.cmd`.
3. Confirme a pasta `C:\zentra-app` e digite **S**.
4. O script cria backup em `%USERPROFILE%\ZENTRA_BACKUPS`, preserva arquivos `.env*`, `.git`, `node_modules` e banco externo, atualiza código, executa `npm install` e `npm run build`.
5. Abre `next start` em porta livre entre **3100 e 3110**. Não execute `next dev` simultaneamente na mesma pasta.
6. Teste homepage, os cinco cases, três landing pages, chatbot e **faça um envio real controlado** do diagnóstico. Confira o lead no CRM `/leads` (credenciais locais do ambiente).

O instalador **não** executa `git push` e **não** altera a Vercel. Para publicar, primeiro valide o resultado e depois faça commit/push manualmente (ver abaixo).

## Configuração

- `DATABASE_URL`: existente, não alterar.
- `OPENAI_API_KEY`: existente, não publicar.
- `CRM_ADMIN_PASSWORD`: senha longa (mínimo 16 caracteres), configurar na Vercel.
- `CRM_SESSION_SECRET`: segredo aleatório de 32+ caracteres, configurar na Vercel.
- `NEXT_PUBLIC_SITE_URL`: URL final com HTTPS (enquanto não houver domínio, usar a URL Vercel).
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: **opcional**, Google Analytics 4. Nenhum dado de anúncios é enviado sem configurar. A configuração de eventos publicitários, Google Ads, Meta Pixel/CAPI e controle de consentimento por finalidade deve ser revisada antes das campanhas.

### Proteção e limites

O limite de requisições do chat e login é somente uma **primeira camada em memória por instância**; não protege contra ataques distribuídos nem é compartilhado por todas as funções serverless. Antes de investir em anúncios, configurar rate limit com armazenamento compartilhado e regras WAF; revisar logs, políticas de retenção e acesso a dados pessoais. Não enviar dados de clientes reais para demos públicas.

### Sobre os cases

Os textos descrevem escopos e tecnologias trabalhados. Não são métricas de resultado ou garantia de funcionalidades idênticas para todos os contratos. Confirme a situação de produção de cada módulo antes de anunciá-lo como entregue. Vídeos/capturas reais e depoimentos ainda **não foram incluídos**, pois dependem de arquivos e permissões específicos.

## Publicação posterior (somente após revisão)

```cmd
cd /d C:\zentra-app
npm run build
git status
git diff --check
git add -A
git diff --cached --name-only
git diff --cached --check
git commit -m "feat: experiencia comercial Zentra Premium V7"
git push origin main
```

**Antes do commit:** retire arquivos de backup `.bak`, `.env`, logs, `.next`, `node_modules`, caches e quaisquer credenciais acidentalmente adicionados ao stage. Se `main` estiver conectado ao deploy de produção da Vercel, o push pode publicar automaticamente.


## Atualização V7 — Credibilidade e conversão

Consulte `QA_V7.md` para as alterações implementadas, validações e pontos pendentes antes da publicação.

- Evidências concretas da arquitetura das soluções e perguntas comerciais frequentes.
- CTAs de formulário e reunião, com rastreamento opt-in do GA4 quando configurado.
- Confirmação de recebimento do formulário e interesse contextual vindo das páginas do portfólio.
- Integrações existentes de API/CRM preservadas.

**Importante:** sem imagens de sistemas reais autorizadas nem métricas auditadas, o site usa exemplos descritivos e painéis ilustrativos. Eles não devem ser apresentados como resultados comprovados.

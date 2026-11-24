/**
 * Apresentações comerciais dos projetos Zentra.
 * Usar nomes das soluções, não marcas de clientes. 
 * As etapas representam escopo e fluxos desenvolvidos/planejados, não resultados verificados.
 */
export type ProjectCase = {
  slug: string;
  name: string;
  sector: string;
  category: string;
  number: string;
  tagline: string;
  short: string;
  challenge: string;
  response: string;
  goal: string;
  modules: {name:string;description:string}[];
  steps: {title:string;description:string}[];
  accent: string;
  icon: "building"|"heart"|"users"|"package"|"utensils";
  focus: string[];
};
export const projectCases: ProjectCase[] = [
  {
    slug:"imobiliaria",name:"Zentra Imobiliária",sector:"Mercado imobiliário",category:"CRM • DOCUMENTOS • AUTOMAÇÃO",number:"01",icon:"building",accent:"#a68afe",
    tagline:"Da prospecção ao pós-venda. Uma operação conectada.",
    short:"CRM e fluxos de trabalho desenhados para integrar captação, corretores, documentação, análise e formalização.",
    challenge:"Uma venda imobiliária envolve várias equipes, etapas e documentos. Quando informações ficam espalhadas em conversas e planilhas, a continuidade do atendimento se torna difícil.",
    response:"Estruturamos a arquitetura de atendimento e gestão do cliente em funis separados, com transferência entre prospecção e CRM, coleta documental, leitura OCR e fluxo administrativo com devolutivas ao corretor.",
    goal:"Organizar o acompanhamento do cliente ao longo da jornada e permitir que cada área trabalhe sobre a mesma base de informações.",
    modules:[
      {name:"Prospecção e qualificação",description:"Entrada de contatos, organização do interesse e encaminhamento do lead ao corretor atendente."},
      {name:"CRM dos corretores",description:"Acompanhamento de clientes, etapas comerciais, histórico e responsabilidades."},
      {name:"Documentos e OCR",description:"Portal de envio de arquivos e leitura assistida para organizar a análise documental."},
      {name:"Administrativo",description:"Fluxos específicos de análise, pendências, aprovação e retorno ao atendimento."},
      {name:"Pós-venda e financeiro",description:"Acompanhamento das etapas posteriores à aprovação e rotinas de repasse e comissões."},
      {name:"Portal e notificações",description:"Alternativas de contato e atualizações vinculadas ao cadastro do cliente."}
    ],
    steps:[
      {title:"Prospecção",description:"O interesse chega e é qualificado antes de entrar no atendimento comercial."},
      {title:"Atendimento",description:"O corretor acompanha a necessidade, visitas e documentos do cliente."},
      {title:"Análise",description:"A equipe administrativa avalia e registra pendências ou resultados."},
      {title:"Formalização",description:"O processo retorna ao comercial para negociação e próximos passos."},
      {title:"Pós-venda",description:"Documentos adicionais e etapas financeiras seguem acompanhadas."}
    ],
    focus:["CRM", "OCR", "Fluxos por equipe", "Portal do cliente"]
  },
  {
    slug:"estetica",name:"Zentra Estética",sector:"Clínicas e estética",category:"ATENDIMENTO • TRIAGEM • CAPTAÇÃO",number:"02",icon:"heart",accent:"#5be2c7",
    tagline:"Uma jornada de atendimento simples desde o primeiro contato.",
    short:"Atendimento guiado para receber interessados, entender o procedimento desejado e organizar solicitações de avaliação.",
    challenge:"Pessoas interessadas em procedimentos diferentes chegam com dúvidas distintas. A clínica precisa acolher o contato e orientar o próximo passo sem criar barreiras.",
    response:"Desenhamos um chatbot com menu objetivo por serviço, perguntas essenciais e direcionamento para solicitação de avaliação, respeitando a linguagem da clínica.",
    goal:"Dar clareza à entrada dos contatos e facilitar a organização das solicitações de atendimento.",
    modules:[
      {name:"Menu inteligente",description:"Opções claras por tipo de serviço, sem roteiros longos e confusos."},
      {name:"Triagem por interesse",description:"Identificação do procedimento ou área de atendimento escolhida."},
      {name:"Solicitação de avaliação",description:"Coleta de nome, dia e horário de preferência para encaminhamento."},
      {name:"Mensagens de atendimento",description:"Comunicação padronizada, objetiva e alinhada ao público."}
    ],
    steps:[
      {title:"Novo contato",description:"O interessado inicia o atendimento no canal disponível."},
      {title:"Escolha do serviço",description:"O menu orienta entre as linhas de atendimento da clínica."},
      {title:"Triagem",description:"São coletadas informações essenciais, sem perguntas desnecessárias."},
      {title:"Solicitação",description:"O interessado informa preferência de dia e horário."},
      {title:"Equipe",description:"A clínica dá continuidade ao agendamento e atendimento."}
    ],
    focus:["Chatbot", "Atendimento guiado", "Avaliação", "Organização"]
  },
  {
    slug:"rh",name:"Zentra RH",sector:"Recursos humanos",category:"ENTREVISTAS • CANDIDATOS • IA",number:"03",icon:"users",accent:"#a8b6ff",
    tagline:"Do convite à avaliação: seleção em uma única plataforma.",
    short:"Plataforma para centralizar candidatos, currículos e entrevistas online com registros em áudio, vídeo e texto.",
    challenge:"Documentos, respostas, vídeos e anotações distribuídos tornam a triagem de candidatos trabalhosa e dificultam a comparação dos perfis.",
    response:"Desenvolvemos fluxos de entrevistas online com links de participação, envio de currículos PDF/Word, gravações feitas na própria plataforma e recursos de avaliação apoiados por IA.",
    goal:"Reunir os registros da seleção em um só lugar e apoiar a análise dos candidatos com mais organização.",
    modules:[
      {name:"Entrevistas online",description:"Participação por link, com perguntas estruturadas."},
      {name:"Currículos",description:"Recebimento de arquivos PDF e Word associados ao candidato."},
      {name:"Áudio e vídeo",description:"Gravação e consulta de respostas realizadas no próprio sistema."},
      {name:"Avaliação por IA",description:"Apoio à leitura e organização das respostas, com revisão humana."},
      {name:"Painel de candidatos",description:"Acompanhamento, histórico, observações e comparação de informações."}
    ],
    steps:[
      {title:"Convite",description:"O candidato recebe o link de entrevista."},
      {title:"Currículo",description:"Dados e documentos são anexados ao processo."},
      {title:"Entrevista",description:"O candidato registra respostas conforme o formato solicitado."},
      {title:"Avaliação",description:"O recrutador consulta respostas e apoio da IA."},
      {title:"Decisão",description:"A equipe registra próximos passos e conclusão."}
    ],
    focus:["Vídeo e áudio", "Documentos", "IA aplicada", "Gestão de candidatos"]
  },
  {
    slug:"atacado",name:"Zentra Atacado de Alimentos",sector:"Distribuição de alimentos",category:"PROSPECÇÃO • COTAÇÕES • CRM",number:"04",icon:"package",accent:"#ffb978",
    tagline:"Mais controle para quem prospecta, negocia e vende.",
    short:"Ferramentas comerciais para organizar contatos, acompanhar oportunidades e agilizar cotações e pedidos.",
    challenge:"Uma operação atacadista convive com grandes bases de clientes, muitos produtos, preços dinâmicos e negociações que exigem rapidez.",
    response:"Estruturamos ferramentas de CRM, prospecção e acompanhamento comercial com recursos de cotação assistida por IA, organização de contatos e apoio aos processos de atendimento.",
    goal:"Dar continuidade ao trabalho de vendas com informações organizadas e processos comerciais menos manuais.",
    modules:[
      {name:"CRM comercial",description:"Histórico de contatos, oportunidades e evolução das negociações."},
      {name:"Prospecção",description:"Segmentação e organização das bases de clientes para ações comerciais."},
      {name:"Cotador com IA",description:"Apoio à preparação e conferência de listas de produtos e valores."},
      {name:"Portais comerciais",description:"Fluxos para reunir informações e facilitar o relacionamento."},
      {name:"Apoio ao vendedor",description:"Ferramentas para organizar a rotina e acompanhar solicitações."}
    ],
    steps:[
      {title:"Contato",description:"Oportunidades entram na base comercial."},
      {title:"Qualificação",description:"O vendedor entende a necessidade do estabelecimento."},
      {title:"Cotação",description:"Produtos e valores são estruturados em uma proposta."},
      {title:"Negociação",description:"O histórico comercial permanece reunido."},
      {title:"Pedido",description:"A equipe conduz o fechamento e o acompanhamento."}
    ],
    focus:["CRM", "Cotação com IA", "Prospecção", "Rotina comercial"]
  },
  {
    slug:"food",name:"Zentra Food",sector:"Restaurantes e pizzarias",category:"CARDÁPIO • PEDIDOS • PDV",number:"05",icon:"utensils",accent:"#ff879a",
    tagline:"Da escolha no cardápio à organização da operação.",
    short:"Soluções digitais para centralizar cardápio, pedidos e rotinas de atendimento em restaurantes e pizzarias.",
    challenge:"Cardápio desatualizado, pedidos espalhados e fluxos manuais podem prejudicar a experiência do consumidor e o acompanhamento do atendimento.",
    response:"Desenvolvemos recursos de cardápio digital, pedidos, PDV e relacionamento com clientes para concentrar etapas importantes da operação.",
    goal:"Simplificar a experiência de compra e ajudar o estabelecimento a organizar pedidos e informações.",
    modules:[
      {name:"Cardápio digital",description:"Apresentação de produtos, variações e opções de pedido."},
      {name:"Fluxo de pedidos",description:"Organização das solicitações recebidas pelo estabelecimento."},
      {name:"PDV",description:"Recursos operacionais para registrar e acompanhar vendas."},
      {name:"Atendimento",description:"Jornada mais clara para o cliente e a equipe."},
      {name:"Relacionamento",description:"Base para acompanhamento de clientes e comunicação autorizada."}
    ],
    steps:[
      {title:"Cardápio",description:"O cliente conhece os produtos disponíveis."},
      {title:"Escolha",description:"Opções e variações são selecionadas."},
      {title:"Pedido",description:"A solicitação entra no fluxo de atendimento."},
      {title:"Operação",description:"A equipe organiza preparo e andamento."},
      {title:"Gestão",description:"As informações ficam disponíveis para acompanhamento."}
    ],
    focus:["Cardápio", "Pedidos", "PDV", "Atendimento"]
  }
];
export function getCase(slug: string) {return projectCases.find(c=>c.slug===slug);}

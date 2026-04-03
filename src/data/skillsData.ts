export interface Skill {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
  substitui: string;
  custoSubstituto: string;
  githubUrl: string;
  comoInstalar: string;
  comoUsar: string;
  aplicacao: string;
}

export const skills: Skill[] = [
  {
    icon: '📄',
    title: 'PDF',
    desc: 'Cria, lê, edita e preenche PDFs. Gera contratos, invoices e orçamentos profissionais automaticamente.',
    tags: ['Contratos', 'Invoices', 'Orçamentos'],
    substitui: 'Assistente administrativo',
    custoSubstituto: '$2,500/mês',
    githubUrl: 'https://github.com/anthropics/skills/tree/main/skills/pdf',
    comoInstalar: `No Claude Code, digite:

/install-skill https://github.com/anthropics/skills/tree/main/skills/pdf

Ou manualmente:
1. Acesse o link do GitHub
2. Baixe a pasta "pdf"
3. Coloque em ~/.claude/skills/pdf/
4. Reinicie o Claude Code`,
    comoUsar: `Exemplos de comandos depois de instalar:

"Cria um invoice profissional em PDF para meu cliente John Smith, serviço de deep cleaning, valor $350, data de hoje"

"Lê esse PDF do contrato e me diz os pontos principais"

"Preenche esse formulário de business license com os dados da minha empresa"`,
    aplicacao: 'Empresa de limpeza: gera estimates e invoices em PDF pra cada cliente. Empresa de construção: preenche formulários de licença automaticamente. Estética: cria contratos de serviço padronizados.',
  },
  {
    icon: '📊',
    title: 'XLSX — Planilhas Excel',
    desc: 'Cria, lê e edita planilhas Excel. Controle financeiro, agendamento de clientes e relatórios automáticos.',
    tags: ['Finanças', 'Agendamento', 'Relatórios'],
    substitui: 'Contador / Bookkeeper',
    custoSubstituto: '$1,500–3,000/mês',
    githubUrl: 'https://github.com/anthropics/skills/tree/main/skills/xlsx',
    comoInstalar: `No Claude Code, digite:

/install-skill https://github.com/anthropics/skills/tree/main/skills/xlsx

Pré-requisitos: Python com openpyxl e pandas
(o Claude Code instala automaticamente se necessário)`,
    comoUsar: `Exemplos de comandos depois de instalar:

"Cria uma planilha de controle financeiro com receitas e despesas do mês de março"

"Abre essa planilha e me diz quanto gastei com materiais esse mês"

"Cria um relatório financeiro mensal comparando março com fevereiro"`,
    aplicacao: 'Qualquer negócio: controle de receita e despesa mensal. Limpeza: planilha de agendamento de clientes por dia/semana. Estética: controle de inventário de produtos.',
  },
  {
    icon: '📝',
    title: 'DOCX — Documentos Word',
    desc: 'Cria documentos Word profissionais com formatação, tabelas, cabeçalhos e imagens. Propostas, contratos e manuais.',
    tags: ['Propostas', 'Contratos', 'Manuais'],
    substitui: 'Redator / Assistente executivo',
    custoSubstituto: '$2,000–4,000/mês',
    githubUrl: 'https://github.com/anthropics/skills/tree/main/skills/docx',
    comoInstalar: `No Claude Code, digite:

/install-skill https://github.com/anthropics/skills/tree/main/skills/docx

Pré-requisitos: Node.js (pacote docx)
(o Claude Code instala automaticamente se necessário)`,
    comoUsar: `Exemplos de comandos depois de instalar:

"Cria um contrato de serviço de limpeza residencial em Word, profissional, pronto pra assinar"

"Gera uma proposta comercial no Word para limpeza de escritório, valor $2,500/mês, 3x por semana"

"Cria um manual de treinamento pra minha equipe de limpeza com 10 procedimentos padrão"`,
    aplicacao: 'Construção: gera estimates detalhados com tabelas de materiais e mão de obra. Limpeza: contratos de serviço recorrente. Estética: termos de consentimento e fichas de cliente.',
  },
  {
    icon: '📊',
    title: 'PPTX — Apresentações',
    desc: 'Cria apresentações PowerPoint profissionais. Pitch decks, propostas visuais e portfólios de projetos.',
    tags: ['Pitch Deck', 'Propostas', 'Portfolio'],
    substitui: 'Designer de apresentação',
    custoSubstituto: '$500–2,000/projeto',
    githubUrl: 'https://github.com/anthropics/skills/tree/main/skills/pptx',
    comoInstalar: `No Claude Code, digite:

/install-skill https://github.com/anthropics/skills/tree/main/skills/pptx

Pré-requisitos: Node.js com pptxgenjs
(o Claude Code instala automaticamente se necessário)`,
    comoUsar: `Exemplos de comandos depois de instalar:

"Cria uma apresentação de 10 slides sobre minha empresa de construção pra apresentar pra um investidor"

"Gera um portfolio em PowerPoint com os meus últimos 5 projetos de reforma"

"Cria uma proposta visual pra limpeza do condomínio XYZ com fotos e preços"`,
    aplicacao: 'Construção: portfolio de projetos realizados pra mostrar pra clientes novos. Limpeza: proposta visual pra contratos corporativos. Estética: deck de serviços e preços.',
  },
  {
    icon: '🎨',
    title: 'Frontend Design',
    desc: 'Cria sites, landing pages e dashboards profissionais. Design único, sem cara de "feito por IA".',
    tags: ['Landing Page', 'Site', 'Dashboard'],
    substitui: 'Web designer / Agência',
    custoSubstituto: '$3,000–15,000/projeto',
    githubUrl: 'https://github.com/anthropics/skills/tree/main/skills/frontend-design',
    comoInstalar: `No Claude Code, digite:

/install-skill https://github.com/anthropics/skills/tree/main/skills/frontend-design

Não precisa de pré-requisitos especiais.`,
    comoUsar: `Exemplos de comandos depois de instalar:

"Cria uma landing page profissional pra minha empresa de limpeza em Massachusetts com formulário de orçamento"

"Gera um site de uma página pra minha estética com galeria de fotos, preços e agendamento"

"Cria um dashboard pra eu acompanhar minhas vendas e agendamentos da semana"`,
    aplicacao: 'Qualquer negócio: ter um site profissional em horas, não semanas. Sem pagar agência. Design premium que não parece template genérico.',
  },
  {
    icon: '🖼️',
    title: 'Canvas Design',
    desc: 'Cria arte visual original: posters, material de marketing, peças para redes sociais com qualidade profissional.',
    tags: ['Social Media', 'Posters', 'Marketing Visual'],
    substitui: 'Designer gráfico',
    custoSubstituto: '$1,500–3,000/mês',
    githubUrl: 'https://github.com/anthropics/skills/tree/main/skills/canvas-design',
    comoInstalar: `No Claude Code, digite:

/install-skill https://github.com/anthropics/skills/tree/main/skills/canvas-design

Não precisa de pré-requisitos especiais.`,
    comoUsar: `Exemplos de comandos depois de instalar:

"Cria um poster promocional pra minha empresa de limpeza: 20% de desconto no primeiro serviço"

"Gera uma arte pra Instagram anunciando que estamos contratando"

"Cria um flyer profissional pra distribuir no bairro com meus serviços e contato"`,
    aplicacao: 'Limpeza: flyers pra distribuir em condomínios. Construção: posters de "antes e depois". Estética: artes para Instagram e promoções sazonais.',
  },
  {
    icon: '✍️',
    title: 'Doc Coauthoring',
    desc: 'Co-escreve documentos profissionais em 3 etapas: coleta contexto, refina seção por seção, e testa com "leitor novo".',
    tags: ['Propostas', 'SOPs', 'Documentos Complexos'],
    substitui: 'Consultor de negócios',
    custoSubstituto: '$150–300/hora',
    githubUrl: 'https://github.com/anthropics/skills/tree/main/skills/doc-coauthoring',
    comoInstalar: `No Claude Code, digite:

/install-skill https://github.com/anthropics/skills/tree/main/skills/doc-coauthoring

Funciona direto no Claude Code ou Claude Desktop.`,
    comoUsar: `Exemplos de comandos depois de instalar:

"Me ajuda a escrever uma proposta comercial pra limpar o prédio da empresa XYZ — vamos fazer juntos"

"Quero criar um SOP de procedimentos pra minha equipe seguir em cada tipo de limpeza"

"Vamos escrever juntos um manual de onboarding pra novos funcionários"`,
    aplicacao: 'Qualquer negócio: documentos importantes escritos com qualidade de consultor. O Claude te guia passo a passo e depois testa se o documento faz sentido pra quem vai ler.',
  },
  {
    icon: '📢',
    title: 'Internal Comms',
    desc: 'Gera comunicações internas: reports semanais, updates de projeto, newsletters pro time e respostas a perguntas frequentes.',
    tags: ['Comunicação', 'Reports', 'Time'],
    substitui: 'Office manager',
    custoSubstituto: '$2,000–3,500/mês',
    githubUrl: 'https://github.com/anthropics/skills/tree/main/skills/internal-comms',
    comoInstalar: `No Claude Code, digite:

/install-skill https://github.com/anthropics/skills/tree/main/skills/internal-comms

Não precisa de pré-requisitos especiais.`,
    comoUsar: `Exemplos de comandos depois de instalar:

"Cria um report semanal pra eu mandar pro meu time com o que aconteceu essa semana e o plano da próxima"

"Gera um FAQ interno pra meus funcionários sobre os procedimentos da empresa"

"Cria um update de projeto pro meu cliente sobre o andamento da reforma"`,
    aplicacao: 'Empresas com 5+ funcionários: manter comunicação organizada. Limpeza: updates semanais pra equipes de campo. Construção: reports de progresso de obra pro cliente.',
  },
  {
    icon: '🌐',
    title: 'Site Profissional',
    desc: 'Cria um site completo para sua empresa com design moderno, formulário de orçamento e programa de indicação de clientes.',
    tags: ['Site', 'Indicação', 'Orçamento'],
    substitui: 'Agência web / Programador freelancer',
    custoSubstituto: '$800–5,000/projeto',
    githubUrl: 'https://github.com/anthropics/skills/tree/main/skills/frontend-design',
    comoInstalar: `No Claude Code, digite:

/install-skill https://github.com/anthropics/skills/tree/main/skills/frontend-design

Depois, use o prompt abaixo para criar seu site completo.
Este skill usa a mesma base do Frontend Design, mas com instruções específicas para criar sites de negócios locais com programa de indicação.`,
    comoUsar: `Cole este prompt no Claude Code:

"Crie um site profissional completo para minha empresa de [TIPO DO NEGÓCIO].

Nome da empresa: [NOME]
Localização: [CIDADE, ESTADO]
Serviços: [LISTE SEUS SERVIÇOS]
Telefone: [SEU NÚMERO]

O site deve ter:
1. Página inicial profissional com botão de orçamento
2. Seção de serviços com descrição
3. Formulário de contato/orçamento
4. Espaço para depoimentos de clientes
5. Programa de indicação: cada cliente que indicar novos clientes ganha $50 de desconto, com link único por cliente para rastrear quem indicou
6. Design moderno que funciona no celular
7. Otimizado para Google (SEO)"`,
    aplicacao: 'Limpeza: site com booking online e programa de indicação ($50 por indicação). Construção: portfolio de projetos + formulário de estimate. Estética: galeria de trabalhos + agendamento online. Qualquer negócio local: presença profissional na internet em horas, não semanas.',
  },
  {
    icon: '📊',
    title: 'Dashboard de Gestão',
    desc: 'Cria um dashboard completo para gerenciar seu negócio: métricas, calendário, tarefas, tráfego pago e leads. Visual premium de SaaS.',
    tags: ['Dashboard', 'Métricas', 'Gestão'],
    substitui: 'Agência de marketing / Analista de dados',
    custoSubstituto: '$2,000–5,000/mês',
    githubUrl: 'https://github.com/anthropics/skills/tree/main/skills/frontend-design',
    comoInstalar: `No Claude Code, digite:

/install-skill https://github.com/anthropics/skills/tree/main/skills/frontend-design

Depois, use o prompt abaixo para criar seu dashboard completo.
Este skill usa a base do Frontend Design com instruções específicas para criar dashboards de gestão de negócios.`,
    comoUsar: `Cole este prompt no Claude Code:

"Crie um dashboard de gestão completo para minha empresa de [TIPO DO NEGÓCIO].

O dashboard deve ter:
1. Página principal com KPIs (seguidores, posts, engajamento) com sparklines e variação percentual
2. Kanban de tarefas com drag-and-drop (backlog, em produção, review, publicado)
3. Calendário de conteúdo mensal com chips coloridos por plataforma
4. Página de métricas com gráficos de crescimento por rede social
5. Controle de tráfego pago (gasto, vendas, ROAS, CPA)
6. Captura de leads com tabela e exportação CSV
7. Barra de progresso para metas

Use React, Tailwind CSS e shadcn/ui.
Tema escuro premium com cores amber/gold.
Cards com glass-morphism (backdrop-blur).
Gráficos com gradient fill.
Visual de SaaS premium."`,
    aplicacao: 'Qualquer negócio: painel completo pra ver tudo num lugar só. Limpeza: acompanhar agendamentos e reviews. Construção: controlar projetos e orçamentos. Marketing: métricas de todas as redes sociais. Restaurante: pedidos, reservas e avaliações.',
  },
];

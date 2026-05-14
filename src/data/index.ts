// Tipos para o site
export interface MembroDiretoria {
  id: string
  nome: string
  cargo: string
  email?: string
  telefone?: string
  foto?: string
  descricao?: string
  cor?: string
}

export interface LinkUtil {
  id: string
  titulo: string
  url: string
  descricao: string
  icon: string
}

export interface Disciplina {
  id: string
  nome: string
  professor?: string
  periodo: string
  diaHora?: string
  plataforma?: string
}

export interface Aviso {
  id: string
  titulo: string
  descricao: string
  data: string
  prioridade: 'alta' | 'media' | 'baixa'
}

// 🔄 Re-export dos novos módulos
export { eventos, eventosFuturos, eventosPorMes, eventosPorTipo } from './eventos'
export type { Evento, TipoEvento } from './eventos'
export { reclamacoes, reclamacoesAtivas, reclamacoesPorCategoria, estatisticasReclamacoes } from './reclamacoes'
export type { Reclamacao, CategoriaProblema, StatusProblema } from './reclamacoes'
export { aulasFixas, gravacoes } from './aulas'
export type { AulaLink } from './aulas'

// Dados da Diretoria 2026 - Chapa completa (D.A. SI UFRB)
export const diretoria: MembroDiretoria[] = [
  {
    id: '1',
    nome: 'Lucas Machado Lima',
    cargo: 'Presidente',
  },
  {
    id: '2',
    nome: 'Iris Lopes',
    cargo: 'Vice-Presidente',
  },
  {
    id: '3',
    nome: 'André Juarez',
    cargo: 'Secretário-Geral',
  },
  {
    id: '3a',
    nome: 'Iuri (Iury Silva Motta)',
    cargo: '1º Secretário (Feira de Santana)',
  },
  {
    id: '3b',
    nome: 'Cássio (Cássio Figueredo Dourado)',
    cargo: '2º Secretário (Ipirá)',
  },
  {
    id: '3c',
    nome: 'Vileri',
    cargo: '3º Secretário (Santo Amaro)',
  },
  {
    id: '4',
    nome: 'Evelin (Evelin Miranda Damasceno)',
    cargo: 'Tesoureiro',
  },
  {
    id: '5',
    nome: 'Vince (Vincente Sales Silva Peixato)',
    cargo: 'Coordenador de Assuntos Acadêmicos',
  },
  {
    id: '6',
    nome: 'Brunna (Brunna Moura dos Santos)',
    cargo: 'Coordenadora de Divulgação, RP e Imprensa',
  },
  {
    id: '7',
    nome: 'Deivison Santana',
    cargo: 'Coordenador de Tecnologia e Inovação',
  },
  {
    id: '8',
    nome: 'Flávio Augusto (Flávio Augusto Cardoso Alves)',
    cargo: 'Coordenador de Extensão e Projetos',
  },
  {
    id: '9',
    nome: 'Gustavo Bruno (Gustavo Bruno C. C. de Assis)',
    cargo: 'Coordenador de Estágios e Mercado',
  },
  {
    id: '10',
    nome: 'Luiz (Luiz Alberto Silva Santos)',
    cargo: 'Coordenador de Inclusão e Permanência Estudantil',
    descricao: 'Ações de inclusão, acessibilidade, apoio estudantil e permanência no curso.',
    cor: 'bg-emerald-500',
    foto: '/fotos/luiz-alberto.jpg',
  },
]

// Cargos vagos (nenhum atualmente)
export const cargosVagos: string[] = []

// Links úteis - atualizados com todos os links do grupo WhatsApp
export const linksUteis: LinkUtil[] = [
  {
    id: '1',
    titulo: 'AVA (Moodle)',
    url: 'https://ead.ufrb.edu.br',
    descricao: 'Ambiente virtual: trilhas, fóruns, entregas de atividades',
    icon: 'book-open',
  },
  {
    id: '2',
    titulo: 'SIGAA',
    url: 'https://sistemas.ufrb.edu.br/sigaa',
    descricao: 'Matrícula, requerimentos, histórico, aproveitamento',
    icon: 'user',
  },
  {
    id: '3',
    titulo: 'RNP Mconf',
    url: 'https://lti.mconf.rnp.br',
    descricao: 'Videoconferência para aulas síncronas (acessar via AVA)',
    icon: 'video',
  },
  {
    id: '4',
    titulo: 'Site do Calouro',
    url: 'https://ufrb.edu.br/portal/calouro/',
    descricao: 'Informações iniciais, e-mail institucional',
    icon: 'globe',
  },
  {
    id: '5',
    titulo: 'Calendário Acadêmico',
    url: 'https://www.ufrb.edu.br/prograd/calendario-academico',
    descricao: 'Datas importantes, prazos e eventos acadêmicos',
    icon: 'calendar',
  },
  {
    id: '6',
    titulo: 'Estatuto D.A. SI',
    url: 'estatuto-da-si-ufrb.pdf',
    descricao: 'Leia o estatuto oficial do Diretório Acadêmico de Sistemas de Informação em PDF.',
    icon: 'book-open',
  },
  {
    id: '7',
    titulo: 'Intranet UFRB',
    url: 'https://intranet.ufrb.edu.br/',
    descricao: 'Portal institucional de serviços',
    icon: 'globe',
  },
  {
    id: '8',
    titulo: 'YouTube SEAD',
    url: 'https://www.youtube.com/c/SEADUFRB',
    descricao: 'Gravações de minicursos e eventos da SEAD',
    icon: 'play',
  },
  {
    id: '9',
    titulo: 'Helios Voting',
    url: 'https://heliosvoting.org',
    descricao: 'Plataforma de votação para eleições do D.A.',
    icon: 'vote',
  },
  {
    id: '10',
    titulo: 'Biblioteca',
    url: 'https://www.ufrb.edu.br/biblioteca/',
    descricao: 'Acesso ao acervo e serviços bibliotecários',
    icon: 'library',
  },
  {
    id: '11',
    titulo: 'RU Cantinas',
    url: 'https://www.ufrb.edu.br/ru/',
    descricao: 'Restaurantes Universitários e cantinas',
    icon: 'utensils',
  },
  {
    id: '12',
    titulo: 'Beecrowd',
    url: 'https://www.beecrowd.com.br/',
    descricao: 'Plataforma de exercícios de programação',
    icon: 'code',
  },
  {
    id: '13',
    titulo: 'NotebookLM',
    url: 'https://notebooklm.google.com/',
    descricao: 'IA do Google para resumir textos e otimizar estudos (recomendado pela turma)',
    icon: 'book-open',
  },
  {
    id: '14',
    titulo: 'Nube - Vagas de Estágio',
    url: 'https://www.nube.com.br/',
    descricao: 'Plataforma de vagas de estágio em tecnologia (compartilhado no grupo)',
    icon: 'graduation-cap',
  },
  {
    id: '15',
    titulo: 'Site Oficial do Curso',
    url: 'https://www.ufrb.edu.br/cetens/cursos/sistemas-de-informacao-ead',
    descricao: 'Página oficial do Bacharelado em SI - EaD no CETENS/UFRB',
    icon: 'globe',
  },
  {
    id: '16',
    titulo: 'PPC - Projeto Pedagógico',
    url: 'https://ufrb.edu.br/cetens/documentos/category/141-sistemas-de-informacao?download=1472%3Aprojeto-pedagogico-de-curso-bacharelado-em-sistemas-de-informacao',
    descricao: 'Projeto Pedagógico do Curso (Ordem de Serviço CETENS Nº 63/2025)',
    icon: 'book-open',
  },
  {
    id: '17',
    titulo: 'Suporte SIGAA',
    url: 'https://ufrb.edu.br/surrac/suporte-sigaa',
    descricao: 'Suporte técnico para problemas no SIGAA (login, senha, acesso)',
    icon: 'user',
  },
  {
    id: '18',
    titulo: 'Questionário Experiência SI',
    url: 'https://forms.gle/Ud4vVemn6xui4bw5A',
    descricao: 'Formulário para identificação do perfil dos estudantes e melhorias no curso',
    icon: 'graduation-cap',
  },
  {
    id: '19',
    titulo: 'PED - Educação Digital',
    url: 'https://cursoslivres.ufrb.edu.br/',
    descricao: 'Programa de Educação Digital em Rede (inscrições até 17/05/2026) - Capacitação em competências pedagógico-digitais para servidores UFRB/UFBA',
    icon: 'book-open',
  },
  {
    id: '20',
    titulo: 'UPT - Universidade Para Todos',
    url: 'https://ufrb.edu.br/upt/',
    descricao: 'Programa de preparação para o ENEM e processos seletivos (vagas gratuitas para estudantes de escola pública)',
    icon: 'graduation-cap',
  },
]

// Grupos WhatsApp por polo
export const gruposPolo = [
  {
    polo: 'Feira de Santana',
    link: 'https://chat.whatsapp.com/E5c1zXeR1hw0P89SAn4x2y',
    secretario: 'Iuri (Iury Silva Motta)',
  },
  {
    polo: 'Santo Amaro',
    link: 'https://chat.whatsapp.com/KfAG7y0SSqqF6EbQpdSvI4',
    secretario: 'Vileri',
  },
  {
    polo: 'Ipirá',
    link: 'https://chat.whatsapp.com/Exct00Yj6tcEYoWa2lVkWu',
    secretario: 'Cássio (Cássio Figueredo Dourado)',
  },
]

// Disciplinas do semestre atualizadas com horários e plataformas
export const disciplinas: Disciplina[] = [
  {
    id: '1',
    nome: 'Algoritmos e Programação I',
    professor: 'Alex Ferreira',
    periodo: '2026.1',
    diaHora: 'Segunda-feira, 20h',
    plataforma: 'RNP Mconf (via AVA)',
  },
  {
    id: '2',
    nome: 'Fundamentos de Sistemas de Informação',
    professor: 'Leandro Brito',
    periodo: '2026.1',
    diaHora: 'Terça-feira, 20h',
    plataforma: 'RNP Mconf (via AVA)',
  },
  {
    id: '3',
    nome: 'Lógica Matemática / Matemática Discreta',
    professor: 'Prof. Anderon',
    periodo: '2026.1',
    diaHora: 'Quinzenal, Quarta, 19h-20h',
    plataforma: 'Google Meet',
  },
  {
    id: '4',
    nome: 'Acompanhamento FSI (Tutoria)',
    professor: 'Lorena Santana (Tutora)',
    periodo: '2026.1',
    diaHora: 'Sexta, 19h-20h (sob demanda)',
    plataforma: 'Google Meet',
  },
]

// Avisos inteligentes para EAD - atualizados com contexto real
export const avisos: Aviso[] = [
  {
    id: '1',
    titulo: '🎯 Prazo de Atividades Prorrogado para 16/05',
    descricao: 'Após os problemas no AVA, os professores prorrogaram as entregas. Data final: 16/05 (algumas atividades podem ir até 31/05). Dia 18/05 começam as disciplinas restantes do semestre (mais 4 matérias!). Organizem-se para não acumular.',
    data: '2026-05-14',
    prioridade: 'alta',
  },
  {
    id: '2',
    titulo: '🔧 DevOps Days - Esquenta HOJE (15/05)',
    descricao: 'Esquenta do DevOps Days no CETENS hoje! Evento principal em 06/06 no Centro de Convenções. Inscrição via SIGAA. Não perca!',
    data: '2026-05-14',
    prioridade: 'media',
  },
  {
    id: '3',
    titulo: '📘 PED - Educação Digital (INSCRIÇÕES ATÉ 17/05)',
    descricao: 'Programa de Educação Digital em Rede - Capacitação em competências pedagógico-digitais para servidores UFRB/UFBA. Trilhas: IA na Educação, Educação Online, Educação Aberta. Carga: 360h. Início: 08/06/2026. Vagas gratuitas para servidores da UFRB.',
    data: '2026-05-01',
    prioridade: 'alta',
  },
  {
    id: '4',
    titulo: '📢 Aulas Presenciais - Datas Atualizadas',
    descricao: 'Lógica Matemática presencial: já ocorreu em 06/05. FSI presencial: 14/05 às 19h no Polo UAB Feira (Av. Pres. Dutra, 1000). Acompanhamento FSI com tutora Lorena: 15/05 às 19h via Google Meet. Novos encontros sendo organizados pela coordenação.',
    data: '2026-05-14',
    prioridade: 'alta',
  },
  {
    id: '5',
    titulo: '📋 Aulas Síncronas com Links Diretos',
    descricao: 'Algoritmos (segunda 20h): RNP Mconf via AVA. FSI (terça 20h): RNP Mconf via AVA. Lógica (quinzenal quarta 19h): Google Meet. Aulas extras/alternativas: Meet. Acesse a aba Atividades para ver todos os links e gravações.',
    data: '2026-05-14',
    prioridade: 'media',
  },
  {
    id: '6',
    titulo: '📊 Questionário sobre Experiência no Curso',
    descricao: 'Ajude-nos a melhorar! Preencha o questionário de experiência sobre o curso SI UFRB. Suas respostas são anônimas e nos ajudarão a identificar pontos fortes e oportunidades de melhoria.',
    data: '2026-05-15',
    prioridade: 'media',
  },
]

// Infos do curso
export const infoCurso = {
  nome: 'Bacharelado em Sistemas de Informação',
  sigla: 'BSI',
  university: 'Universidade Federal do Recôncavo da Bahia',
  campus: 'CETENS - Cruz das Almas',
  endereco: 'Rua Rui Barbosa, 710 - Centro, Cruz das Almas - BA',
  telefone: '(75) 3621-1000',
  email: 'si@cursos.ufrb.edu.br',
  website: 'https://www.ufrb.edu.br/sistemasdeinformacao/',
  turnos: ['EAD - Remoto'],
  grado: 'Bacharelado',
  duracao: '4 anos (8 semestres)',
  periodo: '2026.1',
  polos: ['Feira de Santana', 'Santo Amaro', 'Ipirá'],
  enderecoPolo: 'Av. Pres. Dutra, 1000 - Centro, Feira de Santana - BA, 44001-432',
  poloLink: 'https://maps.app.goo.gl/d5vCEY14Dmr7x3Y27?g_st=iw',
}

// Infos do D.A
export const infoDA = {
  nome: 'D.A. SI UFRB',
  sigla: 'D.A.',
  nomeCompleto: 'D.A. SI UFRB - Bacharelado em Sistemas de Informação',
  email: 'contato@si-ufrb.com',
  instagram: 'https://instagram.com/siufrb',
  facebook: 'https://facebook.com/siufrb',
  whatsapp: 'https://wa.me/5575981231019',
}

// Contatos da coordenação e suporte
export const coordenacao = {
  coordenador: {
    nome: 'Prof. Iuri Santos Souza',
    email: 'iuri.souza@ufrb.edu.br',
    atendimento: 'Segunda e Quarta, 08h-10h',
  },
  viceCoordenador: {
    nome: 'Prof. Alex Ferreira dos Santos',
    email: 'alex.ferreira@ufrb.edu.br',
    descricao: 'Vice-coordenador do curso e professor de Algoritmos e Programação I.',
  },
  colegiado: 'colegiado.bsi.ead@cetens.ufrb.edu.br',
  sapsi: 'sapsi@cetens.ufrb.edu.br',
  academico: 'academico@cetens.ufrb.edu.br',
}

// Links oficiais do curso (descobertos via web)
export const linksOficiais = {
  siteCurso: 'https://www.ufrb.edu.br/cetens/cursos/sistemas-de-informacao-ead',
  ppc: 'https://ufrb.edu.br/cetens/documentos/category/141-sistemas-de-informacao?download=1472%3Aprojeto-pedagogico-de-curso-bacharelado-em-sistemas-de-informacao',
  editalVagas: 'https://ufrb.edu.br/cetens/noticias/1175-ufrb-abre-inscricoes-para-o-curso-de-sistema-de-informacao-na-modalidade-ead-ingresso-2026-1',
  suporteSigaa: 'https://ufrb.edu.br/surrac/suporte-sigaa',
  devopsDays: 'https://devopsdays.org/events/2026-feira-de-santana/welcome/',
}

// Redes sociais da UFRB
export const redesSociaisUFRB = [
  { nome: 'Site UFRB', url: 'https://www.ufrb.edu.br/', icon: 'globe' },
  { nome: 'Instagram UFRB', url: 'https://instagram.com/ufrb/', icon: 'instagram' },
  { nome: 'Facebook UFRB', url: 'https://facebook.com/ufrb/', icon: 'facebook' },
  { nome: 'YouTube UFRB', url: 'https://youtube.com/ufrb', icon: 'youtube' },
]

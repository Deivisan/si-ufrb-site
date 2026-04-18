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
    url: '/estatuto-da-si-ufrb.pdf',
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
    professor: 'Prof. x-math',
    periodo: '2026.1',
    diaHora: 'Quinzenal, Quarta, 19h-20h',
    plataforma: 'Google Meet',
  },
]

// Avisos inteligentes para EAD - atualizados com contexto real
export const avisos: Aviso[] = [
  {
    id: '1',
    titulo: '⚠️ Problemas no AVA - Prorrogação de Prazos',
    descricao: 'Alunos estão sem acesso ao AVA devido a problemas no e-mail institucional. A diretoria está mapeando os casos para solicitar prorrogação de prazos ao Colegiado. Se você está afetado, entre em contato conosco via WhatsApp ou e-mail.',
    data: '2026-04-14',
    prioridade: 'alta',
  },
  {
    id: '2',
    titulo: '📋 Período de Equivalência - 13/04 a 27/04',
    descricao: 'Solicite aproveitamento de disciplinas via SIGAA > Ensino > Requerimentos > "Aproveitamento de estudos". Necessário: histórico escolar, ementas das disciplinas cursadas e tabela de aproveitamento. Disciplinas cursadas em outra IES em até 8 anos.',
    data: '2026-04-14',
    prioridade: 'alta',
  },
  {
    id: '3',
    titulo: '📚 Horários das Aulas - 2026.1 (Bloco 1)',
    descricao: 'Algoritmos e Programação I: Segundas 20h (RNP Mconf) | Fundamentos de SI: Terças 20h (RNP Mconf) | Lógica Matemática: Quinzenal Quartas 19h-20h (Google Meet). Todas as salas do Mconf devem ser acessadas pelo AVA (disciplina > Aulas Síncronas).',
    data: '2026-04-14',
    prioridade: 'media',
  },
  {
    id: '4',
    titulo: '🎓 D.A. SI UFRB - Empossado!',
    descricao: 'O Diretório Acadêmico foi oficialmente empossado em 13/04/2026. Todos os 13 cargos estão preenchidos. Siga @siufrb no Instagram para acompanhar nossas ações. Participe dos grupos de WhatsApp do seu polo!',
    data: '2026-04-14',
    prioridade: 'baixa',
  },
  {
    id: '5',
    titulo: '🔧 DevOps Days CETENS - 15/05 e 06/06',
    descricao: 'Esquenta: 15/05 no campus CETENS (Feira de Santana). Evento principal: 06/06 no Centro de Convenções de Feira de Santana. Inscrição via SIGAA. Trilhas de DevOps (Linux, Docker, CI/CD) e Soft Skills (currículo, LinkedIn, Design Thinking).',
    data: '2026-04-14',
    prioridade: 'media',
  },
  {
    id: '6',
    titulo: '💻 Dicas para EAD - Otimize seu Estudo',
    descricao: 'Conecte-se 10min antes das aulas síncronas. Teste áudio/vídeo. Use "a" + matrícula para login no SIGAA. AVA indisponível? Contate a SEAD. Sem notebook? Use app "Coding C" no Android para programar em C.',
    data: '2026-04-14',
    prioridade: 'baixa',
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
  colegiado: 'colegiado.bsi.ead@cetens.ufrb.edu.br',
  sapsi: 'sapsi@cetens.ufrb.edu.br',
  academico: 'academico@cetens.ufrb.edu.br',
}

// Redes sociais da UFRB
export const redesSociaisUFRB = [
  { nome: 'Site UFRB', url: 'https://www.ufrb.edu.br/', icon: 'globe' },
  { nome: 'Instagram UFRB', url: 'https://instagram.com/ufrb/', icon: 'instagram' },
  { nome: 'Facebook UFRB', url: 'https://facebook.com/ufrb/', icon: 'facebook' },
  { nome: 'YouTube UFRB', url: 'https://youtube.com/ufrb', icon: 'youtube' },
]

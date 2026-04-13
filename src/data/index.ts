// Tipos para o site
export interface MembroDiretoria {
  id: string
  nome: string
  cargo: string
  email?: string
  telefone?: string
  foto?: string
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
}

export interface Aviso {
  id: string
  titulo: string
  descricao: string
  data: string
  prioridade: 'alta' | 'media' | 'baixa'
}

// Dados da Diretoria 2026 (extraídos do chat WhatsApp)
export const diretoria: MembroDiretoria[] = [
  {
    id: '1',
    nome: 'Lucas Machado Lima',
    cargo: 'Presidente',
    email: 'presidencia@si-ufrb.com',
  },
  {
    id: '2',
    nome: 'Iris Lopes',
    cargo: 'Vice-Presidente',
    email: 'vice@si-ufrb.com',
  },
  {
    id: '3',
    nome: 'André Juarez',
    cargo: 'Secretário-Geral',
    email: 'secretaria@si-ufrb.com',
  },
  {
    id: '4',
    nome: 'Evelin',
    cargo: 'Tesoureiro',
    email: 'tesouraria@si-ufrb.com',
  },
  {
    id: '5',
    nome: 'Vince',
    cargo: 'Coordenador de Assuntos Acadêmicos',
    email: 'academicos@si-ufrb.com',
  },
  {
    id: '6',
    nome: 'Brunna',
    cargo: 'Coordenadora de Divulgação, RP e Imprensa',
    email: 'imprensa@si-ufrb.com',
  },
  {
    id: '7',
    nome: 'Deivson Lima de Santana',
    cargo: 'Coordenador de Tecnologia e Inovação',
    email: 'tech@si-ufrb.com',
  },
  {
    id: '8',
    nome: 'Flávio',
    cargo: 'Coordenador de Extensão e Projetos',
    email: 'projetos@si-ufrb.com',
  },
  // Cargos vagos mencionados no chat
  {
    id: '9',
    nome: 'VAGO',
    cargo: 'Coordenador de Estágios e Mercado',
    email: 'estagios@si-ufrb.com',
  },
  {
    id: '10',
    nome: 'VAGO',
    cargo: 'Coordenador de Inclusão e Permanência Estudantil',
    email: 'inclusao@si-ufrb.com',
  },
]

// Cargos vagos
export const cargosVagos = [
  'Primeiro Secretário (Feira de Santana)',
  'Coordenador de Estágios e Mercado',
  'Coordenador de Inclusão e Permanência Estudantil',
]

// Links úteis (sistemas da UFRB)
export const linksUteis: LinkUtil[] = [
  {
    id: '1',
    titulo: 'Moodle UFRB',
    url: 'https://moodle.ufrb.edu.br/',
    descricao: 'Plataforma de aprendizagem institucional',
    icon: 'book-open',
  },
  {
    id: '2',
    titulo: 'Portal do Aluno',
    url: 'https://portalaluno.ufrb.edu.br/',
    descricao: 'Área do aluno, notas, histórico, matrícula',
    icon: 'user',
  },
  {
    id: '3',
    titulo: 'Intranet UFRB',
    url: 'https://intranet.ufrb.edu.br/',
    descricao: 'Portal institucional de serviços',
    icon: 'globe',
  },
  {
    id: '4',
    titulo: 'Biblioteca',
    url: 'https://www.ufrb.edu.br/biblioteca/',
    descricao: 'Acesso ao acervo e serviços bibliotecários',
    icon: 'library',
  },
  {
    id: '5',
    titulo: 'RU Cantinas',
    url: 'https://www.ufrb.edu.br/ru/',
    descricao: 'Restaurantes Universitários e cantinas',
    icon: 'utensils',
  },
  {
    id: '6',
    titulo: 'Beecrowd',
    url: 'https://www.beecrowd.com.br/',
    descricao: 'Plataforma de exercícios de programação (sugestão do grupo)',
    icon: 'code',
  },
]

// Disciplinas do semestre (extraídas do chat)
export const disciplinas: Disciplina[] = [
  { id: '1', nome: 'Lógica Matemática', periodo: '2026.1' },
  { id: '2', nome: 'Programação', periodo: '2026.1' },
  { id: '3', nome: 'Fundamentos de SI', periodo: '2026.1' },
  { id: '4', nome: 'Algoritmos', periodo: '2026.1' },
  { id: '5', nome: 'Matemática Discreta', periodo: '2026.1' },
]

// Avisos importantes (dinâmico - pode ser preenchido pela diretoria)
export const avisos: Aviso[] = [
  {
    id: '1',
    titulo: 'Prorrogação de Prazos - AVA',
    descricao: ' alunos estão sem acesso ao AVA por problemas no e-mail institucional. A diretoria está mapeando os casos para solicitar prorrogação de prazos ao Colegiado.',
    data: '2026-04-04',
    prioridade: 'alta',
  },
  {
    id: '2',
    titulo: 'Greve na UFRB',
    descricao: 'Técnicos estão em GREVE. Professores NÃO estão em GREVE. Serviços essenciais mantidos com atendimento parcial.',
    data: '2026-04-07',
    prioridade: 'alta',
  },
  {
    id: '3',
    titulo: 'Eleição da Diretoria',
    descricao: 'Chapa em formação. Votação prevista para breve (estatuto exige 48h de antecedência).',
    data: '2026-04-04',
    prioridade: 'media',
  },
]

// Infos do curso
export const infoCurso = {
  nome: 'Sistemas de Informação',
  sigla: 'SI',
  university: 'Universidade Federal do Recôncavo da Bahia',
  campus: 'Cruz das Almas',
  endereco: 'Rua Rui Barbosa, 710 - Centro, Cruz das Almas - BA',
  telefone: '(75) 3621-1000',
  email: 'si@cursos.ufrb.edu.br',
  website: 'https://www.ufrb.edu.br/sistemasdeinformacao/',
  turnos: ['Matutino', 'Vespertino', 'Noturno'],
  grado: 'Bacharelado',
  duracao: '4 anos (8 semestres)',
  periodo: '2026.1',
}

// Infos do D.A
export const infoDA = {
  nome: 'Diretório Acadêmico',
  sigla: 'D.A.',
  nomeCompleto: 'D.A. SI UFRB',
  email: 'contato@si-ufrb.com',
  instagram: 'https://instagram.com/siufrb',
  facebook: 'https://facebook.com/siufrb',
  whatsapp: 'https://chat.whatsapp.com/seu-codigo-aqui',
}

// Redes sociais da UFRB
export const redesSociaisUFRB = [
  { nome: 'Site UFRB', url: 'https://www.ufrb.edu.br/', icon: 'globe' },
  { nome: 'Instagram UFRB', url: 'https://instagram.com/ufrb/', icon: 'instagram' },
  { nome: 'Facebook UFRB', url: 'https://facebook.com/ufrb/', icon: 'facebook' },
  { nome: 'YouTube UFRB', url: 'https://youtube.com/ufrb', icon: 'youtube' },
]
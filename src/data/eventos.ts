// 🗓️ Eventos, Aulas e Datas Importantes
// Fonte: Chats WhatsApp dos grupos do D.A. SI UFRB (extraído em 14/05/2026)

export type TipoEvento = 'aula-sincrona' | 'aula-presencial' | 'evento' | 'prazo' | 'reuniao' | 'plantao' | 'palestra'

export interface Evento {
  id: string
  titulo: string
  descricao: string
  data: string      // ISO date YYYY-MM-DD
  hora?: string     // HH:MM
  tipo: TipoEvento
  disciplina?: string
  professor?: string
  link?: string
  local?: string
  responsavel?: string
  status: 'confirmado' | 'pendente' | 'cancelado' | 'encerrado'
}

// 📅 Calendário completo baseado nas conversas reais dos grupos
export const eventos: Evento[] = [
  // === AULAS SÍNCRONAS REGULARES ===
  {
    id: 'aula-alg-1',
    titulo: 'Algoritmos e Programação I',
    descricao: 'Aula síncrona semanal com professor Alex Ferreira. Link disponível no AVA momentos antes da aula.',
    data: '2026-04-13',
    hora: '20:00',
    tipo: 'aula-sincrona',
    disciplina: 'Algoritmos e Programação I',
    professor: 'Alex Ferreira',
    link: 'https://lti.mconf.rnp.br/rooms/d5236052848f52ad2e148225f4523635a33fc68a/scheduled_meetings/495JR37bszes/external',
    status: 'encerrado',
  },
  {
    id: 'aula-alg-2',
    titulo: 'Algoritmos e Programação I',
    descricao: 'Aula síncrona semanal. Mesmo link do Mconf (acessar via AVA).',
    data: '2026-04-20',
    hora: '20:00',
    tipo: 'aula-sincrona',
    disciplina: 'Algoritmos e Programação I',
    professor: 'Alex Ferreira',
    status: 'encerrado',
  },
  {
    id: 'aula-alg-3',
    titulo: 'Algoritmos e Programação I',
    descricao: 'Aula síncrona semanal.',
    data: '2026-04-27',
    hora: '20:00',
    tipo: 'aula-sincrona',
    disciplina: 'Algoritmos e Programação I',
    professor: 'Alex Ferreira',
    status: 'encerrado',
  },
  {
    id: 'aula-alg-4',
    titulo: 'Algoritmos e Programação I',
    descricao: 'Aula síncrona semanal.',
    data: '2026-05-04',
    hora: '20:00',
    tipo: 'aula-sincrona',
    disciplina: 'Algoritmos e Programação I',
    professor: 'Alex Ferreira',
    status: 'encerrado',
  },
  {
    id: 'aula-alg-5',
    titulo: 'Algoritmos e Programação I',
    descricao: 'Aula síncrona semanal.',
    data: '2026-05-11',
    hora: '20:00',
    tipo: 'aula-sincrona',
    disciplina: 'Algoritmos e Programação I',
    professor: 'Alex Ferreira',
    status: 'confirmado',
  },
  {
    id: 'aula-fsi-1',
    titulo: 'Fundamentos de Sistemas de Informação',
    descricao: 'Aula síncrona semanal com professor Leandro Brito.',
    data: '2026-04-14',
    hora: '20:00',
    tipo: 'aula-sincrona',
    disciplina: 'Fundamentos de Sistemas de Informação',
    professor: 'Leandro Brito',
    status: 'encerrado',
  },
  {
    id: 'aula-fsi-2',
    titulo: 'Fundamentos de Sistemas de Informação',
    descricao: 'Aula síncrona semanal.',
    data: '2026-04-21',
    hora: '20:00',
    tipo: 'aula-sincrona',
    disciplina: 'Fundamentos de Sistemas de Informação',
    professor: 'Leandro Brito',
    status: 'encerrado',
  },
  {
    id: 'aula-fsi-3',
    titulo: 'Fundamentos de Sistemas de Informação',
    descricao: 'Aula síncrona semanal.',
    data: '2026-04-28',
    hora: '20:00',
    tipo: 'aula-sincrona',
    disciplina: 'Fundamentos de Sistemas de Informação',
    professor: 'Leandro Brito',
    status: 'encerrado',
  },
  {
    id: 'aula-fsi-4',
    titulo: 'Fundamentos de Sistemas de Informação',
    descricao: 'Aula síncrona semanal.',
    data: '2026-05-05',
    hora: '20:00',
    tipo: 'aula-sincrona',
    disciplina: 'Fundamentos de Sistemas de Informação',
    professor: 'Leandro Brito',
    status: 'encerrado',
  },
  {
    id: 'aula-fsi-5',
    titulo: 'Fundamentos de Sistemas de Informação',
    descricao: 'Aula síncrona semanal.',
    data: '2026-05-12',
    hora: '20:00',
    tipo: 'aula-sincrona',
    disciplina: 'Fundamentos de Sistemas de Informação',
    professor: 'Leandro Brito',
    status: 'encerrado',
  },

  // === AULAS PRESENCIAIS / ENCONTROS ===
  {
    id: 'presencial-logica-1',
    titulo: 'Aula Presencial - Lógica Matemática',
    descricao: 'Aula presencial com professor Anderon no Polo Feira de Santana. Conteúdo: revisão e atividades práticas.',
    data: '2026-05-06',
    hora: '19:00',
    tipo: 'aula-presencial',
    disciplina: 'Lógica Matemática / Matemática Discreta',
    professor: 'Prof. Anderon',
    local: 'Polo UAB Feira de Santana - Av. Pres. Dutra, 1000 - Centro',
    link: 'https://maps.app.goo.gl/d5vCEY14Dmr7x3Y27?g_st=iw',
    status: 'encerrado',
  },

  // === NOVO: ENCONTRO DE ACOMPANHAMENTO FSI (Lorena) ===
  {
    id: 'encontro-fsi-lorena-1',
    titulo: 'Acompanhamento de FSI com Tutora Lorena',
    descricao: 'Encontro síncrono de acompanhamento de Fundamentos de Sistemas de Informação com a tutora Lorena. Para tirar dúvidas sobre o case/simulação.',
    data: '2026-05-15',
    hora: '19:00',
    tipo: 'aula-sincrona',
    disciplina: 'Fundamentos de Sistemas de Informação',
    professor: 'Lorena Santana (Tutora)',
    link: 'https://meet.google.com/tov-ncjq-vfm',
    status: 'confirmado',
  },
  {
    id: 'presencial-fsi-leandro',
    titulo: 'Aula Presencial - FSI com Prof. Leandro',
    descricao: 'Aula presencial no Polo UAB Feira de Santana com professor Leandro Brito.',
    data: '2026-05-14',
    hora: '19:00',
    tipo: 'aula-presencial',
    disciplina: 'Fundamentos de Sistemas de Informação',
    professor: 'Leandro Brito',
    local: 'Polo UAB Feira de Santana - Av. Pres. Dutra, 1000 - Centro',
    status: 'confirmado',
  },
  {
    id: 'presencial-si-semana-1',
    titulo: 'Aula Inaugural Presencial - SI UFRB',
    descricao: 'Aula inaugural no CETENS com palavra da Direção do centro, da coordenação do curso e atividades presenciais. Oportunidade de conhecer o campus, colegas e professores pessoalmente.',
    data: '2026-05-16',
    hora: '08:00',
    tipo: 'aula-presencial',
    local: 'CETENS - Cruz das Almas',
    status: 'confirmado',
  },

  // === EVENTOS ===
  {
    id: 'devops-days-esquenta',
    titulo: 'DevOps Days CETENS - Esquenta',
    descricao: 'Evento preparatório para o DevOps Days. Trilhas de DevOps (Linux, Docker, CI/CD) e Soft Skills (currículo, LinkedIn, Design Thinking).',
    data: '2026-05-15',
    hora: '08:00',
    tipo: 'evento',
    local: 'CETENS - Feira de Santana',
    link: 'https://devopsdays.org/events/2026-feira-de-santana/welcome/',
    status: 'confirmado',
  },
  {
    id: 'devops-days-principal',
    titulo: 'DevOps Days - Evento Principal',
    descricao: 'Evento principal de DevOps. Inscrição via SIGAA.',
    data: '2026-06-06',
    hora: '08:00',
    tipo: 'evento',
    local: 'Centro de Convenções de Feira de Santana',
    status: 'confirmado',
  },

  // === PRAZOS ===
  {
    id: 'prazo-equivalencia',
    titulo: 'Período de Equivalência',
    descricao: 'Solicitar aproveitamento de disciplinas via SIGAA > Ensino > Requerimentos > "Aproveitamento de estudos". Necessário histórico, ementas e tabela.',
    data: '2026-04-27',
    tipo: 'prazo',
    status: 'encerrado',
  },
  {
    id: 'prazo-atividades-1',
    titulo: 'Prazo de Atividades - Bloco 1 (Prorrogado)',
    descricao: 'Após problemas no AVA, os prazos foram estendidos. Data final para entrega de todas as atividades do primeiro bloco.',
    data: '2026-05-16',
    tipo: 'prazo',
    status: 'confirmado',
  },
  {
    id: 'prazo-atividades-2',
    titulo: 'Prazo Final de Atividades',
    descricao: 'Data limite para entrega de todas as atividades. Dia 18/05 iniciam as disciplinas restantes do semestre (mais 4 disciplinas).',
    data: '2026-05-31',
    tipo: 'prazo',
    status: 'confirmado',
  },

  // === REUNIÕES ===
  {
    id: 'assembleia-geral',
    titulo: 'Assembleia Geral do Curso',
    descricao: 'Assembleia para apresentação da chapa do D.A. e discussão sobre o curso.',
    data: '2026-04-13',
    hora: '19:00',
    tipo: 'reuniao',
    link: 'https://meet.google.com/kgd-ckbb-ppu',
    status: 'encerrado',
  },
  {
    id: 'reuniao-diretoria-1',
    titulo: 'Reunião da Diretoria D.A.',
    descricao: 'Reunião interna da diretoria para definir próximos passos, ações e resolução de problemas.',
    data: '2026-04-23',
    hora: '20:00',
    tipo: 'reuniao',
    status: 'encerrado',
  },
  {
    id: 'plantao-pedagogico-1',
    titulo: 'Plantão Pedagógico',
    descricao: 'Plantão para tirar dúvidas sobre as disciplinas e o andamento do curso.',
    data: '2026-04-23',
    hora: '20:00',
    tipo: 'plantao',
    status: 'encerrado',
  },

  // === NOVAS DATAS A CONFIRMAR ===
  {
    id: 'tech-talks-1',
    titulo: 'Tech Talks - Ciclo de Palestras',
    descricao: 'Sugestão da Brunna: ciclo de palestras com profissionais da área. "Tech em Pauta" ou "Tech Talks". A definir periodicidade (quinzenal? mensal?).',
    data: '2026-05-21',
    hora: '19:00',
    tipo: 'palestra',
    responsavel: 'Brunna Moura (Divulgação)',
    status: 'pendente',
  },
  {
    id: 'encontro-presencial-polos',
    titulo: 'Encontro Presencial Integrado',
    descricao: 'Proposta da coordenação: unificar visitas aos sábados nos polos, com mais de um professor presente para otimizar deslocamento.',
    data: '2026-05-23',
    hora: '08:00',
    tipo: 'aula-presencial',
    status: 'pendente',
  },
  {
    id: 'minicurso-arduino',
    titulo: 'Minicurso de Extensão - Introdução ao Arduino',
    descricao: 'Minicurso presencial de 30h com projeto final. Apenas alunos aprovados no projeto final recebem certificado. Inscrições e mais informações em breve.',
    data: '2026-05-25',
    hora: '08:00',
    tipo: 'evento',
    local: 'CETENS - Feira de Santana',
    status: 'pendente',
  },
  {
    id: 'questionario-experiencia',
    titulo: 'Questionário de Experiência - SI UFRB',
    descricao: 'Questionário para aprimorar o curso de Sistemas de Informação. Responda sobre sua experiência, participação nas aulas síncronas e sugestões de melhoria.',
    data: '2026-05-14',
    tipo: 'prazo',
    status: 'confirmado',
    link: 'https://forms.gle/Ud4vVemn6xui4bw5A',
  },
]

// Agrupa eventos por mês para exibição no calendário
export function eventosPorMes(): Record<string, Evento[]> {
  const grupos: Record<string, Evento[]> = {}
  for (const ev of eventos) {
    const mes = ev.data.substring(0, 7) // YYYY-MM
    if (!grupos[mes]) grupos[mes] = []
    grupos[mes].push(ev)
  }
  return grupos
}

// Filtra eventos futuros (a partir de hoje)
export function eventosFuturos(): Evento[] {
  const hoje = new Date()
  return eventos.filter(ev => {
    const dataEv = new Date(ev.data + 'T23:59:59')
    return dataEv >= hoje && ev.status !== 'cancelado' && ev.status !== 'encerrado'
  }).sort((a, b) => a.data.localeCompare(b.data))
}

// Filtra eventos por tipo
export function eventosPorTipo(tipo: TipoEvento): Evento[] {
  return eventos.filter(ev => ev.tipo === tipo)
    .sort((a, b) => b.data.localeCompare(a.data))
}

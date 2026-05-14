// 🎓 Links de Aulas Síncronas e Materiais
// Fonte: Chats WhatsApp dos grupos do D.A. SI UFRB (extraído em 14/05/2026)

export interface AulaLink {
  id: string
  disciplina: string
  professor: string
  descricao: string
  link: string
  plataforma: 'Google Meet' | 'RNP Mconf' | 'YouTube' | 'Presencial'
  linkAlternativo?: string
  observacao?: string
}

// Links FIXOS por disciplina (os que se repetem semanalmente)
export const aulasFixas: AulaLink[] = [
  {
    id: 'link-alg',
    disciplina: 'Algoritmos e Programação I',
    professor: 'Alex Ferreira',
    descricao: 'Link padrão do Mconf para as aulas síncronas de Algoritmos (segundas, 20h).',
    link: 'https://lti.mconf.rnp.br/rooms/d5236052848f52ad2e148225f4523635a33fc68a/scheduled_meetings/495JR37bszes/external',
    plataforma: 'RNP Mconf',
    linkAlternativo: 'https://meet.google.com/cnd-hiwp-ito',
    observacao: 'Acessar preferencialmente pelo AVA (ead.ufrb.edu.br > disciplina > Aulas Síncronas).',
  },
  {
    id: 'link-fsi',
    disciplina: 'Fundamentos de Sistemas de Informação',
    professor: 'Leandro Brito',
    descricao: 'Link padrão do Mconf para as aulas síncronas de FSI (terças, 20h).',
    link: 'https://lti.mconf.rnp.br/rooms/d71488d13b0b54954099c9d20f455db54f819ec4/scheduled_meetings/W27oktkBpPUr/external',
    plataforma: 'RNP Mconf',
    observacao: 'Acessar preferencialmente pelo AVA. Em caso de problemas, usar o Meet alternativo.',
  },
  {
    id: 'link-logica',
    disciplina: 'Lógica Matemática / Matemática Discreta',
    professor: 'Prof. Anderon',
    descricao: 'Link do Google Meet para aulas de Lógica (quinzenais, quartas, 19h).',
    link: 'https://meet.google.com/cup-jhqb-ndp',
    plataforma: 'Google Meet',
    observacao: 'Aulas quinzenais. Verificar no calendário se há aula hoje.',
  },
  {
    id: 'link-acompanhamento-fsi',
    disciplina: 'Acompanhamento FSI - Tutora Lorena',
    professor: 'Lorena Santana',
    descricao: 'Link do Meet para encontros de acompanhamento de Fundamentos de SI com a tutora Lorena.',
    link: 'https://meet.google.com/tov-ncjq-vfm',
    plataforma: 'Google Meet',
    observacao: 'Plantão de dúvidas e acompanhamento dos cases/simulações.',
  },
  {
    id: 'link-assembleia',
    disciplina: 'Assembleias e Reuniões do D.A.',
    professor: 'Diretoria D.A. SI UFRB',
    descricao: 'Link do Google Meet para assembleias gerais e reuniões da Diretoria.',
    link: 'https://meet.google.com/kgd-ckbb-ppu',
    plataforma: 'Google Meet',
    observacao: 'Utilizado para assembleias do curso e reuniões da Diretoria.',
  },
  {
    id: 'link-alg-aula-extra',
    disciplina: 'Algoritmos e Programação I (Aula Extra)',
    professor: 'Alex Ferreira',
    descricao: 'Link alternativo usado quando o Mconf apresenta problemas.',
    link: 'https://meet.google.com/vwy-dbxb-ujr',
    plataforma: 'Google Meet',
    observacao: 'Usar apenas se o Mconf falhar.',
  },
]

// Gravações disponíveis
export const gravacoes: AulaLink[] = [
  {
    id: 'grav-alg-1',
    disciplina: 'Algoritmos e Programação I',
    professor: 'Alex Ferreira',
    descricao: 'Gravação da aula do dia 13/04 - Laços de Repetição (While).',
    link: 'https://lti.mconf.rnp.br/rooms/d5236052848f52ad2e148225f4523635a33fc68a/recording/1af8db0968d32c46210ff5689b0cf41751f2c62c-1776120347467/playback/presentation',
    plataforma: 'RNP Mconf',
  },
  {
    id: 'grav-alg-2',
    disciplina: 'Algoritmos e Programação I',
    professor: 'Alex Ferreira',
    descricao: 'Gravação da aula disponível no AVA.',
    link: 'https://lti.mconf.rnp.br/rooms/d5236052848f52ad2e148225f4523635a33fc68a/recording/478f845faf98222b422a0d52d460e5146458d2cb-1776862208849/playback/presentation',
    plataforma: 'RNP Mconf',
  },
  {
    id: 'grav-alg-3',
    disciplina: 'Algoritmos e Programação I',
    professor: 'Alex Ferreira',
    descricao: 'Gravação da aula mais recente.',
    link: 'https://lti.mconf.rnp.br/rooms/d5236052848f52ad2e148225f4523635a33fc68a/recording/d07bd1f2389e0955bd543e8b20aaac2bcfac4934-1777329975431/playback/presentation',
    plataforma: 'RNP Mconf',
  },
]

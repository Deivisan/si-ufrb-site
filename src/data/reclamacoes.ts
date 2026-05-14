// 🔴 Reclamações, Problemas e Feedbacks dos Alunos
// Fonte: Chats WhatsApp dos grupos do D.A. SI UFRB (extraído em 14/05/2026)
// Cada item representa um problema real reportado pelos estudantes

export type StatusProblema = 'resolvido' | 'em-andamento' | 'pendente' | 'encaminhado'
export type CategoriaProblema = 'ava' | 'sigaa' | 'aula' | 'professor' | 'comunicacao' | 'conteudo' | 'infraestrutura' | 'organizacao' | 'outro'

export interface Reclamacao {
  id: string
  titulo: string
  descricao: string
  dataRelato: string      // ISO date
  dataResolucao?: string
  categoria: CategoriaProblema
  status: StatusProblema
  relatadoPor?: string
  acaoTomada?: string     // O que a diretoria fez ou pode fazer
  prioridade: 'alta' | 'media' | 'baixa'
}

export const reclamacoes: Reclamacao[] = [
  // === AVA / PLATAFORMA ===
  {
    id: 'prob-001',
    titulo: 'AVA fora do ar para vários alunos',
    descricao: 'Alunos relataram que o site do AVA (ead.ufrb.edu.br) estava inacessível. "o site do ava está fora do ar aqui" — +557592322632 em 13/04.',
    dataRelato: '2026-04-13',
    categoria: 'ava',
    status: 'resolvido',
    relatadoPor: 'Múltiplos alunos',
    acaoTomada: 'Diretoria mapeou alunos afetados e solicitou prorrogação de prazos ao Colegiado. Prazos foram estendidos.',
    prioridade: 'alta',
  },
  {
    id: 'prob-002',
    titulo: 'E-mail institucional não funciona',
    descricao: 'Alunos sem acesso ao e-mail @estudante.ufrb.edu.br, impossibilitando login no SIGAA e AVA. "Sempre dá que a senha está incorreta apesar de não estar" — Iris.',
    dataRelato: '2026-04-04',
    dataResolucao: '2026-04-15',
    categoria: 'sigaa',
    status: 'resolvido',
    relatadoPor: 'Iris Lopes + vários alunos',
    acaoTomada: 'Diretoria orientou redefinição de senha pelo portal do calouro. Casos persistentes encaminhados à SEAD.',
    prioridade: 'alta',
  },
  {
    id: 'prob-003',
    titulo: 'Quiz com problemas técnicos',
    descricao: 'Quiz da disciplina de Lógica Matemática apresentando erros. Alunos sugerem usar Google Forms como alternativa. "gente e esse quiz aí dando tanto problema, pq nao faz um forms com as questoes pra respondermos?" — Flávio.',
    dataRelato: '2026-04-23',
    categoria: 'ava',
    status: 'em-andamento',
    relatadoPor: 'Flávio Augusto + Iury',
    acaoTomada: 'Diretoria pode sugerir ao professor a migração para Forms ou correção do quiz.',
    prioridade: 'alta',
  },
  {
    id: 'prob-004',
    titulo: 'Link do AVA redirecionando para vídeo errado',
    descricao: 'Link da trilha 04 de Fundamentos de SI redireciona para vídeo institucional da SEAD em vez do conteúdo correto. "o link do AVA para o vídeo 04 da trilha 04 de Fundamentos de SI tá dando num vídeo institucional da SEAD."',
    dataRelato: '2026-04-20',
    categoria: 'ava',
    status: 'encaminhado',
    relatadoPor: 'Aluno(a) +557188424142',
    acaoTomada: 'Reportar ao professor Leandro Brito para correção do link no AVA.',
    prioridade: 'media',
  },

  // === AULAS ===
  {
    id: 'prob-005',
    titulo: 'Professor de Lógica Discreta sem agendar aulas',
    descricao: 'Professor de Lógica Matemática/Discreta ainda não agendou as aulas síncronas. Alunos sem previsão. "O de logica discreta... ainda não agendou aula" — André.',
    dataRelato: '2026-04-04',
    categoria: 'aula',
    status: 'resolvido',
    relatadoPor: 'André Juarez',
    acaoTomada: 'Aulas iniciaram posteriormente de forma quinzenal. Primeira aula presencial em 06/05.',
    prioridade: 'alta',
  },
  {
    id: 'prob-006',
    titulo: 'Aulas não ficam gravadas',
    descricao: 'Dúvida recorrente se as aulas síncronas são gravadas. Alunos que trabalham ou têm compromissos não conseguem assistir ao vivo. "A aula fica gravada?" + "qualquer aula só consigo ver gravada".',
    dataRelato: '2026-04-13',
    categoria: 'aula',
    status: 'em-andamento',
    relatadoPor: 'Múltiplos alunos',
    acaoTomada: 'Diretoria pode solicitar formalmente que todas as aulas sejam gravadas e disponibilizadas no AVA.',
    prioridade: 'alta',
  },
  {
    id: 'prob-007',
    titulo: 'Problemas de conexão do professor durante aula',
    descricao: 'Professor enfrentou problemas de conexão na plataforma do AVA e migrou para Google Meet sem aviso prévio. "ontem o professor enfrentou problemas de conexao na plataforma de aula online do ava e por esse motivo migramos para o meet" — Flávio.',
    dataRelato: '2026-04-23',
    categoria: 'aula',
    status: 'resolvido',
    relatadoPor: 'Flávio Augusto',
    acaoTomada: 'Turma migrou para Meet. Sugerir ter link do Meet de backup sempre disponível.',
    prioridade: 'media',
  },
  {
    id: 'prob-008',
    titulo: 'Encontro presencial em dia de semana é inviável',
    descricao: 'Alunos que trabalham não conseguem comparecer a encontros presenciais marcados em dias de semana. "Viajar para feira a noite é inviável para mim" + "o problema, ao meu ver, é ser dia de semana".',
    dataRelato: '2026-04-23',
    categoria: 'infraestrutura',
    status: 'em-andamento',
    relatadoPor: 'Iris Lopes + Iury',
    acaoTomada: 'Diretoria propôs unificar encontros aos sábados. Em negociação com a coordenação.',
    prioridade: 'alta',
  },

  // === PROFESSORES / CONTEÚDO ===
  {
    id: 'prob-009',
    titulo: 'Professor critica tudo e não tem experiência em EAD',
    descricao: 'Alunos reclamam que professor de Lógica já iniciou o curso criticando tudo. "No primeiro dia de aula ele já iniciou criticando tudo e todos" + "Parece que esse é o primeiro curso da área para ele" — Iury.',
    dataRelato: '2026-04-23',
    categoria: 'professor',
    status: 'pendente',
    relatadoPor: 'Iury',
    acaoTomada: 'Diretoria pode conversar com o professor ou reportar ao colegiado se o problema persistir.',
    prioridade: 'media',
  },
  {
    id: 'prob-010',
    titulo: 'Conteúdo raso e apostila com erros',
    descricao: 'Alunos apontam que as aulas de programação são superficiais e a apostila contém erros. "as aulas de programação estão longe de ser algo bem aprofundado" + "agora ele ta vendo os erros da propria apostila ?" — Flávio e Iury.',
    dataRelato: '2026-04-23',
    categoria: 'conteudo',
    status: 'em-andamento',
    relatadoPor: 'Flávio Augusto + Iury',
    acaoTomada: 'Diretoria pode solicitar revisão do material e aulas mais aprofundadas.',
    prioridade: 'media',
  },
  {
    id: 'prob-011',
    titulo: 'Divisão em blocos prejudica andamento',
    descricao: 'Alunos criticam a divisão do semestre em blocos, com matérias comprimidas. "O problema aí eu acho que está na divisão em blocos. As matérias não tem o tempo normal de aulas" — Iury.',
    dataRelato: '2026-04-23',
    categoria: 'organizacao',
    status: 'pendente',
    relatadoPor: 'Iury',
    acaoTomada: 'Diretoria pode levar a discussão sobre a estrutura do curso ao Colegiado.',
    prioridade: 'media',
  },
  {
    id: 'prob-012',
    titulo: 'Dificuldade com Lógica Matemática',
    descricao: 'Alunos com dificuldade na disciplina de Lógica Matemática. Conteúdo considerado denso e confuso. "tô na msm situação" + "e agora com essa nova de matemática 🤯".',
    dataRelato: '2026-04-01',
    categoria: 'conteudo',
    status: 'em-andamento',
    relatadoPor: 'Múltiplos alunos',
    acaoTomada: 'Plantão pedagógico e monitoria podem ser organizados pela diretoria.',
    prioridade: 'media',
  },

  // === COMUNICAÇÃO / ORGANIZAÇÃO ===
  {
    id: 'prob-013',
    titulo: 'Grupo do WhatsApp poluído - difícil acompanhar',
    descricao: 'Aluno sugere criar grupo separado só para informações porque o volume de mensagens no grupo geral é alto. "aqui é difícil demais acompanhar, eu mesmo não consigo entender metade das coisas" — +557193488599.',
    dataRelato: '2026-04-14',
    categoria: 'comunicacao',
    status: 'em-andamento',
    relatadoPor: 'Aluno(a)',
    acaoTomada: 'Site pode centralizar informações para reduzir dependência do WhatsApp. Diretoria pode criar grupo de avisos unilateral.',
    prioridade: 'alta',
  },
  {
    id: 'prob-014',
    titulo: 'Postagens de venda/propaganda no grupo do curso',
    descricao: 'Alunos reclamam de postagens de venda e propaganda no grupo principal do curso. "Já está comecando a ter postagem de venda e ou propagandas" — André.',
    dataRelato: '2026-04-03',
    categoria: 'comunicacao',
    status: 'resolvido',
    relatadoPor: 'André Juarez',
    acaoTomada: 'Moderadores adicionados (Brunna e Lucas). Posts redirecionados para grupo de comércio.',
    prioridade: 'media',
  },
  {
    id: 'prob-015',
    titulo: 'Atraso na liberação do sistema (AVA/SIGAA)',
    descricao: 'Sistema foi liberado tardiamente, fazendo com que prazos de atividades originais não fossem factíveis. "Como a liberação do sistema foi tardia, não faz sentido manterem os prazos originais" — André.',
    dataRelato: '2026-04-04',
    dataResolucao: '2026-04-15',
    categoria: 'organizacao',
    status: 'resolvido',
    relatadoPor: 'André Juarez',
    acaoTomada: 'Diretoria formalizou pedido de prorrogação. Prazos foram estendidos para 16/05.',
    prioridade: 'alta',
  },
]

// Reclamações ativas (não resolvidas)
export function reclamacoesAtivas(): Reclamacao[] {
  return reclamacoes.filter(r => r.status !== 'resolvido')
    .sort((a, b) => {
      const peso = { alta: 0, media: 1, baixa: 2 }
      return peso[a.prioridade] - peso[b.prioridade]
    })
}

// Reclamações por categoria
export function reclamacoesPorCategoria(cat: CategoriaProblema): Reclamacao[] {
  return reclamacoes.filter(r => r.categoria === cat)
}

// Estatísticas de resolução
export function estatisticasReclamacoes() {
  return {
    total: reclamacoes.length,
    resolvidos: reclamacoes.filter(r => r.status === 'resolvido').length,
    emAndamento: reclamacoes.filter(r => r.status === 'em-andamento').length,
    pendentes: reclamacoes.filter(r => r.status === 'pendente').length,
    encaminhados: reclamacoes.filter(r => r.status === 'encaminhado').length,
  }
}

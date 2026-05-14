import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar, Clock, BookOpen, Video, AlertTriangle, Users,
  MessageCircle, ExternalLink, MapPin, CheckCircle,
  GraduationCap, Play, ListTodo,
  ArrowUpCircle
} from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import {
  eventos, eventosFuturos, aulasFixas, gravacoes,
  reclamacoes, reclamacoesAtivas, estatisticasReclamacoes,
  disciplinas, infoDA
} from '../data'
import type { Evento } from '../data'

type TabAtiva = 'aulas' | 'calendario' | 'reclamacoes' | 'eventos'

export default function Atividades() {
  const { theme } = useTheme()
  const [tabAtiva, setTabAtiva] = useState<TabAtiva>('aulas')

  const tabs: { id: TabAtiva; label: string; icon: React.ReactNode }[] = [
    { id: 'aulas', label: 'Aulas e Links', icon: <Video className="w-5 h-5" /> },
    { id: 'calendario', label: 'Calendário', icon: <Calendar className="w-5 h-5" /> },
    { id: 'reclamacoes', label: 'Reclamações', icon: <AlertTriangle className="w-5 h-5" /> },
    { id: 'eventos', label: 'Eventos', icon: <GraduationCap className="w-5 h-5" /> },
  ]

  const statsReclamacoes = estatisticasReclamacoes()
  const futuros = eventosFuturos()

  return (
    <div className="min-h-screen py-16" style={{ background: 'linear-gradient(135deg, #f0fdfa 0%, #f0f0ff 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>
            <ListTodo className="w-10 h-10 inline mr-2" style={{ color: theme.primary }} />
            Painel de Atividades
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#4b5563' }}>
            Aulas, prazos, reclamações e eventos — tudo centralizado para você.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="rounded-xl shadow-md p-4 text-center" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%)' }}>
            <BookOpen className="w-8 h-8 mx-auto mb-2" style={{ color: theme.primary }} />
            <span className="text-2xl font-bold block" style={{ color: 'var(--color-primary-dark)' }}>{disciplinas.length}</span>
            <span className="text-sm" style={{ color: '#6b7280' }}>Disciplinas</span>
          </div>
          <div className="rounded-xl shadow-md p-4 text-center" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%)' }}>
            <Calendar className="w-8 h-8 mx-auto mb-2" style={{ color: theme.secondary }} />
            <span className="text-2xl font-bold block" style={{ color: 'var(--color-primary-dark)' }}>{futuros.length}</span>
            <span className="text-sm" style={{ color: '#6b7280' }}>Próximos Eventos</span>
          </div>
          <div className="rounded-xl shadow-md p-4 text-center" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%)' }}>
            <AlertTriangle className="w-8 h-8 mx-auto mb-2" style={{ color: '#f59e0b' }} />
            <span className="text-2xl font-bold block" style={{ color: 'var(--color-primary-dark)' }}>{reclamacoesAtivas().length}</span>
            <span className="text-sm" style={{ color: '#6b7280' }}>Reclamações Ativas</span>
          </div>
          <div className="rounded-xl shadow-md p-4 text-center" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%)' }}>
            <CheckCircle className="w-8 h-8 mx-auto mb-2" style={{ color: '#10b981' }} />
            <span className="text-2xl font-bold block" style={{ color: 'var(--color-primary-dark)' }}>{statsReclamacoes.resolvidos}</span>
            <span className="text-sm" style={{ color: '#6b7280' }}>Problemas Resolvidos</span>
          </div>
        </div>

        {/* Navegação por Abas */}
        <div className="flex flex-wrap gap-2 mb-8 border-b pb-2" style={{ borderColor: '#e5e7eb' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setTabAtiva(tab.id)}
              className={`flex items-center px-5 py-3 rounded-t-lg font-medium transition-all text-sm ${
                tabAtiva === tab.id
                  ? 'text-white shadow-sm'
                  : 'hover:bg-gray-100'
              }`}
              style={{
                backgroundColor: tabAtiva === tab.id ? theme.primary : 'transparent',
                color: tabAtiva === tab.id ? '#fff' : '#4b5563',
              }}
            >
              {tab.icon}
              <span className="ml-2">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Conteúdo das Abas */}
        <motion.div
          key={tabAtiva}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {tabAtiva === 'aulas' && <AulasTab theme={theme} />}
          {tabAtiva === 'calendario' && <CalendarioTab theme={theme} eventos={eventos} />}
          {tabAtiva === 'reclamacoes' && <ReclamacoesTab theme={theme} />}
          {tabAtiva === 'eventos' && <EventosTab theme={theme} eventos={futuros} />}
        </motion.div>
      </div>
    </div>
  )
}

// ==================== ABA: AULAS E LINKS ====================
function AulasTab({ theme }: { theme: any }) {
  return (
    <div className="space-y-8">
      {/* Links das aulas */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: 'var(--color-primary-dark)' }}>
          <Video className="w-6 h-6 mr-2" style={{ color: theme.primary }} />
          Links das Aulas Síncronas
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {aulasFixas.map((aula) => (
            <motion.div
              key={aula.id}
              whileHover={{ y: -2 }}
              className="rounded-xl shadow-md p-5 card-hover"
              style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%)' }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0"
                    style={{ backgroundColor: theme.primary }}>
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold" style={{ color: 'var(--color-primary-dark)' }}>{aula.disciplina}</h3>
                    <p className="text-xs" style={{ color: '#6b7280' }}>{aula.professor}</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full font-medium"
                  style={{
                    backgroundColor: aula.plataforma === 'Google Meet' ? '#dcfce7' : '#dbeafe',
                    color: aula.plataforma === 'Google Meet' ? '#16a34a' : '#2563eb'
                  }}>
                  {aula.plataforma}
                </span>
              </div>
              <p className="text-sm mb-3" style={{ color: '#4b5563' }}>{aula.descricao}</p>
              <a
                href={aula.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: theme.primary }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Entrar na Aula
              </a>
              {aula.linkAlternativo && (
                <a
                  href={aula.linkAlternativo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 ml-2 text-sm font-medium rounded-lg border transition-colors"
                  style={{ borderColor: theme.primary, color: theme.primary }}
                >
                  Link Alternativo
                </a>
              )}
              {aula.observacao && (
                <p className="text-xs mt-2" style={{ color: '#9ca3af' }}>💡 {aula.observacao}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Disciplinas */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: 'var(--color-primary-dark)' }}>
          <BookOpen className="w-6 h-6 mr-2" style={{ color: theme.secondary }} />
          Disciplinas do Semestre
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {disciplinas.map((disc) => (
            <div key={disc.id} className="rounded-xl shadow-md p-4"
              style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%)' }}>
              <h3 className="font-bold text-sm" style={{ color: 'var(--color-primary-dark)' }}>{disc.nome}</h3>
              <p className="text-xs mt-1" style={{ color: '#4b5563' }}>{disc.professor}</p>
              <div className="flex items-center mt-2 text-xs" style={{ color: '#6b7280' }}>
                <Clock className="w-3 h-3 mr-1" />
                {disc.diaHora}
              </div>
              <div className="flex items-center mt-1 text-xs" style={{ color: '#6b7280' }}>
                <Video className="w-3 h-3 mr-1" />
                {disc.plataforma}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gravações */}
      {gravacoes.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: 'var(--color-primary-dark)' }}>
            <Play className="w-6 h-6 mr-2" style={{ color: '#ef4444' }} />
            Gravações das Aulas
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {gravacoes.map((grav) => (
              <a
                key={grav.id}
                href={grav.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl shadow-md p-4 flex items-start space-x-3 card-hover"
                style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fef2f2 100%)' }}
              >
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Play className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary-dark)' }}>{grav.disciplina}</h3>
                  <p className="text-xs mt-1" style={{ color: '#4b5563' }}>{grav.descricao}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

// ==================== ABA: CALENDÁRIO ====================
function CalendarioTab({ theme, eventos }: { theme: any; eventos: Evento[] }) {
  // Agrupa por mês
  const meses = eventos.reduce<Record<string, Evento[]>>((acc, ev) => {
    const mes = ev.data.substring(0, 7)
    if (!acc[mes]) acc[mes] = []
    acc[mes].push(ev)
    return acc
  }, {})

  const mesesOrdenados = Object.entries(meses).sort((a, b) => b[0].localeCompare(a[0]))

  const nomeMes = (ym: string) => {
    const [ano, mes] = ym.split('-')
    const nomes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return `${nomes[parseInt(mes) - 1]} ${ano}`
  }

  const estiloPorTipo: Record<string, { bg: string; text: string; label: string }> = {
    'aula-sincrona': { bg: '#dbeafe', text: '#1e40af', label: 'Aula Síncrona' },
    'aula-presencial': { bg: '#fef3c7', text: '#92400e', label: 'Aula Presencial' },
    'evento': { bg: '#ede9fe', text: '#5b21b6', label: 'Evento' },
    'prazo': { bg: '#fce7f3', text: '#9d174d', label: 'Prazo' },
    'reuniao': { bg: '#d1fae5', text: '#065f46', label: 'Reunião' },
    'plantao': { bg: '#e0e7ff', text: '#3730a3', label: 'Plantão' },
    'palestra': { bg: '#fef3c7', text: '#92400e', label: 'Palestra' },
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center mb-4">
        <Calendar className="w-6 h-6 mr-2" style={{ color: theme.primary }} />
        <span className="font-medium" style={{ color: '#4b5563' }}>
          Todos os eventos registrados — passados e futuros
        </span>
      </div>

      {mesesOrdenados.map(([mes, evts]) => (
        <section key={mes}>
          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>
            {nomeMes(mes)}
            <span className="text-sm font-normal ml-2" style={{ color: '#9ca3af' }}>
              ({evts.length} registro{evts.length !== 1 ? 's' : ''})
            </span>
          </h3>
          <div className="space-y-3">
            {evts.sort((a, b) => a.data.localeCompare(b.data)).map((ev) => {
              const est = estiloPorTipo[ev.tipo] || { bg: '#f3f4f6', text: '#374151', label: ev.tipo }
              const dataObj = new Date(ev.data + 'T12:00:00')
              const isFuturo = new Date(ev.data + 'T23:59:59') >= new Date()

              return (
                <div
                  key={ev.id}
                  className="rounded-xl shadow-sm p-4 border-l-4 flex flex-wrap md:flex-nowrap items-start gap-4"
                  style={{
                    background: isFuturo ? 'linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%)' : '#f9fafb',
                    borderLeftColor: est.text,
                    opacity: ev.status === 'cancelado' ? 0.5 : 1,
                  }}
                >
                  <div className="text-center min-w-[60px]">
                    <div className="text-lg font-bold" style={{ color: est.text }}>{ev.data.substring(8, 10)}</div>
                    <div className="text-xs font-medium" style={{ color: '#6b7280' }}>
                      {dataObj.toLocaleDateString('pt-BR', { month: 'short' })}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: est.bg, color: est.text }}>
                        {est.label}
                      </span>
                      {ev.hora && (
                        <span className="flex items-center text-xs" style={{ color: '#6b7280' }}>
                          <Clock className="w-3 h-3 mr-1" /> {ev.hora}
                        </span>
                      )}
                      {ev.status === 'pendente' && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700">
                          A confirmar
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold mt-1" style={{ color: 'var(--color-primary-dark)' }}>{ev.titulo}</h4>
                    <p className="text-sm mt-1" style={{ color: '#4b5563' }}>{ev.descricao}</p>
                    <div className="flex flex-wrap gap-3 mt-2">
                      {ev.professor && (
                        <span className="flex items-center text-xs" style={{ color: '#6b7280' }}>
                          <GraduationCap className="w-3 h-3 mr-1" /> {ev.professor}
                        </span>
                      )}
                      {ev.local && (
                        <span className="flex items-center text-xs" style={{ color: '#6b7280' }}>
                          <MapPin className="w-3 h-3 mr-1" /> {ev.local}
                        </span>
                      )}
                    </div>
                    {ev.link && (
                      <a
                        href={ev.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-2 text-xs font-medium hover:underline"
                        style={{ color: theme.primary }}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" /> Acessar
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}

// ==================== ABA: RECLAMAÇÕES ====================
function ReclamacoesTab({ theme }: { theme: any }) {
  const [filtroStatus, setFiltroStatus] = useState<string>('todas')
  const ativas = reclamacoesAtivas()

  const lista = filtroStatus === 'todas' ? reclamacoes
    : filtroStatus === 'ativas' ? ativas
    : reclamacoes.filter(r => r.status === filtroStatus)

  const categorias: Record<string, string> = {
    ava: 'AVA/Plataforma',
    sigaa: 'SIGAA',
    aula: 'Aulas',
    professor: 'Professores',
    comunicacao: 'Comunicação',
    conteudo: 'Conteúdo',
    infraestrutura: 'Infraestrutura',
    organizacao: 'Organização',
    outro: 'Outro',
  }

  const statusStyle: Record<string, { bg: string; text: string }> = {
    resolvido: { bg: '#d1fae5', text: '#065f46' },
    'em-andamento': { bg: '#fef3c7', text: '#92400e' },
    pendente: { bg: '#fee2e2', text: '#991b1b' },
    encaminhado: { bg: '#dbeafe', text: '#1e40af' },
  }

  const statusLabel: Record<string, string> = {
    resolvido: '✅ Resolvido',
    'em-andamento': '🔄 Em Andamento',
    pendente: '⏳ Pendente',
    encaminhado: '📤 Encaminhado',
  }

  return (
    <div>
      {/* Cabeçalho com estatísticas */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="rounded-lg p-3 text-center" style={{ background: '#fee2e2' }}>
          <div className="text-2xl font-bold text-red-700">{reclamacoes.filter(r => r.status === 'pendente').length}</div>
          <div className="text-xs text-red-600">Pendentes</div>
        </div>
        <div className="rounded-lg p-3 text-center" style={{ background: '#fef3c7' }}>
          <div className="text-2xl font-bold text-amber-700">{reclamacoes.filter(r => r.status === 'em-andamento').length}</div>
          <div className="text-xs text-amber-600">Em Andamento</div>
        </div>
        <div className="rounded-lg p-3 text-center" style={{ background: '#dbeafe' }}>
          <div className="text-2xl font-bold text-blue-700">{reclamacoes.filter(r => r.status === 'encaminhado').length}</div>
          <div className="text-xs text-blue-600">Encaminhados</div>
        </div>
        <div className="rounded-lg p-3 text-center" style={{ background: '#d1fae5' }}>
          <div className="text-2xl font-bold text-green-700">{reclamacoes.filter(r => r.status === 'resolvido').length}</div>
          <div className="text-xs text-green-600">Resolvidos</div>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-6">
        {['todas', 'ativas', 'resolvido', 'em-andamento', 'pendente', 'encaminhado'].map((filtro) => (
          <button
            key={filtro}
            onClick={() => setFiltroStatus(filtro)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filtroStatus === filtro ? 'text-white shadow-sm' : 'hover:bg-gray-100'
            }`}
            style={{
              backgroundColor: filtroStatus === filtro ? theme.primary : '#f3f4f6',
              color: filtroStatus === filtro ? '#fff' : '#4b5563',
            }}
          >
            {filtro === 'todas' ? 'Todas' : 
             filtro === 'ativas' ? 'Ativas' :
             statusLabel[filtro]?.replace(/[✅🔄⏳📤]\s*/, '') || filtro}
          </button>
        ))}
      </div>

      {/* Lista */}
      <div className="space-y-4">
        {lista.map((reclamacao) => {
          const st = statusStyle[reclamacao.status] || { bg: '#f3f4f6', text: '#374151' }
          const urgente = reclamacao.prioridade === 'alta' && reclamacao.status !== 'resolvido'

          return (
            <motion.div
              key={reclamacao.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl shadow-md p-5"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%)',
                borderLeft: `4px solid ${reclamacao.status === 'resolvido' ? '#10b981' : urgente ? '#ef4444' : '#f59e0b'}`,
              }}
            >
              <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: st.bg, color: st.text }}>
                    {statusLabel[reclamacao.status]}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: '#f3f4f6', color: '#6b7280' }}>
                    {categorias[reclamacao.categoria] || reclamacao.categoria}
                  </span>
                  {urgente && (
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: '#fee2e2', color: '#dc2626' }}>
                      🔴 Urgente
                    </span>
                  )}
                </div>
                <span className="text-xs" style={{ color: '#9ca3af' }}>
                  {new Date(reclamacao.dataRelato).toLocaleDateString('pt-BR')}
                </span>
              </div>

              <h3 className="font-bold text-base" style={{ color: 'var(--color-primary-dark)' }}>{reclamacao.titulo}</h3>
              <p className="text-sm mt-1" style={{ color: '#4b5563' }}>{reclamacao.descricao}</p>

              {reclamacao.relatadoPor && (
                <p className="text-xs mt-2" style={{ color: '#9ca3af' }}>
                  <Users className="w-3 h-3 inline mr-1" />
                  Relatado por: {reclamacao.relatadoPor}
                </p>
              )}

              {reclamacao.acaoTomada && (
                <div className="mt-3 p-3 rounded-lg" style={{ backgroundColor: '#f0fdf4' }}>
                  <p className="text-xs font-semibold text-green-700 flex items-center">
                    <ArrowUpCircle className="w-3 h-3 mr-1" />
                    Ação da Diretoria:
                  </p>
                  <p className="text-sm mt-1" style={{ color: '#4b5563' }}>{reclamacao.acaoTomada}</p>
                </div>
              )}

              {reclamacao.dataResolucao && (
                <p className="text-xs mt-2" style={{ color: '#10b981' }}>
                  Resolvido em {new Date(reclamacao.dataResolucao).toLocaleDateString('pt-BR')}
                </p>
              )}
            </motion.div>
          )
        })}

        {lista.length === 0 && (
          <div className="text-center py-12">
            <CheckCircle className="w-12 h-12 mx-auto mb-4" style={{ color: '#10b981' }} />
            <p className="font-medium" style={{ color: '#4b5563' }}>Nenhuma reclamação encontrada com esse filtro.</p>
          </div>
        )}
      </div>

      {/* Botão de contato */}
      <div className="mt-8 text-center">
        <a
          href={infoDA.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#22c55e' }}
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Reportar Novo Problema pelo WhatsApp
        </a>
        <p className="text-xs mt-2" style={{ color: '#9ca3af' }}>
          Sua reclamação será registrada e acompanhada pela Diretoria
        </p>
      </div>
    </div>
  )
}

// ==================== ABA: EVENTOS ====================
function EventosTab({ theme, eventos }: { theme: any; eventos: Evento[] }) {
  if (eventos.length === 0) {
    return (
      <div className="text-center py-16">
        <Calendar className="w-16 h-16 mx-auto mb-4" style={{ color: '#d1d5db' }} />
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-primary-dark)' }}>Nenhum evento futuro</h3>
        <p style={{ color: '#6b7280' }}>Os próximos eventos aparecerão aqui assim que forem agendados.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {eventos.map((ev) => {
        const dataObj = new Date(ev.data + 'T12:00:00')
        const diasRestantes = Math.ceil(
          (dataObj.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
        )

        return (
          <motion.div
            key={ev.id}
            whileHover={{ y: -2 }}
            className="rounded-xl shadow-md p-5 card-hover"
            style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%)' }}
          >
            <div className="flex flex-wrap md:flex-nowrap items-start gap-4">
              {/* Data */}
              <div className="text-center min-w-[80px]">
                <div
                  className="text-3xl font-bold rounded-lg p-2"
                  style={{ color: theme.primary }}
                >
                  {ev.data.substring(8, 10)}
                </div>
                <div className="text-sm font-medium" style={{ color: '#6b7280' }}>
                  {dataObj.toLocaleDateString('pt-BR', { month: 'long' })}
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{
                      backgroundColor: ev.tipo === 'evento' ? '#ede9fe' : ev.tipo === 'aula-sincrona' ? '#dbeafe' : '#fef3c7',
                      color: ev.tipo === 'evento' ? '#5b21b6' : ev.tipo === 'aula-sincrona' ? '#1e40af' : '#92400e',
                    }}>
                    {ev.tipo === 'aula-sincrona' ? 'Aula Online' : 
                     ev.tipo === 'aula-presencial' ? 'Aula Presencial' :
                     ev.tipo === 'reuniao' ? 'Reunião' :
                     ev.tipo === 'prazo' ? 'Prazo' :
                     ev.tipo === 'palestra' ? 'Palestra' :
                     ev.tipo === 'plantao' ? 'Plantão' : 'Evento'}
                  </span>
                  {diasRestantes > 0 && diasRestantes <= 7 && (
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-green-100 text-green-700">
                      Em {diasRestantes} dia{diasRestantes !== 1 ? 's' : ''}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold" style={{ color: 'var(--color-primary-dark)' }}>{ev.titulo}</h3>
                <p className="text-sm mt-1" style={{ color: '#4b5563' }}>{ev.descricao}</p>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-xs" style={{ color: '#6b7280' }}>
                  {ev.hora && <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {ev.hora}</span>}
                  {ev.local && <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {ev.local}</span>}
                  {ev.professor && <span className="flex items-center"><GraduationCap className="w-3 h-3 mr-1" /> {ev.professor}</span>}
                </div>
                {ev.link && (
                  <a
                    href={ev.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-3 px-4 py-2 text-sm font-medium text-white rounded-lg hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: theme.primary }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Acessar
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

import { motion } from 'framer-motion'
import { Bell, AlertTriangle, Info, Clock, Calendar, BookOpen, Video, Users, MessageCircle, ExternalLink } from 'lucide-react'
import { avisos, disciplinas, linksUteis } from '../data'
import { useTheme } from '../contexts/ThemeContext'

export default function Avisos() {
  const { theme } = useTheme()

  const getIcon = (prioridade: string) => {
    switch (prioridade) {
      case 'alta':
        return <AlertTriangle className="w-6 h-6" />
      case 'media':
        return <Bell className="w-6 h-6" />
      default:
        return <Info className="w-6 h-6" />
    }
  }

  const getColor = (prioridade: string) => {
    switch (prioridade) {
      case 'alta':
        return { bg: '#fee2e2', border: '#dc2626', text: '#dc2626', label: '#991b1b' }
      case 'media':
        return { bg: '#fef3c7', border: '#d97706', text: '#d97706', label: '#92400e' }
      default:
        return { bg: '#dcfce7', border: '#16a34a', text: '#16a34a', label: '#166534' }
    }
  }

  const getLabel = (prioridade: string) => {
    switch (prioridade) {
      case 'alta': return 'Urgente'
      case 'media': return 'Importante'
      default: return 'Informação'
    }
  }

  const avas = linksUteis.find(l => l.id === '1')
  const sigaa = linksUteis.find(l => l.id === '2')
  const mconf = linksUteis.find(l => l.id === '3')

  return (
    <div className="min-h-screen py-16" style={{ background: 'linear-gradient(135deg, #f0fdfa 0%, #f0f0ff 100%)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>
            <Bell className="w-10 h-10 inline mr-2" style={{ color: theme.primary }} />
            Avisos Inteligentes - EAD
          </h1>
          <p className="text-xl" style={{ color: 'var(--color-secondary)' }}>
            Informações úteis e atualizadas para seu curso a distância
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a href={avas?.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium hover:opacity-80 transition-opacity" style={{ background: '#dbeafe', color: '#1e40af' }}>
              <Calendar className="w-4 h-4 mr-1" /> AVA
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
            <a href={sigaa?.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium hover:opacity-80 transition-opacity" style={{ background: '#dcfce7', color: '#166534' }}>
              <BookOpen className="w-4 h-4 mr-1" /> SIGAA
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
            <a href={mconf?.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium hover:opacity-80 transition-opacity" style={{ background: '#f3e8ff', color: '#7e22ce' }}>
              <Video className="w-4 h-4 mr-1" /> RNP Mconf
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" style={{ background: '#fed7aa', color: '#c2410c' }}>
              <Users className="w-4 h-4 mr-1" /> Diretoria
            </span>
          </div>
        </div>

        {/* Avisos Rápidos */}
        <div className="mb-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border rounded-lg p-4 text-center" style={{ background: '#dbeafe', borderColor: '#93c5fd' }}>
            <Calendar className="w-8 h-8 mx-auto mb-2" style={{ color: '#2563eb' }} />
            <h3 className="font-semibold" style={{ color: '#1e40af' }}>Aula Hoje</h3>
            <p className="text-sm" style={{ color: '#3b82f6' }}>20:00h - Online</p>
          </div>
          <div className="border rounded-lg p-4 text-center" style={{ background: '#dcfce7', borderColor: '#86efac' }}>
            <BookOpen className="w-8 h-8 mx-auto mb-2" style={{ color: '#16a34a' }} />
            <h3 className="font-semibold" style={{ color: '#166534' }}>Disciplinas</h3>
            <p className="text-sm" style={{ color: '#22c55e' }}>{disciplinas.length} ativas</p>
          </div>
          <div className="border rounded-lg p-4 text-center" style={{ background: '#f3e8ff', borderColor: '#c084fc' }}>
            <Video className="w-8 h-8 mx-auto mb-2" style={{ color: '#9333ea' }} />
            <h3 className="font-semibold" style={{ color: '#7e22ce' }}>Plataforma</h3>
            <p className="text-sm" style={{ color: '#a855f7' }}>AVA Online</p>
          </div>
          <div className="border rounded-lg p-4 text-center" style={{ background: '#ffedd5', borderColor: '#fdba74' }}>
            <MessageCircle className="w-8 h-8 mx-auto mb-2" style={{ color: '#ea580c' }} />
            <h3 className="font-semibold" style={{ color: '#c2410c' }}>Suporte</h3>
            <p className="text-sm" style={{ color: '#f97316' }}>WhatsApp Diretoria</p>
          </div>
        </div>

        {/* Lista de Avisos */}
        <div className="space-y-6">
          {avisos.map((aviso, index) => {
            const colors = getColor(aviso.prioridade)
            return (
            <motion.div
              key={aviso.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl shadow-md p-6 border-l-4"
              style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%)', borderLeftColor: colors.border }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" style={{ background: colors.bg, color: colors.label }}>
                  {getIcon(aviso.prioridade)}
                  <span className="ml-2">{getLabel(aviso.prioridade)}</span>
                </div>
                <div className="flex items-center" style={{ color: '#6b7280' }}>
                  <Clock className="w-4 h-4 mr-1" />
                  {new Date(aviso.data).toLocaleDateString('pt-BR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </div>
              </div>

              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-primary-dark)' }}>{aviso.titulo}</h2>
              <div className="leading-relaxed" style={{ color: '#4b5563' }}>
                {aviso.descricao.split(/(\[([^\]]+)\]\(([^)]+)\))/g).map((part, i, arr) => {
                  if (i % 4 === 3) {
                    // This is a URL from markdown
                    const url = part
                    const linkText = arr[i - 1] || url
                    return (
                      <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline" style={{ color: theme.primary }}>
                        {linkText} <ExternalLink className="w-3 h-3 inline ml-0.5" />
                      </a>
                    )
                  }
                  if (i % 4 === 0 || i % 4 === 2) return <span key={i}>{part}</span>
                  return null
                })}
              </div>
            </motion.div>
          )})}
        </div>

        {/* Disciplina info */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-primary-dark)' }}>
            <BookOpen className="w-7 h-7 inline mr-2" style={{ color: theme.primary }} />
            Disciplinas do Bloco 1
          </h2>
          <div className="space-y-4">
            {disciplinas.map((disc) => (
              <div key={disc.id} className="rounded-xl shadow-md p-6" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%)' }}>
                <div className="flex flex-wrap justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: 'var(--color-primary-dark)' }}>{disc.nome}</h3>
                    <p className="text-sm" style={{ color: '#4b5563' }}>Professor: {disc.professor}</p>
                  </div>
                  <div className="text-right mt-2 sm:mt-0">
                    <p className="text-sm font-medium" style={{ color: theme.primary }}>{disc.diaHora}</p>
                    <p className="text-xs" style={{ color: '#6b7280' }}>{disc.plataforma}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter / staying informado */}
        <div
          className="mt-12 text-white rounded-2xl p-8 text-center"
          style={{ background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)` }}
        >
          <h3 className="text-2xl font-bold mb-4">Quer receber os avisos por email?</h3>
          <p className="text-gray-200 mb-6">
            Receba os avisos diretamente no seu email. Informe seu email institucional abaixo.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu email institucional"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
              style={{ backgroundColor: theme.secondary }}
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { Bell, AlertTriangle, Info, Clock, Calendar, BookOpen, Video, Users, MessageCircle } from 'lucide-react'
import { avisos, infoDA } from '../data'
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
        return 'bg-red-100 text-red-700 border-red-200'
      case 'media':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      default:
        return 'bg-green-100 text-green-700 border-green-200'
    }
  }

  const getLabel = (prioridade: string) => {
    switch (prioridade) {
      case 'alta':
        return 'Urgente'
      case 'media':
        return 'Importante'
      default:
        return 'Informação'
    }
  }

  return (
    <div className="min-h-screen py-16" style={{ background: 'linear-gradient(135deg, #f0f0ff 0%, #e8e0f8 100%)' }}>
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
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" style={{ background: '#dbeafe', color: '#1e40af' }}>
              <Calendar className="w-4 h-4 mr-1" /> Horários
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" style={{ background: '#dcfce7', color: '#166534' }}>
              <BookOpen className="w-4 h-4 mr-1" /> Disciplinas
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" style={{ background: '#f3e8ff', color: '#7e22ce' }}>
              <Video className="w-4 h-4 mr-1" /> EAD
            </span>
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
            <p className="text-sm" style={{ color: '#22c55e' }}>5 ativas</p>
          </div>
          <div className="border rounded-lg p-4 text-center" style={{ background: '#f3e8ff', borderColor: '#c084fc' }}>
            <Video className="w-8 h-8 mx-auto mb-2" style={{ color: '#9333ea' }} />
            <h3 className="font-semibold" style={{ color: '#7e22ce' }}>Plataforma</h3>
            <p className="text-sm" style={{ color: '#a855f7' }}>Moodle Online</p>
          </div>
          <div className="border rounded-lg p-4 text-center" style={{ background: '#ffedd5', borderColor: '#fdba74' }}>
            <MessageCircle className="w-8 h-8 mx-auto mb-2" style={{ color: '#ea580c' }} />
            <h3 className="font-semibold" style={{ color: '#c2410c' }}>Suporte</h3>
            <p className="text-sm" style={{ color: '#f97316' }}>WhatsApp Diretoria</p>
          </div>
        </div>

        {/* Lista de Avisos */}
        <div className="space-y-6">
          {avisos.map((aviso, index) => (
            <motion.div
              key={aviso.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-xl shadow-md p-6 border-l-4`}
              style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f0ff 100%)', borderColor: getColor(aviso.prioridade).includes('red') ? '#dc2626' : getColor(aviso.prioridade).includes('yellow') ? '#d97706' : '#16a34a' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getColor(aviso.prioridade)}`}>
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
              <p className="leading-relaxed" style={{ color: '#4b5563' }}>{aviso.descricao}</p>
            </motion.div>
          ))}
        </div>

        {/* Newsletter / staying informado */}
        <div 
          className="mt-12 text-white rounded-2xl p-8 text-center"
          style={{ backgroundColor: theme.primary }}
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

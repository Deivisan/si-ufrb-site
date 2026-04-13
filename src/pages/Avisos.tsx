import { motion } from 'framer-motion'
import { Bell, AlertTriangle, Info, Clock } from 'lucide-react'
import { avisos } from '../data'
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
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <Bell className="w-10 h-10 inline mr-2" style={{ color: theme.primary }} />
            Avisos e Comunicados
          </h1>
          <p className="text-xl text-gray-600">
            Fique por dentro das últimas notícias e informações do D.A. SI UFRB
          </p>
        </div>

        {/* Lista de Avisos */}
        <div className="space-y-6">
          {avisos.map((aviso, index) => (
            <motion.div
              key={aviso.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-md p-6 border-l-4`}
              style={{ borderColor: getColor(aviso.prioridade).includes('red') ? '#dc2626' : getColor(aviso.prioridade).includes('yellow') ? '#d97706' : '#16a34a' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getColor(aviso.prioridade)}`}>
                  {getIcon(aviso.prioridade)}
                  <span className="ml-2">{getLabel(aviso.prioridade)}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {new Date(aviso.data).toLocaleDateString('pt-BR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </div>
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-3">{aviso.titulo}</h2>
              <p className="text-gray-600 leading-relaxed">{aviso.descricao}</p>
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

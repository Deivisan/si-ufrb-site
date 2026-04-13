import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Bell, Link as LinkIcon, Users, ArrowRight, BookOpen, Award, Globe } from 'lucide-react'
import { infoDA, infoCurso, avisos, linksUteis } from '../data'
import { useTheme } from '../contexts/ThemeContext'

export default function Home() {
  const { theme } = useTheme()
  const avisosRecentes = avisos.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="text-white py-20 md:py-32"
        style={{ background: theme.heroGradient }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {infoDA.nome} <br />
                <span style={{ color: theme.primaryLight }}>{infoCurso.sigla} - UFRB</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Representando os estudantes do curso de {infoCurso.nome} da {infoCurso.university}.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/diretoria"
                  className="inline-flex items-center px-6 py-3 bg-white font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  style={{ color: theme.primary }}
                >
                  <Users className="w-5 h-5 mr-2" />
                  Nossa Diretoria
                </Link>
                <Link
                  to="/links"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  <LinkIcon className="w-5 h-5 mr-2" />
                  Links Úteis
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white/10 rounded-xl">
                    <Globe className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-2xl font-bold">8</span>
                    <p className="text-sm text-gray-300">Cargos</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl">
                    <Award className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-2xl font-bold">8</span>
                    <p className="text-sm text-gray-300">Semestres</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl">
                    <BookOpen className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-2xl font-bold">5</span>
                    <p className="text-sm text-gray-300">Disciplinas</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl">
                    <Calendar className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-2xl font-bold">2026</span>
                    <p className="text-sm text-gray-300">{infoCurso.periodo}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Avisos Recentes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              <Bell className="w-8 h-8 inline mr-2" style={{ color: theme.primary }} />
              Avisos Recentes
            </h2>
            <Link 
              to="/avisos" 
              className="font-medium hover:underline flex items-center"
              style={{ color: theme.primary }}
            >
              Ver todos <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {avisosRecentes.map((aviso) => (
              <motion.div
                key={aviso.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md p-6 card-hover"
              >
                <div 
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                  style={{ 
                    backgroundColor: aviso.prioridade === 'alta' ? '#fee2e2' : aviso.prioridade === 'media' ? '#fef3c7' : '#dcfce7',
                    color: aviso.prioridade === 'alta' ? '#dc2626' : aviso.prioridade === 'media' ? '#d97706' : '#16a34a'
                  }}
                >
                  {aviso.prioridade === 'alta' ? '🔴 Urgente' : aviso.prioridade === 'media' ? '🟡 Importante' : '🟢 Info'}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{aviso.titulo}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{aviso.descricao}</p>
                <span className="text-gray-400 text-xs">{new Date(aviso.data).toLocaleDateString('pt-BR')}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Links Úteis */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              <LinkIcon className="w-8 h-8 inline mr-2" style={{ color: theme.primary }} />
              Links Úteis
            </h2>
            <Link 
              to="/links" 
              className="font-medium hover:underline flex items-center"
              style={{ color: theme.primary }}
            >
              Ver todos <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {linksUteis.slice(0, 6).map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: theme.primary }}
                >
                  <LinkIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-center text-gray-700">{link.titulo}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o Curso */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Sobre o Curso
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: theme.primary }}
              >
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Grau</h3>
              <p className="text-gray-600">{infoCurso.grado}</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: theme.secondary }}
              >
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Duração</h3>
              <p className="text-gray-600">{infoCurso.duracao}</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Campus</h3>
              <p className="text-gray-600">{infoCurso.campus}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato CTA */}
      <section 
        className="py-16"
        style={{ background: theme.heroGradient }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Fale Conosco</h2>
          <p className="text-xl text-gray-200 mb-8">
            Tem dúvidas, sugestões ou precisa de ajuda? Entre em contato com a Diretoria.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center px-8 py-4 bg-white font-bold rounded-lg hover:bg-gray-100 transition-colors"
            style={{ color: theme.primary }}
          >
            Entre em Contato
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

import { motion } from 'framer-motion'
import { Users, Mail, AlertTriangle, Crown, Shield, BookHeart, Award, GraduationCap, Mic, Code, HandHeart, Phone, MessageCircle } from 'lucide-react'
import { diretoria, cargosVagos, infoDA, infoCurso } from '../data'
import { useTheme } from '../contexts/ThemeContext'

// Dados dos líderes com informações de contato
const lideresCompletos = [
  {
    nome: 'Lucas Machado Lima',
    cargo: 'Presidente',
    telefone: '+557199914531',
    descricao: 'Liderança geral do D.A., responsável por representar o Diretório e coordenar as atividades.',
    icon: <Crown className="w-6 h-6" />,
    cor: 'bg-yellow-500',
    email: 'presidencia@si-ufrb.com'
  },
  {
    nome: 'Iris Lopes',
    cargo: 'Vice-Presidente',
    telefone: '+557591266558',
    descricao: 'Apoia o Presidente e assume em suas ausências. Coordenação de projetos estratégicos.',
    icon: <Shield className="w-6 h-6" />,
    cor: 'bg-blue-500',
    email: 'vice@si-ufrb.com'
  },
  {
    nome: 'André Juarez',
    cargo: 'Secretário-Geral',
    telefone: '+557199319660',
    descricao: 'Responsável pela documentação, atas e organização interna do D.A.',
    icon: <BookHeart className="w-6 h-6" />,
    cor: 'bg-green-500',
    email: 'secretaria@si-ufrb.com'
  },
  {
    nome: 'Evelin',
    cargo: 'Tesoureiro',
    telefone: '+557491541394',
    descricao: 'Gestão financeira e prestação de contas do Diretório Acadêmico.',
    icon: <Award className="w-6 h-6" />,
    cor: 'bg-purple-500',
    email: 'tesouraria@si-ufrb.com'
  },
  {
    nome: 'Vince',
    cargo: 'Coordenador de Assuntos Acadêmicos',
    telefone: null,
    descricao: 'Assuntos relacionados a disciplinas, professores, avaliações e qualidade de ensino.',
    icon: <GraduationCap className="w-6 h-6" />,
    cor: 'bg-indigo-500',
    email: 'academicos@si-ufrb.com'
  },
  {
    nome: 'Brunna',
    cargo: 'Coordenadora de Divulgação e RP',
    telefone: '+557199463003',
    descricao: 'Comunicação, redes sociais, marketing e imagem do D.A. junto aos estudantes.',
    icon: <Mic className="w-6 h-6" />,
    cor: 'bg-pink-500',
    email: 'imprensa@si-ufrb.com'
  },
  {
    nome: 'Deivison Santana',
    cargo: 'Coordenador de Tecnologia e Inovação',
    telefone: '+557581231019',
    descricao: 'Desenvolvimento de sistemas, sites, automações e soluções tecnológicas para o curso.',
    icon: <Code className="w-6 h-6" />,
    cor: 'bg-cyan-500',
    email: 'tech@si-ufrb.com'
  },
  {
    nome: 'Flávio',
    cargo: 'Coordenador de Extensão e Projetos',
    telefone: '+557583402662',
    descricao: 'Projetos sociais, parcerias externas e ações de extensão com a comunidade.',
    icon: <HandHeart className="w-6 h-6" />,
    cor: 'bg-orange-500',
    email: 'projetos@si-ufrb.com'
  },
]

export default function Diretoria() {
  const { theme } = useTheme()
  const membrosAtivos = diretoria.filter(m => m.nome !== 'VAGO')

  return (
    <div className="min-h-screen py-16" style={{ background: 'linear-gradient(135deg, #f0f0ff 0%, #e8e0f8 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>
            <Users className="w-10 h-10 inline mr-2" style={{ color: theme.primary }} />
            Nossa Diretoria
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#4b5563' }}>
            Diretoria do {infoDA.nome} {infoDA.sigla} - Gestão 2026
          </p>
        </div>

        {/* Diretoria Ativa */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: 'var(--color-primary-dark)' }}>
            <span className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: theme.primary }}></span>
            Diretoria Ativa - Gestão 2026
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lideresCompletos.map((lider, index) => (
              <motion.div
                key={lider.cargo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl shadow-lg p-6 card-hover"
                style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f0ff 100%)' }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-14 h-14 ${lider.cor} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                    {lider.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold" style={{ color: 'var(--color-primary-dark)' }}>{lider.nome}</h3>
                    <p className={`${lider.cor} text-white text-xs px-2 py-1 rounded-full inline-block mt-1`}>
                      {lider.cargo}
                    </p>
                  </div>
                </div>
                <p className="text-sm mb-4" style={{ color: '#4b5563' }}>{lider.descricao}</p>
                <div className="space-y-2">
                  {lider.email && (
                    <a
                      href={`mailto:${lider.email}`}
                      className="flex items-center text-sm text-gray-500 hover:text-gray-700"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {lider.email}
                    </a>
                  )}
                  {lider.telefone && (
                    <a
                      href={`https://wa.me/55${lider.telefone.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-green-600 hover:text-green-800"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Cargos Vagos */}
        {cargosVagos.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: 'var(--color-primary-dark)' }}>
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
              Cargos Vagos
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {cargosVagos.map((cargo, index) => (
                <motion.div
                  key={cargo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-5 text-center"
                >
                  <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                  <h3 className="font-semibold text-gray-900">{cargo}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Interessado? Entre em contato com a Diretoria
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Info do D.A. */}
        <section 
          className="text-white rounded-2xl p-8"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sobre o {infoDA.sigla}</h3>
              <p className="text-gray-300">
                O Diretório Acadêmico é o órgão representativo dos estudantes do curso. 
                Nossa missão é trabalhar pelo bem-estar e pelos direitos dos alunos de {infoCurso.sigla}.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Participe!</h3>
              <p className="text-gray-300">
                Você pode participar das reuniões da Diretoria ou se candidatar a um cargo vago.
                Entre em contato pelo email {infoDA.email} ou pelo grupo do WhatsApp.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

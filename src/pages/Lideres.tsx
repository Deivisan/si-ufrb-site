import { motion } from 'framer-motion'
import { Users, Award, Crown, Shield, BookHeart, Mic, Lightbulb, Code, HandHeart, GraduationCap } from 'lucide-react'

// LideresExtraidos do chat WhatsApp da Diretoria
const lideres = [
  {
    nome: 'Lucas Machado Lima',
    cargo: 'Presidente',
    telefone: '+557199914531',
    descricao: 'Liderança geral do D.A., responsável por representar o Diretório e coordenar as atividades.',
    icon: <Crown className="w-6 h-6" />,
    cor: 'bg-yellow-500',
  },
  {
    nome: 'Iris Lopes',
    cargo: 'Vice-Presidente',
    telefone: '+557591266558',
    descricao: 'Apoia o Presidente e assume em suas ausências. Coordenação de projetos estratégicos.',
    icon: <Shield className="w-6 h-6" />,
    cor: 'bg-blue-500',
  },
  {
    nome: 'André Juarez',
    cargo: 'Secretário-Geral',
    telefone: '+557199319660',
    descricao: 'Responsável pela documentação, atas e organização interna do D.A.',
    icon: <BookHeart className="w-6 h-6" />,
    cor: 'bg-green-500',
  },
  {
    nome: 'Evelin',
    cargo: 'Tesoureiro',
    telefone: '+557491541394',
    descricao: 'Gestão financeira e prestação de contas do Diretório Acadêmico.',
    icon: <Award className="w-6 h-6" />,
    cor: 'bg-purple-500',
  },
  {
    nome: 'Vince',
    cargo: 'Coordenador de Assuntos Acadêmicos',
    telefone: null,
    descricao: 'Assuntos relacionados a disciplinas, professores, avaliações e qualidade de ensino.',
    icon: <GraduationCap className="w-6 h-6" />,
    cor: 'bg-indigo-500',
  },
  {
    nome: 'Brunna',
    cargo: 'Coordenadora de Divulgação e RP',
    telefone: '+557199463003',
    descricao: 'Comunicação, redes sociais, marketing e imagem do D.A. junto aos estudantes.',
    icon: <Mic className="w-6 h-6" />,
    cor: 'bg-pink-500',
  },
  {
    nome: 'Deivison Santana',
    cargo: 'Coordenador de Tecnologia e Inovação',
    telefone: '+557581231019',
    descricao: 'Desenvolvimento de sistemas, sites, automações e soluções tecnológicas para o curso.',
    icon: <Code className="w-6 h-6" />,
    cor: 'bg-cyan-500',
  },
  {
    nome: 'Flávio',
    cargo: 'Coordenador de Extensão e Projetos',
    telefone: '+557583402662',
    descricao: 'Projetos sociais, parcerias externas e ações de extensão com a comunidade.',
    icon: <HandHeart className="w-6 h-6" />,
    cor: 'bg-orange-500',
  },
]

// Cargos vagos
const cargosVagos = [
  {
    cargo: 'Coordenador de Estágios e Mercado',
    descricao: 'Conexão com empresas, vagas de estágio e mercado de trabalho.',
  },
  {
    cargo: 'Coordenador de Inclusão e Permanência Estudantil',
    descricao: 'Ações de inclusão, permanência estudantil e apoio aos estudantes em vulnerabilidade.',
  },
]

export default function Lideres() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <Users className="w-10 h-10 inline mr-2 text-ufrb-green" />
            Lideres da Diretoria
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Gestão 2026 do Diretório Acadêmico do Curso de Sistemas de Informação - UFRB
          </p>
        </div>

        {/* Lideres Ativos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-3 h-3 bg-ufrb-green rounded-full mr-3"></span>
            Diretoria Ativa
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lideres.map((lider, index) => (
              <motion.div
                key={lider.cargo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 card-hover"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-14 h-14 ${lider.cor} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                    {lider.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{lider.nome}</h3>
                    <p className={`${lider.cor} text-white text-xs px-2 py-1 rounded-full inline-block mt-1`}>
                      {lider.cargo}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{lider.descricao}</p>
                {lider.telefone && (
                  <a
                    href={`https://wa.me/55${lider.telefone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-green-600 hover:text-green-700"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.974 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Falar no WhatsApp
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Cargos Vagos */}
        {cargosVagos.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
              Cargos Vagos - Participate!
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cargosVagos.map((vaga) => (
                <motion.div
                  key={vaga.cargo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6"
                >
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900">{vaga.cargo}</h3>
                      <p className="text-gray-600 text-sm mt-1">{vaga.descricao}</p>
                      <a
                        href="https://wa.me/5575981231019"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-sm text-green-600 font-medium hover:underline"
                      >
                        → Quero me candidatar!
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="hero-gradient rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Quer fazer parte da Diretoria?</h2>
          <p className="text-gray-200 mb-6">
            Entre em contato conosco e participe ativamente do movimento estudantil!
          </p>
          <a
            href="https://wa.me/5575981231019"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-ufrb-green font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.974 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar com a Diretoria
          </a>
        </section>
      </div>
    </div>
  )
}
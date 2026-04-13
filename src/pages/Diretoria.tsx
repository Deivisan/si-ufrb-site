import { motion } from 'framer-motion'
import { Users, Mail } from 'lucide-react'
import { diretoria, cargosVagos, infoDA, infoCurso } from '../data'

export default function Diretoria() {
  const membrosAtivos = diretoria.filter(m => m.nome !== 'VAGO')

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <Users className="w-10 h-10 inline mr-2 text-ufrb-green" />
            Nossa Diretoria
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Diretoria do {infoDA.nome} {infoDA.sigla} - Gestão 2026
          </p>
        </div>

        {/* Membros Ativos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-3 h-3 bg-ufrb-green rounded-full mr-3"></span>
            Membros Ativos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {membrosAtivos.map((membro, index) => (
              <motion.div
                key={membro.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-ufrb-green to-ufrb-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">
                      {membro.nome.split(' ')[0].charAt(0)}{membro.nome.split(' ')[1]?.charAt(0) || ''}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{membro.nome}</h3>
                    <p className="text-ufrb-green font-medium">{membro.cargo}</p>
                    {membro.email && (
                      <a href={`mailto:${membro.email}`} className="flex items-center text-sm text-gray-500 hover:text-ufrb-green mt-2">
                        <Mail className="w-4 h-4 mr-1" />
                        {membro.email}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Cargos Vagos */}
        {cargosVagos.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
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
                  <AlertIcon className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                  <h3 className="font-semibold text-gray-900">{cargo}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Interessado? Entre em contato com a Diretoria
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Info do D.A */}
        <section className="bg-ufrb-secondary text-white rounded-2xl p-8">
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

function AlertIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  )
}
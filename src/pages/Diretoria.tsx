import { motion } from 'framer-motion'
import { Users, AlertTriangle, Crown, Shield, BookHeart, Award, GraduationCap, Mic, Code, HandHeart, MessageCircle, Camera } from 'lucide-react'
import { cargosVagos, infoDA, infoCurso } from '../data'
import { useTheme } from '../contexts/ThemeContext'

const WHATSAPP_TI = '5575981231019'
const MSG_SUBIR_FOTO = 'Estou subindo agora a foto, vou te enviar.'

// Dados completos da diretoria com telefones
const diretoriaCompleta = [
  {
    nome: 'Lucas Machado Lima',
    cargo: 'Presidente',
    telefone: '7199914531',
    descricao: 'Liderança geral do D.A., representação dos estudantes e coordenação de todas as atividades.',
    icon: <Crown className="w-8 h-8" />,
    cor: 'bg-yellow-500',
  },
  {
    nome: 'Iris Lopes',
    cargo: 'Vice-Presidente',
    telefone: '7591266558',
    descricao: 'Apoia a presidência e assume nas ausências. Coordenação de projetos estratégicos e reuniões.',
    icon: <Shield className="w-8 h-8" />,
    cor: 'bg-blue-500',
  },
  {
    nome: 'André Juarez',
    cargo: 'Secretário-Geral',
    telefone: '7199319660',
    descricao: 'Responsável pela documentação, atas de reuniões e organização interna do Diretório.',
    icon: <BookHeart className="w-8 h-8" />,
    cor: 'bg-green-500',
  },
  {
    nome: 'Evelin Miranda',
    cargo: 'Tesoureiro',
    telefone: '7491541394',
    descricao: 'Gestão financeira transparente e prestação de contas de todos os recursos do D.A.',
    icon: <Award className="w-8 h-8" />,
    cor: 'bg-purple-500',
  },
  {
    nome: 'Vince Sales',
    cargo: 'Assuntos Acadêmicos',
    telefone: null,
    descricao: 'Interface entre alunos, professores e colegiado. Disciplinas, avaliações e qualidade de ensino.',
    icon: <GraduationCap className="w-8 h-8" />,
    cor: 'bg-indigo-500',
  },
  {
    nome: 'Brunna Moura',
    cargo: 'Divulgação e RP',
    telefone: '7582551854',
    descricao: 'Comunicação oficial, redes sociais, marketing e imagem do D.A. junto aos estudantes.',
    icon: <Mic className="w-8 h-8" />,
    cor: 'bg-pink-500',
  },
  {
    nome: 'Deivison Santana',
    cargo: 'Tecnologia e Inovação',
    telefone: '7581231019',
    descricao: 'Desenvolvimento de sistemas, sites, automações e soluções tecnológicas para o D.A. e alunos.',
    icon: <Code className="w-8 h-8" />,
    cor: 'bg-cyan-500',
  },
  {
    nome: 'Flávio Augusto',
    cargo: 'Extensão e Projetos',
    telefone: '7583402662',
    descricao: 'Projetos sociais, parcerias externas, eventos e ações de extensão com a comunidade.',
    icon: <HandHeart className="w-8 h-8" />,
    cor: 'bg-orange-500',
  },
  {
    nome: 'Iuri Silva Motta',
    cargo: '1º Secretário Feira de Santana',
    telefone: '7199463003',
    descricao: 'Representação e suporte aos alunos do polo de Feira de Santana.',
    icon: <Users className="w-8 h-8" />,
    cor: 'bg-teal-500',
  },
  {
    nome: 'Cássio Figueredo Dourado',
    cargo: '2º Secretário Ipirá',
    telefone: null,
    descricao: 'Representação e suporte aos alunos do polo de Ipirá.',
    icon: <Users className="w-8 h-8" />,
    cor: 'bg-rose-500',
  },
  {
    nome: 'Vileri',
    cargo: '3º Secretário Santo Amaro',
    telefone: null,
    descricao: 'Representação e suporte aos alunos do polo de Santo Amaro.',
    icon: <Users className="w-8 h-8" />,
    cor: 'bg-lime-500',
  },
  {
    nome: 'Gustavo Bruno',
    cargo: 'Estágios e Mercado de Trabalho',
    telefone: null,
    descricao: 'Parcerias com empresas, vagas de estágio e oportunidades profissionais para os alunos.',
    icon: <Award className="w-8 h-8" />,
    cor: 'bg-amber-500',
  },
  {
    nome: 'Luiz Alberto Silva Santos',
    cargo: 'Inclusão e Permanência Estudantil',
    telefone: '7499893083',
    descricao: 'Ações de inclusão, acessibilidade, apoio psicológico e combate a evasão escolar.',
    foto: '/fotos/luiz-alberto.jpg',
    icon: <Users className="w-8 h-8" />,
    cor: 'bg-emerald-500',
  },
]

export default function Diretoria() {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen py-16" style={{ background: 'linear-gradient(135deg, #f0f0ff 0%, #e8e0f8 100%)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Lista Vertical */}
        <section className="mb-12">
          <div className="space-y-4">
            {diretoriaCompleta.map((membro, index) => (
              <motion.div
                key={membro.nome}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06 }}
                className="rounded-xl shadow-md p-6 card-hover"
                style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f0ff 100%)' }}
              >
                <div className="flex items-start space-x-5 mb-4">
                  {membro.foto ? (
                    <img
                      src={membro.foto}
                      alt={membro.nome}
                      className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 border-gray-200"
                    />
                  ) : (
                    <div className={`w-16 h-16 ${membro.cor} rounded-full flex items-center justify-center text-white flex-shrink-0 relative`}>
                      {membro.icon}
                    </div>
                  )}

                  <div className="flex-1">
                    <h3 className="text-xl font-bold" style={{ color: 'var(--color-primary-dark)' }}>{membro.nome}</h3>
                    <p className={`text-sm text-white px-3 py-0.5 rounded-full inline-block mt-1 ${membro.cor}`}>
                      {membro.cargo}
                    </p>
                  </div>
                </div>

                <p className="text-sm mb-4" style={{ color: '#4b5563' }}>{membro.descricao}</p>

                {/* WhatsApp Contact */}
                {membro.telefone && (
                  <a
                    href={`https://wa.me/55${membro.telefone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-600 font-medium hover:text-green-700 mb-2"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Entrar em contato pelo WhatsApp
                  </a>
                )}

                {/* Botão de subir foto (só aparece se NÃO tem foto) */}
                {!membro.foto && (
                  <a
                    href={`https://wa.me/55${WHATSAPP_TI}?text=${encodeURIComponent(MSG_SUBIR_FOTO)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-lg border transition-colors mt-2"
                    style={{ borderColor: '#d1d5db', color: '#6b7280' }}
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    Sou essa pessoa, subir foto
                  </a>
                )}
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

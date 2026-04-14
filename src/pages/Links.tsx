import { motion } from 'framer-motion'
import { ExternalLink, BookOpen, User, Globe, GraduationCap, Calendar, Utensils, Code, Library, Mail, Phone, MapPin, MessageCircle, Play, Vote, Video } from 'lucide-react'
import { linksUteis, infoCurso, infoDA, gruposPolo, coordenacao } from '../data'
import { useTheme } from '../contexts/ThemeContext'

// Mapeamento de ícones
const getIcon = (iconName: string) => {
  const icons: Record<string, React.ReactNode> = {
    'book-open': <BookOpen className="w-8 h-8" />,
    'user': <User className="w-8 h-8" />,
    'globe': <Globe className="w-8 h-8" />,
    'graduation-cap': <GraduationCap className="w-8 h-8" />,
    'calendar': <Calendar className="w-8 h-8" />,
    'utensils': <Utensils className="w-8 h-8" />,
    'code': <Code className="w-8 h-8" />,
    'library': <Library className="w-8 h-8" />,
    'play': <Play className="w-8 h-8" />,
    'vote': <Vote className="w-8 h-8" />,
    'video': <Video className="w-8 h-8" />,
  }
  return icons[iconName] || <Globe className="w-8 h-8" />
}

export default function Links() {
  const { theme } = useTheme()
  const categorias = [
    { nome: 'Plataformas Acadêmicas', links: linksUteis.filter(l => ['1','2','3','4'].includes(l.id)), cor: theme.primary },
    { nome: 'Recursos UFRB', links: linksUteis.filter(l => ['5','6','7','8','9','10','11'].includes(l.id)), cor: theme.secondary },
    { nome: 'Programação', links: linksUteis.filter(l => l.id === '12'), cor: '#2563eb' },
  ]

  return (
    <div className="min-h-screen py-16" style={{ background: 'linear-gradient(135deg, #f0fdfa 0%, #f0f0ff 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>
            <Globe className="w-10 h-10 inline mr-2" style={{ color: theme.primary }} />
            Links Úteis
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#4b5563' }}>
            Acesso rápido aos principais sistemas e serviços da UFRB e do curso
          </p>
        </div>

        {/* Categorias */}
        {categorias.map((categoria, catIndex) => (
          <section key={categoria.nome} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: 'var(--color-primary-dark)' }}>
              <span className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: categoria.cor }}></span>
              {categoria.nome}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoria.links.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                  className="rounded-xl shadow-md p-6 card-hover group"
                  style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%)' }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: categoria.cor }}
                    >
                      {getIcon(link.icon)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold" style={{ color: 'var(--color-primary-dark)' }}>{link.titulo}</h3>
                        <ExternalLink className="w-4 h-4" style={{ color: '#9ca3af' }} />
                      </div>
                      <p className="text-sm mt-1" style={{ color: '#4b5563' }}>{link.descricao}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </section>
        ))}

        {/* Grupos WhatsApp por Polo */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: 'var(--color-primary-dark)' }}>
            <span className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: '#22c55e' }}></span>
            Grupos WhatsApp por Polo
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {gruposPolo.map((grupo, index) => (
              <motion.a
                key={grupo.polo}
                href={grupo.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl shadow-md p-6 card-hover group"
                style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%)' }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#22c55e' }}>
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold" style={{ color: 'var(--color-primary-dark)' }}>{grupo.polo}</h3>
                    <p className="text-sm mt-1" style={{ color: '#4b5563' }}>Secretário: {grupo.secretario}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Info de Contato */}
        <section className="rounded-2xl shadow-md p-8" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%)' }}>
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-primary-dark)' }}>Contato do Curso</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0"
                style={{ backgroundColor: theme.primary }}
              >
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: 'var(--color-primary-dark)' }}>Endereço</h3>
                <p className="text-sm" style={{ color: '#4b5563' }}>{infoCurso.endereco}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0"
                style={{ backgroundColor: theme.secondary }}
              >
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: 'var(--color-primary-dark)' }}>Telefone</h3>
                <p className="text-sm" style={{ color: '#4b5563' }}>{infoCurso.telefone}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: 'var(--color-secondary)' }}>
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: 'var(--color-primary-dark)' }}>Email</h3>
                <p className="text-sm" style={{ color: '#4b5563' }}>{infoCurso.email}</p>
              </div>
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--color-primary-dark)' }}>Coordenador do Curso</h3>
              <a href={`mailto:${coordenacao.coordenador.email}`} className="text-sm hover:underline" style={{ color: theme.primary }}>
                {coordenacao.coordenador.nome} - {coordenacao.coordenador.email}
              </a>
              <p className="text-sm mt-1" style={{ color: '#4b5563' }}>Atendimento: {coordenacao.coordenador.atendimento}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--color-primary-dark)' }}>E-mails Úteis</h3>
              <p className="text-sm" style={{ color: '#4b5563' }}>Colegiado: <a href={`mailto:${coordenacao.colegiado}`} className="hover:underline" style={{ color: theme.primary }}>{coordenacao.colegiado}</a></p>
              <p className="text-sm">SAPSI: <a href={`mailto:${coordenacao.sapsi}`} className="hover:underline" style={{ color: theme.primary }}>{coordenacao.sapsi}</a></p>
              <p className="text-sm">Acadêmico: <a href={`mailto:${coordenacao.academico}`} className="hover:underline" style={{ color: theme.primary }}>{coordenacao.academico}</a></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { ExternalLink, BookOpen, User, Globe, GraduationCap, Calendar, Utensils, Code, Library, Mail, Phone, MapPin } from 'lucide-react'
import { linksUteis, infoCurso, infoDA } from '../data'
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
  }
  return icons[iconName] || <Globe className="w-8 h-8" />
}

export default function Links() {
  const { theme } = useTheme()
  const categorias = [
    { nome: 'Sistemas UFRB', links: linksUteis.slice(0, 5), cor: theme.primary },
    { nome: 'Programação', links: [linksUteis[5]], cor: '#2563eb' },
    { nome: 'Contato Institucional', links: [
      { id: 'contato-1', titulo: 'Secretaria do Curso', url: `mailto:${infoCurso.email}`, descricao: 'secretaria@ufrb.edu.br', icon: 'mail' },
      { id: 'contato-2', titulo: 'Diretório Acadêmico', url: `mailto:${infoDA.email}`, descricao: infoDA.email, icon: 'mail' },
    ], cor: '#374151' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <Globe className="w-10 h-10 inline mr-2" style={{ color: theme.primary }} />
            Links Úteis
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Acesso rápido aos principais sistemas e serviços da UFRB e do curso
          </p>
        </div>

        {/* Categorias */}
        {categorias.map((categoria, catIndex) => (
          <section key={categoria.nome} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
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
                  className="bg-white rounded-xl shadow-md p-6 card-hover group"
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
                        <h3 className="text-lg font-semibold text-gray-900">{link.titulo}</h3>
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{link.descricao}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </section>
        ))}

        {/* Info de Contato */}
        <section className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contato do Curso</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0"
                style={{ backgroundColor: theme.primary }}
              >
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Endereço</h3>
                <p className="text-gray-600 text-sm">{infoCurso.endereco}</p>
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
                <h3 className="font-semibold text-gray-900">Telefone</h3>
                <p className="text-gray-600 text-sm">{infoCurso.telefone}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600 text-sm">{infoCurso.email}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
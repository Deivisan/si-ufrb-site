import { GraduationCap, Mail, MapPin, Phone } from 'lucide-react'
import { infoDA, infoCurso, redesSociaisUFRB } from '../data'
import { useTheme } from '../contexts/ThemeContext'

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: theme.primary }}
              >
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">{infoDA.nome}</span>
                <span className="text-sm text-gray-400 ml-2">{infoDA.sigla}</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Representando os estudantes do curso de Sistemas de Informação da UFRB.
              <br />
              Campus Cruz das Almas.
            </p>
            <div className="flex space-x-4">
              <a 
                href={infoDA.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:transition-colors"
                style={{ color: theme.primary }}
              >
                Instagram
              </a>
              <a 
                href={infoDA.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:transition-colors"
                style={{ color: theme.primary }}
              >
                Facebook
              </a>
              <a 
                href={infoDA.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:transition-colors"
                style={{ color: theme.primary }}
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{infoCurso.endereco}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{infoCurso.telefone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{infoDA.email}</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              {redesSociaisUFRB.map((item) => (
                <li key={item.nome}>
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:transition-colors"
                    style={{ color: theme.primary }}
                  >
                    {item.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {infoDA.nome} - {infoCurso.sigla} {infoCurso.university}. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">
            Desenvolvido com 💚 pela Coordenação de Tecnologia e Inovação
          </p>
        </div>
      </div>
    </footer>
  )
}

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, Send, ArrowRight } from 'lucide-react'
import { infoDA, infoCurso } from '../data'
import { useState } from 'react'

// WhatsApp do Coordenador de TI (Deivison Santana)
const whatsAppTI = 'https://wa.me/5575981231019'

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    tipo: 'duvida',
    mensagem: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode implementar o envio real do formulário
    alert('Mensagem enviada com sucesso! Em breve a Diretoria entrará em contato.')
    setFormData({ nome: '', email: '', tipo: 'duvida', mensagem: '' })
  }

  const contatoOpcoes = [
    {
      icon: <Mail className="w-6 h-6" />,
      titulo: 'Email',
      descricao: infoDA.email,
      link: `mailto:${infoDA.email}`,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      titulo: 'Telefone',
      descricao: infoCurso.telefone,
      link: `tel:${infoCurso.telefone}`,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      titulo: 'Localização',
      descricao: infoCurso.endereco,
      link: 'https://www.ufrb.edu.br/',
    },
  ]

  const redesSociais = [
    {
      icon: <Instagram className="w-6 h-6" />,
      nome: 'Instagram',
      link: infoDA.instagram,
      cor: 'bg-pink-600',
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      nome: 'Facebook',
      link: infoDA.facebook,
      cor: 'bg-blue-600',
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      nome: 'WhatsApp',
      link: infoDA.whatsapp,
      cor: 'bg-green-500',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <MessageCircle className="w-10 h-10 inline mr-2 text-ufrb-green" />
            Fale Conosco
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entre em contato com a Diretoria do D.A. SI UFRB. Estamos aqui para ajudar!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h2>
            
            {/* Opções de Contato */}
            <div className="space-y-4 mb-8">
              {contatoOpcoes.map((opcao, index) => (
                <motion.a
                  key={opcao.titulo}
                  href={opcao.link}
                  target={opcao.titulo === 'Localização' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-ufrb-green rounded-full flex items-center justify-center text-white flex-shrink-0">
                    {opcao.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{opcao.titulo}</h3>
                    <p className="text-gray-600 text-sm">{opcao.descricao}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp Coordenador de TI */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Fale Direto pelo WhatsApp</h3>
              <a
                href={whatsAppTI}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <MessageCircle className="w-8 h-8" />
                  <div>
                    <p className="font-semibold">Coordenador de Tecnologia</p>
                    <p className="text-sm text-green-100">(75) 98123-1019</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-xs text-gray-500 mt-2">
                Tire dúvidas, sugira melhorias ou fale diretamente com o Coordenador de TI da Diretoria
              </p>
            </div>

            {/* Redes Sociais */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                {redesSociais.map((rede) => (
                  <a
                    key={rede.nome}
                    href={rede.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${rede.cor} text-white p-3 rounded-full hover:opacity-90 transition-opacity`}
                  >
                    {rede.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Horário de Atendimento */}
            <div className="bg-ufrb-secondary text-white rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Horário de Atendimento</h3>
              <ul className="space-y-2 text-gray-300">
                <li>📅 Segunda a Sexta</li>
                <li>⏰ 08h00 às 12h00 | 14h00 às 18h00</li>
                <li>📍 Sala do D.A. SI - Campus Cruz das Almas</li>
              </ul>
            </div>

            {/* Ideias e Sugestões */}
            <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-ufrb-green rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">💡</span>
                Ideias e Sugestões
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Tem uma ideia para melhorar o curso, o D.A. ou quer contribuir de alguma forma? 
                Sua voz é importante! Clique no botão abaixo e envie sua sugestão diretamente pelo WhatsApp.
              </p>
              <a
                href={whatsAppTI}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Enviar Ideia pelo WhatsApp
              </a>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h2>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufrb-green focus:border-transparent"
                  placeholder="Digite seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufrb-green focus:border-transparent"
                  placeholder="seu.email@estudante.ufrb.edu.br"
                />
              </div>

              <div>
                <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Mensagem
                </label>
                <select
                  id="tipo"
                  value={formData.tipo}
                  onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufrb-green focus:border-transparent"
                >
                  <option value="duvida">Dúvida</option>
                  <option value="sugestao">Sugestão</option>
                  <option value="reclamacao">Reclamação</option>
                  <option value="elogio">Elogio</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufrb-green focus:border-transparent resize-none"
                  placeholder="Digite sua mensagem..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-ufrb-green text-white font-semibold rounded-lg hover:bg-ufrb-green-light transition-colors"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
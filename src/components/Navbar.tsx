import { Link, useLocation } from 'react-router-dom'
import { GraduationCap, Menu, X } from 'lucide-react'
import { useState } from 'react'
import ThemePicker from './ThemePicker'
import { useTheme } from '../contexts/ThemeContext'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/diretoria', label: 'Diretoria' },
  { to: '/lideres', label: 'Líderes' },
  { to: '/avisos', label: 'Avisos' },
  { to: '/links', label: 'Links Úteis' },
  { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { theme } = useTheme()

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: theme.primary }}
            >
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900">DA SI</span>
              <span className="text-sm text-gray-500 ml-1">UFRB</span>
            </div>
          </Link>

          {/* Desktop Menu + Theme Picker */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                style={location.pathname === link.to ? { backgroundColor: theme.primary } : {}}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-2 pl-2 border-l border-gray-200">
              <ThemePicker />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium ${
                  location.pathname === link.to
                    ? 'text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                style={location.pathname === link.to ? { backgroundColor: theme.primary } : {}}
              >
                {link.label}
              </Link>
            ))}
            <div className="py-3 border-t border-gray-100">
              <ThemePicker />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

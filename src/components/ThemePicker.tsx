import { useState, useRef, useEffect } from 'react'
import { Check, ChevronDown, Settings } from 'lucide-react'
import { useTheme, themes, ThemeName } from '../contexts/ThemeContext'

export default function ThemePicker() {
  const { themeName, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentTheme = themes[themeName]
  const themeKeys = Object.keys(themes) as ThemeName[]

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Selecionar tema"
        title="Alterar tema"
      >
        <Settings className="w-5 h-5" style={{ color: themeName === 'default' ? '#009c3b' : currentTheme.primary }} />
        <span className="hidden sm:inline text-sm font-medium text-gray-700">
          Temas
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
          <div className="px-3 py-2 border-b border-gray-100">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Escolher Tema
            </span>
          </div>
          <div className="max-h-64 overflow-y-auto">
            {themeKeys.map((key) => {
              const theme = themes[key]
              const isSelected = key === themeName
              return (
                <button
                  key={key}
                  onClick={() => {
                    setTheme(key)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 transition-colors ${
                    isSelected ? 'bg-gray-50' : ''
                  }`}
                >
                  <div
                    className="w-6 h-6 rounded-full flex-shrink-0"
                    style={{ background: theme.primary }}
                  />
                  <div className="flex-1 text-left">
                    <span className={`text-sm font-medium ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                      {theme.label}
                    </span>
                  </div>
                  {isSelected && (
                    <Check className="w-4 h-4" style={{ color: theme.primary }} />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

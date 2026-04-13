import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type ThemeName = 'default' | 'portal' | 'dark' | 'teal' | 'purple' | 'orange' | 'pink' | 'cyan'

export interface Theme {
  name: ThemeName
  label: string
  primary: string
  primaryLight: string
  primaryDark: string
  secondary: string
  accent: string
  heroGradient: string
}

export const themes: Record<ThemeName, Theme> = {
  default: {
    name: 'default',
    label: 'Azul UFRB',
    primary: '#009c3b',
    primaryLight: '#00c75b',
    primaryDark: '#007a2e',
    secondary: '#003366',
    accent: '#f5f5f5',
    heroGradient: 'linear-gradient(135deg, #009c3b 0%, #003366 100%)',
  },
  portal: {
    name: 'portal',
    label: 'Portal Claro',
    primary: '#2563eb',
    primaryLight: '#3b82f6',
    primaryDark: '#1d4ed8',
    secondary: '#64748b',
    accent: '#f8fafc',
    heroGradient: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
  },
  dark: {
    name: 'dark',
    label: 'Modo Escuro',
    primary: '#8b5cf6',
    primaryLight: '#a78bfa',
    primaryDark: '#7c3aed',
    secondary: '#1e293b',
    accent: '#0f172a',
    heroGradient: 'linear-gradient(135deg, #8b5cf6 0%, #4c1d95 100%)',
  },
  teal: {
    name: 'teal',
    label: 'Verde Esportivo',
    primary: '#0d9488',
    primaryLight: '#14b8a6',
    primaryDark: '#0f766e',
    secondary: '#134e4a',
    accent: '#f0fdfa',
    heroGradient: 'linear-gradient(135deg, #0d9488 0%, #115e59 100%)',
  },
  purple: {
    name: 'purple',
    label: 'Roxo Criativo',
    primary: '#9333ea',
    primaryLight: '#a855f7',
    primaryDark: '#7e22ce',
    secondary: '#581c87',
    accent: '#faf5ff',
    heroGradient: 'linear-gradient(135deg, #9333ea 0%, #6b21a8 100%)',
  },
  orange: {
    name: 'orange',
    label: 'Laranja Energético',
    primary: '#ea580c',
    primaryLight: '#f97316',
    primaryDark: '#c2410c',
    secondary: '#7c2d12',
    accent: '#fff7ed',
    heroGradient: 'linear-gradient(135deg, #ea580c 0%, #9a3412 100%)',
  },
  pink: {
    name: 'pink',
    label: 'Rosa Vibrante',
    primary: '#db2777',
    primaryLight: '#ec4899',
    primaryDark: '#be185d',
    secondary: '#831843',
    accent: '#fdf2f8',
    heroGradient: 'linear-gradient(135deg, #db2777 0%, #9d174d 100%)',
  },
  cyan: {
    name: 'cyan',
    label: 'Ciano Tech',
    primary: '#0891b2',
    primaryLight: '#06b6d4',
    primaryDark: '#0e7490',
    secondary: '#164e63',
    accent: '#ecfeff',
    heroGradient: 'linear-gradient(135deg, #0891b2 0%, #155e75 100%)',
  },
}

interface ThemeContextType {
  theme: Theme
  themeName: ThemeName
  setTheme: (name: ThemeName) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const STORAGE_KEY = 'si-ufrb-theme'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>('default')

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeName | null
    if (saved && themes[saved]) {
      setThemeName(saved)
    }
  }, [])

  useEffect(() => {
    const theme = themes[themeName]
    const root = document.documentElement
    
    root.style.setProperty('--color-primary', theme.primary)
    root.style.setProperty('--color-primary-light', theme.primaryLight)
    root.style.setProperty('--color-primary-dark', theme.primaryDark)
    root.style.setProperty('--color-secondary', theme.secondary)
    root.style.setProperty('--color-accent', theme.accent)
    root.style.setProperty('--hero-gradient', theme.heroGradient)
    
    localStorage.setItem(STORAGE_KEY, themeName)
  }, [themeName])

  const value: ThemeContextType = {
    theme: themes[themeName],
    themeName,
    setTheme: (name) => setThemeName(name),
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

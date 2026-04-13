import { useTheme } from '../contexts/ThemeContext'

// Hook wrapper para uso mais simples nos componentes
export function useCurrentTheme() {
  return useTheme()
}

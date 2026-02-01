import { useContext } from 'react'

import { ThemeContext } from '@/contexts'
import type { Theme } from '@/types'

export function useTheme(): Theme {
  const theme = useContext(ThemeContext)

  if (!theme) {
    throw new Error(
      '[useTheme] Application must be wrapped in ThemeProvider to get access to this hook.'
    )
  }

  return theme
}

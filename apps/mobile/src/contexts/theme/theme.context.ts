import { createContext } from 'react'

import type { ThemeContextData } from './theme.types'

export const ThemeContext = createContext<ThemeContextData | undefined>(
  undefined
)

import { useContext } from 'react'
import type { ColorSchemeName } from 'react-native'

import { ThemeContext } from '@/contexts'
import type { Theme } from '@/types'

export function useTheme(): Theme & {
  select<T>(values: Record<Theme['name'], T>): T
  set(name: ColorSchemeName | null): void
} {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error(
      '[useTheme] Application must be wrapped in ThemeProvider to get access to this hook.'
    )
  }

  const { theme, set } = context

  return {
    ...theme,
    select: <T>(values: Record<Theme['name'], T>) => values[theme.name],
    set
  }
}

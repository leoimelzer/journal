import { useMemo } from 'react'
import { useColorScheme } from 'react-native'

import { colors } from '@/constants'
import type { ThemeName } from '@/types'
import type { Theme } from '@/types/theme'

const DEFAULT_COLOR_SCHEME_NAME = 'light'

export function useTheme() {
  const colorScheme = useColorScheme()

  const colorSchemeName = useMemo(
    () => colorScheme ?? DEFAULT_COLOR_SCHEME_NAME,
    [colorScheme]
  )

  const theme: Theme = useMemo(
    () => ({
      name: colorSchemeName,
      colors: colors[colorSchemeName],
      select: (values: Record<ThemeName, any>) => values[colorSchemeName]
    }),
    [colorSchemeName]
  )

  return theme
}

import { useMemo } from 'react'
import type { ColorSchemeName } from 'react-native'
import { useColorScheme } from 'react-native'

import { colors } from '@/constants'
import type { Theme } from '@/types'

export function useTheme() {
  const colorScheme = useColorScheme()

  const theme: {
    name: NonNullable<ColorSchemeName>
    colors: Theme
  } = useMemo(() => {
    if (colorScheme === 'dark') {
      return {
        name: colorScheme,
        colors: colors.dark
      }
    }

    return {
      name: 'light',
      colors: colors.light
    }
  }, [colorScheme])

  return theme
}

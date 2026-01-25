import { useMemo } from 'react'
import { useColorScheme } from 'react-native'

import { colors } from '@/constants'
import type { Colors, Theme } from '@/types'

export function useTheme() {
  const colorScheme = useColorScheme()

  const theme: {
    name: Theme
    colors: Colors
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

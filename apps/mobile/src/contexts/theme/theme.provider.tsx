import { StatusBar } from 'expo-status-bar'
import React, { useMemo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { useColorScheme } from 'react-native'

import { darkTheme, lightTheme } from '@/constants'
import { useSettings } from '@/hooks'

import { ThemeContext } from './theme.context'
import type { ThemeContextData } from './theme.types'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const colorScheme = useColorScheme()
  const settings = useSettings()

  const theme = useMemo(() => {
    const stored = settings.theme.current

    if (stored === 'dark') {
      return darkTheme
    }

    if (stored === 'light') {
      return lightTheme
    }

    return colorScheme === 'dark' ? darkTheme : lightTheme
  }, [settings.theme, colorScheme])

  useEffect(() => {
    ;(async () => {
      const stored = settings.theme.get()

      if (stored === 'dark' || stored === 'light') {
        settings.theme.set(stored)
        return
      }

      settings.theme.set(null)
    })()
  }, [settings.theme])

  const set: ThemeContextData['set'] = name => {
    settings.theme.set(name)
  }

  const select: ThemeContextData['select'] = values => values[theme.name]

  return (
    <ThemeContext.Provider value={{ theme, set, select }}>
      {children}

      <StatusBar style={theme.name === 'dark' ? 'light' : 'dark'} />
    </ThemeContext.Provider>
  )
}

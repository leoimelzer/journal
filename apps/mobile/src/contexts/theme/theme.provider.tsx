import { StatusBar } from 'expo-status-bar'
import React, { useMemo, useEffect } from 'react'
import type { PropsWithChildren } from 'react'
import { useColorScheme } from 'react-native'

import { darkTheme, lightTheme } from '@/constants'
import { useSettings } from '@/hooks'

import { ThemeContext } from './theme.context'

export function ThemeProvider(props: PropsWithChildren) {
  const { children } = props

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

  return (
    <ThemeContext.Provider value={theme}>
      {children}

      <StatusBar style={theme.dark ? 'light' : 'dark'} />
    </ThemeContext.Provider>
  )
}

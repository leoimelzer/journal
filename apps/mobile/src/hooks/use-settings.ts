import { useCallback, useState, useEffect } from 'react'
import { Appearance, type ColorSchemeName } from 'react-native'

import { storage } from '@/storage'

const COLOR_SCHEME_STORAGE_KEY = '@settings/color_scheme'

export function useSettings() {
  const [currentTheme, setCurrentTheme] = useState<ColorSchemeName | 'auto'>(
    'auto'
  )

  useEffect(() => {
    const stored = storage.getString(COLOR_SCHEME_STORAGE_KEY) || 'auto'
    setCurrentTheme(stored as ColorSchemeName | 'auto')
  }, [])

  const getTheme = useCallback(() => {
    const stored = storage.getString(COLOR_SCHEME_STORAGE_KEY) || 'auto'
    return stored
  }, [])

  const setTheme = useCallback((name: ColorSchemeName) => {
    const value = name ?? 'auto'
    storage.set(COLOR_SCHEME_STORAGE_KEY, value)
    setCurrentTheme(value)
    Appearance.setColorScheme(name)
  }, [])

  return {
    theme: {
      current: currentTheme,
      get: getTheme,
      set: setTheme
    }
  }
}

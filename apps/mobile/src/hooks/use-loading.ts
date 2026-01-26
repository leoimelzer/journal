import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useFonts } from 'expo-font'
import { useEffect, useMemo } from 'react'

import { locale } from '@/i18n'
import { useSessionStore } from '@/stores'
import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
} from '@expo-google-fonts/inter'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)
dayjs.locale(locale.languageTag)

export function useLoading() {
  const initialize = useSessionStore(state => state.initialize)

  const sessionLoading = useSessionStore(state => state.loading)

  const [fonts] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    ...MaterialCommunityIcons.font
  })

  const loading = useMemo(
    () => !fonts || sessionLoading,
    [fonts, sessionLoading]
  )

  useEffect(() => {
    initialize().catch(error => {
      console.log('error', error)
    })
  }, [initialize])

  return { loading }
}

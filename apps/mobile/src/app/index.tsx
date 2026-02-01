import { Redirect } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'

import { useLoading } from '@/hooks'
import { useSessionStore } from '@/stores'

export default function App() {
  const user = useSessionStore(state => state.user)

  const { loading } = useLoading()

  useEffect(() => {
    if (loading) {
      return
    }

    SplashScreen.hideAsync()
  }, [loading])

  if (loading) {
    return null
  }

  if (!user) {
    // TODO: Descomentar redirect para sign-in
    // return <Redirect href="/sign-in" />
    return <Redirect href="/sample" />
  }

  return <Redirect href="/sample" />
}

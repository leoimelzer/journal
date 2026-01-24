import { Redirect, Stack } from 'expo-router'

import { useSessionStore } from '@/stores'

export default function AuthLayout() {
  const user = useSessionStore(state => state.user)

  if (user) {
    return <Redirect href="/sign-out" />
  }

  return <Stack screenOptions={{ headerShown: false }} />
}

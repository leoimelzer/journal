import { Redirect, Stack } from 'expo-router'

import { useSessionStore } from '@/stores'

export default function AppLayout() {
  const user = useSessionStore(state => state.user)

  if (!user) {
    return <Redirect href="/sign-in" />
  }

  return <Stack />
}

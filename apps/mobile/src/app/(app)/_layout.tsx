import { Stack } from 'expo-router'

import { useTheme } from '@/hooks'
import { useSessionStore } from '@/stores'

export default function AppLayout() {
  const user = useSessionStore(state => state.user)

  const theme = useTheme()

  if (!user) {
    // TODO: Descomentar redirect para sign-in
    // return <Redirect href="/sign-in" />
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.background
        }
      }}
    />
  )
}

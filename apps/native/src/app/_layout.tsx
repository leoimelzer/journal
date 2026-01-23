import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { KeyboardProvider } from 'react-native-keyboard-controller'

import { queryClient } from '@/lib'
import { useSessionStore } from '@/stores'
import { QueryClientProvider } from '@tanstack/react-query'

function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <KeyboardProvider>
        <GestureHandlerRootView>
          <RootStack />
        </GestureHandlerRootView>
      </KeyboardProvider>
    </QueryClientProvider>
  )
}

function RootStack() {
  const user = useSessionStore(state => state.user)

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!!user}>
        <Stack.Screen name="(app)" />
      </Stack.Protected>

      <Stack.Protected guard={!user}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>
    </Stack>
  )
}

export default RootLayout

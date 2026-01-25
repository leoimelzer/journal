import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import Toastify from 'toastify-react-native'

import { queryClient } from '@/lib'
import { QueryClientProvider } from '@tanstack/react-query'

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <KeyboardProvider>
        <GestureHandlerRootView>
          <Toastify />
          <StatusBar />
          <Stack screenOptions={{ headerShown: false }} />
        </GestureHandlerRootView>
      </KeyboardProvider>
    </QueryClientProvider>
  )
}

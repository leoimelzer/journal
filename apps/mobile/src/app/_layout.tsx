import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import Toastify from 'toastify-react-native'

import { ModalProvider } from '@/contexts'
import { queryClient } from '@/lib'
import { QueryClientProvider } from '@tanstack/react-query'

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <KeyboardProvider>
        <ModalProvider>
          <GestureHandlerRootView>
            <Toastify />
            <StatusBar />
            <Stack screenOptions={{ headerShown: false }} />
          </GestureHandlerRootView>
        </ModalProvider>
      </KeyboardProvider>
    </QueryClientProvider>
  )
}

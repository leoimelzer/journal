import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import Toastify from 'toastify-react-native'

import { ModalProvider, ThemeProvider } from '@/contexts'
import { queryClient } from '@/lib'
import { QueryClientProvider } from '@tanstack/react-query'

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <KeyboardProvider>
        <ThemeProvider>
          <ModalProvider>
            <GestureHandlerRootView>
              <Toastify />
              <Stack screenOptions={{ headerShown: false }} />
            </GestureHandlerRootView>
          </ModalProvider>
        </ThemeProvider>
      </KeyboardProvider>
    </QueryClientProvider>
  )
}

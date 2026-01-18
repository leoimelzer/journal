import { useLoading } from '@/hooks'
import { Stack } from 'expo-router'
import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'

export default function RootLayout() {
  const { loading } = useLoading()

  useEffect(() => {
    if (loading) {
      return
    }

    SplashScreen.hideAsync()
  }, [loading])

  if (loading) {
    console.log('[RootLayout] Loading...')
    return null
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1D1D1D',
        },
        headerTintColor: '#FAFAFA',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false
        }}
      />
    </Stack>
  );
}

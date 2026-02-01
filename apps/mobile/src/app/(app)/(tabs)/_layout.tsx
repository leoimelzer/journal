import { Tabs } from 'expo-router'
import type { ComponentProps } from 'react'

import { Feather } from '@expo/vector-icons'

const icons: Record<string, ComponentProps<typeof Feather>['name']> = {
  home: 'home'
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => (
          <Feather name={icons[route.name]} size={size} color={color} />
        )
      })}
    >
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
    </Tabs>
  )
}

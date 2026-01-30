import { Tabs } from 'expo-router'
import type { ComponentProps } from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'

const icons: Record<
  string,
  ComponentProps<typeof MaterialCommunityIcons>['name']
> = {
  home: 'home-outline'
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name={icons[route.name]}
            size={size}
            color={color}
          />
        )
      })}
    >
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
    </Tabs>
  )
}

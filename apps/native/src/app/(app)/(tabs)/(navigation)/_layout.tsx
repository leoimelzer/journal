import { Stack } from 'expo-router'

export default function NavigationLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Navigation' }} />
      <Stack.Screen name="details" options={{ title: 'Details' }} />
      <Stack.Screen name="record" />
    </Stack>
  )
}

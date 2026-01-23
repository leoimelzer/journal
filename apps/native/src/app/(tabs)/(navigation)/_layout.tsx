import { Stack } from 'expo-router'

export default function NavigationLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white'
        },
        headerTintColor: '#1D1D1D',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Navigation'
        }}
      />

      <Stack.Screen name="details/index" />

      <Stack.Screen
        name="record/[id]"
        options={{
          title: 'Record'
        }}
      />
    </Stack>
  )
}

import { Stack } from 'expo-router'

export default function HomeLayout() {
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
          headerTitle: 'Home'
        }}
      />
    </Stack>
  )
}

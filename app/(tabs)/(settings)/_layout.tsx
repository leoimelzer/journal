import { Stack } from 'expo-router';

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: '#1D1D1D',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}>

      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Settings'
        }}
      />
    </Stack>
  );
}

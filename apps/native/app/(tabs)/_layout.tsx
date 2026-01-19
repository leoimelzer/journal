import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={28}
              name="home"
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="(navigation)"
        options={{
          title: 'Navigation',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={28}
              name="navigation"
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="(settings)"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={28}
              name="cog"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

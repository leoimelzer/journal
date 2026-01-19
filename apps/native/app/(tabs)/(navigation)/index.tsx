import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, Pressable } from 'react-native'

import { styles } from './styles'

export default function NavigationScreen() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Pressable onPress={() => {
        router.push('/details')
      }}>
        <View style={styles.navigation}>
          <Text style={styles.route}>/details</Text>

          <View style={styles.redirects}>
              <Text>Tap to navigate...</Text>
          </View>
        </View>
      </Pressable>

      <View style={styles.navigation}>
        <Text style={styles.route}>/record</Text>

        <View style={styles.redirects}>
          <TouchableOpacity onPress={() => {
            const id = 'Bacon'
            router.push(`/record/${id}`)
          }}>
            <Text>Tap to navigate...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

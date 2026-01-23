import { Link, useRouter } from 'expo-router'
import { View, Text } from 'react-native'
import { Pressable } from 'react-native-gesture-handler'

import { styles } from './styles'

export default function NavigationScreen() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.route}>/details</Text>

        <Link
          href={{
            pathname: '/details'
          }}
        >
          Link
        </Link>
      </View>

      <View>
        <Text style={styles.route}>/record</Text>

        <Pressable
          onPress={() => {
            const id = 'Bacon'
            router.push(`/record/${id}`)
          }}
        >
          <Text>Tap to navigate...</Text>
        </Pressable>
      </View>
    </View>
  )
}

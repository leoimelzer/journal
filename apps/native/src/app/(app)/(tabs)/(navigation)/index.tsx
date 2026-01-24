import { Link } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'
import { Pressable } from 'react-native-gesture-handler'

export default function NavigationScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.route}>/details</Text>

        <Link asChild href={{ pathname: '/details' }}>
          <Pressable>
            <Text>Link</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    marginVertical: 18,
    gap: 10
  },
  route: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

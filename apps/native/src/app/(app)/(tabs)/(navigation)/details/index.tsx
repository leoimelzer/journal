import { useNavigation, useRouter } from 'expo-router'
import { useEffect } from 'react'
import { View, Text, Pressable } from 'react-native'

import { styles } from './styles'

export default function DetailsScreen() {
  const navigation = useNavigation()

  const router = useRouter()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Details'
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text>Details </Text>

      <Pressable
        onPress={() => {
          router.dismissAll()
        }}
      >
        <Text>Back to first screen</Text>
      </Pressable>
    </View>
  )
}

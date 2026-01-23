import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

import { styles } from './styles'

export default function DetailsScreen() {
  const { id } = useLocalSearchParams()

  return (
    <View style={styles.container}>
      <Text>Details of user &quot;{id}&quot;</Text>
    </View>
  )
}

import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import { View, Text } from 'react-native'

export default function RecordScreen() {
  const { id } = useLocalSearchParams()

  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      title: 'Record'
    })
  }, [navigation])

  return (
    <View
      style={{
        marginHorizontal: 18,
        marginVertical: 18
      }}
    >
      <Text>Details of user &quot;{id}&quot;</Text>
    </View>
  )
}

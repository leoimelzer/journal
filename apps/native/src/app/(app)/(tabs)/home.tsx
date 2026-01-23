import { View, Text, ActivityIndicator } from 'react-native'

import { api } from '@/lib'
import { useQuery } from '@tanstack/react-query'

export default function HomeScreen() {
  const { isLoading } = useQuery({
    queryKey: ['entries'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const response = await api.entry.list()
      return response.data
    }
  })

  if (isLoading) {
    return <ActivityIndicator />
  }

  return (
    <View>
      <Text>Requests ready!</Text>
    </View>
  )
}

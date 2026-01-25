import { useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'

import { Text } from '@/components'
import { api } from '@/lib'
import { useSessionStore } from '@/stores'
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

  const user = useSessionStore(state => state.user)

  useEffect(() => {
    console.log('user', user)
  }, [user])

  if (isLoading) {
    return <ActivityIndicator />
  }

  return (
    <View>
      <Text>Requests ready!</Text>
    </View>
  )
}

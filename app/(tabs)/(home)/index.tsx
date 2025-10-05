import { Link, useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, useColorScheme, Pressable, Button } from 'react-native';

import { styles } from './styles'
import { useCallback, useEffect, useState } from 'react';

export default function HomeScreen() {
  const colorScheme = useColorScheme()

  const router = useRouter()

  const [count, setCount] = useState<number>(0)

  const navigateToDetails = useCallback(() => {
    router.push('/details')
  }, [router])

  const navigateToRecord = useCallback((parameters: {id: string | number}) => {
    const { id } = parameters
    router.push(`/record/${id}`)
  }, [router])

  useEffect(() => {
    console.log('[HomeScreen] colorScheme', colorScheme)
  }, [colorScheme])

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text style={styles.route}>/details</Text>

        <View style={styles.redirects}>
          <Link
            href={{
              pathname: '/details'
            }}
          >
            Link
          </Link>

          <Pressable onPress={navigateToDetails}>
            <Text>useRouter</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.navigation}>
        <Text style={styles.route}>/record</Text>

        <View style={styles.redirects}>
          <Link
            href={{
              pathname: "/record/[id]",
              params: {
                id: 'Bacon (Link)'
              }
            }}
          >
              Link
          </Link>

          <TouchableOpacity onPress={() => {
            const id = 'Bacon (useRouter)'
            navigateToRecord({ id })
          }}>
            <Text>useRouter</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text>Clicks: {count}</Text>
      <Button
        title="Increment"
        onPress={() => {
          setCount(prev => prev + 1)}
        }
      />
    </View>
  );
}

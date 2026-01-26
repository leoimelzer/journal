import { useCallback, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Button, Input, Text } from '@/components'
import { useSessionStore } from '@/stores'

export default function SignOutScreen() {
  const signOut = useSessionStore(state => state.signOut)

  const [signingOut, setSigningOut] = useState(false)

  const handleSignOut = useCallback(async () => {
    try {
      setSigningOut(true)
      await signOut()
    } finally {
      setSigningOut(false)
    }
  }, [signOut])

  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 16 }} contentContainerStyle={{ gap: 18 }}>
        <View style={{ gap: 8 }}>
          <Text size="large" font="bold">
            Button
          </Text>

          <View style={{ gap: 10 }}>
            <Button type="primary">
              <Button.Text>Primary</Button.Text>
            </Button>

            <Button type="secondary">
              <Button.Text>Secondary</Button.Text>
            </Button>

            <Button type="accent">
              <Button.Text>Accent</Button.Text>
            </Button>

            <Button type="neutral">
              <Button.Text>Neutral</Button.Text>
            </Button>
          </View>
        </View>

        <View style={{ gap: 8 }}>
          <Text size="large" font="bold">
            Input
          </Text>

          <View style={{ gap: 10 }}>
            <Input.Root>
              <Input.Content>
                <Input
                  placeholder="Sample Input 1"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </Input.Content>
            </Input.Root>

            <Input.Root>
              <Input.Content>
                <Input
                  placeholder="Sample Input 2"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </Input.Content>
            </Input.Root>
          </View>
        </View>

        <Button loading={signingOut} onPress={handleSignOut}>
          <Button.Icon name="logout" />
          <Button.Text>Sign out</Button.Text>
        </Button>
      </ScrollView>
    </SafeAreaView>
  )
}

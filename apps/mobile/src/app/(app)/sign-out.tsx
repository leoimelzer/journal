import { useCallback, useState } from 'react'
import type { ViewStyle } from 'react-native'
import { StyleSheet, View } from 'react-native'

import { Button } from '@/components'
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
    <View style={styles.container}>
      <Button loading={signingOut} onPress={handleSignOut}>
        <Button.Icon name="logout" />
        <Button.Text>Sign out</Button.Text>
      </Button>
    </View>
  )
}

interface SignOutScreenStyles {
  container: ViewStyle
}

const styles = StyleSheet.create<SignOutScreenStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  }
})

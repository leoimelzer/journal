import { useCallback, useState } from 'react'
import type { ViewStyle } from 'react-native'
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller'
import { Toast } from 'toastify-react-native'
import { z, ZodError } from 'zod'

import { Button, Form, Input } from '@/components'
import { useTheme } from '@/hooks'
import { useSessionStore } from '@/stores'

const schema = z.object({
  login: z.string().nonempty('Enter your username'),
  password: z.string().nonempty('Enter your password')
})

export default function SignInScreen() {
  const [login, setLogin] = useState('')

  const [password, setPassword] = useState('')

  const [submitting, setSubmitting] = useState(false)

  const signIn = useSessionStore(state => state.signIn)

  const theme = useTheme()

  const submit = useCallback(async () => {
    try {
      setSubmitting(true)

      schema.parse({
        login,
        password
      })

      await signIn()
    } catch (error) {
      if (error instanceof ZodError) {
        const [issue] = error.issues
        const message = issue.message
        Toast.error(message)
        return
      }

      throw error
    } finally {
      setSubmitting(false)
    }
  }, [login, password, signIn])

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Form>
        <Input.Root>
          <Input.Label>Username</Input.Label>

          <Input.Content>
            <Input.Icon name="account-outline" />

            <Input
              placeholder="Type your username"
              value={login}
              onChangeText={setLogin}
            />
          </Input.Content>
        </Input.Root>

        <Input.Root>
          <Input.Label>Password</Input.Label>

          <Input.Content>
            <Input.Icon name="lock-outline" />

            <Input
              placeholder="Type your username"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </Input.Content>
        </Input.Root>

        <Button loading={submitting} onPress={submit}>
          <Button.Icon name="login" />
          <Button.Text style={{ color: theme.colors.text.primary }}>
            Sign in
          </Button.Text>
        </Button>
      </Form>
    </KeyboardAwareScrollView>
  )
}

interface SignInScreenTypes {
  container: ViewStyle
}

const styles = StyleSheet.create<SignInScreenTypes>({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

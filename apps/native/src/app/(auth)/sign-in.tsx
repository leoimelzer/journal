import { useCallback } from 'react'
import type { FieldErrors } from 'react-hook-form'
import { useForm, Controller } from 'react-hook-form'
import type { ViewStyle } from 'react-native'
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller'
import { Toast } from 'toastify-react-native'
import { z } from 'zod'

import { Button, Form, Input } from '@/components'
import { useTheme } from '@/hooks'
import { useSessionStore } from '@/stores'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  login: z.string().nonempty('Enter your username'),
  password: z.string().nonempty('Enter your password')
})

type Data = z.infer<typeof schema>

export default function SignInScreen() {
  const signIn = useSessionStore(state => state.signIn)

  const theme = useTheme()

  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<Data>({
    resolver: zodResolver(schema),
    defaultValues: {
      login: '',
      password: ''
    }
  })

  const submit = useCallback(
    async (_data: Data) => {
      try {
        console.log('_data', _data)
        await signIn()
      } catch {
        Toast.error('Unexpected error.')
      }
    },
    [signIn]
  )

  const onError = (errors: FieldErrors<Data>) => {
    const [error] = Object.values(errors)
    Toast.error(String(error.message))
  }

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

            <Controller
              control={control}
              name="login"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Type your username"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </Input.Content>
        </Input.Root>

        <Input.Root>
          <Input.Label>Password</Input.Label>

          <Input.Content>
            <Input.Icon name="lock-outline" />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Type your password"
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry
                />
              )}
            />
          </Input.Content>
        </Input.Root>

        <Button
          loading={isSubmitting}
          style={{ marginTop: 12 }}
          onPress={handleSubmit(submit, onError)}
        >
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

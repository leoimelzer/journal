import { createRef, useCallback } from 'react'
import type { FieldErrors } from 'react-hook-form'
import { useForm, Controller } from 'react-hook-form'
import type { TextInput, ViewStyle } from 'react-native'
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller'
import { Toast } from 'toastify-react-native'
import { z } from 'zod'

import { Button, Form, Input } from '@/components'
import { useSessionStore } from '@/stores'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  login: z.string().nonempty('Enter your login'),
  password: z.string().nonempty('Enter your password')
})

type Data = z.infer<typeof schema>

export default function SignInScreen() {
  const signIn = useSessionStore(state => state.signIn)

  const loginRef = createRef<TextInput>()

  const passwordRef = createRef<TextInput>()

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

  const onValid = useCallback(
    async (_data: Data) => {
      try {
        await signIn()
      } catch {
        Toast.error('Unexpected error.')
      }
    },
    [signIn]
  )

  const onInvalid = useCallback((errors: FieldErrors<Data>) => {
    const [error] = Object.values(errors)
    Toast.error(String(error.message))
  }, [])

  const submit = useCallback(
    async () => handleSubmit(onValid, onInvalid)(),
    [handleSubmit, onValid, onInvalid]
  )

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Form>
        <Input.Root>
          <Input.Content>
            <Controller
              control={control}
              name="login"
              render={({ field: { onChange, value } }) => (
                <Input
                  ref={loginRef}
                  placeholder="Login"
                  value={value}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={onChange}
                  onSubmitEditing={() => {
                    const password = passwordRef.current

                    if (!value || !password) {
                      return
                    }

                    password.focus()
                  }}
                />
              )}
            />
          </Input.Content>
        </Input.Root>

        <Input.Root>
          <Input.Content>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  ref={passwordRef}
                  placeholder="Password"
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                  onSubmitEditing={submit}
                />
              )}
            />
          </Input.Content>
        </Input.Root>

        <Button
          loading={isSubmitting}
          style={{ marginTop: 16 }}
          onPress={submit}
        >
          <Button.Text font="medium">Sign in</Button.Text>
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

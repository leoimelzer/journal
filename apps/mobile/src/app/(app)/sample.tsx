import React, { useCallback, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Button, Icon, Input, Text } from '@/components'
import { useModal, useTheme } from '@/hooks'
import { useSessionStore } from '@/stores'

export default function SignOutScreen() {
  const signOut = useSessionStore(state => state.signOut)

  const [signingOut, setSigningOut] = useState(false)

  const theme = useTheme()

  const modal = useModal()

  const handleShowModal = useCallback(async () => {
    modal.show({
      title: 'Dialog title',
      description:
        'A very nice and descriptive description to describe behaviours in useful way',
      buttons: [
        {
          type: 'neutral',
          text: 'Cancel'
        },
        {
          text: 'Confirm',
          onPress: () => {
            console.log('Confirmed.')
          }
        }
      ]
    })
  }, [modal])

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
      <ScrollView
        style={{ marginTop: 8, paddingHorizontal: 16 }}
        contentContainerStyle={{ gap: 18 }}
      >
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

            <Button type="alert">
              <Button.Text>Alert</Button.Text>
            </Button>
          </View>
        </View>

        <View style={{ gap: 8 }}>
          <Text size="large" font="bold">
            Semantic
          </Text>

          <View style={{ gap: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                gap: 6,
                backgroundColor: theme.colors.success.background,
                borderColor: theme.colors.success.border,
                borderWidth: 1,
                shadowRadius: 6,
                paddingVertical: 12,
                paddingHorizontal: 16,
                borderRadius: 12
              }}
            >
              <Icon
                name="check-circle-outline"
                color={theme.colors.success.text}
              />
              <Text
                style={{
                  color: theme.colors.success.text
                }}
              >
                Success
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                gap: 6,
                backgroundColor: theme.colors.error.background,
                borderColor: theme.colors.error.border,
                borderWidth: 1,
                paddingVertical: 12,
                paddingHorizontal: 16,
                borderRadius: 12
              }}
            >
              <Icon
                name="close-circle-outline"
                color={theme.colors.error.text}
              />
              <Text
                style={{
                  color: theme.colors.error.text
                }}
              >
                Error
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                gap: 6,
                backgroundColor: theme.colors.info.background,
                borderColor: theme.colors.info.border,
                borderWidth: 1,
                paddingVertical: 12,
                paddingHorizontal: 16,
                borderRadius: 12
              }}
            >
              <Icon name="information-outline" color={theme.colors.info.text} />
              <Text
                style={{
                  color: theme.colors.info.text
                }}
              >
                Info
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                gap: 6,
                backgroundColor: theme.colors.note.background,
                borderColor: theme.colors.note.border,
                borderWidth: 1,
                paddingVertical: 12,
                paddingHorizontal: 16,
                borderRadius: 12
              }}
            >
              <Icon
                name="notification-clear-all"
                color={theme.colors.note.text}
              />
              <Text
                style={{
                  color: theme.colors.note.text
                }}
              >
                Note
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                gap: 6,
                backgroundColor: theme.colors.warning.background,
                borderColor: theme.colors.warning.border,
                borderWidth: 1,
                paddingVertical: 12,
                paddingHorizontal: 16,
                borderRadius: 12
              }}
            >
              <Icon name="alert-outline" color={theme.colors.warning.text} />
              <Text
                style={{
                  color: theme.colors.warning.text
                }}
              >
                Warning
              </Text>
            </View>
          </View>
        </View>

        <View style={{ gap: 8 }}>
          <Text size="large" font="bold">
            Input
          </Text>

          <View style={{ gap: 10 }}>
            <Input.Root>
              <Input.Content>
                <Input placeholder="Sample Input 1" />
              </Input.Content>
            </Input.Root>

            <Input.Root>
              <Input.Content>
                <Input placeholder="Sample Input 2" />
              </Input.Content>
            </Input.Root>

            <Input.Root>
              <Input.Content>
                <Input placeholder="Sample Input 3" />
              </Input.Content>
            </Input.Root>
          </View>
        </View>

        <View style={{ gap: 8 }}>
          <Text size="large" font="bold">
            Actions
          </Text>

          <View style={{ gap: 10 }}>
            <Button onPress={handleShowModal}>
              <Button.Icon name="form-select" />
              <Button.Text>Open modal</Button.Text>
            </Button>

            <Button type="alert" loading={signingOut} onPress={handleSignOut}>
              <Button.Icon name="logout" />
              <Button.Text>Sign out</Button.Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

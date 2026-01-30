import type { PropsWithChildren } from 'react'
import { createContext, useState, useCallback } from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal'

import { Button, Text } from '@/components'
import { useTheme } from '@/hooks'

import { styles } from './modal.styles'
import type {
  Button as ButtonType,
  ModalContextData,
  State
} from './modal.types'

export const ModalContext = createContext<ModalContextData | undefined>(
  undefined
)

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [content, setContent] = useState<State>({
    visible: false,
    title: '',
    description: '',
    buttons: []
  })

  const theme = useTheme()

  const show = useCallback(
    (params: { title: string; description: string; buttons: ButtonType[] }) => {
      setContent({
        visible: true,
        title: params.title,
        description: params.description,
        buttons: params.buttons
      })
    },
    []
  )

  const update = useCallback(
    (
      params: Partial<{
        title: string
        description: string
        buttons: ButtonType[]
      }>
    ) => {
      setContent({
        visible: content.visible,
        title: params.title ?? content.title,
        description: params.description ?? content.description,
        buttons: params.buttons ?? content.buttons
      })
    },
    [content]
  )

  const hide = useCallback(() => {
    setContent(prev => ({ ...prev, visible: false }))
  }, [])

  return (
    <ModalContext.Provider value={{ show, update, hide }}>
      {children}

      <Modal
        backdropOpacity={0.6}
        isVisible={content.visible}
        onBackdropPress={hide}
        animationIn="zoomIn"
        animationOut="zoomOut"
        renderToHardwareTextureAndroid
        backdropTransitionOutTiming={1}
      >
        <View
          style={[
            {
              backgroundColor: theme.colors.card,
              borderColor: theme.colors.border,
              borderWidth: 1
            },
            styles.container
          ]}
        >
          <View style={styles.content}>
            <Text font="semibold" size="large">
              {content.title}
            </Text>
            <Text>{content.description}</Text>
          </View>

          <View style={styles.actions}>
            {content.buttons.map((button, idx) => {
              const { onPress, ...rest } = button

              return (
                <Button
                  key={idx}
                  {...rest}
                  onPress={async () => {
                    if (button.onPress) {
                      await button.onPress()
                    }

                    hide()
                  }}
                >
                  <Button.Text>{button.text}</Button.Text>
                </Button>
              )
            })}
          </View>
        </View>
      </Modal>
    </ModalContext.Provider>
  )
}

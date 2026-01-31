import type { PropsWithChildren } from 'react'
import { createContext, useState, useCallback } from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal'

import { Button, Text } from '@/components'
import { useTheme } from '@/hooks'

import { styles } from './modal.styles'
import type { ModalContextData, State } from './modal.types'

export const ModalContext = createContext<ModalContextData | undefined>(
  undefined
)

export const ModalProvider = (props: PropsWithChildren) => {
  const [visible, setVisible] = useState(false)

  const [content, setContent] = useState<State>({
    title: null,
    description: null,
    buttons: []
  })

  const theme = useTheme()

  const show = useCallback((params: Omit<State, 'visible'>) => {
    setContent({
      title: params.title,
      description: params.description,
      buttons: params.buttons
    })

    setVisible(true)
  }, [])

  const hide = useCallback(() => {
    setVisible(false)
  }, [])

  return (
    <ModalContext.Provider value={{ show, hide }}>
      {props.children}

      <Modal
        isVisible={visible}
        backdropOpacity={0.6}
        onBackdropPress={hide}
        animationIn="zoomIn"
        animationOut="zoomOut"
        useNativeDriver
        renderToHardwareTextureAndroid
        backdropTransitionOutTiming={1}
      >
        <View
          style={[
            {
              backgroundColor: theme.colors.card,
              borderColor: theme.colors.border
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

import { View } from 'react-native'

import { useTheme } from '@/hooks'

import { styles } from './input.content.styles'
import type { InputContentProps } from './input.content.types'

export function InputContent(props: InputContentProps) {
  const { style, children, ...rest } = props

  const theme = useTheme()

  return (
    <View
      {...rest}
      style={[
        styles.container,
        [
          {
            borderColor: theme.colors.border,
            backgroundColor: theme.colors.card
          }
        ],
        style
      ]}
    >
      {children}
    </View>
  )
}

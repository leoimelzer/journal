import { Text } from 'react-native'

import { styles } from './button.text.styles'
import type { ButtonTextProps } from './button.text.types'

export function ButtonText(props: ButtonTextProps) {
  const { style, children, ...rest } = props

  return (
    <Text {...rest} style={[styles.text, style]}>
      {children}
    </Text>
  )
}

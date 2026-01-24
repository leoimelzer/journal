import { Text } from 'react-native'

import { styles } from './input.label.styles'
import type { InputLabelProps } from './input.label.types'

export function InputLabel(props: InputLabelProps) {
  const { style, children, ...rest } = props

  return (
    <Text {...rest} style={[styles.label, style]}>
      {children}
    </Text>
  )
}

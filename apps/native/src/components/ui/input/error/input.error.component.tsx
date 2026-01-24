import { Text } from 'react-native'

import { styles } from './input.error.styles'
import type { InputErrorProps } from './input.error.types'

export function InputError(props: InputErrorProps) {
  const { style, children, ...rest } = props

  return (
    <Text {...rest} style={[styles.error, style]}>
      {children}
    </Text>
  )
}

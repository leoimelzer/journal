import { Text } from 'react-native'

import type { InputLabelProps } from './input.label.types'

export function InputLabel(props: InputLabelProps) {
  const { children, ...rest } = props

  return <Text {...rest}>{children}</Text>
}

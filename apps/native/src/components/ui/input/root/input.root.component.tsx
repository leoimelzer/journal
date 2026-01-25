import { View } from 'react-native'

import type { InputRootProps } from './input.root.types'

export function InputRoot(props: InputRootProps) {
  const { children, ...rest } = props

  return <View {...rest}>{children}</View>
}

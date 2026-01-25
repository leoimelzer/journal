import { View } from 'react-native'

import { styles } from './input.root.styles'
import type { InputRootProps } from './input.root.types'

export function InputRoot(props: InputRootProps) {
  const { style, children, ...rest } = props

  return (
    <View {...rest} style={[styles.container, style]}>
      {children}
    </View>
  )
}

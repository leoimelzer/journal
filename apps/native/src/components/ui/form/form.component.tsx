import { View } from 'react-native'

import { styles } from './form.styles'
import type { FormProps } from './form.types'

export function Form(props: FormProps) {
  const { style, children, ...rest } = props

  return (
    <View {...rest} style={[styles.container, style]}>
      {children}
    </View>
  )
}

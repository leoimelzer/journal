import { forwardRef } from 'react'
import { TextInput } from 'react-native'

import { styles } from './input.styles'
import type { InputProps } from './input.types'

export const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  const { style, ...rest } = props
  return <TextInput {...rest} ref={ref} style={[styles.input, style]} />
})

Input.displayName = 'InputComponent'

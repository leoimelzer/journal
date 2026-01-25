import { forwardRef } from 'react'
import { TextInput } from 'react-native'

import { useTheme } from '@/hooks'

import { styles } from './input.styles'
import type { InputProps } from './input.types'

export const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  const { style, ...rest } = props

  const theme = useTheme()

  return (
    <TextInput
      {...rest}
      ref={ref}
      style={[styles.input, { color: theme.colors.text.primary }, style]}
      placeholderTextColor={theme.colors.text.placeholder}
    />
  )
})

Input.displayName = 'InputComponent'
